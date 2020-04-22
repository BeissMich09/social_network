import React from "react";
import style from "./Dialogues.module.css";
import PersonDialogue from "./PersonDialogue/PersonDialogue";
import PrivateDialogues from "./PrivateDialogues/PrivateDialogues";
import StoreContext from "../../StoreContext";

const Dialogues = () => {
  return (
    <StoreContext.Consumer>
      {(store) => (
        <div className={style.dialogues_content}>
          { console.log('store', store.getState().dialoguesPage.userArr)}
          <PersonDialogue userArr={store.getState().dialoguesPage.userArr} />
          <PrivateDialogues store={store} />
        </div>
      )}
    </StoreContext.Consumer>
  );
};

export default Dialogues;
