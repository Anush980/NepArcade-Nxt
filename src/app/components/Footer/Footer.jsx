'use client';
import './Footer.css';
import banner_data from '@/data/banner';
import FooterTitle from '../Title/FooterTitle';

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-section">
                <FooterTitle label="NepArcade" />
                <p>{banner_data.description}</p>
            </div>
        </div>
    );
}