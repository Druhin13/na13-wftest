$("#download-link").click(function () {
    var img = document.getElementById("img-to-download");
    var url = img.src;
    
    // Get the desired filename from the element with ID "img-name"
    var filename = document.getElementById("img-name").textContent;
    
    // Fetch the image as a blob
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        // Create a blob URL for the image
        var blobUrl = URL.createObjectURL(blob);
        
        // Create a hidden anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = blobUrl;
        
        // Set the filename based on the content of the "img-name" element
        downloadLink.download = filename + '.png'; // Add the file extension
        
        // Trigger a click event on the anchor element
        downloadLink.click();
        
        // Clean up by revoking the blob URL
        URL.revokeObjectURL(blobUrl);
    })
    .catch(error => {
        console.error('Error fetching the image:', error);
    });
});
