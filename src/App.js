import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-4x1 mx-auto px-28">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume/>

      </div>
    </div>
  );
}

export default App;
