import { LagoDique } from './pages/LagoDique';
import ReactGA from "react-ga4";

function App() {
ReactGA.initialize("G-Y9EP3B7NJ2");

  return <div className="App">
      <LagoDique />
    </div>;
}
export { App };