import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

const GradientWord = styled.span`
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const PinkBlur = styled.div`
  filter: blur(120px);
  border-radius: 100px;
  background: linear-gradient(360deg, #ff008a -16.67%, #4200ff 100%);
  z-index: 2;
`;

export const VioletBlur = styled.div`
  filter: blur(150px);
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: linear-gradient(126.86deg, #5200ff 0%, #a900ff 100%);
`;

function HeroSection() {
  return (
    <div className="h-full relative">
      <Navbar />
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="mt-36 mx-auto text-6xl font-bold text-center flex flex-col items-center">
        <div className="flex flex-col py-4 mb-10 leading-normal">
          <p>
            Buidl the world of <GradientWord>Web3</GradientWord>
          </p>
          <p>With Spect</p>
        </div>
        <img src="/earth.svg" className="lg:w-[50%]" />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to h-24 w-full z-60" />
      </div>
    </div>
  );
}

export default HeroSection;
