import { connect } from 'react-redux';

import Button from '@components/ui/button';
import Input from '@components/ui/input';
import PasswordInput from '@components/ui/password-input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '../../../node_modules/@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import Link from '@components/ui/link';
import * as authActions from '@redux/auth/actions';
import { AppState } from '@redux/index';

type LoginFormProps = {
    auth: IAuth.State;
    // eslint-disable-next-line
    signIn: (data: any) => void;
};

type FormValues = {
    email: string;
    password: string;
};

const loginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email required'),
    password: yup
        .string()
        .required('Password required')
        .matches(/^(?=.{6,})/, 'Password should be atleast 8 characters'),
});

const defaultValues = {
    email: '',
    password: '',
};

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { auth, signIn } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(loginFormSchema),
    });

    const onSubmit = async ({ email, password }: FormValues) => {
        try {
            await signIn({ email, password });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    label={'Email'}
                    {...register('email')}
                    type="email"
                    variant="outline"
                    className="mb-4"
                    labelClassName="text-base font-medium text-accent"
                    inputClassName="mt-3 focus:!border-[#5A6B86] !border-cyan-650 !placeholder-[#5A6B86]"
                    placeholder="Type email"
                    error={errors?.email?.message}
                />
                <PasswordInput
                    label={'Password'}
                    {...register('password')}
                    error={errors?.password?.message}
                    variant="outline"
                    className="mb-4"
                    labelClassName="text-base font-medium text-accent"
                    inputClassName="focus:!border-[#5A6B86] !border-cyan-650 !placeholder-[#5A6B86]"
                    placeholder="Type password"
                />
                <Button className="w-full" loading={auth.isLoading} disabled={auth.isLoading} variant="custom">
                    {'Login'}
                </Button>
                <Link
                    href={'/signup'}
                    className="float-right text-right text-md font-bold mb-4 mt-7 mr-2"
                    style={{ color: '#009CA6' }}
                >
                    {'Sign Up'}
                </Link>
            </form>
        </>
    );
};

export default connect(
    (state: AppState) => ({
        auth: state.auth,
    }),
    {
        signIn: authActions.signIn,
    }
)(LoginForm);
