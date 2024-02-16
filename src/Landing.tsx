// import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
  
const Landing = () => {
return (
    <div>
    <Navbar/>
    <div/>
    <div className="p-20">
    <h1 className="inline-block text-center text-4xl font-medium tracking-tighter text-dark lg:text-7xl">
          AI-Powered Voice <br className="hidden lg:inline-block" />
          Note Taking
        </h1>
    <div className="p-5">
    <p className="mt-8 text-center text-xl font-light tracking-tight lg:text-3xl">
          NotesGPT seamlessly converts your voice notes into{' '}
          <span className="font-bold">
            organized <br className="hidden lg:inline-block" />
            summaries
          </span>{' '}
          and <span className="font-bold">clear action items</span> using AI.
        </p>
    </div>
    <Button variant="default" size="lg">Get Started</Button>
    </div>
    <br/>
    <br/>
    <div>
        <Hero/>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Footer/>
        </div>
        </div>

)
}

export default Landing;
