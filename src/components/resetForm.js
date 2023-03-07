import { setQ } from "../redux/quizzes";

const resetForm = (refs) => {

    refs.title.current.value = '';
    refs.alt0.current.value = '';
    refs.alt1.current.value = '';
    refs.alt2.current.value = '';
    refs.correct.current.value = 0;
    setQ(null);

}

export default resetForm;