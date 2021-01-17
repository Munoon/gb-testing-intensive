import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector(store => store.user);
    return user === null ? null : <span>{user.name}</span>;
}

export default Profile;