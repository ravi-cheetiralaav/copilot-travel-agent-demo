import { SelectHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'glass';
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    const baseClasses = 'flex h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200';
    
    const variants = {
      default: 'border border-gray-300 bg-white ring-offset-white focus-visible:ring-primary-500',
      glass: 'glass-white border-white/30 ring-offset-transparent focus-visible:ring-primary-400',
    };
    
    return (
      <select
        className={cn(baseClasses, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';

export { Select };
