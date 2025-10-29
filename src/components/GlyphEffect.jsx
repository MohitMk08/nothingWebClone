// import React, { useEffect, useRef } from 'react';

// const GlyphEffect = () => {
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const dots = [];
//         const gridSize = 30; // Spacing between dots
//         const numCols = Math.ceil(canvas.width / gridSize);
//         const numRows = Math.ceil(canvas.height / gridSize);

//         // Create organized dot matrix pattern (like LED grid)
//         for (let row = 0; row < numRows; row++) {
//             for (let col = 0; col < numCols; col++) {
//                 dots.push({
//                     x: col * gridSize + gridSize / 2,
//                     y: row * gridSize + gridSize / 2,
//                     baseSize: Math.random() * 1.5 + 1,
//                     size: 0,
//                     opacity: 0,
//                     speed: Math.random() * 0.3 + 0.15,
//                     phase: Math.random() * Math.PI * 2,
//                 });
//             }
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             const time = Date.now() * 0.001;

//             dots.forEach((dot, index) => {
//                 // Wave-like pulse effect across the grid
//                 const wave = Math.sin(time * dot.speed + dot.phase + dot.x * 0.01 + dot.y * 0.01);
//                 dot.opacity = (wave + 1) * 0.3 + 0.1; // Range: 0.1 to 0.7
//                 dot.size = dot.baseSize * (0.7 + wave * 0.3);

//                 ctx.beginPath();
//                 ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
//                 ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
//                 ctx.fill();

//                 // Add occasional glow effect
//                 if (wave > 0.8) {
//                     ctx.beginPath();
//                     ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
//                     ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity * 0.2})`;
//                     ctx.fill();
//                 }
//             });

//             requestAnimationFrame(animate);
//         };

//         animate();

//         const handleResize = () => {
//             canvas.width = window.outerWidth;
//             canvas.height = window.outerHeight;
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <canvas
//             ref={canvasRef}
//             className="fixed inset-0 pointer-events-none z-5"
//             style={{ opacity: 0.4 }}
//         />

//     );
// };

// export default GlyphEffect;

import React from 'react'

function GlyphEffect() {
    return (
        <div className='fixed inset-0 pointer-events-none z-5'>
            <div className="">
                <div className="inset-1 overflow-hidden">
                    {<svg className="w-full h-full" viewBox="0 0 400 600">
                        {[...Array(30)].map((_, i) => (
                            [...Array(30)].map((_, j) => (
                                <circle
                                    key={`${i}-${j}`}
                                    cx={j * 25 + 0}
                                    cy={i * 25 + 5}
                                    r=".5"
                                    fill="white"
                                    opacity={Math.random() * 0.5 + 0.2}
                                    className="animate-pulse"
                                    style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: `${Math.random() * 2 + 2}s` }}
                                />
                            ))
                        ))}
                    </svg>}
                </div>
            </div>
        </div>
    )
}

export default GlyphEffect

