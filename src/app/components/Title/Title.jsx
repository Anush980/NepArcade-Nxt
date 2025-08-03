'use client';
import './Title.css';

export default function Title({ label, varient }) {
    return (
        <h2 className="title">{label}</h2>
    );
}