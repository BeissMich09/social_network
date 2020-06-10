import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogues);
