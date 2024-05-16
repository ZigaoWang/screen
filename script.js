function updateScreenResolution() {
    const screenResolution = `Screen Resolution: ${window.innerWidth} x ${window.innerHeight}`;
    document.getElementById("screen-resolution").textContent = screenResolution;
}

updateScreenResolution(); // Initial call to update screen resolution

setInterval(updateScreenResolution, 100); // Call every 100ms