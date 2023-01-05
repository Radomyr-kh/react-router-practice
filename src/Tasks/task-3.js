import {Navigate, Outlet} from 'react-router-dom';

export function Task3() {
  return <div>Subtask3, protected information</div>;
}

export function PrivateRoute({isOddNumber}) {
  return isOddNumber ? <Outlet /> : <Navigate to='/' />;
}
