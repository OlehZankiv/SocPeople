const ADD_MESSAGE = "ADD-MESSAGE";
const CHECK_MESSAGE_TEXT = "CHECK-MESSAGE-TEXT";

const ADD_POST = "ADD-POST";
const CHECK_POST_TEXT = "CHECK-POST-TEXT";

let store = {
    _state: {
        profile: {
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
        },
        dialogs: {
            dialogs: [
                {
                    id: 1,
                    name: "Aleh",
                    avatar:
                        "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                },
                {
                    id: 2,
                    name: "Ovechka",
                    avatar:
                        "https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png",
                },
                {
                    id: 3,
                    name: "Yana",
                    avatar:
                        "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
                },
                {
                    id: 4,
                    name: "Putana",
                    avatar:
                        "http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg",
                },
            ],
            messages: {
                allMessages: [
                    {
                        id: 1,
                        message: "Hi",
                        avatar:
                            "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                        author: true,
                    },
                    {
                        id: 2,
                        message: "How are you?",
                        avatar:
                            "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                        author: true,
                    },
                    {
                        id: 3,
                        message: "Good, are you?",
                        avatar:
                            "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
                        author: false,
                    },
                ],
                textOfArea: "",
            },
        },
        friends: [
            {
                id: 1,
                img:
                    "http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-1024x640.jpg",
                name: "Putana",
            },
            {
                id: 2,
                img:
                    "https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png",
                name: "Ovechka",
            },
            {
                id: 3,
                img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
                name: "Yana",
            },
        ],
    },
    _render() {},

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._render = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case CHECK_POST_TEXT:
                this.getState().profile.posts.postText = action.text;
                store._render();
                break;
            case ADD_POST:
                if (this.getState().profile.posts.postText) {
                    let newId =
                        this.getState().profile.posts.allPosts.length + 1;
                    let newPost = {
                        id: newId,
                        message: this.getState().profile.posts.postText,
                        likeCount: 0,
                    };
                    this.getState().profile.posts.allPosts.push(newPost);
                    this.getState().profile.posts.postText = "";

                    store._render();
                }
                break;

            case CHECK_MESSAGE_TEXT:
                this.getState().dialogs.messages.textOfArea = action.message;
                store._render();
                break;
            case ADD_MESSAGE:
                if (this.getState().dialogs.messages.textOfArea) {
                    let idMessage =
                        this.getState().dialogs.messages.allMessages.length + 1;
                    let newMessage = {
                        id: idMessage,
                        message: this.getState().dialogs.messages.textOfArea,
                        avatar:
                            "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                        author: true,
                    };

                    this.getState().dialogs.messages.allMessages.push(
                        newMessage
                    );
                }
                this.getState().dialogs.messages.textOfArea = "";
                store._render();
                break;
        }
    },
};

export const addMessActionCreator = () => ({ type: ADD_MESSAGE });
export const checkMessageActionCreator = (text) => ({
    type: CHECK_MESSAGE_TEXT,
    message: text,
});

export const addPostActionCreator = () => ({ type: ADD_POST });
export const writeNewPostActionCreator = (text) => ({
    type: CHECK_POST_TEXT,
    text: text,
});
export default store;
