import Button from '../UI/Button';
import Card from '../UI/Card';
import './UserForm.css';

const UserForm = () => {
  const submitNewUserHandler = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const age = e.target.age.value;
    console.log(username, age)
  }

  return (
    <Card>
      <form className='user-form' onSubmit={submitNewUserHandler}>
        <label className='user-form__label'>Username</label>
        <input type="text" className='user-form__input' name='username'></input>
        <label className='user-form__label'>Age (in years)</label>
        <input type="number" className='user-form__input' name='age'></input>
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;