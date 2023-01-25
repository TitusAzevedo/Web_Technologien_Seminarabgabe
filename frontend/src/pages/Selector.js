import { useRecoilValue } from "recoil";
import { questionState } from "../components/States";
import Gender from "../components/Questions/Gender";
import Age from "../components/Questions/Age";
import Price from "../components/Questions/Price";
import Header from "../components/Questions/Header";
import {Navigate} from "react-router-dom"

export default function Blank() {
  const questionID = useRecoilValue(questionState);
  if (questionID === 0) {
    return (
      <div className="h-screen ">
        <Header />
        <div className="py-10 h-5/6">
          <Gender />
        </div>
      </div>
    );
  } else if (questionID === 1) {
    return (
      <div className="h-screen ">
        <Header />
        <div className="py-10 h-5/6">
          <Price />
        </div>
      </div>
    );
  } else if (questionID === 2) {
    return (
      <div className="h-screen ">
        <Header />
        <div className="py-10 h-5/6">
          <Age />
        </div>
      </div>
    );
  } else {
    return(<Navigate repalce to="/product" />)
  }
}
