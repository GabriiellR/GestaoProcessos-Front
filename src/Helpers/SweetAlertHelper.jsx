import Swal from 'sweetalert2'

export default ((props) => {

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: props.timer ? props.timer : 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        didClose: props.callback
    });
    
    Toast.fire({
        icon: props.type,
        title: props.message
    });
});