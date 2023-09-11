window.downloadFile = function(fileName, dataUrl) {
	var anchor = document.createElement("a");
	anchor.href = dataUrl;
	anchor.download = fileName;
	anchor.style.display = "none";
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
};