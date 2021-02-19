import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();
  if (loading || !user) {
    return <div>...Loading</div>;
  }
  return (
    <Fragment>
      <img src={user.picture} alt="" />
      <h2>{user.name}</h2>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile