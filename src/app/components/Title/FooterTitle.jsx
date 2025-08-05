'use client';
import './FooterTitle.css';

export default function FooterTitle({ label, varient }) {
    return (
        <h3 className="footer-title">{label}</h3>
    );
}