import { Banner } from '@/components/layout/banner';

export default function Profile() {
	return (
		<>
			<Banner
				props={{ img: '/images/banner-profile.jpg', height: '550px' }}>
				Landing
			</Banner>
		</>
	);
}
