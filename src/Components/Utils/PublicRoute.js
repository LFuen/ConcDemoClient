import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/tokenService';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Redirect to={'/AppSelect'} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}