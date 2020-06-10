import Dialogues from "./Dialogues";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialoguesPage: state.dialoguesPage,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogues);

const DialoguesContainer = connect(mapStateToProps)(AuthRedirectComponent);
export default DialoguesContainer;
