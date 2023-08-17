const displayButton = document.getElementById("displayButton");
const videoLinkInput = document.getElementById("videoLink");
const numberInput = document.getElementById("numberInput");
const videoContainer = document.getElementById("videoContainer");

displayButton.addEventListener("click", () => {
    const videoLink = videoLinkInput.value;
    const numberOfVideos = parseInt(numberInput.value);

    if (videoLink && numberOfVideos) {
        const embedUrls = generateEmbedUrls(videoLink, numberOfVideos);
        const iframes = createIframes(embedUrls);
        videoContainer.innerHTML = "";
        iframes.forEach(iframe => videoContainer.appendChild(iframe));
    }
});

function generateEmbedUrls(videoLink, count) {
    // Extract the YouTube video ID from the link
    const videoId = videoLink.match(/(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/embed\/|\/e\/|watch\?v=)([^#\&\?]*).*/)[1];

    const embedUrls = [];
    for (let i = 0; i < count; i++) {
        // Generate the embed URL with autoplay and quality set to small
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=small`;
        embedUrls.push(embedUrl);
    }
    return embedUrls;
}

function createIframes(urls) {
    const iframes = [];
    urls.forEach(url => {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.width = "413px"; // Width set to 413px
        iframe.height = "275px"; // Height set to 275px
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;
        iframe.setAttribute("allow", "autoplay");
        iframes.push(iframe);
    });
    return iframes;
}

document.addEventListener("DOMContentLoaded", function() {
    var portraitWarning = document.getElementById("portraitWarning");

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            portraitWarning.style.display = "block";
        } else {
            portraitWarning.style.display = "none";
        }
    }

    checkOrientation();

    window.addEventListener("resize", function() {
        checkOrientation();
    });
});



displayButton.addEventListener("click", () => {
    const videoLink = videoLinkInput.value;
    const numberOfVideos = parseInt(numberInput.value);

    if (videoLink && numberOfVideos) {
        const embedUrls = generateEmbedUrls(videoLink, numberOfVideos);
        const iframes = createIframes(embedUrls);
        videoContainer.innerHTML = "";
        iframes.forEach(iframe => videoContainer.appendChild(iframe));
    }
});

function generateEmbedUrls(videoLink, count) {
    const videoId = extractVideoId(videoLink);

    const embedUrls = [];
    for (let i = 0; i < count; i++) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=small`;
        embedUrls.push(embedUrl);
    }
    return embedUrls;
}

function extractVideoId(videoLink) {
    const videoIdMatch = videoLink.match(/shorts\/([A-Za-z0-9_-]+)\?/);
    return videoIdMatch ? videoIdMatch[1] : "";
}

function createIframes(urls) {
    const iframes = [];
    urls.forEach(url => {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.width = "275px";
        iframe.height = "413px";
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;
        iframe.setAttribute("allow", "autoplay");
        iframes.push(iframe);
    });
    return iframes;
}

