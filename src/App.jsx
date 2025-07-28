import React from 'https://unpkg.com/react@18.2.0?module';
import { Routes, Route, Link } from 'https://unpkg.com/react-router-dom@6.21.2?module';
import ClassesPage from './pages/ClassesPage.jsx';
import StudentsPage from './pages/StudentsPage.jsx';
import CyclesPage from './pages/CyclesPage.jsx';
import PlanningPage from './pages/PlanningPage.jsx';
import AttendancePage from './pages/AttendancePage.jsx';
import CahierPage from './pages/CahierPage.jsx';
import EvaluationPage from './pages/EvaluationPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import DocumentsPage from './pages/DocumentsPage.jsx';

function App() {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex flex-wrap gap-4">
          <li><Link to="/">Classes</Link></li>
          <li><Link to="/students">Élèves</Link></li>
          <li><Link to="/cycles">Cycles</Link></li>
          <li><Link to="/planning">Planification</Link></li>
          <li><Link to="/attendance">Appel</Link></li>
          <li><Link to="/cahier">Cahier</Link></li>
          <li><Link to="/evaluation">Évaluation</Link></li>
          <li><Link to="/stats">Statistiques</Link></li>
          <li><Link to="/docs">Documents</Link></li>
        </ul>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ClassesPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/cycles" element={<CyclesPage />} />
          <Route path="/planning" element={<PlanningPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/cahier" element={<CahierPage />} />
          <Route path="/evaluation" element={<EvaluationPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/docs" element={<DocumentsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
