import './App.css';
import UserForm from './components/NewUser/UserForm';
import UserList from './components/Users/UserList';


const INITIAL_USERS = [
  {username: 'Judith', age: 30},
  {username: "Rob", age: 62}
]

const App = () => {
  return (
    <div className='container'>
      <UserForm />
      <UserList users={INITIAL_USERS}/>
    </div>
  );
}

export default App;
