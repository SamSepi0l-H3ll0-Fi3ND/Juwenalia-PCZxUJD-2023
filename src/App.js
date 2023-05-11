import "./App.css";
import EventMap from "./pages/EventMap";
import HeroPage from "./pages/HeroPage";
import Partners from "./pages/Partners";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      <HeroPage></HeroPage>
      <Schedule></Schedule>
      <EventMap></EventMap>
      <Partners></Partners>
    </div>
  );
}

export default App;
