import React from "react";
import s from "./MyPosts.module.css";
import { reduxForm, Field } from "redux-form";
import { maxLength } from "../../../../utils/validators/validators";
import { Textarea } from "../../common/Fields/Field";

let maxLengthValidate = maxLength(500)
const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.new_post}>
            <Field validate={[maxLengthValidate]} name="post" component={Textarea} placeholder="Enter post" />
            <div className={s.btn_ens}>
                <button>SEND</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({ form: "postForm" })(PostForm);

const MyPosts = (props) => {
    let addPost = (formData) => {
        props.addPost(formData.post);
    };

    return (
        <div className={s.posts}>
            <PostReduxForm onSubmit={addPost} />
            <div className={s.old_posts}>{props.posts}</div>
        </div>
    );
};

export default MyPosts;
