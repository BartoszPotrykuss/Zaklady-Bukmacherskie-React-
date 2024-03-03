import '../style/App.css';
import Header from './Header';
import Mecze from './Mecze';
import Obstawianie from './Obstawianie';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Mecze />
      <Obstawianie />
      <Footer />
    </div>
  );
}

export default App;
