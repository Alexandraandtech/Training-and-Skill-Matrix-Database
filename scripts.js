document.getElementById('profilePicture').addEventListener('change', function(event) {
    const preview = document.getElementById('profilePicturePreview');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
 });
 
 