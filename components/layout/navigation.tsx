'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefObject, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Building, CircleUser, User } from 'lucide-react';
import { createPortal } from 'react-dom';
import useClickOutside from '@/hooks/useClickOutside';

interface NavigationProps {
	onMenuToggle?: (isOpen: boolean) => void;
}

export function Navigation({ onMenuToggle }: NavigationProps) {
	const list = [
		{
			label: 'Landing',
			href: '/landing',
			icon: <Building />,
		},
		{
			label: 'Login',
			href: '/login',
			icon: <CircleUser />,
		},
		{
			label: 'Profile',
			href: '/profile',
			icon: <User />,
		},
	];

	const [show, setShow] = useState(false);
	function toggleShow() {
		setShow(!show);
		onMenuToggle?.(!show);
	}

	const siderRef = useRef(null);

	useClickOutside(siderRef as unknown as RefObject<HTMLElement>, () =>
		toggleShow()
	);

	return (
		<>
			<ul className="hidden gap-2.5 lg:flex">
				{list.map((item, index) => {
					return (
						<li key={index}>
							<Link
								prefetch
								href={item.href}>
								<Button
									className="cursor-pointer"
									variant="ghost">
									{item.icon}
									{item.label}
								</Button>
							</Link>
						</li>
					);
				})}
			</ul>
			<motion.div
				className="flex flex-col justify-center lg:hidden cursor-pointer w-[22px] h-7 group"
				// animate={{ marginRight: show ? 300 : 0 }}
				// transition={{ duration: 0.3 }}
				onClick={toggleShow}>
				<motion.span
					className="bg-white w-full h-[1.5px]"
					animate={{
						rotate: show ? 45 : 0,
						translateY: show ? 8 : 0,
					}}
					transition={{ duration: 0.3 }}
				/>
				<motion.span
					className="bg-white w-[80%] h-[1.5px] my-[7px] group-hover:w-full transition-all duration-300"
					animate={{
						opacity: show ? 0 : 1,
					}}
					transition={{ duration: 0.3 }}
				/>
				<motion.span
					className="bg-white w-full h-[1.5px]"
					animate={{
						rotate: show ? -45 : 0,
						translateY: show ? -8 : 0,
					}}
					transition={{ duration: 0.3 }}
				/>
			</motion.div>
			{show &&
				createPortal(
					<motion.div
						ref={siderRef}
						className="fixed top-0 right-0  lg:hidden w-[300px] h-full bg-[#999] z-999"
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.3 }}>
						<ul className="bg-gradient-to-b from-orange-600 to-black/80 w-[300px] h-screen flex flex-col gap-5 py-10 px-4">
							{list.map((item, index) => {
								return (
									<li
										key={index}
										className="w-full">
										<Link
											prefetch
											href={item.href}>
											<Button
												className="cursor-pointer w-full justify-start gap-2"
												variant="ghost"
												onClick={toggleShow}>
												{item.icon}
												{item.label}
											</Button>
										</Link>
									</li>
								);
							})}
						</ul>
					</motion.div>,
					document.body
				)}
		</>
	);
}
