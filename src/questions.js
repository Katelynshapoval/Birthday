import { useState, useEffect } from "react";

export default function Questions({ hideLetter }) {
  const questions = [
    "Who is the most beautiful in the whole world?",
    "Who do I want to marry?",
    "Who deserves all the love in the world?",
    "Who will never be difficult or 'too much' for me?",
    "Who is the best girlfrind everrrr?",
  ];
  const [question, setQuestion] = useState(0);
  const [hide, setHide] = useState(false);

  function changeQuestion() {
    if (question === questions.length - 1) {
      // setQuestion(0);
      setHide(true);
      hideLetter(false);
    } else {
      setQuestion(question + 1);
    }
  }
  const className = `questions ${hide ? "hidden" : undefined}`;
  return (
    <div className={className}>
      <div className="mainQuestion">
        <p>{questions[question]}</p>
      </div>
      <button onClick={changeQuestion} className="option">
        You
      </button>
      <button onClick={changeQuestion} className="option">
        My wife
      </button>
      <button onClick={changeQuestion} className="option">
        My girl
      </button>
    </div>
  );
}
