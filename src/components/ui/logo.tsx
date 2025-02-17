import Image from 'next/image';
import Link from '@components/ui/link';
import cn from 'classnames';
import { LinkProps } from 'next/link';

export interface LogoProps extends LinkProps {
    className?: string;
    height?: number;
    width?: number;
}

const Logo: React.FC<Omit<LogoProps, 'href'>> = ({ className, width = 150, height = 50, ...props }) => {
    return (
        <Link href="/" className={cn('inline-flex cursor-pointer', className)} {...props}>
            <span
                className="overflow-hidden relative"
                style={{
                    width: width,
                    height: height,
                }}
            >
                <Image src="/image/logo.png" alt="logo" priority layout="fill" objectFit="contain" loading="eager" />
            </span>
            <h1
                style={{
                    color: 'white',
                    alignContent: 'center',
                    fontSize: '25px',
                    fontWeight: 'bold',
                }}
            >
                RAMPED
            </h1>
        </Link>
    );
};

export default Logo;
