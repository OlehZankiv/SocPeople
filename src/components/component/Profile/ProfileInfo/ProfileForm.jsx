import React from "react";
import s from "./ProfileInfo.module.css";
import user from "../../../../assets/images/user.png";
import { CreateField, Input } from "../../common/Fields/Field";
import { reduxForm } from "redux-form";

const ProfileForm = ({ profile, handleSubmit, error }) => {
    let allContacts = Object.keys(profile.contacts).map((contact, i) => (
        <Contact key={i} contactName={contact} />
    ));

    let errors;

    if (error) {
        errors = error.map((error, i) => (
            <div className={s.settingsProfileError} key={i}>
                {error}
            </div>
        ));
    }

    return (
        <form className={s.profileInfoWrapper} onSubmit={handleSubmit}>
            
            <div className={s.avatar}>
                <img src={profile.photos.large || user} alt="avatar" />
                {error && <div className={s.settingsProfileErrors}>{errors}</div>}
                </div>
            <div className={s.descrWrapper + " " + s.descrWrapperForm}>
                <div className={s.searchJob + " " + s.searchJobForm}>
                    {CreateField(
                        "rememberMe",
                        "checkbox",
                        "lookingForAJob",
                        null,
                        null,
                        "input",
                        "do you looking a job?"
                    )}
                    <div className={s.jobDescr}>
                        <span>Looking for a job description: </span>
                        {CreateField(
                            "emailInput",
                            "text",
                            "lookingForAJobDescription",
                            "Your description",
                            null,
                            Input
                        )}
                    </div>
                </div>
                <div className={s.wrapperAboutMe}>
                    <div className={s.aboutMe}>About me:</div>
                    {CreateField(
                        "emailInput",
                        "text",
                        "aboutMe",
                        "What about you?",
                        null,
                        Input
                    )}
                </div>
                <div className={s.wrapperNameForm}>
                    <div className={s.name}>Name:</div>
                    {CreateField(
                        "emailInput",
                        "text",
                        "fullName",
                        "Your Name",
                        null,
                        Input
                    )}
                </div>
            </div>
            <div className={s.contactsForm}>{allContacts}</div>
            <button className={s.saveSettings}>SAVE</button>
        </form>
    );
};

const Contact = ({ contactName }) => {
    return (
        <div className={s.contact}>
            <span className={s.contactNameForm}>{contactName + ": "}</span>
            {CreateField(
                "emailInput",
                "text",
                "contacts." + contactName,
                contactName,
                null,
                Input
            )}
        </div>
    );
};

const ProfileReduxForm = reduxForm({ form: "profileForm" })(ProfileForm);
export default ProfileReduxForm;
