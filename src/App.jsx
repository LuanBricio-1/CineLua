import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import './App.css';


function App(){
  return(
    <div className="h-full space-y-5 text-white">
      <Header />
      <Section />
      <Footer />
    </div>
  )
}
export default App;
