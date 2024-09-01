document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/shows/1')
    .then(response => response.json())
    .then(show => {
      const showDetails = document.getElementById('show-details');
      const episodesHtml = show.episodes.map(episode => `
        <div>
          <h2>${episode.title}</h2>
          <video controls>
            <source src="${episode.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `).join('');

      showDetails.innerHTML = `
        <h1>${show.title}</h1>
        <p>${show.description}</p>
        ${episodesHtml}
      `;
    });
});
