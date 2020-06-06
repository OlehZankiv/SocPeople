import React from "react";
import s from "./ProfileInfo.module.css";
import user from "../../../../assets/images/user.png";
import { CreateFieldFormik } from "../../common/Fields/Field";
import { Formik, Form } from "formik";
import cn from "classnames";

const ProfileFormFormik = ({ profile, onSubmit }) => {
    let allContacts = Object.keys(profile.contacts).map((contact, i) => <Contact key={i} contactName={contact} />);

    const values = () => {
        return { ...profile };
    };

    return (
        <Formik onSubmit={onSubmit} initialValues={values()}>
            <Form className={s.profileInfoWrapper}>
                <div className={s.avatar}>
                    <img src={profile.photos.large || user} alt="avatar" />
                </div>
                <div className={cn(s.descrWrapper, s.descrWrapperForm)}>
                    <div className={cn(s.searchJob, s.searchJobForm)}>
                        {CreateFieldFormik(
                            "rememberMe",
                            "checkbox",
                            "lookingForAJob",
                            null,
                            "input",
                            "do you looking a job?"
                        )}
                        <div className={s.jobDescr}>
                            <span>Looking for a job description: </span>
                            {CreateFieldFormik(
                                "emailInput",
                                "text",
                                "lookingForAJobDescription",
                                "Your description",
                                "input"
                            )}
                        </div>
                    </div>
                    <div className={s.wrapperAboutMe}>
                        <div className={s.aboutMe}>About me:</div>
                        {CreateFieldFormik("emailInput", "text", "aboutMe", "What about you?", "input")}
                    </div>
                    <div className={s.wrapperNameForm}>
                        <div className={s.name}>Name:</div>
                        {CreateFieldFormik("emailInput", "text", "fullName", "Your Name", "input")}
                    </div>
                </div>
                <div className={s.contactsForm}>{allContacts}</div>
                <button type="submit" className={s.saveSettings}>
                    SAVE
                </button>
            </Form>
        </Formik>
    );
};

const Contact = ({ contactName }) => {
    return (
        <div className={s.contact}>
            <span className={s.contactNameForm}>{contactName + ": "}</span>
            {CreateFieldFormik("emailInput", "text", "contacts." + contactName, contactName, "input")}
        </div>
    );
};

export default ProfileFormFormik;
