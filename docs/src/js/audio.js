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
    else if (id == "skanye_power") {
        track.preview_url = "https://p.scdn.co/mp3-preview/23771e17f5cc8853beee8ffee1ddc99fdefbcfa1?cid=774b29d4f13844c495f206cafdad9c86"
    } else if (id == "s2U") {
        track.preview_url = "https://p.scdn.co/mp3-preview/6d749b3d75cc52cbd1d772b2b32ad679b0a9d920?cid=774b29d4f13844c495f206cafdad9c86"
    } else if (id == "staylor") {
        track.preview_url = "https://p.scdn.co/mp3-preview/2ea7fb59e886000cb667badd251d06f204ad43f8?cid=774b29d4f13844c495f206cafdad9c86"
    } else if (id == "sp!nk") {
        track.preview_url = "https://p.scdn.co/mp3-preview/ce522f1be90be4ce1912be70c10e7f1814f05828?cid=774b29d4f13844c495f206cafdad9c86"
    } else if (id == "sdrake") {
        track.preview_url = "https://p.scdn.co/mp3-preview/997cd19a9e46b086516c57114a4ba6da5b078d91?cid=774b29d4f13844c495f206cafdad9c86"
    } else if (id == "soned") {
        track.preview_url = "https://p.scdn.co/mp3-preview/1bf9b17fe9b6cdd5216ef8e595ef89a5aa340bbb?cid=774b29d4f13844c495f206cafdad9c86"
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