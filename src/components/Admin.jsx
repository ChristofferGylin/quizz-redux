import InputForm from "./InputForm";
import QuestionList from "./QuestionList";
import { useRef } from "react";

const Admin = () => {

  const refs = {

    title: useRef(null),
    alt0: useRef(null),
    alt1: useRef(null),
    alt2: useRef(null),
    correct: useRef(null),

  }
  return (
    <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 w-full p-4">
      <InputForm refs={refs} />
      <QuestionList refs={refs} />
    </div>

  );
};

export default Admin;
