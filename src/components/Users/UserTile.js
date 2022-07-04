const UserTile = (props) => {
  return(
    <li>{`${props.username} (${props.age} years old)`}</li>
  );
}

export default UserTile;