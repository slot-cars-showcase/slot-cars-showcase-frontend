/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/docs/en/main/file-conventions/entry.server
 */

import { PassThrough } from 'node:stream';
import { isbot } from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import { server } from './mocks/node';
import { ServerRouter, type EntryContext } from 'react-router';

const ABORT_DELAY = 5_000;

if (process.env.NODE_ENV === 'development') {
  server.listen();
}

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return isbot(request.headers.get('user-agent'))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
): Promise<Response> {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={remixContext} url={request.url} />,
      {
        onAllReady() {
          const body = new PassThrough();

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(
              // Convert the PassThrough stream to a valid web ReadableStream
              new ReadableStream({
                start(controller) {
                  body.on('data', (chunk) => {
                    controller.enqueue(chunk);
                  });
                  body.on('end', () => {
                    controller.close();
                  });
                  body.on('error', (err) => {
                    controller.error(err);
                  });
                },
              }),
              {
                headers: responseHeaders,
                status: responseStatusCode,
              },
            ),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
): Promise<Response> {
  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={remixContext} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough();

          responseHeaders.set('Content-Type', 'text/html');

          resolve(
            new Response(
              // Convert the PassThrough stream to a valid web ReadableStream
              new ReadableStream({
                start(controller) {
                  body.on('data', (chunk) => {
                    controller.enqueue(chunk);
                  });
                  body.on('end', () => {
                    controller.close();
                  });
                  body.on('error', (err) => {
                    controller.error(err);
                  });
                },
              }),
              {
                headers: responseHeaders,
                status: responseStatusCode,
              },
            ),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          console.error(error);
          responseStatusCode = 500;
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
