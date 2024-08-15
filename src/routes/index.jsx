import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../containers/login';
import { Register } from '../containers/register';
import { Home } from '../containers/home';
import { PrivateRoute } from './private-routes';

export const router = createBrowserRouter([
    {

        path: '/',
        element: (
            <PrivateRoute element={<Home />} />

        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
]);
