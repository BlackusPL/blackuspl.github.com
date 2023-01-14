if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}

// START Create playlists

let nightcore = [{
    "metaData": {
        "artist": "Nightcore",
        "title": "Day after day"
    },
    "url": "./local_music/Nightcore_-_Day_after_day.m4a"
}, {
    "metaData": {
        "artist": "Nightcore Lab NCL",
        "title": "Die Young"
    },
    "url": "./local_music/Nightcore - Die Young.m4a"
},
{
    "metaData": {
        "artist": "NightcoreLounge",
        "title": "How Do You Do (Remix)"
    },
    "url": "./local_music/How do you do.m4a"
}];

let coubsong = [{
    metaData: {
        artist: "Coub / C152",
        title: "Back in Time"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/326e1433e1a/4b2f58f6a3fd0f9408fcb/1672467562_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub",
        title: "Clean Flow"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/b42138495a3/39719a4de577c92b69012/1605700433_high_1576103466_high.mp3"
},
{
    metaData: {
        artist: "Coub",
        title: "Chika Dance (Remix)"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_med/58f13a65dd9/63748420a128bed838c91/1605681684_med_1593801249_med.mp3"
},
{
    metaData: {
        artist: "Coub",
        title: "ᗪᕮᗩᗪ IᑎSIᗪᕮ"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/45d42a28406/9eb953b2790c82a40ea68/1668781698_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub / TRVNSPORTER",
        title: "Gimme Gimme Gimme"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/dd3704a9709/ab421f7a8f884a4d64ac8/1668471951_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub / Korenburg",
        title: "I'm Good (BeyBo Remix)"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/a25baa9fe35/f86091bea2dbb2bff8f80/1670458382_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub / ucaromantic",
        title: "Polozhenie (slowed + reverb)"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4d0bc7a581b/e88e7d8f2b558f8a4029e/1636476662_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub",
        title: "Timberlake"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/887b0aeddcc/ce72175c69ff0aac305da/1630299817_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub / CYPARISS",
        title: "TWXSIDES"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/ff24745721d/4951e9a72f86141dda57e/1668825480_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub | BLESSED MANE",
        title: "Youth"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/27982a5a95b/388d71bd77c31fc1e08ac/1609800684_mp3-high.mp3"
},
{
    metaData: {
        artist: "Coub / DJ Baddmixx",
        title: "Ziyad's 9Min WarmUp 128Bpm"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/4e8ed359cb8/4e28eef57d8c523b22d87/1605668806_high_1548410069_high.mp3"
}
];
let othersong = [
{
    metaData: {
        artist: "Amøn",
        title: "Forward Anxious"
    },
    url: "./local_music/Amøn - Forward Anxious.m4a"/*,
    duration: 260 */
},
{
    metaData: {
         artist: "CryJaxx",
         title: "Lollipop (feat. Justtjokay)"
     },
     url: "./local_music/CryJaxx - Lollipop (feat. Justtjokay).m4a"
},
{
    metaData: {
        artist: "DVRST",
        title: "You remember it"
    },
    url: "./local_music/DVRST - You remember it.ogg",
},{
    metaData: {
        artist: "g3ox_em",
        title: "GigaChad Theme (Phonk House Version)"
    },
    url: "https://blackuspl.discowd.com/r/g3ox_em_-_GigaChad_Theme_(Phonk_House_Version).mp3"
},
{
    metaData: {
        artist: "IceSenpai",
        title: "stereo love (tiktok version)"
    },
    url: "./local_music/stereo love (tiktok version).m4a"
},
{
    metaData: {
        artist: "Kim & Antent",
        title: "Never Be"
    },
    url: "./local_music/kim & Antent - Never Be.m4a",
},
{
    metaData: {
        artist: "MFS",
        title: "BOW"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/2fefab69050/38ab995fc3f63e1979f2f/1665704735_mp3-high.mp3"
},
{
    metaData: {
        artist: "Ryu",
        title: "Din Don Dan"
    },
    url: "./local_music/Din_Don_Dan.mp3"
},
{
    metaData: {
        artist: "Sergio Valentino",
        title: "Drive Forever (xakavir Remix)"
    },
    url: "./local_music/Sergio Valentino - Drive Forever (xakavir Remix).m4a"
},
{
    metaData: {
        artist: "Skan Kai",
        title: "See You Again"
    },
    url: "https://blackuspl.discowd.com/r/Skan_-_See_You_Again.mp3"
},
{
    metaData: {
        artist: "Skan",
        title: "Running To You (feat. Drama B)"
    },
    url: "https://coub-attachments-2.akamaized.net/coub_storage/coub/simple/cw_looped_audio_high/5277645807e/aab9f1a2d5dd0182dd81b/1659708702_mp3-high.mp3"
},
{
    metaData: {
        artist: "Skeler",
        title: "ID"
    },
    url: "./local_music/Skeler_-_ID.mp3"
},
{
    metaData: {
        artist: "Tanir & Tyomcha",
        title: "Da Da Da (Slowed Version)"
    },
    url: "./local_music/Dadada (Slowed version).mp3"
}];
// END Create playlists
let allTracks = othersong.concat(coubsong, nightcore);

const webamp = new Webamp({
    initialTracks: (allTracks /*,[
        othersong[0],
        coubsong[9],
        coubsong[0],
        othersong[11],
        coubsong[1],
        coubsong[2],
        othersong[1],
        othersong[2],
        othersong[3],
        othersong[10],
        othersong[4],
        othersong[5],
        othersong[6],
        othersong[7],
        othersong[8],
        othersong[9],
        coubsong[3],
        coubsong[4],
        coubsong[5],
        coubsong[6],
        coubsong[7],
        coubsong[8],
        othersong[12],
        nightcore[0],
        nightcore[1],
        nightcore[2]
    ]*/),
    /*initialSkin: {
        url: "./yuzuki_kokubunji.wsz"
    },*/
    availableSkins: [
        { url: "./anime_amp_2.wsz", name: "Anime Webamp V2" },
        { url: "./yuzuki_kokubunji.wsz", name: "Yuzuki Kokubunji skin" }
      ],
      filePickers: [{
        // The name that will appear in the context menu.
        contextMenuName: "RMF MAXXX Śląsk...",
        // A function which returns a Promise that resolves to
        // an array of `track`s (see above)
        filePicker: () => Promise.resolve([{
            metaData: {
                 title: "RMF MAXXX Śląsk"
             },
             url: "https://rs7-krk2.rmfstream.pl/rmf_maxxx"
             // url: "http://217.74.72.6/rmf_maxxx_slk"
         }])
    }
    ],
    __butterchurnOptions: {
        importButterchurn: () => Promise.resolve(window.butterchurn),
        getPresets: () => {
            const presets = window.butterchurnPresets.getPresets();
            return Object.keys(presets).map((name) => {
                return {
                    name,
                    butterchurnPresetObject: presets[name]
                };
            });
        },
        butterchurnOpen: true
    },
    __initialWindowLayout: {
        main: { position: { x: 0, y: 0 } },
        equalizer: { position: { x: 0, y: 116 } },
        playlist: { position: { x: 0, y: 232 }, size: [0, 1] },
        milkdrop: { position: { x: 275, y: 0 }, size: [0, 9] }
    },
});
webamp.renderWhenReady(document.getElementById("app"));

function changeFunc() {
    var playlists = document.getElementById("playlists");
    var selectedValue = playlists.options[playlists.selectedIndex].value;
if (selectedValue == 'nightcore')
{
    webamp.setTracksToPlay(nightcore, []);
};
if (selectedValue == 'all')
{
    webamp.setTracksToPlay(allTracks ,[]);
};
// START Create single array // that contain coubsong array and othersong with number 6
var allcoub = coubsong.concat([othersong[6]]);
// END Create single array //
if (selectedValue == 'coub')
{
    webamp.setTracksToPlay(allcoub ,[]);
}
if (selectedValue == 'phonk')
{
    webamp.setTracksToPlay([
        othersong[0],
        coubsong[0],
        coubsong[9],
        coubsong[3],
        coubsong[1],
        coubsong[8],
        othersong[2],
        othersong[3],
        othersong[5],
        othersong[6],
        othersong[11],
        coubsong[4]
])
}
};

// START set Background with url // if CustomBG have value then set value to input
if (localStorage.getItem('CustomBG') != null) document.getElementById('imagebgurl').value = `${localStorage.CustomBG}`;
// when click Save & Load then create object named CustomBG with url to background and set new background from CustomBG
document.getElementById('saveload').addEventListener('click', function () {
    var BG = document.getElementById('imagebgurl').value;
    localStorage.setItem('CustomBG',BG);
// when input has spaces or = null then removes object named CustomBG and set default background, if doesnt includes spaces or != null then set background from CustomBG
    if (localStorage.getItem('CustomBG').includes(' ') || localStorage.getItem('CustomBG') == '') {localStorage.removeItem('CustomBG'); document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;} 
    else {getID('videobg').src = `${localStorage.CustomBG}`;document.body.style.backgroundImage = `url(${localStorage.CustomBG})`;};
});
// END set Background with url //

// code by Byushee#5808
const image_input = document.querySelector("#custombg");
var uploaded_image;

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
// when somehow uploaded file is video then send alert to you that you cant do that, if is image then set as background
        if (!image_input.files[0].type.startsWith('image/')) {alert('This is not a image file! If you want background as video use URL option')} else {
        uploaded_image = reader.result;
// check if converted to Base64 uploaded_image have less than 10 MB
//        if (uploaded_image.length > 10 * 1024 * 1024) {
//            alert('File is too large!');
//          } else {
        document.body.style.backgroundImage = `url(${uploaded_image})`;
        document.body.style.backgroundBlendMode = 'unset';
// saving uploaded image to object CustomBG
        localStorage.setItem('CustomBG', `${uploaded_image}`);
    }});
    reader.readAsDataURL(this.files[0]);
});

const image_output = document.querySelector("#reset");

image_output.addEventListener('click', function () {
        document.body.style.backgroundImage = `url(https://i.ytimg.com/vi/X10UD5nQDCs/maxresdefault.jpg)`;
        document.body.style.backgroundBlendMode = 'overlay';
        // START my code
        localStorage.removeItem('CustomBG');
        document.getElementById('imagebgurl').value = '';
        getID('videobg').src = '';
        // END my code
    });
console.log("%c[Main] %c(v05012023) %cSuccesfully Loaded","color: purple","color: gray; font-size: 75%","color: white");
//
// document.getElementById("tab").innerHTML = '<!--The tab to move in the website-->\ ';