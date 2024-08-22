import React from 'react';
import Square from './Square';

function Board({ xIsNext, square, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(square) || square[i]) {
            return;
        }
        const nextSquare = square.slice();
        nextSquare[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquare);
    }

    const winner = calculateWinner(square);
    const status = winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O");

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700">{status}</h1>
            <div className="grid grid-cols-3 gap-2 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                {square.map((value, index) => (
                    <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
                ))}
            </div>
        </div>
    );
}

function calculateWinner(square) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}

export default Board;
