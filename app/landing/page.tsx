import { Banner } from '@/components/layout/banner';

export default function Landing() {
	return (
		<>
			<Banner
				props={{
					img: '/images/banner-landing.jpg',
					height: '60vh',
					gradient: true,
				}}>
				Landing
			</Banner>
		</>
	);
}
