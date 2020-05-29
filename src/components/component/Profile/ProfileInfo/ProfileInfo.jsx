import React, { Fragment } from "react";
import s from "./ProfileInfo.module.css";
import Loader from "../../common/Loader";
import settings from "../../../../assets/images/settings.png";
import { useState } from "react";
import ProfileData from "./ProfileData";
import ProfileReduxForm from "./ProfileForm";
import { NavLink } from "react-router-dom";

const ProfileInfo = ({ profile, status, updateStatus, setAvatar, isOwner, setProfileData }) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Loader />;
    }

    let allContacts = Object.keys(profile.contacts).map((contact, i) => (
        <Contact key={i} contactName={contact} contactLink={profile.contacts[contact]} />
    ));

    const onSubmitProfileForm = (formData) => {
        setProfileData(formData).then(() => {
            setEditMode(false);
        });
    };

    const toggleEditMode = () => {
        if (editMode) {
            setEditMode(false);
        } else {
            setEditMode(true);
        }
    };

    return (
        <div className={s.wrapper_avatar}>
            <div className={s.img_head}></div>
            {editMode ? (
                <ProfileReduxForm initialValues={profile} profile={profile} onSubmit={onSubmitProfileForm} />
            ) : (
                <ProfileData
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                    setAvatar={setAvatar}
                    isOwner={isOwner}
                />
            )}
            {isOwner && (
                <img
                    src={settings}
                    alt="settings"
                    className={s.settingsLogo}
                    onClick={() => {
                        toggleEditMode();
                    }}
                />
            )}
            <div className={s.contacts}>{allContacts}</div>
        </div>
    );
};

const Contact = ({ contactName, contactLink }) => {
    if (contactLink) {
        return (
            <div className={s.contact}>
                <a
                    className={s.contactName}
                    href={/^https?:\/\//.test(contactLink) ? contactLink : "https://" + contactLink}
                    target="blank"
                >
                    {contactName}
                </a>
            </div>
        );
    }
    return <Fragment></Fragment>;
};

export default ProfileInfo;
