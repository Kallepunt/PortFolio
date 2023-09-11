// wwwroot/downloadPdf.js

window.downloadPdf = function (pdfFileName) {
    fetch(pdfFileName)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = pdfFileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
};
