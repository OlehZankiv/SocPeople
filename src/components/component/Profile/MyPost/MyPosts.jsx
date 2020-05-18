import React from "react";
import s from "./MyPosts.module.css";
import { reduxForm, Field } from "redux-form";
import { maxLength } from "../../../../utils/validators/validators";
import { Textarea } from "../../common/Fields/Field";

let maxLengthValidate = maxLength(500);
const PostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={s.new_post}>
            <Field
                validate={[maxLengthValidate]}
                name="post"
                component={Textarea}
                placeholder="Enter post"
            />
            <div className={s.btn_ens}>
                <button>SEND</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({ form: "postForm" })(PostForm);

const MyPosts = React.memo(({ addPost, posts }) => {
    let addUserPost = ({ post }) => {
        addPost(post);
    };

    return (
        <div className={s.posts}>
            <PostReduxForm onSubmit={addUserPost} />
            <div className={s.old_posts}>{posts}</div>
        </div>
    );
});

export default MyPosts;
