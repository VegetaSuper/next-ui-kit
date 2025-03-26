'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
	const pathname = usePathname();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/', label: 'About' },
		{ href: '/', label: 'Contact' },
	];
	return (
		<footer
			className={cn(
				'bg-zinc-800 text-white w-full 2xl:px-50 py-6 px-18 flex items-center justify-between flex-col sm:flex-row sm:gap-3',
				{
					'bg-transparent fixed left-0 bottom-0':
						pathname === '/login',
				}
			)}>
			<ul className={cn('flex gap-5')}>
				{links.map((link, index) => (
					<li
						key={index}
						className={cn('inline-block ')}>
						<Link
							href={link.href}
							className={cn('text-sm hover:text-gray-300')}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<div className={cn('  text-center')}>
				<p className={cn('text-sm')}>
					&copy; {new Date().getFullYear()} Your Company. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
