var audio = new Audio();

var track = {
    'preview_url': "http://a1102.phobos.apple.com/us/r1000/110/Music/v4/cb/23/cb/cb23cbe9-14cb-74bf-45f6-a94e7c96504c/mzaf_6572474967862687961.aac.m4a",
    'id': "123",
}

function playForTrack(track_to_play) {
    audio.setAttribute('src', track_to_play.preview_url);
    audio.load();
    audio.play();
}

window.Player = {
    playForTrack: playForTrack,
};

function _playTrack(track) {
    Player.playForTrack(track);
}

var samplePlaying = 0;

d3.selectAll(".song-sample").on("click", function (d) {
    var id = d3.select(this).attr("id");
    if (id == "start_song") {
        track.preview_url = "https://p.scdn.co/mp3-preview/b1800143e922d306b4e44e6be8357b1afcb4d8e2?cid=774b29d4f13844c495f206cafdad9c86";
    }
    else if (id == "no-diggity") {
        track.preview_url = "http://a1102.phobos.apple.com/us/r1000/110/Music/v4/cb/23/cb/cb23cbe9-14cb-74bf-45f6-a94e7c96504c/mzaf_6572474967862687961.aac.m4a";
    }
    if (samplePlaying == 0) {
        samplePlaying = 1;
        document.getElementById(id).style.fill = "#191843";
        _playTrack(track);
    } else {
        samplePlaying = 0;
        audio.pause();
        document.getElementById(id).style.fill = "#666";
    }
});