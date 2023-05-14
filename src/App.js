import "./App.css";
import EventMap from "./pages/EventMap";
import HeroPage from "./pages/HeroPage";
import Info from "./pages/Info";
import Partners from "./pages/Partners";
import Schedule from "./pages/Schedule";

function App() {
  return (
    <div className="App">
      <HeroPage></HeroPage>
      <Schedule></Schedule>
      <EventMap></EventMap>
      <Partners></Partners>
      <Info></Info>
    </div>
  );
}

export default App;
