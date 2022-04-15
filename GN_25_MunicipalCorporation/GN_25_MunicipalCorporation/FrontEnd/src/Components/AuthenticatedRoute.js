import { Route, Navigate, Outlet } from 'react-router-dom';
// import AuthenticationService from '../../service/LoginService';

export default function AuthenticatedRoute() {
  if (sessionStorage.getItem("tokenId") != null) {
    return <Outlet />;
  } else {

    return <Navigate to='/login' />;
  }
}
