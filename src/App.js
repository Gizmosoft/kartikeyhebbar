import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

// React Router DOM imports - For enabling single page redirects of different pages
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Footer from './components/footer/Footer';
import Workex from './components/workex/Workex';
import Education from './components/education/Education';
import Project from './components/projects/Project';
import Research from './components/research/Research';
import Aspirations from './components/aspirations/Aspirations';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
        }>
        </Route>
        <Route exact path={"/#/workex"} element={<Workex />} />
        <Route exact path={"/#/education"} element={<Education />} />
        <Route exact path={"/#/skills"} element={<Skills />} />
        <Route exact path={"/#/projects"} element={<Project />} />
        <Route exact path={"/#/research"} element={<Research />} />
        <Route exact path={"/#/aspirations"} element={<Aspirations />} />
      </Routes>
      {/* <Footer /> */}

    </Router>
    </>
  );
}

export default App;
