import "./App.css";
import Slider from "./component/slider";
import Footer from "./component/footer";
import CaroselMultiple from "./component/caroselMultiple";
import Exhbition from "./component/exhbition";
import MagesticArt from "./component/magesticArt";
import TourVideo from "./component/tourVideo";
import News from "./component/news";
import ExploreCollection from "./component/exploreCollection";
import EarlyHistory from "./earlyHistory";

function App() {
  return (
    <div>
      <Slider />
      <MagesticArt />
      <TourVideo />
      <CaroselMultiple />
      <Exhbition />
      <ExploreCollection />
      <EarlyHistory />
      <News />
      <Footer />
    </div>
  );
}

export default App;
