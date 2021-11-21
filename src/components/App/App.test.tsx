import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render app', () => {
    render(
      <App />
    );
    const homeButton = screen.getByRole('button', { name: /Home/i });
    const loginButton = screen.getByRole('button', { name: /Login/i });
    const topicsButton = screen.getByRole('button', { name: /Topics/i });
    const title = screen.getByText('Home Page');

    expect(homeButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(topicsButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  })
})