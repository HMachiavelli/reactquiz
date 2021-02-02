/* eslint-disable max-len */
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';

import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <button type="button">Back</button>
            <h3>
              Pergunta 1 de
              {` ${db.questions.length}`}
            </h3>
          </Widget.Header>

          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src="http://placehold.jp/400x150.png"
          />

          <Widget.Content>
            <h2>Pergunta</h2>

            <Button type="submit">CONFIRMAR</Button>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </QuizBackground>
  );
}
