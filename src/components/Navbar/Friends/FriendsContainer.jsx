import React from "react";
import Friend from "./Friend/Friend";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().navbar;
                let friends = state.map((friend) => (
                    <Friend img={friend.img} name={friend.name} />
                ));
                return <Friends friends={friends} />;
            }}
        </StoreContext.Consumer>
    );
};

export default FriendsContainer;
