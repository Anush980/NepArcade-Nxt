'use client';
import { useRouter } from 'next/navigation';
import "./Button.css";

export default function Button({ label, varient = '', href, onClick, disabled = false }) {
    const router = useRouter();

    const handleClick = (e) => {
        if (onClick) onClick(e); // Allow custom onClick if passed

        if (!href) return;

        if (href.startsWith('#')) {
            // Same-page scroll
            const section = document.getElementById(href.substring(1));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Next.js page navigation
            router.push(href);
        }
    };

    return (
        <button
            className={`btn btn-${varient}`}
            onClick={handleClick}
            disabled={disabled}
            type="button"
        >
            {label}
        </button>
    );
}
