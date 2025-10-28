import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'glass-primary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500 shadow-md hover:shadow-lg hover:-translate-y-0.5',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:ring-secondary-500 shadow-md hover:shadow-lg hover:-translate-y-0.5',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500 hover:border-gray-400',
      ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500',
      glass: 'glass-white text-gray-800 hover:bg-white/90 focus-visible:ring-primary-500 shadow-lg backdrop-blur-md',
      'glass-primary': 'glass-primary text-primary-700 hover:bg-primary-600/20 focus-visible:ring-primary-500 shadow-lg backdrop-blur-md font-semibold',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg',
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
