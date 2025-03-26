'use client';

import Image from 'next/image';
import { Banner } from '@/components/layout/banner';
import { Button } from '@/components/ui/button';
import {
	Instagram,
	Twitter,
	Image as Lrimage,
	Earth,
	Landmark,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Profile() {
	const list = [
		{
			count: 26,
			label: 'Comments',
		},
		{
			count: 26,
			label: 'Comments',
		},
		{
			count: 48,
			label: 'Bookmarks',
		},
	];
	const portfolio = [
		{
			type: 'protfolio1',
			icon: <Lrimage />,
			imgs: [
				'/images/portfolio/bg2.jpg',
				'/images/portfolio/bg3.jpg',
				'/images/portfolio/bg4.jpg',
				'/images/portfolio/bg5.jpg',
			],
		},
		{
			type: 'protfolio2',
			icon: <Earth />,
			imgs: [
				'/images/portfolio/bg6.jpg',
				'/images/portfolio/bg7.jpg',
				'/images/portfolio/bg8.jpg',
				'/images/portfolio/bg9.jpg',
			],
		},
		{
			type: 'protfolio3',
			icon: <Landmark />,
			imgs: [
				'/images/portfolio/bg2.jpg',
				'/images/portfolio/bg3.jpg',
				'/images/portfolio/bg4.jpg',
				'/images/portfolio/bg5.jpg',
			],
		},
	];

	const [current, setCurrent] = useState(portfolio[0]);

	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	useEffect(() => {
		if (selectedImg) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [selectedImg]);

	return (
		<>
			<Banner
				className="sm:h-[550px] h-[620px]"
				img="/images/banner-profile.jpg">
				<div className="h-full w-full flex flex-col items-center justify-end pb-18 bg-[rgba(0,0,0,.5)]">
					<Image
						className="rounded-[50%] w-[123px] h-[123px]"
						alt="avatar"
						priority
						src="/images/avatar.jpg"
						width={123}
						height={123}
						quality={100}
					/>
					<span className="text-white font-bold text-3xl mt-10 ">
						Ryan Scheinder
					</span>
					<span className="text-[hsla(0,0%,100%,.8)] font-bold mt-2">
						Photographer
					</span>
					<ul className="flex flex-wrap gap-x-20 justify-center gap-y-2 text-white mt-8">
						{list.map((item, index) => {
							return (
								<li
									key={index}
									className="flex flex-col items-center gap-3 ">
									<span className="text-4xl">
										{item.count}
									</span>
									<span className="text-[hsla(0,0%,100%,.8)] font-light">
										{item.label}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</Banner>

			<section className="flex flex-col items-center relative z-9">
				<div className="mt-[-30px] flex items-center gap-1">
					<Button className="rounded-4xl w-35 h-15 cursor-pointer hover:bg-primary transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,0,0,.1)] hover:shadow-black/80">
						Follow
					</Button>
					<Button
						className="rounded-[50%] bg-zinc-400 text-white w-15 h-15 cursor-pointer hover:bg-zinc-400 transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,0,0,.1)] hover:shadow-black/80"
						variant="secondary"
						size="icon">
						<Twitter />
					</Button>
					<Button
						className="rounded-[50%] bg-zinc-400 text-white w-15 h-15 cursor-pointer hover:bg-zinc-400 transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,0,0,.1)] hover:shadow-black/80"
						variant="secondary"
						size="icon">
						<Instagram />
					</Button>
				</div>

				<h2 className="text-3xl font-bold py-10">About me</h2>
				<p className="sm:w-[50%] w-[90%] text-lg font-light text-center leading-6 text-[#9a9a9a]">
					An artist of considerable range, Ryan — the name taken by
					Melbourne-raised, Brooklyn-based Nick Murphy — writes,
					performs and records all of his own music, giving it a warm,
					intimate feel with a solid groove structure. An artist of
					considerable range.
				</p>

				<h2 className="text-3xl font-bold pt-20">My Portfolio</h2>
				<div className="flex justify-center py-10 gap-5">
					{portfolio.map((item, index) => {
						return (
							<Button
								key={index}
								className={cn(
									'rounded-[50%]   w-18 h-18 cursor-pointer ',
									{
										'bg-primary text-white hover:bg-primary transition-all duration-300 shadow-[0_0_5px_rgba(0,0,0,.1)] shadow-black/80':
											current.type === item.type,
									}
								)}
								size="icon"
								variant="secondary"
								onClick={() => setCurrent(item)}>
								{item.icon}
							</Button>
						);
					})}
				</div>
				<div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-6 p-8 sm:p-20 2xl:px-50 mx-auto">
					{current.imgs.map((item, index) => {
						return (
							<motion.div
								key={index}
								className="aspect-video relative"
								layoutId={`image-${item}`}
								onClick={() => setSelectedImg(item)}>
								<Image
									alt="avatar"
									priority
									fill
									className="w-full h-full object-cover"
									quality={100}
									src={item}
								/>
							</motion.div>
						);
					})}
				</div>
			</section>

			{/* 预览图片 */}
			<AnimatePresence>
				{selectedImg && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/80 z-50"
						/>
						<motion.div
							layoutId={`image-${selectedImg}`}
							className="fixed inset-0 z-50 flex items-center justify-center"
							onClick={() => setSelectedImg(null)}>
							<div className="relative w-[90vw] h-[90vh]">
								<Image
									alt="portfolio image"
									priority
									fill
									className="object-contain"
									quality={100}
									src={selectedImg}
								/>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
