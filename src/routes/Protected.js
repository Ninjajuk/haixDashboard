// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectLoggedInUser } from '../authSlice';

function Protected({ children }) {
//   const user = useSelector(selectLoggedInUser);
  const user=true
  

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
}

export default Protected;