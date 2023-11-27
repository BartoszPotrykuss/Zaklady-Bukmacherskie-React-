import '../style/App.css';
import Header from './Header';
import Mecze from './Mecze';
import Obstawianie from './Obstawianie';
import Footer from './Footer';
import OcenaStrony from './OcenaStrony';

function App() {
  return (
    <div className="App">
      <Header />
      <Mecze />
      <Obstawianie />
      <Footer />
      <OcenaStrony />
    </div>
  );
}

export default App;
