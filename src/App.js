import React, {useState} from 'react';
import UserForm from './components/NewUser/UserForm';
import UserList from './components/Users/UserList';

const App = () => {
  const [users, updateUsers] = useState([]);

  const newUserHandler = (newUser) => {
    updateUsers((prevUsers) => {return [newUser, ...prevUsers]});
  };

  return (
    <React.Fragment>
      <UserForm onSubmit={newUserHandler}/>
      <UserList users={users} />
    </React.Fragment>
  );
}

export default App;
