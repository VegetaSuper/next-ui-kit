interface BannerProps {
	children?: React.ReactNode;
	props: {
		img: string;
		height: string | number;
        gradient?: boolean;
	};
}

export function Banner({ children, props }: BannerProps) {
	return (
		<div
			className="relative overflow-hidden bg-gradient-to-tl from-orange-50/20 to-orange-600/60"
			style={{
				height: props.height,
			}}>
			<div
				className="absolute z-[-1] w-full h-full bg-cover bg-center"
				style={{
					backgroundImage: `url(${props.img})`,
				}}>
				{children}
			</div>
		</div>
	);
}
