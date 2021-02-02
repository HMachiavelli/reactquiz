import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  background: transparent;
  border-radius: ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 16px 10px;
  margin: 10px 0 20px 0;
`;

export default function QuizInput({ onChange, placeholder, name, value }) {
  return (
    <>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </>
  );
}

QuizInput.defaultProps = {
  value: '',
};

QuizInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
