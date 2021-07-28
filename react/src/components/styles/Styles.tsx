import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const Form = styled.form`
  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }

  .form-checkbox,
  .form-radio {
    position: relative;
    margin-top: 2.25rem;
    margin-bottom: 2.25rem;
    text-align: left;
  }

  .form-checkbox-inline .form-checkbox-label,
  .form-radio-inline .form-radio-label {
    display: inline-block;
    margin-right: 1rem;
  }

  .form-checkbox-legend,
  .form-radio-legend {
    margin: 0 0 0.125rem 0;
    font-weight: 500;
    font-size: 1rem;
    color: #576675;
  }

  .form-checkbox-label,
  .form-radio-label {
    position: relative;
    cursor: pointer;
    padding-left: 1.25rem;
    text-align: left;
    color: #576675;
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-checkbox-label:hover i,
  .form-radio-label:hover i {
    color: #1a7676;
  }

  .form-checkbox-label span,
  .form-radio-label span {
    display: block;
  }

  .form-checkbox-label input,
  .form-radio-label input {
    width: auto;
    opacity: 0.0001;
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    margin: 0;
    padding: 0;
  }

  .form-checkbox-button {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: block;
    color: #999;
    left: 0;
    top: 0.25rem;
    width: 0.8rem;
    height: 0.8rem;
    z-index: 0;
    border: 0.1rem solid currentColor;
    border-radius: 0.25rem;
    transition: color 0.28s ease;
    will-change: color;
  }

  .form-checkbox-button::before,
  .form-checkbox-button::after {
    position: absolute;
    height: 0;
    width: 0.2rem;
    background-color: #1a7676;
    display: block;
    transform-origin: left top;
    border-radius: 0.25rem;
    content: "";
    transition: opacity 0.28s ease, height 0s linear 0.28s;
    opacity: 0;
    will-change: opacity, height;
  }

  .form-checkbox-button::before {
    top: 0.65rem;
    left: 0.38rem;
    transform: rotate(-135deg);
    box-shadow: 0 0 0 0.0625rem #fff;
  }

  .form-checkbox-button::after {
    top: 0.3rem;
    left: 0;
    transform: rotate(-45deg);
  }

  .form-checkbox-field:checked ~ .form-checkbox-button {
    color: #1a7676;
  }

  .form-checkbox-field:checked ~ .form-checkbox-button::after,
  .form-checkbox-field:checked ~ .form-checkbox-button::before {
    opacity: 1;
    transition: height 0.28s ease;
  }

  .form-checkbox-field:checked ~ .form-checkbox-button::after {
    height: 0.5rem;
  }

  .form-checkbox-field:checked ~ .form-checkbox-button::before {
    height: 1.2rem;
    transition-delay: 0.28s;
  }
`;

export const Label = styled.label`
  display: inline-block;
  margin-right: 16px;
  flex-basis: 25%;

  &:last-of-type {
    margin-right: 0;
  }
`;
