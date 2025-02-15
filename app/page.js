"use client";

import { useState, useEffect } from "react";

const events = [
  {
    date: "Oct 11th, 2024",
    message:
      "From the very first night we crossed paths, I remember how we danced. Even though your words were simple, in your respect and calmness, I saw a fascinating man hidden behind that serenity. 💕",
    imgSrc: "/1.jpg",
    description: "The day I saw you for the first time.",
    side: "left",
    lineLength: 60,
  },
  {
    date: "Oct 29th_",
    message:
      "Your discipline and dedication to your well-being are admirable and inspire me to be better. Watching you take care of yourself makes me respect you even more.",
    imgSrc: "/9.jpg",
    description: "Pure love.",
    side: "right",
    lineLength: 60,
  },
  {
    date: ".",
    message:
      "Our first date was filled with so many ideas, from art to those trivial thoughts that may seem insignificant but, when shared with you, turn into true conversations.",
    imgSrc: "/2.jpg",
    description: "Haces mis dias especiales ....",
    side: "right",
    lineLength: 60,
  },
  {
    date: "________Oct 12th",
    message:
      "I love how you always manage to surprise me, just when I least expect it. That touch of chivalry and courtship makes every day feel special.",
    imgSrc: "4.jpg",
    description: "Together, laughing and creating memories.",
    side: "left",
    lineLength: 60,
  },
  {
    date: "Few days ago",
    message:
      "Every message from you, with songs and videos, is a glimpse of your creativity. I love how you're always willing to explore every topic and every corner of our connection. ❤️",
    imgSrc: "/5.jpg",
    description: "Thinking of you.",
    side: "right",
    lineLength: 60,
  },
  {
    date: "Some day",
    message:
      "When you call me 'my sun,' I feel like the brightest woman in all of Colombia. Thank you for making me feel this way. ❤️",
    imgSrc: "/8.jpg",
    description: "Me and you.",
    side: "left",
    lineLength: 60,
  },
  {
    date: "In a near future",
    message:
      "Can't wait for you to cook dinner for us. ❤️",
    imgSrc: "/7.jpg",
    description: "Thinking of you.",
    side: "right",
    lineLength: 60,
  },
  {
    date: "Future",
    message:
      "Your care for me and my family is a reflection of your kindness; knowing that you value what I love fills me with gratitude. And above all, you make me believe that the impossible is possible—not like a fairy tale, but with a touch of reality that makes it even more exciting.",
    imgSrc: "/6.jpg",
    description: "Thinking of you.",
    side: "left",
    lineLength: 60,
  },
];


const futureEvents = [
  {
    message:
      "Cuento los dias, minutos y segundos, para cuando nos volvamos a encontrar💞",
  },
  { message: "Nuestro futuro juntos será increíble ✨" },
];

export default function Home() {
  const [showCard, setShowCard] = useState(null);
  const [showFuture, setShowFuture] = useState(null);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHearts = () => {
      let newHearts = [];
      events.forEach((event, i) => {
        for (let j = 0; j < 5; j++) {
          newHearts.push({
            id: `${i}-${j}`,
            left: event.side === "left" ? "20%" : "80%",
            top: `${i * 200 + 80}px`,
            animationDuration: Math.random() * 3 + 2 + "s",
            animationDelay: Math.random() * 2 + "s", // Añado un retraso aleatorio para hacerlo más dinámico
          });
        }
      });
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="bg-pink-50 flex flex-col items-center py-10 relative overflow-hidden min-h-full">
    {/* Título principal */}
    <h1 className="text-4xl font-bold text-pink-600 mb-10">Marcos!</h1>

    {/* Contenedor de la línea de tiempo */}
    <div className="relative flex flex-col items-center w-full">
      {/* Línea central */}
      <div className="w-1 bg-pink-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>

      <div className="relative w-3 space-y-48 space-x-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full"
          >
            {/* Círculo interactivo sobre la línea de tiempo */}
            <div
              className="w-14 h-14 rounded-full bg-pink-300 flex justify-center items-center cursor-pointer hover:bg-pink-400 shadow-md transition-transform transform hover:scale-110 z-10"
              onClick={() => setShowCard(event)}
            >
              <span className="text-white text-2xl">💖</span>
            </div>

            {/* Contenedor de la foto */}
            <div
              className={`absolute flex flex-col items-center ${
                event.side === "left" ? "-left-10" : "right-2"
              }`}
              style={{ top: "50%" }}
            >
              <div className="text-pink-600 font-semibold text-lg  pt-20">
                {event.date}
                            <p className="-space-x-3 text-center text-gray-600 max-w-xs text-sm sm:text-xs">
                {event.description}
              </p>
              </div>
              <div className="w-56 h-56 sm:w-44 sm:h-44 xs:w-36 xs:h-36 bg-white rounded-xl border-4 border-pink-400 shadow-lg transition-transform transform hover:scale-105 relative mb-6">
                <img
                  src={event.imgSrc}
                  alt="Event"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
  
            </div>
          </div>
        ))}
          {/* Cuadros del futuro */}
          <div className="relative flex flex-col items-center mt-28  space-y-40">
            {futureEvents.map((future, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-20 h-20 bg-pink-200 border-4 border-pink-500 flex justify-center items-center text-4xl text-pink-500 font-bold rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-110"
                  onClick={() => setShowFuture(future)}
                >
                  +
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mensaje emergente al hacer clic en un círculo de evento */}
      {showCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center animate-popup relative border-8 border-pink-400 border-dashed">
            <h3 className="text-2xl font-semibold text-pink-500 leading-relaxed">
              {showCard.message}
            </h3>
            <button
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-md transition-transform transform hover:scale-105"
              onClick={() => setShowCard(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Mostrar mensajes futuros cuando se haga clic en el cuadro '+' */}
      {showFuture && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center animate-popup">
            <h3 className="text-2xl font-semibold text-pink-500">
              {showFuture.message}
            </h3>
            <button
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md transition-transform transform hover:scale-105"
              onClick={() => setShowFuture(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Animaciones */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-50px) translateX(30px);
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100px) translateX(-30px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes popup {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popup {
          animation: popup 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
