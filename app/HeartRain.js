"use client";

import { useEffect, useState } from "react";

export default function HeartRain() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      let newHearts = [];
      for (let i = 0; i < 30; i++) {
        const speedCategory = Math.random();
        let duration;

        if (speedCategory < 0.3) {
          duration = Math.random() * 2 + 2 + "s"; // Rápido
        } else if (speedCategory < 0.7) {
          duration = Math.random() * 3 + 4 + "s"; // Medio
        } else {
          duration = Math.random() * 4 + 7 + "s"; // Lento
        }

        newHearts.push({
          id: i,
          left: Math.random() * 100 + "vw",
          animationDuration: duration,
          animationDelay: Math.random() * 3 + "s",
          size: Math.random() * 0.5 + 0.5, // Tamaño entre 0.5 y 1
        });
      }
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            transform: `scale(${heart.size})`,
          }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.58 5 20 6.42 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scale(0.8);
            opacity: 0;
          }
        }
        svg {
          position: absolute;
          top: -10vh;
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}