// import { Button } from "@/components/ui/button"
import { Banner } from '@/components/layout/banner';

export default function Home() {
	return (
		<>
			<Banner
				props={{
					img: '/images/banner.jpg',
					height: '100vh',
				}}>
				<div></div>
			</Banner>
			<div></div>
		</>
	);
}
