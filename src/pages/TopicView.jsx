import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTopicById } from '../data/topics';
import { ArrowLeft, BookOpen, FileText, ClipboardList } from 'lucide-react';
import Flashcards from '../components/Flashcards';
import Summary from '../components/Summary';
import Test from '../components/Test';

function TopicView() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = getTopicById(topicId);
  const [activeTab, setActiveTab] = useState('flashcards');

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tema no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Volver al Dashboard
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'flashcards', name: 'Flashcards', icon: BookOpen },
    { id: 'summary', name: 'Resúmenes', icon: FileText },
    { id: 'test', name: 'Examen', icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Volver</span>
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-3xl">{topic.icon}</span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                {topic.nombre}
              </h1>
            </div>

            <div className="w-20"></div> {/* Spacer for centering */}
          </div>

          {/* Tabs */}
          <div className="mt-6 flex space-x-1 sm:space-x-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeTab === tab.id ? topic.color : undefined,
                  }}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.name.split('')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'flashcards' && <Flashcards topic={topic} />}
        {activeTab === 'summary' && <Summary topic={topic} />}
        {activeTab === 'test' && <Test topic={topic} />}
      </main>
    </div>
  );
}

export default TopicView;
