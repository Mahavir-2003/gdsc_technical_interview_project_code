import { useEffect } from "react";
import MultiStepSignup from "./MultiStepSignup";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import MultiStepSignIn from "./MultiStepSignIn";
import UserProfile from "./UserProfile";

export default function App() {

  const location = useLocation();

  useEffect(() => {
    pageTransition();
  }, [location]);

  const t1 = gsap.timeline();

  const pageTransition = () => {
    t1.to(".transition-screen", {
      duration: 1,
      opacity: 1,
      left: "0%",
      ease: "power3.inOut",
    }).to(".content",{
      opacity: 1,
      duration: 0.3,
      ease: "power3.inOut",
    }).to(".transition-screen", {
      duration: 1,
      opacity: 1,
      left: "100%",
      ease: "power3.inOut",
    }).set(".transition-screen", {
      left: "-100%",
      opacity: 0,
      duration: 0,
    });
  }

  const getRandomNumber = () => {
    var num = Math.floor(Math.random() * 8) + 1
    var animation = "image-animation-" + num;
    return animation;
  }

  return (
    <div className=" overflow-hidden">
      <div className="w-screen h-screen bg-purple-400 absolute z-50 top-0 left-0 transition-screen opacity-0" style={{ left: "-100%" }}></div>
      <div className="w-screen content opacity-0 h-screen bg-slate-200 flex justify-around items-center">
        <div className="w-1/2">
              <Routes>
                <Route exact path="/" element={<MultiStepSignup/>} />
                <Route exact path="/login" element={<MultiStepSignIn />} />
              </Routes>
        </div>
        <div className="w-2/3 h-4/5 flex  justify-center">
          <div className=" w-2/3 flex gap-6">
            <div className="w-1/2 flex flex-col items-center justify-around gap-4">
              <div className={`w-full h-2/4 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                <img src="https://images.pexels.com/photos/3831077/pexels-photo-3831077.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
              </div>
              <div className=" w-full h-2/4 flex gap-4">
                <div className="  w-1/2 h-full gap-4 flex flex-col">
                  <div className={` w-full h-1/2 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                    <img src="https://images.pexels.com/photos/1812960/pexels-photo-1812960.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
                  </div>
                  <div className={`w-full h-1/2 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                    <img src="https://images.pexels.com/photos/16361065/pexels-photo-16361065/free-photo-of-wood-cars-traffic-nature.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
                  </div>
                </div>
                <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                  <img src="https://images.pexels.com/photos/3584951/pexels-photo-3584951.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-around gap-4">
              <div className="  w-full h-1/4 flex gap-4">
                <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                  <img src="https://images.pexels.com/photos/3246665/pexels-photo-3246665.png?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
                </div>
                <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                  <img src="https://images.pexels.com/photos/3843389/pexels-photo-3843389.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
                </div>
              </div>
              <div className={`w-full h-1/2 flex rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                <img src="https://images.pexels.com/photos/15988796/pexels-photo-15988796/free-photo-of-books-laptop-office-working.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
              </div>
              <div className={`w-full h-1/4 flex rounded-2xl overflow-hidden ${getRandomNumber()}`}>
                <img src="https://images.pexels.com/photos/1507856/pexels-photo-1507856.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="tempImage" className=" w-full h-full drop-shadow-sm object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}