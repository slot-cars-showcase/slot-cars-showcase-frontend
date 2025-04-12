import { ny } from '@/lib/utils';

interface TypographyProps extends React.PropsWithChildren {
  className?: string;
}

export const TypographyH1 = ({ children, className }: TypographyProps) => (
  <h1
    className={ny(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      className,
    )}
  >
    {children}
  </h1>
);

export const TypographyH2 = ({ children, className }: TypographyProps) => (
  <h2
    className={ny(
      'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      className,
    )}
  >
    {children}
  </h2>
);

export const TypographyH3 = ({ children, className }: TypographyProps) => (
  <h3
    className={ny(
      'scroll-m-20 text-2xl font-semibold tracking-tight',
      className,
    )}
  >
    {children}
  </h3>
);

export const TypographyH4 = ({ className, children }: TypographyProps) => (
  <h4
    className={ny(
      'scroll-m-20 text-xl font-semibold tracking-tight',
      className,
    )}
  >
    {children}
  </h4>
);

export const TypographyP = ({ className, children }: TypographyProps) => (
  <p className={ny('leading-7 [&:not(:first-child)]:mt-6', className)}>
    {children}
  </p>
);

export const TypographyBlockquote = ({
  className,
  children,
}: TypographyProps) => (
  <blockquote className={ny('mt-6 border-l-2 pl-6 italic', className)}>
    {children}
  </blockquote>
);

export const TypographyInlineCode = ({
  className,
  children,
}: TypographyProps) => (
  <code
    className={ny(
      'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      className,
    )}
  >
    {children}
  </code>
);

export const TypographyLead = ({ className, children }: TypographyProps) => (
  <p className={ny('text-muted-foreground text-xl', className)}>{children}</p>
);

export const TypographyLarge = ({ children, className }: TypographyProps) => (
  <div className={ny('text-lg font-semibold', className)}>{children}</div>
);

export const TypographySmall = ({ className, children }: TypographyProps) => (
  <small className={ny('text-sm leading-none font-medium', className)}>
    {children}
  </small>
);

export const TypographyMuted = ({ className, children }: TypographyProps) => (
  <p className={ny('text-muted-foreground text-sm', className)}>{children}</p>
);
