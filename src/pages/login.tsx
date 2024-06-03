import dynamic from 'next/dynamic';

const LoginForm = dynamic(() => import('@components/auth/login-form'));
const Logo = dynamic(() => import('@components/ui/logo'));

export default function LoginPage() {
    return (
        <div className="flex h-screen login-page">
            <div className="flex flex-1 px-8 items-center justify-center logo-section">
                <Logo width={100} height={75} />
            </div>
            <div className="flex flex-auto justify-center items-center form-section p-4">
                <div className="bg-light sm:shadow p-5 rounded frame-section">
                    <h3 className="text-center text-accent text-xl font-bold mb-7 mt-5">LOGIN</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
