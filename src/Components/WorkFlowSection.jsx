import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

function WorkFlowSection() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-2"><img src={codeImg} alt="codeImage" /></div>
        <div className="w-full lg:w-1/2 p-2">
        {checklistItems.map((items,index)=>{
            return <div className="flex mb-12">
                <div className="flex justify-center items-center h-10 w-10 bg-neutral-900 mt-2 mx-6 text-green-400 rounded-full">
                    <CheckCircle2 />
                </div>
                <div className="mt-2">
                    <h5 className="mt-2 mb-2 text-xl">{items.title}</h5>
                    <p className="text-md text-neutral-500">{items.description}</p>
                </div>
            </div>
        })}
         </div>
      </div>
    </div>
  );
}

export default WorkFlowSection;
