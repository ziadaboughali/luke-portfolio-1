import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        // removed all and added h-[44px] bg-primary border-white/20 text-base placeholder:text-white/60
        'flex h-[48px] w-full rounded-md border border-white/10 font-light bg-primary px-4 py-5 text-base placeholder:text-white/60',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
