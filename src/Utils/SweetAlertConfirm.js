import Swal from 'sweetalert2'

export const sweetAlertConfirm = async () => {
  const alerta = Swal.fire({
    title: 'Estas seguro?',
    text: 'Si lo borrás, no podrás recuperarlo',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!, Borrar!',
  })
  const response = await alerta
  if (response.isConfirmed) {
    Swal.fire('Eliminado!', 'Se eliminó correctamente', 'success')
  }
  return response.isConfirmed
}
