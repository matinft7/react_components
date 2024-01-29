'use client';
import styles from '@/app/ui/components/navbar/navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavBar(){
    const pname = usePathname()
    const links = [{ name:'خانه',href:'/'},
                   { name:'محصولات',href:'/products'},
                   { name:'بلاگ',href:'/blog'},
                   { name:'درباره ما',href:'/about-us'},
                   { name:'تماس باما',href:'/contact-us'}]
    return(
        <nav className={styles.navbar}>
            <ul className={styles.desktop_nav}>
                {links.map((link) => {
                    return (
                        <Link href={link.href} className={clsx('pd-20', {'bg-main-color' : pname == link.href})}><li>{ link.name }</li></Link>
                    )
                })}
            </ul>
            <div className={styles.mobile_nav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}