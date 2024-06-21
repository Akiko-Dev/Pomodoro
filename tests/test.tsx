import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

jest.mock('../components/SelectionScreen', () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe('App', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('handles button click', async () => {
    const { getByText, getByRole } = render(<App />);
    const button = getByRole('button');
    fireEvent.press(button);
    expect(getByText('Button clicked')).toBeTruthy();
  });
});