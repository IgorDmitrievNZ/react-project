import { withLayout } from "../../hocs/with-layout";
import User from "../user/User";
import "../users/Users.css";
import { useState } from "react";

const Users = ({ users }) => {
  const [userInput, setUserInput] = useState("");

  const search = () => console.log("Great Shot!");

  if (users.length > 0) {
    return (
      <div className="container-users">
        <form>
          <input
            type="text"
            value={userInput}
            placeholder="Enter user's login: "
            onChange={(e) => {
              setUserInput(e.target.value);
              console.log("users log: " + userInput);
            }}
            className="input-users"
          />
          <button type="button" onClick={search} className="searchButton">
            SEARCH
          </button>
        </form>

        <h1> Githab Users </h1>

        <div className="container">
          {users.map((element) => (
            <User key={element.id} user={element} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h3>NO USERS</h3>;
  }
};
export default withLayout(Users);
