export default function User({ user }) {
    return (
        <div className="users" >
            <h3>{user.login}</h3>
            <img className="user-img" src={user.avatar_url} />
        </div>
    );
}