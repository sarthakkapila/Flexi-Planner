// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
  
const Landing = () => {
return (
    <div>
    <Navbar/>
    <div/>
    <div>
    <h1>Take Notes using AI!</h1>
    <h4>NotesGPT seamlessly converts your voice notes into organized
    summaries and clear action items using AI.</h4>
    <Button variant="secondary">Secondary</Button>
    </div>
    <div>
        <Hero/>
    </div>
    <Button variant="secondary">Secondary</Button>
    </div>
)
}

export default Landing;
