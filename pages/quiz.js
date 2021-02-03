/* eslint-disable max-len */
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';

import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

function QuestionWidget({ question, totalQuestions, questionIndex }) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        {/* <button type="button">Back</button> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt={question.title}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2 style={{ marginBottom: '20px' }}>{question.title}</h2>

        <form>
          {question.alternatives.map((item, index) => {
            return (
              <Widget.Topic
                as="label"
                htmlFor={index}
              >
                <input
                  type="radio"
                  name={questionId}
                  value={index}
                  id={index}
                  style={{ marginRight: '10px' }}
                />
                {item}
              </Widget.Topic>
            );
          })}
        </form>

        <Button type="submit">CONFIRMAR</Button>
      </Widget.Content>
    </Widget>
  );
}

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  const question = db.questions[0];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <QuestionWidget
          question={question}
          totalQuestions={db.questions.length}
          questionIndex={0}
        />
      </QuizContainer>
    </QuizBackground>
  );
}
