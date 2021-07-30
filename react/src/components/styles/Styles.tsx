import styled, { keyframes } from 'styled-components';
import { breakpoints } from './breakpoints';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 2em;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #3d3935;
    transition: transform 0.25s ease-out;
  }

  &::before {
    top: 0;
    left: 50%;
    width: 4px;
    height: 100%;
    margin-left: -2px;
  }

  &::after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    margin-top: -2px;
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const Wheel = styled.div`
  .wheel {
    animation: ${rotate360} 5s linear infinite;
    transform: translateZ(0);

    background: transparent;
  }
`;

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
    content: '';
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

export const Dropdown = styled.label`
  /** Custom Select **/
  .custom-select-wrapper {
    position: relative;
    display: inline-block;
    user-select: none;
  }
  .custom-select-wrapper select {
    display: none;
  }
  .custom-select {
    position: relative;
    display: inline-block;
  }
  .custom-select-trigger {
    position: relative;
    display: block;
    width: 130px;
    padding: 0 84px 0 22px;
    font-size: 22px;
    font-weight: 300;
    color: #fff;
    line-height: 60px;
    background: #5c9cd8;
    border-radius: 4px;
    cursor: pointer;
  }
  .custom-select-trigger:after {
    position: absolute;
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    top: 50%;
    right: 25px;
    margin-top: -3px;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotate(45deg) translateY(-50%);
    transition: all 0.4s ease-in-out;
    transform-origin: 50% 0;
  }
  .custom-select.opened .custom-select-trigger:after {
    margin-top: 3px;
    transform: rotate(-135deg) translateY(-50%);
  }
  .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    min-width: 100%;
    margin: 15px 0;
    border: 1px solid #b5b5b5;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.07);
    background: #fff;
    transition: all 0.4s ease-in-out;

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-15px);
  }
  .custom-select.opened .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
    transform: translateY(0);
  }
  .custom-options:before {
    position: absolute;
    display: block;
    content: '';
    bottom: 100%;
    right: 25px;
    width: 7px;
    height: 7px;
    margin-bottom: -4px;
    border-top: 1px solid #b5b5b5;
    border-left: 1px solid #b5b5b5;
    background: #fff;
    transform: rotate(45deg);
    transition: all 0.4s ease-in-out;
  }
  .option-hover:before {
    background: #f9f9f9;
  }
  .custom-option {
    position: relative;
    display: block;
    padding: 0 22px;
    border-bottom: 1px solid #b5b5b5;
    font-size: 18px;
    font-weight: 600;
    color: #b5b5b5;
    line-height: 47px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
  }
  .custom-option:first-of-type {
    border-radius: 4px 4px 0 0;
  }
  .custom-option:last-of-type {
    border-bottom: 0;
    border-radius: 0 0 4px 4px;
  }
  .custom-option:hover,
  .custom-option.selection {
    background: #f9f9f9;
  }
`;
