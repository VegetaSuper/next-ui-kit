'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Navigation() {
	const list = [
		{
			label: 'Landing',
			href: '/landing',
		},
		{
			label: 'Login',
			href: '/login',
		},
		{
			label: 'Profile',
			href: '/profile',
		},
	];

	const [show, setShow] = useState(false);
	function handleShow() {
		setShow(!show);
	}

	return (
		<>
			<ul className="hidden gap-2.5 lg:flex">
				{list.map((item, index) => {
					return (
						<li key={index}>
							<Link href={item.href}>
								<Button
									className="cursor-pointer"
									variant="ghost">
									{item.label}
								</Button>
							</Link>
						</li>
					);
				})}
			</ul>
			<motion.div
				className="flex flex-col justify-center lg:hidden cursor-pointer w-[22px] h-7 group"
				animate={{ marginRight: show ? 300 : 0 }}
				transition={{ duration: 0.3 }}
				onClick={handleShow}>
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
			<motion.div
				className="fixed top-0 right-0  lg:hidden w-[300px] h-full bg-[#999]"
				initial={{ x: 300 }}
				animate={{ x: show ? 0 : 300 }}
				transition={{ duration: 0.3 }}>
				<div className="bg-gradient-to-b from-orange-600 to-black/80 w-[300px] h-screen"></div>
			</motion.div>
		</>
	);
}
