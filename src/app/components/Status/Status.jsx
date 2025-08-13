'use client';
import './Status.css';

export default function StatusDiv({ label }) {
  return (
    <div className="game-status">{label}</div>
  );
}