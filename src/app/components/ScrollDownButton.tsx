'use client';
import { useEffect, useState } from 'react';

export default function ScrollDownButton() {
    const [showButton, setShowButton] = useState(true);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= pageHeight - 30) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    };

    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight / 1.15, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes bounce {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-bounce {
                    animation: bounce 2.5s infinite ease-in-out;
                }
            `}</style>
            {showButton && (
                <div className="fixed bottom-28 lg:bottom-4 left-0 right-0 flex justify-center z-1">
                    <button
                        onClick={scrollDown}
                        className="bg-foreground text-background rounded-full p-4 animate-bounce"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
