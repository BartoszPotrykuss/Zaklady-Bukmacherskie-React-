import '../style/App.css';
import Header from './Header';
import Mecze from './Mecze';
import Obstawianie from './Obstawianie';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import NoPage from './NoPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <NavBar />
        <Routes>
        <Route path='/*' element={<NoPage />} />
          <Route path='/' element={<Mecze parameters='competition=UEFA%20Champions%20League&page=1'/>} />
          <Route path='/ChampionsLeague' element={<Mecze parameters='competition=UEFA%20Champions%20League&page=1'/>} />
          <Route path='/PremierLeague' element={<Mecze parameters='competition=English%20Premier%20League&page=226'/>} />
          <Route path='/League1' element={<Mecze parameters='competition=League%201&page=226'/>} />
          <Route path='/Bundesliga' element={<Mecze parameters='competition=Bundesliga&page=150'/>} />
          <Route path='/LaLiga' element={<Mecze parameters='competition=La%20Liga&page=150'/>} />
          <Route path='/SerieA' element={<Mecze parameters='competition=Serie%20A&page=150'/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

