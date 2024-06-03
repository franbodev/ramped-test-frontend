import cn from 'classnames';
import { CloseIcon } from '@components/icons/close-icon';
import { ReactElement } from 'react';

type ButtonProps = {
    label: string;
    onClick: () => void;
};

type AlertProps = {
    message: string | ReactElement | undefined | null;
    variant?:
        | 'info'
        | 'warning'
        | 'error'
        | 'success'
        | 'infoOutline'
        | 'warningOutline'
        | 'errorOutline'
        | 'successOutline';
    closeable?: boolean;
    onClose?: () => void;
    className?: string;
    buttons?: ButtonProps[];
};

const variantClasses = {
    info: 'bg-blue-100 text-blue-600',
    warning: 'bg-yellow-100 text-yellow-600',
    error: 'bg-red-100 text-red-500',
    success: 'bg-green-100 text-accent',
    infoOutline: 'border border-blue-200 text-blue-600',
    warningOutline: 'border border-yellow-200 text-yellow-600',
    errorOutline: 'border border-red-200 text-red-600',
    successOutline: 'border border-green-200 text-green-600',
};

const Alert: React.FC<AlertProps> = ({
    message = '',
    closeable = false,
    variant = 'info',
    className,
    onClose,
    buttons = [],
}) => {
    return (
        <div
            className={cn(
                'flex items-center justify-between relative rounded py-4 px-5 shadow-sm',
                variantClasses[variant],
                className
            )}
            role="alert"
        >
            <div>
                <p className="text-sm">{message}</p>
                {buttons.length > 0 && (
                    <div className="flex mt-8">
                        {buttons.map((btn) => (
                            <div className="ml-4 text-accent cursor-pointer" onClick={btn.onClick}>
                                {btn.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {closeable && (
                <button data-dismiss="alert" aria-label="Close" onClick={onClose} title="Close alert" className="">
                    <span aria-hidden="true">
                        <CloseIcon className="w-3 h-3" />
                    </span>
                </button>
            )}
        </div>
    );
};

export default Alert;
