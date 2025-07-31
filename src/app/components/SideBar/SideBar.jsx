'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './SideBar.css';
import SideBarSection from './SideBarSection';
import sidebarlinks from '@/data/sidebarlinks';


export default function SideBar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      {sidebarlinks.map((section) => (
        <SideBarSection
          key={section.title}
          title={section.title}
          links={section.links}
        />
      ))}
    </aside>
  );
}