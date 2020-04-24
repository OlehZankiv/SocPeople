import React from "react";
import Friend from "./Friend/Friend";
import Friends from "./Friends";

const FriendsContainer = (props) => {
    let state = props.store.getState();
    let friends = state.navbar.map((friend) => (
        <Friend img={friend.img} name={friend.name} />
    ));
    return <Friends friends={friends} />;
};

export default FriendsContainer;
