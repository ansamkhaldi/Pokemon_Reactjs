import React, { Component } from 'react';
import Error404 from '../pages/Errors/Error404';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <Error404 />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
