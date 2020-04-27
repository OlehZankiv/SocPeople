import React from "react";
import Friend from "./Friend/Friend";
import Friends from "./Friends";
import { connect } from "react-redux";

let MapStateToProps = (state) => {
    let friends = state.navbar.map((friend) => (
        <Friend img={friend.img} name={friend.name} key={friend.id}/>
    ));

    return {
        friends: friends,
    };
};

let MapDispatchToProps = (dispatch) => {
    return {};
};

const FriendsContainer = connect(MapStateToProps, MapDispatchToProps)(Friends);

export default FriendsContainer;