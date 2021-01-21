import React, { Component } from 'react';

const initialState = {
  hasError: false
};

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1>Sorry... there was an error</h1>
    ) : this.props.children;
  }
}
