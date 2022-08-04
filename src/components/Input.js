import React from 'react';
import styled from 'styled-components';
import {
  accent,
  desaturatedRed,
  saturatedRed,
  secondary,
} from '../Utility/Colors';

const Input = ({
  onChange,
  label,
  colors,
  topOffset,
  colorTrigger,
  placeholderStyles,
  testingStyles,
  className,
}) => {
  return (
    <StyledWrapper
      topOffset={topOffset}
      colors={colors}
      colorTrigger={colorTrigger}
      placeholderStyles={placeholderStyles}
      id='form-container'
      className={className}
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
    width: 100%;
    height: 3rem;

    &__input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.3) 70%
      );
      border: 2px solid ${accent};

      &:focus {
        border: 2px solid
          ${(props) =>
            props.colorTrigger.length !== 0
              ? 'green'
              : props.colorTrigger.length === 0
              ? 'red'
              : `${desaturatedRed}`};

        transition: ${(props) =>
          props.colorTrigger.length !== 0
            ? '1ms ease-in-out'
            : '0.25ms ease-in-out'};
      }

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
      font-size: 1rem;
      top: 0.8rem;
      padding: 0 0.5rem;
      color: white;
      cursor: text;
      transition: all 250ms ease-in-out;
    }
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: ${(props) => props.topOffset};
    font-size: 0.8rem;
    left: 0rem;
    padding: 0 0.25rem;
  }
`;

export default Input;
