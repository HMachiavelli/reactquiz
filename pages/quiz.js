/* eslint-disable max-len */
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';

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
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lets see if you have really watched all 5 seasons of Breaking Bad, paying attention to all the details ;)</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl={db.repo} />
    </QuizBackground>
  );
}
