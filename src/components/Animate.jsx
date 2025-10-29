import React from 'react'

export default function Animate() {
    return (
        <div className='relative py-10'>

            {/* Enhanced Glyph Dots Pattern Behind Phone */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* <svg className="w-full h-full" viewBox="0 0 400 600">
                    {[...Array(20)].map((_, i) => (
                        [...Array(13)].map((_, j) => (
                            <circle
                                key={`${i}-${j}`}
                                cx={j * 30 + 15}
                                cy={i * 30 + 15}
                                r="2.5"
                                fill="white"
                                opacity={Math.random() * 0.5 + 0.2}
                                className="animate-pulse"
                                style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: `${Math.random() * 2 + 2}s` }}
                            />
                        ))
                    ))}
                </svg> */}
            </div>

            {/* Additional circular glyph pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                <svg className="w-full h-full animate-spin" style={{ animationDuration: '30s' }} viewBox="0 0 200 200">
                    {[...Array(15)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x = 100 + Math.cos(angle) * 30;
                        const y = 100 + Math.sin(angle) * 30;
                        return (
                            <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="2"
                                fill="white"
                                opacity={0.3}
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            />
                        );
                    })}
                </svg>
            </div>

        </div>
    )
}
