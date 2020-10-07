const fake_file_input = document.getElementById("fake-file-input");
const file_input = document.getElementById("file-input");
const upload_btn = document.getElementById("upload-btn");

fake_file_input.onclick = function() {
    file_input.click();
};

file_input.addEventListener("change", function() {
    if(file_input.value === "") {
        upload_btn.disabled = true;
        fake_file_input.value = "Select image";
    } else {
        upload_btn.disabled = false;
        var value = file_input.value.replace(/.*[\/\\]/, '');
        fake_file_input.value = value;
    }
});