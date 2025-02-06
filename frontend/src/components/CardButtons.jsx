import React from "react";

export default function CardButtons({
    to,
    className = "",
    children = "Live Demo", // Default button text
    target = "_blank", // Default to open in a new tab
    ...props
}) {
    return (
        <a
            href={to}
            target={target} // Apply target prop here
            rel="noopener noreferrer" // Security feature
            className={`card-button text-white font-bold py-2 px-1 rounded hover:bg-blue-600 transition duration-300 ${className}`}
            {...props}
        >
            {children}
        </a>
    );
}
