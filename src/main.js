let element = document.querySelector("#map");
html2canvas(document).then(function(canvas) {
    // Convert the canvas to blob
    canvas.toBlob(function(blob) {
        // To download directly on browser default 'downloads' location
        let link = document.createElement("a");
        link.download = "image.png";
        link.href = URL.createObjectURL(blob);
        link.click();

        // To save manually somewhere in file explorer
        window.saveAs(blob, 'image.png');
    }, 'image/png');
});

console.log('working')