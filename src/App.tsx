import { useEffect } from "react";
import ReactGA from "react-ga4";
import { LagoDique } from "./pages/LagoDique";

// Inicializar GA UNA sola vez
ReactGA.initialize("G-XXXXXXXXXX");

function App() {
  useEffect(() => {
    if (import.meta.env.PROD) {
      ReactGA.send("pageview");
    }
  }, []);

  return (
    <div className="App">
      <LagoDique />
    </div>
  );
}

export { App };
