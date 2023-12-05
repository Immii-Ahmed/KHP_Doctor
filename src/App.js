// import Navbar from "./Components/Navbar";
import { DocCard, HeroSection, Navbar } from "./Components";
// import { LoginPage, SignupPage } from "./Pages";


function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="card-group" style={{ margin: '4%' }}>
      <DocCard />
      <DocCard />
      <DocCard/>
    </div>
    </>
  );
}

export default App;
