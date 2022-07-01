import {useState} from 'react';
import './App.css';
import UserForm from './components/NewUser/UserForm';
import UserList from './components/Users/UserList';


const INITIAL_USERS = [
  {username: 'Judith', age: 30},
  {username: "Rob", age: 62}
]

const App = () => {
  const [users, updateUsers] = useState(INITIAL_USERS);

  const newUserHandler = (newUser) => {
    updateUsers((prevUsers) => {return [newUser, ...prevUsers]});
  };

  return (
    <div className='container'>
      <UserForm onSubmit={newUserHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
