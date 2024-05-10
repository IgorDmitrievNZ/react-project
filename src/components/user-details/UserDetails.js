import { useParams } from "react-router-dom";
import { withLayout } from "../../hocs/with-layout";
import { BaseURL } from "../../consts/consts";
import { useEffect, useState } from "react";
import axios from "axios";
import "../user-details/UserDetail.css";

const UserDetails = () => {
  const { login } = useParams();
  const userDetailsUrl = `${BaseURL}/users/${login}`;
  const [details, setDetails] = useState("");
  console.log("details" + details);

  useEffect(() => {
    getDetails();
    console.log("userDeatails responce OK");
  }, []);

  async function getDetails() {
    try {
      console.log(userDetailsUrl);
      const response = await axios.get(userDetailsUrl);
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  console.log("user login log" + { login });

  return (
    <div className="user_details">
      <h1>login: {details.login}</h1>
      {details.name && <h2>name: {details.name}</h2>}
      {details.location && <h3>location: {details.location}</h3>}
      <img alt="avatar_url" src={details.avatar_url} />

      <aside>
        <h2>repositories</h2>
      </aside>
    </div>
  );
};
export default withLayout(UserDetails);
