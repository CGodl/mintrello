import { OPEN_MODAL, CLOSE_MODAL } from "../modal/modal_actions";

const modalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;