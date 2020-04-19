let state = {
    profile: {
        posts: {
            allPosts: [
                { id: 1, message: "Hello, It's my first props", likeCount: 6 },
                { id: 2, message: "It's very funny!", likeCount: 11 },
            ],
            postText: "",

            addPost() {
                if (this.postText) {
                    let newId = this.allPosts.length + 1;
                    let newPost = {
                        id: newId,
                        message: this.postText,
                        likeCount: 0,
                    };
                    this.allPosts.push(newPost);
                    this.postText = "";

                    state.render();
                }
            },
            checkPostText(text) {
                this.postText = text;
                state.render();
            },
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

            addMessage() {
                if (this.textOfArea) {
                    let idMessage =
                        this.allMessages.length + 1;
                    let newMessage = {
                        id: idMessage,
                        message: this.textOfArea,
                        avatar:
                            "https://i.pinimg.com/236x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg",
                        author: true,
                    };

                    this.allMessages.push(newMessage);
                }
                this.textOfArea = "";
                state.render();
            },

            checkOfArea(text) {
                this.textOfArea = text;
                state.render(state);
            },
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

    render() {},

    subscribe(observer) {
        this.render = observer;
    },
};

export default state;
