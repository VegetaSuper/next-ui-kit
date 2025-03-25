import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Footer() {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/', label: 'About' },
        { href: '/', label: 'Contact' },
    ];
	return (
        <footer className={cn("bg-zinc-800 text-white w-full py-6 px-16 flex items-center justify-between flex-col sm:flex-row")}>
            <ul className={cn("flex gap-5")}>
                {
                    links.map((link,index) => (
                        <li key={index} className={cn("inline-block ")}>
                            <Link href={link.href} className={cn("text-sm hover:text-gray-300")}>
                                {link.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className={cn("  text-center")}>
                <p className={cn("text-sm")}>
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
	)
}