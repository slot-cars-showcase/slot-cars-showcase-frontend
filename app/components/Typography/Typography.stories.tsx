import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'p',
        'blockquote',
        'inlineCode',
        'lead',
        'large',
        'small',
        'muted',
      ],
      description: 'The typography variant to display',
    },
    children: {
      control: 'text',
      description: 'The content to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    as: {
      control: 'text',
      description: 'Override the HTML element used',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Base story with controls
export const Default: Story = {
  args: {
    variant: 'p',
    children: 'This is an example of the Typography component',
  },
};

// Individual variant stories
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children:
      'This is a paragraph of text. It demonstrates the paragraph variant of the Typography component.',
  },
};

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  },
};

export const InlineCode: Story = {
  args: {
    variant: 'inlineCode',
    children: 'const example = "code snippet";',
  },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children:
      'This is a lead paragraph that introduces a section with larger, more prominent text.',
  },
};

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large text for emphasis',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Small text for less important information',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted text for secondary information',
  },
};

// Example with custom element override
export const CustomElement: Story = {
  args: {
    variant: 'h2',
    as: 'div',
    children: 'This looks like an h2 but is actually a div element',
  },
};

// Example with additional className
export const WithCustomClass: Story = {
  args: {
    variant: 'p',
    className: 'text-blue-500 italic',
    children: 'This paragraph has custom styling applied',
  },
};

// Example with all variants displayed together
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="p">
        This is a standard paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam eget sapien nec mauris ultrices facilisis.
      </Typography>
      <Typography variant="blockquote">
        This is a blockquote. It's perfect for quoting external sources or
        highlighting important information within your content.
      </Typography>
      <Typography variant="inlineCode">const example = "code";</Typography>
      <Typography variant="lead">
        This is a lead paragraph, used to introduce sections with more prominent
        text.
      </Typography>
      <Typography variant="large">This is large text</Typography>
      <Typography variant="small">This is small text</Typography>
      <Typography variant="muted">This is muted text</Typography>
    </div>
  ),
};
