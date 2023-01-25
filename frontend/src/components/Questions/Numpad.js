import { ArrowRightIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { questionState } from "../States.js";

export default function Numpad({ state }) {
  const [questionID, setQuestionID] = useRecoilState(questionState);
  const [valueState, setValueState] = useRecoilState(state);

  const appendDigit = (digit) => {
    if (valueState === "0") {
      setValueState(digit);
    } else {
      setValueState("".concat(valueState, digit));
    }
  };

  const removeDigit = () => {
    if (valueState.length > 1) {
      setValueState(valueState.slice(0, -1));
    } else {
        setValueState("0");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 numpad-font text-3xl">
      <div
        onClick={() => appendDigit(1)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center text-3xl justify-center"
      >
        1
      </div>
      <div
        onClick={() => appendDigit(2)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        2
      </div>
      <div
        onClick={() => appendDigit(3)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        3
      </div>
      <div
        onClick={() => appendDigit(4)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        4
      </div>
      <div
        onClick={() => appendDigit(5)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        5
      </div>
      <div
        onClick={() => appendDigit(6)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        6
      </div>
      <div
        onClick={() => appendDigit(7)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        7
      </div>
      <div
        onClick={() => appendDigit(8)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        8
      </div>
      <div
        onClick={() => appendDigit(9)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        9
      </div>
      <div
        onClick={removeDigit}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        <BackspaceIcon className="h-8" />
      </div>
      <div
        onClick={() => appendDigit(0)}
        className="bg-gray-300 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        0
      </div>
      <div
        onClick={() => setQuestionID(questionID + 1)}
        className="bg-gray-200 text-gray-700 rounded-lg h-16 flex items-center justify-center"
      >
        <ArrowRightIcon className="h-8" />
      </div>
    </div>
  );
}
