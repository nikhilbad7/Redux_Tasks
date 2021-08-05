import { useSelector ,useDispatch} from 'react-redux';
import classes from './Header.module.css';
import  {authActions} from '../store/auth';
import { Link } from 'react-router-dom';

const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated );
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }
  return (
    <header className={classes.header}>
      <h1>Appiness all around</h1>
      { isAuth && (<nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL +'/'}>DashBoard</Link>
          </li>
          <li>
            <Link to='/new-user'>Add New User</Link>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav> ) }
      
    </header>
  );
};

export default Header;
