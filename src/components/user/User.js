import '../user/User.css';
import { Routes, Route, Link } from 'react-router-dom';
import UserDetails from '../user-details/UserDetails';

export default function User({ user }) {

    return (
        <Link to="/details">
            <div className="users"  >
                <h3>{user.login}</h3>
                <img className="user-img" src={user.avatar_url} />
            </div>
        </Link>
    );
}