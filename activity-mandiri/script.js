function fn_ValForm() {
    var sMsg = "";

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Regular Expression untuk validasi email (sesuai hint soal)
    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    // Validasi nama
    if (name == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    // Validasi email kosong
    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } 
    // Validasi format email jika tidak kosong
    else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid (contoh: nama@domain.com)";
    }

    // Validasi pesan
    if (message == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    // Jika ada pesan error, tampilkan alert
    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    } else {
        return true;
    }
}
