/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/66ab154a1d2cd3eb1145c990/quizzes?title=${title}"
  );

  console.log(quizzes);

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
    </section>
  );
}

export default Quiz;
