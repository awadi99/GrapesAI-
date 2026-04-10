import Navbar from './Navbar';
import Hero from './Hero';
import Feature from './Feature';
import HowItWorks from './HowItWorks';
import About from './About';
import Footer from './Footer';


export default function Home() {
    return (

        < div className="bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 contrast-120">
            <Navbar />
            <Hero />
            <Feature />
            <HowItWorks />
            <About />
            <Footer />
        </div>
    );
}