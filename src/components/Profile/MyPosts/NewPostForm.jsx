import React from "react";
import { Field, reduxForm } from "redux-form";
import classProfile from "./MyPosts.module.css";
import {
  requiredField,
  maxLengthCretor,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCretor(30);

let NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classProfile.add_news}>
      <Field
        validate={[requiredField, maxLength30]}
        name="newPost"
        component={Textarea}
        placeholder="Your news"
      />
      <button>Send</button>
    </form>
  );
};
export default reduxForm({ form: "post" })(NewPostForm);
