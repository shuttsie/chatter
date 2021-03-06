import React, {useEffect, useRef} from 'react';


function StreamPlayer(options) {
    const divEl = useRef(null);
    const videoEl = useRef(null);

    useEffect(() => {

            const script = document.createElement('script');

            script.src = 'https://player.live-video.net/1.0.0/amazon-ivs-player.min.js';
            script.async = true;

            document.body.appendChild(script);

            script.onload = () => {
                // eslint-disable-next-line no-undef
                if (IVSPlayer.isPlayerSupported) {
                    // eslint-disable-next-line no-undef
                    const player = IVSPlayer.create();
                    player.attachHTMLVideoElement(document.getElementById('video-player'));
                    player.load("https://ca351d1575ab.us-east-1.playback.live-video.net/api/video/v1/us-east-1.076005434014.channel.bQ1l9LwPytZA.m3u8");
                    player.play();
                }
            }

            return () => {
                document.body.removeChild(script);
            }

        },
        []
    )

    return (
        <div ref={divEl}>
            <video
                id="video-player"
                ref={videoEl}
                playsInline
                autoPlay
                height={300}
                controls
            />
        </div>
    );
}

export default StreamPlayer;
