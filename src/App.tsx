import "./scss/style.scss";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
