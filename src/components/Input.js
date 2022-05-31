import React from 'react';
import styled from 'styled-components';
import { secondary } from '../Utility/Colors';

const Input = ({
  onChange,
  label,
  colors,
  inputStyles,
  placeholderStyles,
  testingStyles,
}) => {
  return (
    <StyledWrapper
      colors={colors}
      inputStyles={inputStyles}
      placeholderStyles={placeholderStyles}
      id='form-container'
    >
      <div className='form'>
        <input
          type='text'
          id='searchHero'
          className='form__input'
          autoComplete='off'
          placeholder=' '
          onChange={onChange}
        />
        <label htmlFor='searchHero' className='form__label'>
          {label}
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    position: relative;
    width: 20rem;
    height: 3rem;

    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${(props) => props.inputStyles};

      border-radius: 0.5rem;

      font-family: inherit;
      font-size: inherit;
      color: white;
      outline: none;
      padding: 1.25rem;
    }
    &__label {
      position: absolute;

      left: 1rem;
      font-size: 1.2rem;
      top: 0.7rem;
      padding: 0 0.5rem;
      color: white;
      cursor: text;
      transition: all 250ms ease-in-out;
    }
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    ${(props) => props.placeholderStyles};
  }
`;

export default Input;
