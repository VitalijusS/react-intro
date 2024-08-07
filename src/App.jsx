import { FeaturesBigOne } from "./components/featuresBigOne/FeaturesBigOne.jsx";
import { Features } from "./components/features/Features.jsx";
import { FeaturesMap } from "./components/featuresMap/FeaturesMap.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import { Sponsors } from "./components/sponsors/Sponsors.jsx";
import { fourFeatures } from "./data/fourFeatures.js";
import { sixFeatures } from "./data/sixFeatures.js";


function App() {
  console.clear();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />     \
        <Sponsors />
        <FeaturesBigOne data={sixFeatures}/> 
        <Sponsors />
        <FeaturesBigOne data={fourFeatures}/>
        <Sponsors />
        <FeaturesMap list={sixFeatures}/>
        <Sponsors />
      </main>
      <Footer />
    </>);
}

export default App;
