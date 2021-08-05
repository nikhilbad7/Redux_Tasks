import {useDispatch,useSelector} from 'react-redux';
import classes from './Dashboard.module.css';
import  {userAdded} from '../store/user';
import Header from './Header';
import Auth from './Auth';
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {

	const userData = useSelector(state => state.users );
	const renderUsers = userData.map(user => (
			<tr key={user.id}>
		 		<td>{user.name}</td>
		 		<td>{user.age}</td>
		 		<td>{user.gender}</td>
		 		<td>{user.email}</td>
		 		<td>{user.phoneNo}</td>
		 	</tr>

		));   

    
  return (
    
      <ReactBootStrap.Table striped bordered hover>
      <thead>
      	<tr>
      		<th>Name</th>
      		<th>Age</th>
      		<th>Gender</th>
      		<th>Email</th>
      		<th>PhoneNo</th>
      	</tr>
      </thead>
      <tbody>
      	{ renderUsers }
      </tbody>
      </ReactBootStrap.Table>
     
  
  );
};

export default Dashboard;
