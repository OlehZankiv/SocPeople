import React from "react";
import s from "./MyPosts.module.css";
import { Formik, Form } from "formik";
import { maxLength } from "../../../../utils/validators/validators";
import { CreateTextareaFormik, CreateFieldFormik } from "../../common/Fields/Field";

let maxLengthValidate = maxLength(500);
const PostForm = ({ addPost }) => {
    let addUserPost = ({ post }) => {
        addPost(post);
    };

    const validate = (values) => {
        const errors = {};

        errors.post = maxLengthValidate(values.post);

        if (!!errors.post) {
            return errors;
        }
    };

    return (
        <Formik initialValues={{ post: "" }} onSubmit={addUserPost} validate={validate}>
            <Form>
                {CreateFieldFormik("textarea", null, "post", "Enter post", "textarea")}
                <div className={s.btn_end}>
                    <button type="submit">SEND</button>
                </div>
            </Form>
        </Formik>
    );
};

const MyPostsFormik = React.memo(({ addPost, posts }) => {
    return (
        <div className={s.posts}>
            <PostForm addPost={addPost} />
            <div className={s.old_posts}>{posts}</div>
        </div>
    );
});

export default MyPostsFormik;
