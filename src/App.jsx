import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
// to register
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />

        </div>
    )
}
export default App
