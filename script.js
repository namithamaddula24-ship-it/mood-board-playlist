function changeMood(mood) {
    const page = document.getElementById("page");
    const playlist = document.getElementById("playlist");

    page.className = mood;

    if(mood==="focus"){
        playlist.src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd";
    }

    if(mood==="chill"){
        playlist.src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6";
    }

    if(mood==="hype"){
        playlist.src="https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP";
    }

if(mood==="sad"){
    playlist.src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1";
}
}