import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  padding: 16px 10px;
  transition: opacity .3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
