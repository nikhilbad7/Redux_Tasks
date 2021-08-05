import {Fragment} from 'react';
import { useSelector} from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import AddUserForm from './components/AddUserForm';
import NotFound from './components/NotFound';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated );
  return (
    <Router>
      <Header />
      <Switch>
      	{!isAuth && (
          <Route path={process.env.PUBLIC_URL +'/'} exact>
            <Auth />
          </Route>
        )}
        {isAuth && (
        	<Route path={process.env.PUBLIC_URL +'/'} exact>
      			<Dashboard />
      		</Route>
        )}

        {isAuth && (
        	<Route path='/new-user' exact>
      			<AddUserForm />
      		</Route>
        )}
        
        {!isAuth && (
        	<Route path='/new-user' exact>
      			<Auth />
      		</Route>
        )}

        {isAuth && (
        	<Route path='*'>
      			<NotFound />
      		</Route>
        )}

        {!isAuth && (
        	<Route path='*'>
      			<Auth />
      		</Route>
        )}
      </Switch> 
    </Router>
    
  );
}

export default App;
