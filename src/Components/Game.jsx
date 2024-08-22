import React, { useState } from 'react';
import Board from './Board';

function Game() {
    const [xIsNext, setxIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentState = history[currentMove];

    function handlePlay(nextSquare) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setxIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setxIsNext(nextMove % 2 === 0);
    }

    const moves = history.map((square, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to start of game";
        }
        return (
            <li key={move} className="mb-2">
                <button 
                    onClick={() => jumpTo(move)} 
                    className="text-blue-500 hover:underline">
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="flex flex-col items-center p-4 sm:p-6 lg:flex-row lg:justify-center lg:space-x-16">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
                <Board xIsNext={xIsNext} onPlay={handlePlay} square={currentState} />
            </div>
            <div className="lg:w-1/3">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center lg:text-left">Game Info</h1>
                <ol className="list-decimal list-inside">{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
