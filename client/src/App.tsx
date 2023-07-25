import React from "react";
import "./App.scss";
import "./i18next";
import SliderComponent from "./components/slider/SliderComponent";
const App: React.FC = () => {
  return (
    <div className="App">
      <SliderComponent />
    </div>
  );
};
export default App;
