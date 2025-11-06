import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Check, X } from 'lucide-react';

function Flashcards({ topic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);

  // Cargar tarjetas dominadas desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`mastered_${topic.id}`);
    if (saved) {
      setMasteredCards(JSON.parse(saved));
    }
  }, [topic.id]);

  // Guardar tarjetas dominadas en localStorage
  const toggleMastered = (cardId) => {
    let updated;
    if (masteredCards.includes(cardId)) {
      updated = masteredCards.filter(id => id !== cardId);
    } else {
      updated = [...masteredCards, cardId];
    }
    setMasteredCards(updated);
    localStorage.setItem(`mastered_${topic.id}`, JSON.stringify(updated));
  };

  const currentCard = topic.flashcards[currentIndex];
  const isMastered = masteredCards.includes(currentCard.id);
  const totalCards = topic.flashcards.length;
  const masteredCount = masteredCards.length;

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Info */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-700">
              Tarjeta {currentIndex + 1} de {totalCards}
            </h3>
            <p className="text-sm text-gray-500">
              {masteredCount} dominadas de {totalCards}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-48 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-300"
                style={{ width: `${(masteredCount / totalCards) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {Math.round((masteredCount / totalCards) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Flashcard */}
      <div className="mb-8">
        <div
          className={`flip-card ${isFlipped ? 'flipped' : ''} cursor-pointer`}
          onClick={handleFlip}
        >
          <div className="flip-card-inner h-96 sm:h-[450px]">
            {/* Front */}
            <div className="flip-card-front">
              <div
                className="w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center border-4"
                style={{ borderColor: topic.color }}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <span
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: topic.color }}
                    >
                      Pregunta
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed">
                    {currentCard.frente}
                  </p>
                  <div className="mt-8">
                    <RotateCw className="w-8 h-8 text-gray-400 mx-auto animate-pulse" />
                    <p className="text-sm text-gray-500 mt-2">Haz clic para voltear</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="flip-card-back">
              <div
                className="w-full h-full rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center border-4 text-white"
                style={{ backgroundColor: topic.color, borderColor: topic.color }}
              >
                <div className="text-center">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-white bg-opacity-30">
                      Respuesta
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl leading-relaxed">
                    {currentCard.reverso}
                  </p>
                  <div className="mt-8">
                    <RotateCw className="w-8 h-8 mx-auto animate-pulse opacity-70" />
                    <p className="text-sm mt-2 opacity-90">Haz clic para voltear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrevious}
            className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold shadow-lg"
          >
            Siguiente
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Mastered Toggle */}
        <button
          onClick={() => toggleMastered(currentCard.id)}
          className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all shadow-lg ${
            isMastered
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-gray-400'
          }`}
        >
          {isMastered ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Dominada
            </>
          ) : (
            <>
              <X className="w-5 h-5 mr-2" />
              Marcar como Dominada
            </>
          )}
        </button>
      </div>

      {/* Keyboard Hint */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>💡 Usa las flechas ← → para navegar y Espacio para voltear</p>
      </div>
    </div>
  );
}

export default Flashcards;
