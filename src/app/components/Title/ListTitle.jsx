'use client';
import './ListTitle.css';

export default function ListTitle({ label, varient }) {
    return (
        <h2 className="title">{label}</h2>
    );
}