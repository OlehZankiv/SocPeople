const ADD_POST = "ADD-POST";
const CHECK_POST_TEXT = "CHECK-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const writeNewPostActionCreator = (text) => ({
    type: CHECK_POST_TEXT,
    text: text,
});

let initialState = {
    posts: {
        allPosts: [
            {
                id: 1,
                message: "Hello, It's my first props",
                likeCount: 6,
            },
            { id: 2, message: "It's very funny!", likeCount: 11 },
        ],
        postText: "",
    },
};

export const profile_reducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case CHECK_POST_TEXT:
            stateCopy = { ...state };
            stateCopy.posts.postText = action.text;
            return stateCopy;
        case ADD_POST:
            stateCopy = { ...state };
            if (state.posts.postText) {
                let newId = state.posts.allPosts.length + 1;
                let newPost = {
                    id: newId,
                    message: state.posts.postText,
                    likeCount: 0,
                };

                stateCopy.posts = { ...state.posts };
                stateCopy.posts.allPosts.push(newPost);
                stateCopy.posts.postText = "";
            }
            return stateCopy;
        default:
            return state;
    }
};
