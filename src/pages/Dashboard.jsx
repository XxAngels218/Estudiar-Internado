import { Link } from 'react-router-dom';
import { getAllTopics } from '../data/topics';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

function Dashboard() {
  const topics = getAllTopics();
  
  // Calcular estadísticas totales
  const totalFlashcards = topics.reduce((sum, topic) => sum + topic.flashcards.length, 0);
  const totalPreguntas = topics.reduce((sum, topic) => sum + topic.preguntas.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Medicina Study App
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Plataforma de estudio para internado médico
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Selecciona un Tema
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora flashcards, resúmenes y practica con exámenes de cada área clínica
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/tema/${topic.id}`}
              className="group"
            >
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  borderTop: `6px solid ${topic.color}`,
                }}
              >
                <div className="p-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto"
                    style={{
                      backgroundColor: `${topic.color}20`,
                    }}
                  >
                    {topic.icon}
                  </div>

                  {/* Topic Name */}
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                    {topic.nombre}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Flashcards
                      </span>
                      <span className="font-semibold">{topic.flashcards.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Preguntas
                      </span>
                      <span className="font-semibold">{topic.preguntas.length}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all duration-300"
                    style={{
                      backgroundColor: topic.color,
                    }}
                  >
                    Estudiar Ahora
                  </button>
                </div>
              </div>
            </Link>
          ))}

          {/* Examen Completo Card */}
          <Link
            to="/examen-completo"
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-6"
              style={{
                borderTop: '6px solid #9333ea',
              }}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto bg-gradient-to-br from-purple-100 to-indigo-100">
                  🎓
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                  Examen Completo
                </h3>

                {/* Stats */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Banco Total
                    </span>
                    <span className="font-semibold">{totalPreguntas} preguntas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Examen
                    </span>
                    <span className="font-semibold">50 preguntas</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-3">
                  <p className="text-xs text-center text-gray-600">
                    Preguntas aleatorias de todos los temas
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Tomar Examen
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            💡 Tip: Completa las flashcards antes de tomar el examen de cada tema
          </p>
          <p className="text-sm mt-2">
            🎓 El Examen Completo incluye preguntas de todos los temas para una evaluación integral
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
