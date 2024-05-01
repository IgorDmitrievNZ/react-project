import { useParams } from "react-router-dom";
import { withLayout } from "../../hocs/with-layout";

const UserDetails = () => {
  const { login } = useParams();

  console.log("user login log" + { login });

  return (
    <div>
      <h1>login: {login}</h1>
      <h2>name</h2>
      <h3>location</h3>
      <img alt="avatar_url" src="" />

      <aside>
        <h2>repositories</h2>
      </aside>
    </div>
  );
};
export default withLayout(UserDetails);
