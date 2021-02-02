/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizInput = styled.input`
  width: 100%;
  background: transparent;
  border: solid 1px #FFFFFF;
  border-radius: 4px;
  padding: 10px;
  color: #FFFFFF;
  margin: 10px 0 20px 0;
`;

const StartButton = styled.button`
  width: 100%;
  background: ${db.theme.colors.secondary};
  border:none;
  border-radius: 4px;
  padding: 10px;
  color: #FFFFFF;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  transition: opacity 0.2s;
  cursor: pointer;
  &:hover {
    opacity: .8;
  }
`;

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
                onChange={(evt) => setName(evt.target.value)}
                placeholder="Say YOUR name"
              />
              <StartButton type="submit" disabled={name.length === 0}>
                PLAY
              </StartButton>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.repo} />
    </QuizBackground>
  );
}
