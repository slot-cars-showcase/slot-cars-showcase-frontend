import { ny } from '@/lib/utils';
import React from 'react';

// Define all possible variants the Typography component can have
type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'blockquote'
  | 'inlineCode'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted';

// Define the props for the Typography component
interface TypographyProps extends React.PropsWithChildren {
  variant: TypographyVariant;
  className?: string;
  as?: React.ElementType; // Optional prop to override the rendered element
}

// Map of variant to default element type
const variantElementMap: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  blockquote: 'blockquote',
  inlineCode: 'code',
  lead: 'p',
  large: 'div',
  small: 'small',
  muted: 'p',
};

// Map of variant to className
const variantClassMap: Record<TypographyVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  inlineCode:
    'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  lead: 'text-muted-foreground text-xl',
  large: 'text-lg font-semibold',
  small: 'text-sm leading-none font-medium',
  muted: 'text-muted-foreground text-sm',
};

export const Typography = ({
  variant,
  className,
  children,
  as,
}: TypographyProps) => {
  // Determine which element to render based on the variant or the 'as' prop override
  const Component = as || variantElementMap[variant];

  return (
    <Component className={ny(variantClassMap[variant], className)}>
      {children}
    </Component>
  );
};

// For backward compatibility and easier migration, we can also export the individual components
export const TypographyH1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h1" {...props} />
);

export const TypographyH2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h2" {...props} />
);

export const TypographyH3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h3" {...props} />
);

export const TypographyH4 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="h4" {...props} />
);

export const TypographyP = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="p" {...props} />
);

export const TypographyBlockquote = (
  props: Omit<TypographyProps, 'variant'>,
) => <Typography variant="blockquote" {...props} />;

export const TypographyInlineCode = (
  props: Omit<TypographyProps, 'variant'>,
) => <Typography variant="inlineCode" {...props} />;

export const TypographyLead = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="lead" {...props} />
);

export const TypographyLarge = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="large" {...props} />
);

export const TypographySmall = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="small" {...props} />
);

export const TypographyMuted = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography variant="muted" {...props} />
);
