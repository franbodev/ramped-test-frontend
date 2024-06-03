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

type SignupFormProps = {
    auth: IAuth.State;
    signUp: (data: { email: string; password: string; passwordConfirm: string }) => void;
};

type FormValues = {
    email: string;
    password: string;
    passwordConfirm: string;
};

const signupFormSchema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email required'),
    password: yup
        .string()
        .required('Password required')
        .matches(/^(?=.{6,})/, 'Password should be atleast 6 characters'),
    passwordConfirm: yup
        .string()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});

const defaultValues = {
    email: '',
    password: '',
};

const SignupForm: React.FC<SignupFormProps> = (props) => {
    const { auth, signUp } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(signupFormSchema),
    });

    const onSubmit = async ({ email, password, passwordConfirm }: FormValues) => {
        try {
            await signUp({ email, password, passwordConfirm });
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
                <PasswordInput
                    label={'Confirm Password'}
                    {...register('passwordConfirm')}
                    error={errors?.passwordConfirm?.message}
                    variant="outline"
                    className="mb-4"
                    labelClassName="text-base font-medium text-accent"
                    inputClassName="focus:!border-[#5A6B86] !border-cyan-650 !placeholder-[#5A6B86]"
                    placeholder="Type confirm password"
                />
                <Button className="w-full" loading={auth.isLoading} disabled={auth.isLoading} variant="custom">
                    {'Sign Up'}
                </Button>
                <Link
                    href={'/login'}
                    className="float-right text-right text-md font-bold mb-4 mt-6 mr-2"
                    style={{ color: '#009CA6' }}
                >
                    {'Return to Login'}
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
        signUp: authActions.signUp,
    }
)(SignupForm);
