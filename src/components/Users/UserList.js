import './UserList.css';
import UserTile from './UserTile';
import Card from '../UI/Card';

const UserList = (props) => {
  const userTiles = props.users.map(user => <UserTile username={user.username} age={user.age}></UserTile>)
  
  return (
    <Card className="user-list">
      {userTiles}
    </Card>
  );
}

export default UserList;