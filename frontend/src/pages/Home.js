import '../App.css';
import Hero from "../components/Homepage/Hero";
import Footer from "../components/Homepage/Footer";
import Stats from "../components/Homepage/Stats";
import Blog from "../components/Homepage/Blog";
import CTA from "../components/Homepage/CTA";
import Text from "../components/Homepage/Text";
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'


function Home() {
  return (
    <div id="Home">

      {/** Info-Banner (Semesterarbeit) */}
      <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Projektarbeit für ein Semesterprojekt im Unikontext
            
            </p>
          </div>
        </div>
      </div>
      {/** Info-Banner ende */}

      <Hero />
      <Stats />
      <Text />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;