import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BreedDetails from './components/BreedDetails';
import DoggieRandom from './components/DoggieRandom';
import HomePage from './components/HomePage';


function App() {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/breed/:id" element={<BreedDetails/>}></Route>
        <Route path="/random" element={<DoggieRandom/>}></Route>

      </Routes>

    </Router>

  )
}

export default App
