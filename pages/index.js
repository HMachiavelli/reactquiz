/* eslint-disable max-len */
import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizInput from '../src/components/QuizInput';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  const [name, setName] = React.useState('');
  const router = useRouter();

  const goToQuiz = (evt) => {
    evt.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Breaking Bad</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Lets see if you have really watched all 5 seasons of Breaking Bad, paying attention to all the details ;)</p>

            <form onSubmit={goToQuiz}>
              <QuizInput
                name="name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                placeholder="Say YOUR name"
              />
              <Button type="submit" disabled={name.length === 0}>
                PLAY
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>People`s Quizes</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.repo} />
    </QuizBackground>
  );
}
