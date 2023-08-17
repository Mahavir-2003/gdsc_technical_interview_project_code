import MultiStepSignup from "./MultiStepSignup";

export default function App() {

  const getRandomNumber =()=>{
    var num = Math.floor(Math.random() * 4) + 1
    var animation = "image-animation-" + num;
    return animation;
  }
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-around items-center">
      <div className="w-1/2 ">
      <MultiStepSignup />
      </div>
      <div className="w-2/3 h-4/5 flex  justify-center">
        <div className=" w-2/3 flex gap-6">
        <div className="w-1/2 flex flex-col items-center justify-around gap-4">
          <div className={`w-full h-2/4 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
          <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
          </div>
          <div className=" w-full h-2/4 flex gap-4">
            <div className="  w-1/2 h-full gap-4 flex flex-col">
              <div className={` w-full h-1/2 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
              <img src="https://bento.me/images/widgets/figma.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
              </div>
              <div className={`w-full h-1/2 rounded-2xl overflow-hidden ${getRandomNumber()}`}>
              <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
              </div>
            </div>
            <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
            <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-around gap-4">
        <div className="  w-full h-1/4 flex gap-4">
              <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
              <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
              </div>
              <div className={`w-1/2 h-full rounded-2xl overflow-hidden ${getRandomNumber()}`}>
              <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
              </div>
            </div>
            <div className={`w-full h-1/2 flex rounded-2xl overflow-hidden ${getRandomNumber()}`}>
            <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
            </div>
            <div className={`w-full h-1/4 flex rounded-2xl overflow-hidden ${getRandomNumber()}`}>
            <img src="https://bento.me/images/widgets/photo1.png" alt="tempImage" className=" w-full h-full drop-shadow-sm"/>
            </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}