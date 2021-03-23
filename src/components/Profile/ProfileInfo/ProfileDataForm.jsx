import React from "react";
import { createField, Input } from "../../common/FormsControls/FormsControls";
// import workLogo from "../../../assets/img/work_icon.svg";
// import searchWorkLogo from "../../../assets/img/no_work_icon.svg";
import { reduxForm } from "redux-form";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button>Сохранить изменения</button>

      {props.error && <div>{props.error}</div>}
      <h3>Information</h3>

      <div>Full Name: {createField("Full Name", "fullName", [], Input)}</div>
      <div>
        Job:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        My professional skills:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Input
        )}
      </div>
      <div>About Me: {createField("About Me", "aboutMe", [], Input)}</div>

      <div>
        Contacts:{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key} className="contact">
              {key}: {createField(key, "contacts." + key, [], Input)}
            </div>
          );
        })}
      </div>
      <div>Status: {props.status}</div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataReduxForm;
