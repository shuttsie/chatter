(function play() {
    // Get playback URL from Amazon IVS API
    var PLAYBACK_URL = 'https://ca351d1575ab.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076005434014.channel.bQ1l9LwPytZA.m3u8';
    
    // Register Amazon IVS as playback technology for Video.js
    registerIVSTech(videojs);

    // Initialize player
    var player = videojs('amazon-ivs-videojs', {
        techOrder: ["AmazonIVS"]
    }, () => {
        console.log('Player is ready to use!');
        // Play stream
        player.src(PLAYBACK_URL);
        player.setAutoplay(true);
        player.setVolume(1);
        player.muted(false);
    });

})();