let target = 0;
let current = 0;
let ease = 0.075;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");

let maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
    const partWidth = markerMaxMove / 17;
    let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
    currentPart = Math.min(17, currentPart);
    activeSlide.textContent = `${currentPart}/17`;
}

function update() {
    // Ensure maxScroll is recalculated for responsive layouts
    maxScroll = sliderWrapper.offsetWidth - window.innerWidth;

    current = lerp(current, target, ease);
    gsap.set(".slider-wrapper", {
        x: -current,
    });

    let moveRatio = current / maxScroll;
    let markerMaxMove = window.innerWidth - markerWrapper.offsetWidth - 170;
    let markerMove = 70 + moveRatio * markerMaxMove;

    gsap.set(".marker-wrapper", {
        x: markerMove,
    });

    updateActiveSliderNumber(markerMove, markerMaxMove);

    requestAnimationFrame(update);
}

// Debounced resize event to limit calls
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        maxScroll = sliderWrapper.offsetWidth - window.innerWidth;
    }, 100);
});

window.addEventListener("wheel", (e) => {
    target += e.deltaY;

    target = Math.max(0, target);
    target = Math.min(maxScroll, target);
});

update();

//---------------- download button-----------------------------

function createAndDownloadZip() {
    var zip = new JSZip(); // Initialize a new ZIP file

    // List of image URLs and filenames
    var images = [
        {url: 'photos/1.jpg', filename: 'image1.jpg'},
        {url: 'photos/2.jpg', filename: 'image2.jpg'},
        {url: 'photos/3.jpg', filename: 'image3.jpg'},
        {url: 'photos/4.jpg', filename: 'image4.jpg'},
        {url: 'photos/5.jpg', filename: 'image5.jpg'},
        {url: 'photos/6.jpg', filename: 'image6.jpg'},
        {url: 'photos/7.jpg', filename: 'image7.jpg'},
        {url: 'photos/8.jpg', filename: 'image8.jpg'},
        {url: 'photos/9.jpg', filename: 'image9.jpg'},
        {url: 'photos/10.jpg', filename: 'image12.jpg'},
        {url: 'photos/11.jpg', filename: 'image11.jpg'},
        {url: 'photos/12.jpg', filename: 'image13.jpg'},
        {url: 'photos/13.jpg', filename: 'image14.jpg'},
        {url: 'photos/14.jpg', filename: 'image34.jpg'},
        {url: 'photos/15.jpg', filename: 'image3465.jpg'},
        {url: 'photos/16.jpg', filename: 'image3768.jpg'},
        {url: 'photos/17.jpg', filename: 'image3678.jpg'},
        {url: 'photos/IMG_4.JPEG', filename: 'image3456.jpg'},
        {url: 'photos/mask.JPG', filename: 'image334.jpg'},
        {url: 'photos/noil.jpg', filename: 'image323.jpg'},
        {url: 'photos/sur.jpg', filename: 'image321.jpg'},
        {url: 'photos/toli.jpg', filename: 'image312.jpg'},
        {url: 'photos/train.jpg', filename: 'image1234.jpg'},
        {url: 'photos/tsagaan.jpg', filename: 'image398765.jpg'}
    ];

    // Create an array of promises for fetching the images
    var promises = images.map(function(image) {
        return fetch(image.url)
            .then(response => response.blob()) // Convert image to Blob
            .then(blob => {
                zip.file(image.filename, blob); // Add image to ZIP file
            });
    });

    // Wait for all images to be added, then generate and download the ZIP file
    Promise.all(promises).then(function() {
        zip.generateAsync({ type: "blob" })
            .then(function(content) {
                // Create a link to download the ZIP file
                var link = document.createElement("a");
                link.href = URL.createObjectURL(content);
                link.download = "images.zip"; // Name of the downloaded ZIP file
                link.click(); // Simulate a click to start download
            });
    }).catch(function(error) {
        console.error("Error creating ZIP:", error);
    });
}





/*--------------------------------SNOW----------------------------------------*/
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '•';
    snowflake.style.fontSize = Math.random() * 24 + 10 + 'px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animation = `fall ${Math.random() * 4 + 4}s linear infinite, sideWays ${Math.random() * 2 + 1}s ease-in-out infinite`;
  
    document.body.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, Math.random() * 4000 + 4000);
  }
  
  document.styleSheets[0].insertRule('@keyframes fall { 0% { top: -50px; } 100% { top: 100vh; } }', document.styleSheets[0].cssRules.length);
  document.styleSheets[0].insertRule('@keyframes sideWays { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(20px); } }', document.styleSheets[0].cssRules.length);
  
  setInterval(createSnowflake, 200);