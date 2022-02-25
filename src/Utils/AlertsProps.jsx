import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Modal = withReactContent(Swal);
const showModal = (props) => {
  //Recibe props para cambiar el tipo de alerta que deben ser pasados al ser llamado
  /*
        Ejemplo
        Modal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    */
  return Modal.fire({
    ...props,
    showCloseButton: true,
  });
};

export default showModal;
