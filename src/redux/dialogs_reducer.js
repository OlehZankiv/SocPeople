const ADD_MESSAGE = "ADD-MESSAGE";
const CHECK_MESSAGE_TEXT = "CHECK-MESSAGE-TEXT";

export const addMessActionCreator = () => ({ type: ADD_MESSAGE });
export const checkMessageActionCreator = (text) => ({
    type: CHECK_MESSAGE_TEXT,
    message: text,
});

let initialState = {
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
            avatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
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
};

export const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_MESSAGE_TEXT:
            state.messages.textOfArea = action.message;
            break;
        case ADD_MESSAGE:
            if (state.messages.textOfArea) {
                let idMessage = state.messages.allMessages.length + 1;
                let newMessage = {
                    id: idMessage,
                    message: state.messages.textOfArea,
                    avatar:
                        "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                    author: true,
                };

                state.messages.allMessages.push(newMessage);
                state.messages.textOfArea = "";
            }
            break;
    }

    return state;
};
