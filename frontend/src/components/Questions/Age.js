import { useRecoilState, useRecoilValue } from "recoil";
import { ageState, questionState } from "../States.js";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import Numpad from "./Numpad";

function Age() {
  const [questionID, setQuestionID] = useRecoilState(questionState);
  const age = useRecoilValue(ageState);

  
  return (
    <div className="px-10">
      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={() => setQuestionID(questionID - 1)}
          className="flex items-center justify-center h-16"
        >
          <ArrowLeftIcon className="text-gray-700 h-8" />
        </div>
        <div className="flex items-center justify-center h-16 text-4xl pt-2 numpad-font">
          Alter
        </div>
      </div>
      <div className="flex justify-center items-center text-7xl text-gray-700 pt-5 pb-10 numpad-font">
        {age}
      </div>
      <Numpad state={ageState} />
    </div>
  );
}

export default Age;
