import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <h2>Oops! Something went wrong</h2>
        <p className="error-message">
          {error?.statusText || error?.message || 'An unexpected error occurred'}
        </p>
        {error?.stack && <pre className="error-stack">{error.stack}</pre>}
        <a href="/" className="ui-button primary">
          Go back to home
        </a>
      </div>
    </div>
  );
}
