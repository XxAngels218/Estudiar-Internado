import { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, Award } from 'lucide-react';

function Test({ topic }) {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);

  // Función para seleccionar 20 preguntas aleatorias
  const selectRandomQuestions = (allQuestions, count = 20) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, allQuestions.length));
  };

  const questions = examQuestions.length > 0 ? examQuestions : topic.preguntas;
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Calcular resultados
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    
    questions.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer !== undefined) {
        if (userAnswer === question.respuestaCorrecta) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    return {
      correct,
      incorrect,
      unanswered: totalQuestions - correct - incorrect,
      percentage: Math.round((correct / totalQuestions) * 100),
    };
  };

  const handleStart = () => {
    // Seleccionar 20 preguntas aleatorias del banco
    const randomQuestions = selectRandomQuestions(topic.preguntas, 20);
    setExamQuestions(randomQuestions);
    setStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowReview(false);
  };

  const handleSelectAnswer = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionIndex,
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestart = () => {
    handleStart();
  };

  const handleReview = () => {
    setShowReview(true);
    setCurrentQuestionIndex(0);
  };

  // Vista inicial - no iniciado
  if (!started) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
          <div className="mb-6">
            <div
              className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-4xl"
              style={{ backgroundColor: `${topic.color}20` }}
            >
              📝
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Examen de {topic.nombre}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Pon a prueba tus conocimientos con 20 preguntas aleatorias de opción múltiple
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-800 mb-3">Instrucciones:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Se seleccionarán 20 preguntas aleatorias del banco de {topic.preguntas.length} preguntas</li>
              <li>• Las preguntas se muestran una a la vez</li>
              <li>• Selecciona la respuesta que consideres correcta</li>
              <li>• No hay límite de tiempo</li>
              <li>• Al finalizar verás tus resultados y podrás revisar las respuestas</li>
            </ul>
          </div>

          <button
            onClick={handleStart}
            className="px-8 py-4 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            style={{ backgroundColor: topic.color }}
          >
            Iniciar Examen
          </button>
        </div>
      </div>
    );
  }

  // Vista de resultados
  if (showResults && !showReview) {
    const results = calculateResults();
    const passed = results.percentage >= 60;

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
          {/* Icon and Title */}
          <div className="text-center mb-8">
            <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-4 ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {passed ? (
                <Award className="w-12 h-12 text-green-600" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {passed ? '¡Excelente trabajo!' : 'Sigue estudiando'}
            </h2>
            <p className="text-gray-600">
              {passed 
                ? 'Has demostrado un buen dominio del tema' 
                : 'Necesitas repasar algunos conceptos'}
            </p>
          </div>

          {/* Score Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#e5e7eb"
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke={passed ? '#10b981' : '#ef4444'}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - results.percentage / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                    {results.percentage}%
                  </div>
                  <div className="text-sm text-gray-500">Aciertos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-green-600">{results.correct}</span>
              </div>
              <p className="text-sm text-gray-600">Correctas</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <XCircle className="w-6 h-6 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-red-600">{results.incorrect}</span>
              </div>
              <p className="text-sm text-gray-600">Incorrectas</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-gray-600">{totalQuestions}</span>
              </div>
              <p className="text-sm text-gray-600">Total</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleReview}
              className="flex-1 flex items-center justify-center px-6 py-3 border-2 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              style={{ borderColor: topic.color }}
            >
              Ver Respuestas
            </button>
            <button
              onClick={handleRestart}
              className="flex-1 flex items-center justify-center px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: topic.color }}
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista de examen en progreso o revisión
  const userAnswer = selectedAnswers[currentQuestion.id];
  const isCorrect = userAnswer === currentQuestion.respuestaCorrecta;
  const hasAnswered = userAnswer !== undefined;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Pregunta {currentQuestionIndex + 1} de {totalQuestions}
            </span>
            <span className="text-sm font-semibold text-gray-600">
              {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                backgroundColor: topic.color,
              }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
            {currentQuestion.pregunta}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.opciones.map((opcion, index) => {
              const isSelected = userAnswer === index;
              const isCorrectOption = index === currentQuestion.respuestaCorrecta;
              const showCorrect = showReview && isCorrectOption;
              const showIncorrect = showReview && isSelected && !isCorrect;

              let optionClass = 'bg-white border-2 border-gray-300 hover:border-gray-400';
              
              if (showCorrect) {
                optionClass = 'bg-green-50 border-2 border-green-500';
              } else if (showIncorrect) {
                optionClass = 'bg-red-50 border-2 border-red-500';
              } else if (isSelected && !showReview) {
                optionClass = 'border-2';
              }

              return (
                <button
                  key={index}
                  onClick={() => !showReview && handleSelectAnswer(index)}
                  disabled={showReview}
                  className={`w-full p-4 rounded-lg text-left transition-all ${optionClass} ${
                    showReview ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  style={{
                    borderColor: isSelected && !showReview ? topic.color : undefined,
                    backgroundColor: isSelected && !showReview ? `${topic.color}10` : undefined,
                  }}
                >
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center mr-3 font-semibold"
                      style={{
                        borderColor: isSelected && !showReview ? topic.color : '#d1d5db',
                        backgroundColor: isSelected && !showReview ? topic.color : 'white',
                        color: isSelected && !showReview ? 'white' : '#6b7280',
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-gray-800">{opcion}</span>
                    {showCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-600 ml-2" />
                    )}
                    {showIncorrect && (
                      <XCircle className="w-6 h-6 text-red-600 ml-2" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation (only in review mode) */}
        {showReview && currentQuestion.explicacion && (
          <div className={`mb-6 p-4 rounded-lg ${isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-blue-50 border-l-4 border-blue-500'}`}>
            <h4 className="font-semibold text-gray-800 mb-2">
              {isCorrect ? '✓ Correcto' : 'ℹ️ Explicación'}
            </h4>
            <p className="text-gray-700">{currentQuestion.explicacion}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {showReview && currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Anterior
            </button>
          )}
          <div className="flex-1"></div>
          {showReview ? (
            currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                className="flex items-center px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: topic.color }}
              >
                Siguiente
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowReview(false);
                  setShowResults(true);
                }}
                className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: topic.color }}
              >
                Ver Resultados
              </button>
            )
          ) : (
            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`flex items-center px-6 py-3 text-white rounded-lg font-semibold transition-all ${
                hasAnswered ? 'hover:opacity-90' : 'opacity-50 cursor-not-allowed'
              }`}
              style={{ backgroundColor: topic.color }}
            >
              {isLastQuestion ? 'Finalizar' : 'Siguiente'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
