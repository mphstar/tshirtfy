import Swal from "sweetalert2";

const ConfirmDialog = ({ onConfirm = () => {} }) => {
    Swal.fire({
        title: "Konfirmasi",
        text: "Apakah anda yakin ingin menyimpan data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
    }).then((result) => {
        if (result.isConfirmed) {
            onConfirm();
        }
    });
};

export default ConfirmDialog;
