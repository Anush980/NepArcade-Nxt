'use client';
import "./Button.css";

export default function Button({ label, varient='', onClick, disabled=false}) {
    return (
        <button
            className={`btn btn-${varient}`}
            onClick={onClick}
            disabled={disabled}
            type="button" >
            {label}
        </button>
    );
}