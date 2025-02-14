"use client";

import { useState, useEffect } from "react";

const events = [
  { date: "Oct 11th, 2024", message: " Desde la primera noche que nos cruzamos, recuerdo cómo bailamos, a pesar de que tus palabras eran simples, en tu respeto y calma me intrigó un hombre fascinante oculto detrás de esa serenidad. 💕", imgSrc: "/1.jpg", description: "The day that I saw you for the first time.", side: "left", lineLength: 80 },
  { date: "Oct 29th, 2024", message: "Nuestra primera cita fue con muchas ideas, desde arte hasta esos pensamientos triviales que a veces parecen insignificantes, pero que compartidos contigo se convierten un verdadero tema de conversación.", imgSrc: "/2.jpg", description: "Haces especiales, mis dias.", side: "right", lineLength: 120 },
  { date: "Oct 12th, 2024", message: "Amo cómo siempre logras sorprenderme, justo cuando menos lo espero. Ese toque de caballerosidad y cortejo hace que cada día se sienta especial. Tu cuidado hacia mí y mi familia es un reflejo de tu bondad; saber que valoras lo que amo me llena de gratitud. Y, sobre todo, me haces creer que lo imposible es posible, no como un cuento de hadas, sino con un toque de realidad que lo hace aún más emocionante. cada mensaje tuyo, con canciones y videos, es un destello de tu creatividad. Me encanta cómo siempre estás dispuesto a explorar cada tema y cada rincón de nuestra conexión.", imgSrc: "4.jpg", description: "Juntos, riendo y creando memorias.", side: "left", lineLength: 100 },
  { date: "Few days ago", message: "Tu disciplina y enfoque hacia tu bienestar físico son admirables, y me inspiran a ser mejor. Verte cuidar de ti mismo hace que te respete aún más. Y cuando me llamas 'mi sol', siento que soy la mujer con el brillo más radiante de toda Colombia. Gracias por hacerme sentir así. ❤️", imgSrc: "/5.jpg", description: "Pienso en ti.", side: "right", lineLength: 60 },

];

const futureEvents = [
  { message: "Cuento los dias, minutos y segundos, para cuando nos volvamos a encontrar💞" },
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
            animationDelay: Math.random() * 2 + "s",  // Añado un retraso aleatorio para hacerlo más dinámico
          });
        }
      });
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center py-10 relative overflow-hidden">

      {/* Título principal */}
      <h1 className="text-4xl font-bold text-pink-600 mb-10">Marcos!</h1>

      {/* Contenedor de la línea de tiempo */}
      <div className="relative flex flex-col items-center w-full">
        {/* Línea central */}
        <div className="w-1 bg-pink-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        <div className="relative w-3 space-y-32 space-x-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex items-center justify-center w-full">

              {/* Círculo interactivo sobre la línea de tiempo */}
              <div
                className="w-14 h-14 rounded-full bg-pink-300 flex justify-center items-center cursor-pointer hover:bg-pink-400 shadow-md transition-transform transform hover:scale-110 z-10"
                onClick={() => setShowCard(event)}
              >
                <span className="text-white text-2xl">💖</span>
              </div>

              {/* Contenedor de la foto */}
              <div className={`absolute flex flex-col items-center ${event.side === "left" ? "left-10" : "right-1"}`} style={{ top: '50%' }}>
                <div className="text-pink-600 font-semibold text-lg mb-2">{event.date}</div>
                <div className="w-56 h-56 bg-white rounded-xl border-4 border-pink-400 shadow-lg transition-transform transform hover:scale-105 relative">
                  <img src={event.imgSrc} alt="Event" className="w-full h-full object-cover rounded-xl" />
                </div>
                <p className="mt-2 text-center text-gray-600 max-w-xs">{event.description}</p>
              </div>
            </div>
          ))}

          {/* Cuadros del futuro */}
          <div className="relative flex flex-col items-center mt-20 space-y-10">
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
            <h3 className="text-2xl font-semibold text-pink-500 leading-relaxed">{showCard.message}</h3>
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
            <h3 className="text-2xl font-semibold text-pink-500">{showFuture.message}</h3>
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
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { transform: translateY(-50px) translateX(30px); opacity: 0.7; }
          100% { transform: translateY(-100px) translateX(-30px); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
        @keyframes popup {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-popup {
          animation: popup 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
