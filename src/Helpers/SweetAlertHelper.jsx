import Swal from 'sweetalert2'

export const Toast = (type, message, callback) =>{

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        didClose: callback
    });
    
    Toast.fire({
        icon: type,
        title: message
    });
}