import InputForm from "./InputForm";
import QuestionList from "./QuestionList";

const Admin = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 w-full p-4">
      <InputForm />
      <QuestionList />
    </div>

  );
};

export default Admin;
