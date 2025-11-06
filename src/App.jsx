import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import TopicView from './pages/TopicView'
import ExamenCompleto from './pages/ExamenCompleto'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tema/:topicId" element={<TopicView />} />
        <Route path="/examen-completo" element={<ExamenCompleto />} />
      </Routes>
    </div>
  )
}

export default App
