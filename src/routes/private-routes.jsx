import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ element, ...rest }) {
    const user = localStorage.getItem('devburguer:userData');
    const location = useLocation();

    return user ? (
        React.cloneElement(element, rest)
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

