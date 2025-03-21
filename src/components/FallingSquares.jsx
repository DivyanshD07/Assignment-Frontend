import React, { useEffect } from 'react';
import "../styles/FallingSquare.css"

const FallingSquares = () => {
    useEffect(() => {
        const falling = () => {
            const e = document.createElement('div');
            e.setAttribute('class', 'square');
            document.body.appendChild(e);

            e.style.left = Math.random() * 92 + 'vw';

            setTimeout(() => {
                document.body.removeChild(e);
            }, 11050);
        };

        const interval = setInterval(() => {
            falling();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="squares absolute">
        </div>
    );
};

export default FallingSquares;
