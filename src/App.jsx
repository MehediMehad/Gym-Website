import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BgImg from "../src/assets/bg.png"

const bgStyle = {
  backgroundImage: `url(${BgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden ">
      <div style={bgStyle}>
        <Navbar/>
        <Hero/>
      </div>
    </div>
  );
};

export default App;