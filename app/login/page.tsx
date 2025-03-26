import { Banner } from '@/components/layout/banner';
import { LoginForm } from './LoginForm';

export default function Login() {
	return (
		<>
			<Banner className='h-screen' img="/images/banner-login.jpg">
                <div className='h-full w-full flex flex-col items-center pt-20  bg-[rgba(0,0,0,.5)]'>
                    <LoginForm />
                </div>
            </Banner>
		</>
	);
}
