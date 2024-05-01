import "../user/User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link className="users-link" to={`/details/${user.login}`}>
      <div className="users">
        <h3>{user.login}</h3>
        <img className="user-img" alt="user's avatar" src={user.avatar_url} />
      </div>
    </Link>
  );
};
export default User;
