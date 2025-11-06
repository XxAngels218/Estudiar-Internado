function Summary({ topic }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
        {/* Header */}
        <div className="mb-8 pb-6 border-b-4" style={{ borderColor: topic.color }}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl">{topic.icon}</span>
            <h2 className="text-3xl font-bold text-gray-800">{topic.nombre}</h2>
          </div>
          <p className="text-center text-gray-600">
            Resumen completo del tema para estudio y repaso
          </p>
        </div>

        {/* Content */}
        <div
          className="summary-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: topic.resumen }}
        />

        {/* Footer */}
        <div className="mt-12 pt-6 border-t-2 border-gray-200">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Consejo de estudio:</strong> Lee el resumen completo, luego practica con las flashcards y finalmente evalúa tu conocimiento con el examen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
