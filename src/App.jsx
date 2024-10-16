import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
