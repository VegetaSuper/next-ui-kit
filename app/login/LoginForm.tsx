'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CircleUserRound } from 'lucide-react';

const FormSchema = z.object({
	firstName: z.string().min(1, { message: '请填写First Name' }).default(''),
	lastName: z.string().min(1, { message: '请填写Last Name' }).default(''),
});

export function LoginForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log('submit', data);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="sm:w-[400px] w-4/5 font-thin">
                    <Image alt="logo" src="/images/logo.png" className='mx-auto mb-20' width={65} height={70} />
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="mb-[50px]">
							<div className="relative">
								<CircleUserRound
									size={20}
									className="absolute top-[50%] translate-y-[-50%] left-[15px] text-white/60"
								/>
								<FormControl>
									<Input
										className="pl-[50px] border-0 w-full rounded-3xl bg-[hsla(0,0%,100%,.1)] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/60 text-white/60  h-12 text-sm focus:bg-[hsla(0,0%,100%,.2)]"
										placeholder="First Name..."
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="mb-[100px]">
							<div className="relative">
								<CircleUserRound
									size={20}
									className="absolute top-[50%] translate-y-[-50%] left-[15px] text-white/60"
								/>
								<FormControl>
									<Input
										className="pl-[50px] border-0 w-full rounded-3xl bg-[hsla(0,0%,100%,.1)] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/60 text-white/60  h-12 text-sm focus:bg-[hsla(0,0%,100%,.2)]"
										placeholder="Last Name..."
										{...field}
									/>
								</FormControl>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className='w-full rounded-3xl text-center font-thin cursor-pointer' size="lg">Get Started</Button>
			</form>
		</Form>
	);
}
