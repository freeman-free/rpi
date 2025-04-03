document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-gallery img');
    const videoFrame = document.getElementById('video-frame');
    const movieDescription = document.getElementById('movie-description');
    const movieTitle = document.getElementById('movie-title');

    images.forEach(image => {
        image.addEventListener('click', onImageClick);
        image.addEventListener('touchstart', onImageClick);

        function onImageClick(event) {
            event.preventDefault(); 

            const videoURL = image.getAttribute('data-video');
            const description = image.getAttribute('data-description');
            const title = image.getAttribute('data-title');
            
            videoFrame.src = videoURL;
            movieDescription.textContent = description;
            movieTitle.textContent = title;
        }
    });
});
