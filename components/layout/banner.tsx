import Image from 'next/image';
import type { ClassValue } from 'clsx';
import { cn } from '@/lib/utils';
interface BannerProps {
	children?: React.ReactNode;
	className?: ClassValue;
	img: string;
	gradient?: boolean;
}

export function Banner({ children, className, img, gradient }: BannerProps) {
	return (
		<div
			className={cn('relative overflow-hidden', className, {
				'bg-gradient-to-tl from-orange-50/20 to-orange-600/60':
					!gradient,
			})}>
			<Image
				className="absolute z-[-1]  "
				alt="banner"
				priority
				src={img}
				quality={100}
				fill
				sizes="100vw"
				style={{
					objectFit: 'cover',
				}}
			/>
			<div className="w-full h-full">{children}</div>
		</div>
	);
}
