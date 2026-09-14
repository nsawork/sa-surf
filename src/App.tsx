import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Context from './pages/Context/Context';
import CustomCursor from './components/CustomCursor/CustomCursor';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="context" element={<Context />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;