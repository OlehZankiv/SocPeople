const ADD_POST = "ADD-POST";
const CHECK_POST_TEXT = "CHECK-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const writeNewPostActionCreator = (text) => ({
    type: CHECK_POST_TEXT,
    text: text,
});

export const profile_reducer = (state, action) => {
    switch (action.type) {
        case CHECK_POST_TEXT:
            state.posts.postText = action.text;
            break;
        case ADD_POST:
            if (state.posts.postText) {
                let newId = state.posts.allPosts.length + 1;
                let newPost = {
                    id: newId,
                    message: state.posts.postText,
                    likeCount: 0,
                };
                state.posts.allPosts.push(newPost);
                state.posts.postText = "";
            }
            break;
    }

    return state;
};
