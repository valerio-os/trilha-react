import Navbar from "./components/Navbar";
import Conpets from "./components/Conpets";
import Faq from "./components/Faq";
import Contato from "./components/Contato";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Conpets />
        <Faq />
        <Contato />
      </main>
    </>
  );
}