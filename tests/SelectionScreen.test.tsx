import React from 'react';
import { render } from '@testing-library/react-native';
import SelectionScreen from '../components/SelectionScreen';

describe('SelectionScreen', () => {
  it('renders correctly', async () => {
    const { getByText } = render(<SelectionScreen />);
    expect(getByText('Gif')).toBeTruthy();
  });
});