import {useState} from 'react';
import UserForm from './components/NewUser/UserForm';
import UserList from './components/Users/UserList';

const App = () => {
  const [users, updateUsers] = useState([]);

  const newUserHandler = (newUser) => {
    updateUsers((prevUsers) => {return [newUser, ...prevUsers]});
  };

  return (
    <div>
      <UserForm onSubmit={newUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
