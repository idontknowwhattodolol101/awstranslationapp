document.getElementById('uploadButton').addEventListener('click', async function () {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://k0janojivf.execute-api.eu-west-2.amazonaws.com/prod/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Upload successful:', data);
            alert('File uploaded successfully!');
        } else {
            throw new Error('Upload failed: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error during upload:', error);
        alert('Error during upload: ' + error.message);
    }
});
