'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Navigation } from './navigation';

export function Header() {
	const [transparent, setTransparent] = useState(true);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setTransparent(latest < 520);
	});

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = (isOpen: boolean) => {
        setIsMenuOpen(isOpen);
    };
	return (
		<motion.header
			className={cn(
				'w-full',
                'fixed',
                'z-10',
				'top-0',
				'left-0',
				'flex',
				'items-center',
				'justify-between',
                'text-white',
                'py-4',
                "px-10",
                'lg:px-40',
			)}
			animate={{
				backgroundColor: transparent ? 'rgba(234, 88, 12, 0)' : 'rgba(234, 88, 12, 1)',
                x: isMenuOpen ? -300 : 0
			}}
			
            transition={{ duration: 0.3 }}
		>
			<Link href="/">NEXT UI KIT</Link>

			<Navigation onMenuToggle={handleMenuToggle} />
		</motion.header>
	);
}
