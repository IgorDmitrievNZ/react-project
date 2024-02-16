import User from "./User";

export default function Users({ users }) {

    if (users.length > 0) {
        return (
            <div className="container-users">
                <h1> Githab Users </h1>
                {users.map((element) => (
                    <User key={element.id} user={element} />
                ))}
            </div>
        );
    } else {
        return (
            <h3>NO USERS</h3>
        )
    }
}

