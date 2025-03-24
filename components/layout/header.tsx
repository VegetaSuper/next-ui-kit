'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { Navigation } from './navigation';

export function Header() {
	const [transparent, setTransparent] = useState(true);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setTransparent(latest < 600);
	});

	return (
		<header
			className={cn(
				'w-full',
                'fixed',
                'z-10',
				'top-0',
				'left-0',
				'flex',
				'items-center',
				'justify-between',
                'bg-orange-600',
                'text-white',
                'py-5',
                'px-20',
                {
                    'bg-transparent': transparent,
                }
			)}>
			<Link href="/">NEXT UI KIT</Link>

			<Navigation />
		</header>
	);
}
