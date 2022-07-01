import './UserTile.css';

const UserTile = (props) => {
  return(
    <li className='user-tile'>{`${props.username} (${props.age} years old)`}</li>
  );
}

export default UserTile;