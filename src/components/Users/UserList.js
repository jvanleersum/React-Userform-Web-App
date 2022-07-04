import classes from "./UserList.module.css";
import UserTile from "./UserTile";
import Card from "../UI/Card";

const UserList = (props) => {

  // const userTiles = users.length === 0 ? <p>There are no users yet.</p> : users;

  const userTiles = props.users.length === 0 ? <p>There are no users yet.</p> : props.users.map((user) => (
    <UserTile
      key={Math.random()}
      username={user.username}
      age={user.age}
    ></UserTile>
  ));

  return (
    <Card className={classes.users}>
      <ul>{userTiles}</ul>
    </Card>
  );
};

export default UserList;
