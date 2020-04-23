const ADD_MESSAGE = "ADD-MESSAGE";
const CHECK_MESSAGE_TEXT = "CHECK-MESSAGE-TEXT";

export const addMessActionCreator = () => ({ type: ADD_MESSAGE });
export const checkMessageActionCreator = (text) => ({
    type: CHECK_MESSAGE_TEXT,
    message: text,
});

export const dialogs_reducer = (state, action) => {
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
