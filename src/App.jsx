import { Features } from "./components/features/Features.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import { Sponsors } from "./components/sponsors/Sponsors.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />      
        <Sponsors />
      </main>
      <Footer />
    </>);
}

export default App;
