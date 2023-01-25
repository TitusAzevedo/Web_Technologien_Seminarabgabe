import { useRecoilState, useSetRecoilState } from "recoil";
import { genderState, questionState } from "../States.js";

function Gender() {
  const setGender = useSetRecoilState(genderState);
  const [questionID, setQuestionID] = useRecoilState(questionState);

  const onclickMethod = (genderChar) => {
    setGender(genderChar);
    setQuestionID(questionID + 1);
  };

  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Geschlecht
          </h1>
        </div>
      </header>
      <main className="h-full ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-full ">
          <div className="px-4 py-4 sm:px-0 h-full">
            <div
              onClick={() => onclickMethod("m")}
              id="top"
              className="top flex items-center text-center rounded-t-2xl"
            >
              <h1
                to="/product"
                className="text-white text-5xl font-extrabold basis-full"
              >
                Männlich
              </h1>
            </div>

            <div
              onClick={() => onclickMethod("w")}
              id="down"
              className="down flex items-center text-center rounded-b-2xl"
            >
              <h1 className="text-white text-5xl font-extrabold basis-full">
                Weiblich
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gender;
