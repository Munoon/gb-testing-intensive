import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import App from './App';

jest.mock("react-detect-offline", () => {
  return {
    Offline: ({ children }) => children
  }
});

describe('App tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  describe('Navigation test', () => {
    it('change page from main to profile', () => {
      const history = createMemoryHistory()
      render(
          <Router history={history}>
            <App />
          </Router>
      );

      const indexLoadingComponent = screen.getByText(/loading articles/i);
      expect(indexLoadingComponent).toBeDefined();

      const userHeaderButton = screen.getByRole('link', { name: /user/i });
      fireEvent.click(userHeaderButton);

      const userComponent = screen.getByText(/user page/i);
      expect(userComponent).toBeDefined();
    });
  });
});
