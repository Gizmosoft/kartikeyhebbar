import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { WorkPage } from './pages/Work';
import { EducationPage } from './pages/Education';
import { SkillsPage } from './pages/Skills';
import { ProjectsPage } from './pages/Projects';
import { BlogsPage } from './pages/Blogs';
import { ResearchPage } from './pages/Research';
import { AspirationsPage } from './pages/Aspirations';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workex" element={<WorkPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/aspirations" element={<AspirationsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
