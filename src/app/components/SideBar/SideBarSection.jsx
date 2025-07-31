'use client';
import { usePathname } from 'next/navigation';
import './SideBarSection.css';
import Link from 'next/link';

export default function SideBarSection({ title,links}) {
    const pathname = usePathname();
    return (
        <div className="sidebar-section">
            <h3 className='section-title'>{title}</h3>
            <ul>
                <li>
                    {links.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <span className={pathname === link.href ? 'active' : ''}>
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </li>
            </ul>
        </div>
    );
}