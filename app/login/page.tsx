import { Banner } from '@/components/layout/banner';

export default function Login() {
	return (
		<>
			<Banner
				props={{
					img: '/images/banner-login.jpg',
					height: '100vh',
				}}></Banner>
		</>
	);
}
