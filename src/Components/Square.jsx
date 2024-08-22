import React from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button
            className="w-full h-full flex items-center justify-center border-2 border-gray-300 text-4xl sm:text-5xl lg:text-6xl"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default Square;
