import { Eye } from '@components/icons/eye-icon';
import { EyeOff } from '@components/icons/eye-off-icon';
import cn from 'classnames';
import React, { InputHTMLAttributes, useState } from 'react';
import Link from './link';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    forgotPassHelpText?: string;
    label: string;
    name: string;
    forgotPageLink?: string;
    shadow?: boolean;
    variant?: 'normal' | 'solid' | 'outline' | 'base';
    error: string | undefined;
    placeholder?: string;
}
const classes = {
    root: 'px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-blue-cta placeholder:text-blue-placeholder placeholder:font-normal text-base font-medium focus:outline-none',
    normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
    outline: 'border border-solid border-blue-placeholder focus:border-blue-cta focus:border-[3px]',
    shadow: 'focus:shadow',
    base: 'h-11 bg-blue-10 border border-blue',
};
const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            className,
            inputClassName,
            labelClassName,
            forgotPassHelpText,
            label,
            name,
            error,
            variant = 'normal',
            shadow = false,
            forgotPageLink = '',
            placeholder,
            ...rest
        },
        ref
    ) => {
        const [show, setShow] = useState(false);

        const rootClassName = cn(
            classes.root,
            {
                [classes.normal]: variant === 'normal',
                [classes.solid]: variant === 'solid',
                [classes.outline]: variant === 'outline',
                [classes.base]: variant === 'base',
            },
            shadow == true && classes.shadow,
            inputClassName
        );
        const _labelClassName = 'text-accent mb-2 text-base font-medium inline-block';

        return (
            <div className={className}>
                <div className="flex items-center justify-between ">
                    <label htmlFor={name} className={cn(_labelClassName, labelClassName)}>
                        {label}
                    </label>

                    {forgotPageLink && forgotPassHelpText && (
                        <Link
                            href={forgotPageLink}
                            className="text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
                        >
                            {forgotPassHelpText}
                        </Link>
                    )}
                </div>
                <div className="relative">
                    <input
                        id={name}
                        name={name}
                        type={show ? 'text' : 'password'}
                        ref={ref}
                        className={rootClassName}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        placeholder={placeholder}
                        {...rest}
                    />
                    <label
                        htmlFor={name}
                        className="absolute right-4 top-5 -mt-2 text-body"
                        onClick={() => setShow((prev) => !prev)}
                    >
                        {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </label>
                </div>
                {error && <p className="my-2 text-xs text-start text-red-500">{error}</p>}
            </div>
        );
    }
);

export default PasswordInput;
