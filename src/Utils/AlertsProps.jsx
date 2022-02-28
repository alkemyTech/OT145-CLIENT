import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Modal = withReactContent(Swal);
const showModal = (props) => {
  return Modal.fire({
    ...props,
    showCloseButton: true,
    
  });
};

export default showModal;
