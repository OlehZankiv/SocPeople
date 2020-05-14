import { login } from "./auth_reducer";

const SET_INITIALIZE = "SET_INITIALIZE";

let initialState = {
    isInitialized: false,
};

export const initialize_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE:
            return { ...state, isInitialized: true };
        default:
            return state;
    }
};
export default initialize_reducer;

export const setInitialize = () => ({
    type: SET_INITIALIZE,
});

export const initialize = () => (dispatch) => {
    const promise = dispatch(login());

    Promise.all([promise]).then(() => {
        dispatch(setInitialize());
    });
};
