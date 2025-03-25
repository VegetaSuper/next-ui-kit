import { Banner } from '@/components/layout/banner';

export default function Landing() {
	return (
		<>
			<Banner
				className="h-[60vh]"
				gradient={true}
				img="/images/banner-landing.jpg"></Banner>
		</>
	);
}
