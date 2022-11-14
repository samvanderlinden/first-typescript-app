// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen, RenderResult } from '@testing-library/react';
import App from '../App';
import React from 'react';

let documentBody: RenderResult;

describe('Testing truthy and falsey', () => {
  it('true is truthy', () => {
    expect(true).toBe(true);
  });

  it('false to be falsey', () => {
    expect(false).toBe(false);
  });
})

describe('<App />', () => {
  it(`Render 'My First TypeScript App!' in <App /> component`, () => {
    render(<App />);
    expect(screen.getByText('My First TypeScript App!')).toBeInTheDocument();
  });
})