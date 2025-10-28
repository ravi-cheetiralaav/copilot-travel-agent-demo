import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'glass';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', ...props }, ref) => {
    const baseClasses = 'flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200';
    
    const variants = {
      default: 'border border-gray-300 bg-white ring-offset-white focus-visible:ring-primary-500',
      glass: 'glass-white border-white/30 ring-offset-transparent focus-visible:ring-primary-400 placeholder:text-gray-600',
    };
    
    return (
      <input
        type={type}
        className={cn(baseClasses, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
