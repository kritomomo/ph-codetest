import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';
import StatusMsg from './StatusMsg';

describe('message', () => {
  let renderResult : RenderResult;
  const content : string = 'username or password is incorrect';
  const color : string = '246, 0, 88';
  beforeEach(() => {
    renderResult = render(
      <Router>
        <StatusMsg content={content} color={color} />
      </Router>
    );
  });

  it('should render message', () => {
    const { getByText } = renderResult;
    expect(getByText(content)).toBeInTheDocument();
  })
})