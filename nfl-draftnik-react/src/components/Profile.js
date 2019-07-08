import React from "react";
import "./Profile.css";
import {useAuth0} from "../react-auth0-wrapper";

const Profile = () => {
    const {loading, user} = useAuth0();

    if (loading || !user) {
        return "Loading...";
    }

    return (
        <>
            <div className="image-cropper">
                <img src={user.picture} alt="Profile" className="profile-pic"/>
            </div>

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <code>{JSON.stringify(user, null, 2)}</code>
        </>
    );
};

export default Profile;
