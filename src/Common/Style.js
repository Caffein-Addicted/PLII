import styled from 'styled-components';

const buttonVariants = {
  solid: {
    background: 'var(--color-white)',
    color: 'var(--color-black)'
  },
  outline: {
    background: 'transParent',
    borderColor: 'var(--color-white)',
    color: 'var(--color-white)'
  }
};

export const Button = styled.button(
  {
    height: '48px',
    fontSize: '16px',
    fontWeight: '700',
    padding: '8px 48px',
    border: '1px solid var(--color-black)',
    lineHeight: '1',
    borderRadius: '4px'
  },

  ({ variant = 'solid' }) => buttonVariants[variant]
  // ({ variant = 'outline' }) => buttonVariants[variant]
);
