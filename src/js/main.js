
// Import our custom CSS
import '../scss/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { lyricsData } from './lyricsData.js'

// Sample Music Data - Bollywood/Hindi Collection
const tracks = [
    // Latest Song (20 Tracks)
    ...[
        { img: "1000853338.png", file: "Ghar_Kab_Aaoge.m4a", title: "Ghar Kab Aaoge (Border 2)", artist: "Sonu Nigam, Roop Kumar Rathod, Arijit Singh", year: "2025" },
        { img: "1000853343.png", file: "Teri_Yaad_Mein.m4a", title: "Teri Yaad Mein", artist: "Sagar Bairagi", year: "2026" },
        { img: "1000853348.png", file: "Kismat_Ki_Chaabi.m4a", title: "Kismat Ki Chaabi", artist: "Raja Kumari, Abhinav Shekhar", year: "2025" },
        { img: "1000853349.jpg", file: "Ishq_Matlabi_B_Praak_New_Punjabi_Song_2026.m4a", title: "Ishq Matalabi", artist: "B Praak", year: "2026" },
        { img: "1000853356.png", file: "Har_Subha.m4a", title: "Har Subha Har Shaam", artist: "Ranveer Singh, Sara Ali Khan", year: "2026" },
        { img: "1000853361.png", file: "Tujhe_Soch_Kar.m4a", title: "Tujhe Soch Kar", artist: "Sagar Bairagi", year: "2025" },
        { img: "1000853432.png", file: "Jitni_Dafa.m4a", title: "Jitni Dafa Dekhta Hoon", artist: "Bollywood Romantic", year: "2024" },
        { img: "1000853366.png", file: "Dil_Lagana_Mana.m4a", title: "Dil Lagana Mana Tha", artist: "Krish, Kishore Mondal", year: "2025" },
        { img: "1000853417.png", file: "Adhoori_Khawahis.m4a", title: "Adhoori Khawahis", artist: "Aarzoo Khaan", year: "2026" },
        { img: "1000853442.png", file: "Kya_Bataun_Tujhe.m4a", title: "Kya Bataun Tujhe", artist: "Vishal Mishra", year: "2025" },
        { img: "1000853402.png", file: "Maatrubhumi.m4a", title: "Maatrubhumi", artist: "Arijit Singh, Shreya Ghoshal", year: "2024" },
        { img: "1000853427.png", file: "Dil_Ne_Maana.m4a", title: "Dil Ne Maana", artist: "Shahid Kapoor", year: "2025" },
        { img: "1000853375.png", file: "Chandni_Raatein.m4a", title: "Chandni Rate Teri Bathe", artist: "Shahid Kapoor, Triptii Dimri", year: "2024" },
        { img: "1000853447.png", file: "Jhoom_Sharaabi.m4a", title: "Jhoom Sharaabi", artist: "Yo Yo Honey Singh", year: "2025" },
        { img: "1000853412.png", file: "Mohabbat.m4a", title: "Mohabbat", artist: "B Praak", year: "2024" },
        { img: "1000853457.png", file: "Nache_Nache.m4a", title: "Nache Nache", artist: "Thaman S", year: "2026" },
        { img: "1000853452.png", file: "O_Romeo.m4a", title: "O Romeo", artist: "Vishal Bhardwaj", year: "2025" },
        { img: "1000853407.png", file: "Ruperi_Valut.m4a", title: "Ruperi Valut", artist: "Abhijeet Sawant", year: "2024" },
        { img: "1000853671.png", file: "Shararat.m4a", title: "Shararat", artist: "Shashwat Sachdev", year: "2026" },
        { img: "1000853371.png", file: "Tere_Dil_Mein.m4a", title: "Tere Dil Mein", artist: "Rito Riba", year: "2025" }
    ].map((track, i) => ({
        id: `latest-${i + 1}`,
        category: 'latest',
        title: track.title,
        artist: track.artist,
        year: track.year || '2026',
        src: `./poster/latest_songs/${track.file}`,
        cover: `/latest/${track.img}`
    })),
    // 90's Songs (20 Tracks)
    ...[
        { img: "1000853320.png", file: "Sandese_Aate_Hain.m4a", title: "Sandese Aate Hain", artist: "Sonu Nigam, Roop Kumar Rathod", year: "1999" },
        { img: "1000853029.png", file: "Aakhir_Tumhein_Aana_Hai.m4a", title: "Aakhir Tumhein Aana Hai", artist: "Udit Narayan, Sapna Mukherjee", year: "1992" },
        { img: "1000853310.png", file: "Aaye_Ho_Meri_Zindagi.m4a", title: "Aaye Ho Meri Zindagi Mein", artist: "Udit Narayan", year: "1996" },
        { img: "1000853024.png", file: "Barsaat_Ke_Mausam_Mein.m4a", title: "Barsaat Ke Mausam Mein", artist: "Kumar Sanu, Roop Kumar Rathod", year: "1995" },
        { img: "1000853005.png", file: "Chaiyya_Chaiyya.m4a", title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", year: "1998" },
        { img: "1000853296.png", file: "Dil_Jane_Jigar.m4a", title: "Dil Jane Jigar Tujhpe", artist: "Kumar Sanu, Alka Yagnik", year: "1996" },
        { img: "1000853315.png", file: "Dil_Ne_Yeh_Kaha_Hain.m4a", title: "Dil Ne Yeh Kaha Hain Dil Se", artist: "Udit Narayan, Alka Yagnik", year: "2000" },
        { img: "1000853009.png", file: "Do_Dil_Mil_Rahe_Hain.m4a", title: "Do Dil Mil Rahe Hain", artist: "Kumar Sanu", year: "1997" },
        { img: "1000853324.png", file: "Jhanjhariya.m4a", title: "Jhanjhariya", artist: "Abhijeet Bhattacharya", year: "1996" },
        { img: "1000853038.png", file: "Khal_Nayak_Hoon_Main.m4a", title: "Khal Nayak Hoon Main", artist: "Vinod Rathod, Kavita Krishnamurthy", year: "1993" },
        { img: "1000853001.png", file: "Mera_Dil_Bhi_Kitna_Pagal_Hai.m4a", title: "Mera Dil Bhi Kitna Pagal Hai", artist: "Kumar Sanu, Alka Yagnik", year: "1991" },
        { img: "1000853043.png", file: "Kya_Mausam_Aaya_Hai.m4a", title: "Kya Mausam Aaya Hai", artist: "Udit Narayan, Sadhana Sargam", year: "1993" },
        { img: "1000853019.png", file: "Lal_Lal_Hoton_Pe.m4a", title: "Lal Lal Hoton Pe", artist: "Kumar Sanu, Alka Yagnik", year: "1995" },
        { img: "1000853033.png", file: "Love_Tujhe_Love_Main.m4a", title: "Love Tujhe Love Main", artist: "Kumar Sanu, Alka Yagnik", year: "1995" },
        { img: "1000853305.png", file: "Paas_Woh_Aane_Lage.m4a", title: "Paas Woh Aane Lage", artist: "Kumar Sanu, Alka Yagnik", year: "1994" },
        { img: "1000853291.png", file: "Saaton_Janam_Main_Tere.m4a", title: "Saaton Janam Main Tere", artist: "Kumar Sanu, Alka Yagnik", year: "1994" },
        { img: "1000853014.png", file: "Sochenge_Tumhe_Pyar.m4a", title: "Sochenge Tumhe Pyar", artist: "Kumar Sanu", year: "1993" },
        { img: "1000853300.png", file: "Teri_Chunnariya.m4a", title: "Teri Chunnariya", artist: "Kumar Sanu, Alka Yagnik", year: "1999" },
        { img: "1000853333.png", file: "Yeh_Jo_Teri_Payalon.m4a", title: "Yeh Jo Teri Payalon Ki", artist: "Abhijeet Bhattacharya, Sadhana Sargam", year: "1996" },
        { img: "1000853329.png", file: "Aankhon_Mein_Base_Ho_Tum.m4a", title: "Aankhon Mein Base Ho Tum", artist: "Kumar Sanu, Alka Yagnik", year: "1995" }
    ].map((track, i) => ({
        id: `ninety-${i + 1}`,
        category: 'ninety',
        title: track.title,
        artist: track.artist,
        year: track.year || '1997',
        src: `./poster/90s_songs/${track.file}`,
        cover: `/90s/${track.img}`
    })),
    // Hindi Bollywood Songs (20 Tracks)
    ...[
        { file: "Pyar_Ki_Pungi.m4a", title: "Pyar Ki Pungi", artist: "Pritam, Mika Singh", cover: "agent_vinid.jpg", year: "2012" },
        { file: "Chalti_Hai_Kya.m4a", title: "Chalti Hai Kya 9 Se 12", artist: "Dev Negi, Neha Kakkar", cover: "judwa_2.jpg", year: "2017" },
        { file: "Char_Baj_Gaye.m4a", title: "Char Baj Gaye", artist: "Hard Kaur", cover: "char_baj_gaye.jpg", year: "2011" },
        { file: "Character_Dheela.m4a", title: "Character Dheela", artist: "Neeraj Shridhar", cover: "ready.jpg", year: "2011" },
        { file: "Yaar_Naa_Miley.m4a", title: "Yaar Naa Miley", artist: "Yo Yo Honey Singh", cover: "kick.jpg", year: "2014" },
        { file: "Dilliwali_Girlfriend.m4a", title: "Dilliwali Girlfriend", artist: "Arijit Singh, Sunidhi Chauhan", cover: "dilliwali.jpg", year: "2013" },
        { file: "Aata_Majhi_Satakli.m4a", title: "Aata Majhi Satakli", artist: "Yo Yo Honey Singh", cover: "singham_return.jpg", year: "2014" },
        { file: "Faltu_Title_Track.m4a", title: "F.A.L.T.U Title Track", artist: "Mika Singh", cover: "faltu.jpg", year: "2011" },
        { file: "Fugly_Kya_Hai.m4a", title: "Fugly Fugly Kya Hai", artist: "Yo Yo Honey Singh", cover: "fugly.jpg", year: "2014" },
        { file: "Mauja_Hi_Mauja.m4a", title: "Mauja Hi Mauja", artist: "Mika Singh", cover: "mauja_ji_mauja.jpg", year: "2007" },
        { file: "Gandi_Baat.m4a", title: "Gandi Baat", artist: "Mika Singh, Kalpana Patowary", cover: "gandi_baat.jpg", year: "2013" },
        { file: "Gehra_Hua.m4a", title: "Gehra Hua", artist: "Arijit Singh", cover: "hehra_hua.jpg", year: "2024" },
        { file: "Lonely_Song.m4a", title: "Lonely Song", artist: "Himesh Reshammiya, Yo Yo Honey Singh", cover: "lonely.jpg", year: "2012" },
        { file: "Shanivaar_Raati.m4a", title: "Shanivaar Raati", artist: "Arijit Singh", cover: "shanivar_rati.jpg", year: "2014" },
        { file: "Mast_Kalandar.m4a", title: "Mast Kalandar", artist: "Sajid-Wajid", cover: "heyy_baby.jpg", year: "2007" },
        { file: "O_Bedardeya.m4a", title: "O Bedardeya", artist: "Arijit Singh", cover: "o_bedardiya.jpg", year: "2023" },
        { file: "Paisa_Paisa.m4a", title: "Paisa Paisa", artist: "RDB", cover: "de_dana_dan.jpg", year: "2009" },
        { file: "Phir_Se_Ud_Chala.m4a", title: "Phir Se Ud Chala", artist: "Mohit Chauhan", cover: "phir_se_ud_chala.jpg", year: "2011" },
        { file: "Raja_Rani.m4a", title: "Raja Rani", artist: "Yo Yo Honey Singh", cover: "son_of_sardar.jpg", year: "2012" },
        { file: "Selfie_Le_Le_Re.m4a", title: "Selfie Le Le Re", artist: "Vishal Dadlani", cover: "selfie.jpg", year: "2015" }
    ].map((track, i) => ({
        id: `bollywood-${i + 1}`,
        category: 'bollywood',
        title: track.title,
        artist: track.artist,
        year: track.year || '2024',
        src: `./poster/bollywood_hindi_song/${track.file}`,
        cover: `/bollywood_hindi_songs/${track.cover}`
    })),
    // Marathi Songs (20 Tracks)
    ...[
        { img: "1000853492.png", file: "Painjan.m4a", title: "Painjan", artist: "Aadi, Payal, Sonali Sonawane", year: "2025" },
        { img: "1000853547.png", file: "Aapli_Yaari.m4a", title: "Aapli Yaari", artist: "Nick Shinde, Adarsh Shinde", year: "2021" },
        { img: "1000853477.png", file: "Dhaga_Dhaga.m4a", title: "Dhaga Dhaga", artist: "Ankush Chaudhari, Pooja Sawant", year: "2015" },
        { img: "1000853487.png", file: "Gaav_Sutana.m4a", title: "Gaav Sutana", artist: "Avadhoot Gupte", year: "2023" },
        { img: "1000853517.png", file: "Hridayi_Vasant.m4a", title: "Hridayi Vasant Phultana", artist: "Sachin Pilgaonkar, Anuradha Paudwal", year: "1989" },
        { img: "1000853536.png", file: "Kaakan.m4a", title: "Kaakan", artist: "Shankar Mahadevan", year: "2015" },
        { img: "1000853512.png", file: "Kelewali.m4a", title: "Kelewali", artist: "Avadhoot Gupte", year: "2021" },
        { img: "1000853482.png", file: "Kevadyacha_Paan_Tu.m4a", title: "Kevadyacha Paan Tu", artist: "Ajay Gogavle, Arya Ambekar", year: "2023" },
        { img: "1000853542.png", file: "Man_Udhan_Varyache.m4a", title: "Man Udhan Varyache", artist: "Shankar Mahadevan", year: "2004" },
        { img: "1000853522.png", file: "Mi_Single.m4a", title: "Mi Single", artist: "Nick Shinde, Sonali Sonawane", year: "2021" },
        { img: "1000853532.png", file: "Olya_Sanjveli.m4a", title: "Olya Sanjveli", artist: "Swapnil Bandodkar", year: "2013" },
        { img: "1000853552.png", file: "Prem_He.m4a", title: "Prem He", artist: "Spruha Joshi", year: "2017" },
        { img: "1000853557.png", file: "Rang_Hey_Nave.m4a", title: "Rang Hey Nave Nave", artist: "Shasha Tirupati", year: "2015" },
        { img: "1000853497.png", file: "Saaj_Hyo_Tuza.m4a", title: "Saaj Hyo Tuza", artist: "Onkarswaroop", year: "2018" },
        { img: "1000853472.png", file: "Shaky.m4a", title: "Shaky", artist: "Sanju Rathod", year: "2025" },
        { img: "1000853467.png", file: "Sundari.m4a", title: "Sundari", artist: "Sanju Rathod", year: "2025" },
        { img: "1000853527.png", file: "Varyavarti_Gandh.m4a", title: "Varyavarti Gandh Pasarla", artist: "Kunal Ganjawala", year: "2004" },
        { img: "1000853502.png", file: "Vatevari_Mogara.m4a", title: "Vatevari Mogara", artist: "Vaishali Samant, Swapnil Bandodkar", year: "2020" },
        { img: "1000853562.png", file: "Ved_Lavlay.m4a", title: "Ved Lavlay", artist: "Riteish Deshmukh, Genelia Deshmukh", year: "2022" },
        { img: "1000853507.png", file: "Galavar_Khali.m4a", title: "Galavar Khali", artist: "Swapnil Bandodkar", year: "2003" }
    ].map((track, i) => ({
        id: `marathi-${i + 1}`,
        category: 'marathi',
        title: track.title,
        artist: track.artist,
        year: track.year || '2024',
        src: `./poster/marathi_songs/${track.file}`,
        cover: `/marathi/${track.img}`
    })),
    // Devotional Songs (20 Tracks)
    ...[
        { img: "1000853618.png", file: "Bajrang_Baan.m4a", title: "Bajrang Baan", artist: "Agam Aggarwal", year: "2024" },
        { img: "1000853633.png", file: "Kaalbhairav_Ashtakam.m4a", title: "Kaalbhairav Ashtakam", artist: "Agam Aggarwal", year: "2023" },
        { img: "1000853642.png", file: "Om_Namah_Shivay.m4a", title: "Om Namah Shivay", artist: "Agam Aggarwal", year: "2022" },
        { img: "1000853666.png", file: "Aigiri_Nandini.m4a", title: "Aigiri Nandini", artist: "Rajalakshmee Sanjay", year: "2021" },
        { img: "1000853608.png", file: "Anjanichya_Suta.m4a", title: "Anjanichya Suta", artist: "Dj Tsr", year: "2024" },
        { img: "1000853585.png", file: "Bolo_Har_Har_Har.m4a", title: "Bolo Har Har Har", artist: "Mithoon, Badshah", year: "2016" },
        { img: "1000853590.png", file: "Babam_Bam.m4a", title: "Babam Bam", artist: "Kailash Kher", year: "2016" },
        { img: "1000853575.png", file: "Mere_Ghar_Ram_Aaye_Hain.m4a", title: "Mere Ghar Ram Aaye Hain", artist: "Jubin Nautiyal", year: "2023" },
        { img: "1000853628.png", file: "Shri_Krishna_Govind.m4a", title: "Shri Krishna Govind", artist: "Jubin Nautiyal", year: "2024" },
        { img: "1000853613.png", file: "Keejo_Kesari_Ke_Laal.m4a", title: "Keejo Kesari Ke Laal", artist: "Dj Karan Kahar", year: "2023" },
        { img: "1000853623.png", file: "Krishna_Trance.m4a", title: "Krishna Trance", artist: "Kaala Bhairava", year: "2024" },
        { img: "1000853580.png", file: "Meri_Maa_Ke_Barabar.m4a", title: "Meri Maa Ke Barabar Koi Nahi", artist: "Jubin Nautiyal", year: "2022" },
        { img: "1000853647.png", file: "Raghunandana.m4a", title: "Raghunandana", artist: "GowraHari, Saicharan", year: "2024" },
        { img: "1000853656.png", file: "Shri_Swami_Samarth.m4a", title: "Shri Swami Samarth", artist: "Adarsh Shinde", year: "2018" },
        { img: "1000853599.png", file: "Shamshaan.m4a", title: "Shamshaan", artist: "Hansraj Raghuwanshi", year: "2024" },
        { img: "1000853652.png", file: "Swami_Samarth_Stuti.m4a", title: "Swami Samarth Stuti", artist: "Kedar Phadke", year: "2023" },
        { img: "1000853661.png", file: "Kahase_Rehne_Wala.m4a", title: "Kahase Rehne Wala Re Baba", artist: "Shashikant Kachave", year: "2024" },
        { img: "1000853637.png", file: "Jai_Mahakal.m4a", title: "Jai Mahakal 2", artist: "Ashutosh Pratihast", year: "2024" },
        { img: "1000853594.png", file: "Shiv_Tandav.m4a", title: "Shiv Tandav Stotram", artist: "Traditional", year: "2022" },
        { img: "1000853603.png", file: "Hanuman_Chalisa.m4a", title: "Hanuman Chalisa", artist: "Shankar Mahadevan", year: "2021" }
    ].map((track, i) => ({
        id: `devotional-${i + 1}`,
        category: 'devotional',
        title: track.title,
        artist: track.artist,
        year: track.year || '2024',
        src: `./poster/devotional_songs/${track.file}`,
        cover: `/devotional/${track.img}`
    }))
];

// State
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let songQueue = [];
let currentUser = null;
let recentlyPlayed = JSON.parse(localStorage.getItem('recently_played') || '[]');
let expandedCategories = {
    latest: false,
    ninety: false,
    bollywood: false,
    marathi: false,
    devotional: false
};
let lastVolume = localStorage.getItem('audio_volume') !== null ? parseFloat(localStorage.getItem('audio_volume')) : 1;
const audio = new Audio();
audio.volume = lastVolume;

// Web Audio API setup for monitoring actual output volume
let audioContext = null;
let sourceNode = null;
let gainNode = null;
let analyser = null;

// Initialize Web Audio API when audio starts playing
const initAudioContext = () => {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        sourceNode = audioContext.createMediaElementSource(audio);
        gainNode = audioContext.createGain();
        analyser = audioContext.createAnalyser();

        // Connect nodes: source -> gain -> analyser -> destination
        sourceNode.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);

        // Monitor volume changes
        monitorVolumeChanges();
    }
};

// Monitor for system volume changes
const monitorVolumeChanges = () => {
    const checkVolume = () => {
        if (audio && !audio.paused) {
            const currentVolume = audio.volume;
            if (Math.abs(currentVolume - lastVolume) > 0.01) {
                lastVolume = currentVolume;
                updateVolumeUI();
            }
        }
        requestAnimationFrame(checkVolume);
    };
    checkVolume();
};

// DOM Elements
const btnVolume = document.getElementById('btn-volume');
const iconVolume = document.getElementById('icon-volume');

// Error Handling for Audio
audio.addEventListener('error', (e) => {
    console.error("Error loading track:", e);
});

// DOM Elements
const recentlyPlayedSection = document.getElementById('recently-played-section');
const recentlyPlayedGrid = document.getElementById('recently-played-grid');
const latestGrid = document.getElementById('latest-songs-grid');
const ninetyGrid = document.getElementById('ninety-songs-grid');
const bollywoodGrid = document.getElementById('bollywood-songs-grid');
const marathiGrid = document.getElementById('marathi-songs-grid');
const devotionalGrid = document.getElementById('devotional-songs-grid');

const homeView = document.getElementById('home-view');
const categoryFullView = document.getElementById('category-full-view');
const categoryViewGrid = document.getElementById('category-view-grid');
const categoryViewTitle = document.getElementById('category-view-title');
const categoryViewDesc = document.getElementById('category-view-desc');
const btnBackHome = document.getElementById('btn-back-home');

const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerArt = document.getElementById('player-art');
const playerBar = document.getElementById('player-bar');

function updateDetailView() {
    const track = tracks[currentTrackIndex];
    if (track) {
        const duration = (audio.duration && !isNaN(audio.duration)) ? formatTime(audio.duration) : "...";
        if (detailImg) detailImg.src = track.cover;
        if (detailTitle) detailTitle.textContent = track.title;
        if (detailArtistInfo) detailArtistInfo.textContent = `${track.artist} • ${track.year} • 1 song, ${duration}`;
        if (detailActiveTitle) detailActiveTitle.textContent = track.title;
        if (detailActiveArtist) detailActiveArtist.textContent = track.artist;
        if (detailActiveDuration) detailActiveDuration.textContent = duration;

        if (isPlaying) {
            if (detailPlayIcon) detailPlayIcon.classList.add('d-none');
            if (detailPauseIcon) detailPauseIcon.classList.remove('d-none');
        } else {
            if (detailPlayIcon) detailPlayIcon.classList.remove('d-none');
            if (detailPauseIcon) detailPauseIcon.classList.add('d-none');
        }
    }
}
const btnClosePlayer = document.getElementById('btn-close-player');
const btnPlayPause = document.getElementById('btn-play-pause');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');
const volumeBar = document.getElementById('volume-bar');
const volumeContainer = document.getElementById('volume-container');

// Sign In Elements
const btnSignIn = document.getElementById('btn-signin');
const btnCloseSignIn = document.getElementById('btn-close-signin');
const signinOverlay = document.getElementById('signin-overlay');
const signinForm = document.getElementById('signin-form');

// New Header Elements
const btnSignUp = document.getElementById('btn-signup');
const searchInput = document.getElementById('search-input');
const btnMic = document.getElementById('btn-mic');

// Sign Up Overlay Elements
const signupOverlay = document.getElementById('signup-overlay');
const btnCloseSignUp = document.getElementById('btn-close-signup');
const signupForm = document.getElementById('signup-form');
const linkToSignIn = document.getElementById('link-to-signin');
const linkToSignUp = document.getElementById('link-to-signup');

// Header Profile Elements
const authButtons = document.getElementById('auth-buttons');
const userProfileSection = document.getElementById('user-profile-section');
const userAvatar = document.getElementById('user-avatar');
const btnLogout = document.getElementById('btn-logout');

// Profile Overlay Elements
const btnShowProfile = document.getElementById('btn-show-profile');
const profileOverlay = document.getElementById('profile-overlay');
const btnCloseProfile = document.getElementById('btn-close-profile');
const btnLogoutProfile = document.getElementById('btn-logout-profile');

// Profile Info Displays
const profileAvatarLarge = document.getElementById('profile-avatar-large');
const profileNameDisplay = document.getElementById('profile-name-display');
const profileEmailDisplay = document.getElementById('profile-email-display');
// Player Detail View Elements
const playerDetailView = document.getElementById('player-detail-view');
const detailImg = document.getElementById('detail-img');
const detailTitle = document.getElementById('detail-title');
const detailArtistInfo = document.getElementById('detail-artist-info');
const detailActiveTitle = document.getElementById('detail-active-title');
const detailActiveArtist = document.getElementById('detail-active-artist');
const detailActiveDuration = document.getElementById('detail-active-duration');
const btnCloseDetail = document.getElementById('btn-close-detail');
const btnDetailPlay = document.getElementById('btn-detail-play');
const detailPlayIcon = document.getElementById('detail-play-icon');
const detailPauseIcon = document.getElementById('detail-pause-icon');
const btnShuffle = document.getElementById('btn-shuffle');
const btnDetailShuffle = document.getElementById('btn-detail-shuffle');
const btnRepeat = document.getElementById('btn-repeat');
const btnDetailHeart = document.getElementById('btn-detail-heart');
const btnDetailPlus = document.getElementById('btn-detail-plus');
const btnDetailDownload = document.getElementById('btn-detail-download');
const btnDetailOptions = document.getElementById('btn-detail-options');
const moreOptionsMenu = document.getElementById('more-options-menu');
const optShare = document.getElementById('opt-share');
const optLyrics = document.getElementById('opt-lyrics');
const optArtist = document.getElementById('opt-artist');
const optQueue = document.getElementById('opt-queue');

// Lyrics Elements
const lyricsOverlay = document.getElementById('lyrics-overlay');
const btnCloseLyrics = document.getElementById('btn-close-lyrics');
const lyricsSongTitle = document.getElementById('lyrics-song-title');
const lyricsSongArtist = document.getElementById('lyrics-song-artist');
const lyricsContent = document.getElementById('lyrics-content');
const lyricsContentWrapper = document.querySelector('.lyrics-content-wrapper');

// Lyrics Mini Player Elements
const btnLyricsPlayPause = document.getElementById('btn-lyrics-play-pause');
const lyricsPlayIcon = document.querySelector('.lyrics-play-icon');
const lyricsPauseIcon = document.querySelector('.lyrics-pause-icon');
const lyricsMiniTitle = document.getElementById('lyrics-mini-title');
const lyricsMiniArtist = document.getElementById('lyrics-mini-artist');
const lyricsMiniProgress = document.getElementById('lyrics-mini-progress');
const lyricsMiniContainer = document.getElementById('lyrics-mini-container');
const lyricsMiniCurrent = document.getElementById('lyrics-mini-current');
const lyricsMiniTotal = document.getElementById('lyrics-mini-total');

// Helper to get lyrics (Sample Data)
const getLyricsForSong = (title) => {
    return lyricsData[title] || "Lyrics are not available for this song yet.\nStay tuned for updates!";
};

// Error/Success Message Elements
const signinError = document.getElementById('signin-error');
const signupError = document.querySelector('.error-msg');

// User Data Store (using localStorage)
const getUsers = () => JSON.parse(localStorage.getItem('sonic_flow_users') || '[]');
const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem('sonic_flow_users', JSON.stringify(users));
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('Sonic Flow Player Initialized');
        renderAllSections();
        loadTrack(currentTrackIndex);
        setupEventListeners();
    } catch (err) {
        console.error('Initialization error:', err);
    }
});

function renderAllSections() {
    renderRecentlyPlayed();
    renderCategoryTracks('latest', latestGrid);
    renderCategoryTracks('ninety', ninetyGrid);
    renderCategoryTracks('bollywood', bollywoodGrid);
    renderCategoryTracks('marathi', marathiGrid);
    renderCategoryTracks('devotional', devotionalGrid);
}

function createTrackCard(track, globalIndex, options = {}) {
    const template = document.getElementById('track-card-template');
    if (!template) return null;

    const clone = template.content.cloneNode(true);
    const col = clone.querySelector('.fade-in-up');
    const card = clone.querySelector('.track-card');
    const img = clone.querySelector('img');
    const title = clone.querySelector('.card-title');
    const artist = clone.querySelector('.card-text');

    if (options.minWidth) col.style.minWidth = options.minWidth;
    if (options.mb) col.classList.add(options.mb);
    if (options.hoverScale) card.classList.add('hover-scale');

    card.setAttribute('onclick', `playTrack(${globalIndex})`);
    img.src = track.cover;
    img.alt = track.title;
    title.textContent = track.title;
    artist.textContent = track.artist;

    return clone;
}

function renderTracks(filteredTracks, container = categoryViewGrid) {
    if (!container) return;
    container.innerHTML = '';

    if (filteredTracks.length === 0) {
        const noResultsTemplate = document.getElementById('no-results-template');
        if (noResultsTemplate) {
            container.appendChild(noResultsTemplate.content.cloneNode(true));
        }
        return;
    }

    filteredTracks.forEach(track => {
        const globalIndex = tracks.findIndex(t => t.id === track.id);
        const card = createTrackCard(track, globalIndex, { hoverScale: true, mb: 'mb-4' });
        if (card) container.appendChild(card);
    });

    // If searching, show the category full view
    if (container === categoryViewGrid) {
        categoryViewTitle.textContent = "Search Results";
        categoryViewDesc.textContent = `Showing results for your search`;
        homeView.classList.add('d-none');
        categoryFullView.classList.remove('d-none');
        window.scrollTo(0, 0);
    }
}

function renderRecentlyPlayed() {
    if (!recentlyPlayedSection || !recentlyPlayedGrid) return;

    if (recentlyPlayed.length === 0) {
        recentlyPlayedSection.classList.add('d-none');
        return;
    }

    recentlyPlayedSection.classList.remove('d-none');
    recentlyPlayedGrid.innerHTML = '';

    const displayTracks = [...recentlyPlayed].reverse();
    displayTracks.forEach((trackId) => {
        const track = tracks.find(t => t.id === trackId);
        if (!track) return;
        const globalIndex = tracks.findIndex(t => t.id === track.id);
        const card = createTrackCard(track, globalIndex);
        if (card) recentlyPlayedGrid.appendChild(card);
    });
}

function renderCategoryTracks(category, container) {
    if (!container) return;
    container.innerHTML = '';

    const categoryTracks = tracks.filter(t => t.category === category).slice(0, 10);
    categoryTracks.forEach((track) => {
        const globalIndex = tracks.findIndex(t => t.id === track.id);
        const card = createTrackCard(track, globalIndex, { hoverScale: true });
        if (card) container.appendChild(card);
    });
}

function showCategoryPage(category) {
    const categoryTracks = tracks.filter(t => t.category === category);
    const categoryInfo = {
        'latest': { title: 'Latest Songs', desc: 'Newly released tracks just for you' },
        'ninety': { title: "90's Hits", desc: 'The golden era of Bollywood melodies' },
        'bollywood': { title: 'Bollywood Songs', desc: 'Biggest chartbusters from the film industry' },
        'marathi': { title: 'Marathi Hits', desc: 'Classic and modern Marathi favorites' },
        'devotional': { title: 'Devotional', desc: 'Spiritually uplifting bhakti music' }
    };

    const info = categoryInfo[category] || { title: 'Music', desc: 'Browse your favorite tracks' };

    categoryViewTitle.textContent = info.title;
    categoryViewDesc.textContent = info.desc;
    categoryViewGrid.innerHTML = '';

    categoryTracks.forEach((track) => {
        const globalIndex = tracks.findIndex(t => t.id === track.id);
        const card = createTrackCard(track, globalIndex, { mb: 'mb-4', hoverScale: true });
        if (card) categoryViewGrid.appendChild(card);
    });

    homeView.classList.add('d-none');
    categoryFullView.classList.remove('d-none');
    window.scrollTo(0, 0);
}

function showArtistPage(artistName) {
    const artistTracks = tracks.filter(t => t.artist.toLowerCase().includes(artistName.toLowerCase()));

    categoryViewTitle.textContent = artistName;
    categoryViewDesc.textContent = "Artist Discography";
    categoryViewGrid.innerHTML = '';

    if (artistTracks.length === 0) {
        categoryViewGrid.innerHTML = '<div class="col-12 text-center py-5 text-secondary">No tracks found for this artist.</div>';
    } else {
        artistTracks.forEach((track) => {
            const globalIndex = tracks.findIndex(t => t.id === track.id);
            const card = createTrackCard(track, globalIndex, { mb: 'mb-4', hoverScale: true });
            if (card) categoryViewGrid.appendChild(card);
        });
    }

    homeView.classList.add('d-none');
    categoryFullView.classList.remove('d-none');
    window.scrollTo(0, 0);

    // Close detail view if open
    if (playerDetailView) {
        playerDetailView.classList.add('d-none');
        document.body.style.overflow = 'auto';
    }
}


// Playback Auth Elements
const playAuthOverlay = document.getElementById('play-auth-overlay');
const btnClosePlayAuth = document.getElementById('btn-close-play-auth');
const playAuthImg = document.getElementById('play-auth-img');
const playAuthTitle = document.getElementById('play-auth-title');
const playAuthArtist = document.getElementById('play-auth-artist');
const btnAuthSignup = document.getElementById('btn-auth-signup');
const btnAuthLogin = document.getElementById('btn-auth-login');

// Make playTrack available globally for onclick
window.playTrack = (index) => {
    // Check if user is logged in
    if (!currentUser) {
        showPlayAuthOverlay(index);
        return;
    }

    if (currentTrackIndex === index && isPlaying) {
        pauseMusic();
    } else {
        loadTrack(index);
        playMusic();
    }
};

function showPlayAuthOverlay(index) {
    const track = tracks[index];
    if (track && playAuthOverlay) {
        playAuthImg.src = track.cover;
        playAuthTitle.textContent = track.title;
        playAuthArtist.textContent = track.artist;
        playAuthOverlay.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
    }
}

function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[index];
    if (!track) return;

    if (audio) audio.src = track.src;
    if (playerTitle) playerTitle.textContent = track.title;
    if (playerArtist) playerArtist.textContent = track.artist;
    if (playerArt) playerArt.style.backgroundImage = `url('${track.cover}')`;

    // Add to recently played logic
    addToRecentlyPlayed(track.id);

    // Reset progress
    if (progressBar) progressBar.style.width = '0%';
    if (timeCurrent) timeCurrent.textContent = '0:00';
    if (timeTotal) timeTotal.textContent = '...';

    // Update Detail View if visible
    if (playerDetailView && !playerDetailView.classList.contains('d-none')) {
        updateDetailView();
    }

    // Sync Lyrics View Info
    if (lyricsMiniTitle) lyricsMiniTitle.textContent = track.title;
    if (lyricsMiniArtist) lyricsMiniArtist.textContent = track.artist;
    if (lyricsMiniProgress) lyricsMiniProgress.style.width = '0%';
    if (lyricsMiniCurrent) lyricsMiniCurrent.textContent = '0:00';
    if (lyricsMiniTotal) lyricsMiniTotal.textContent = '...';

    // Update Media Session Metadata
    updateMediaSession();
}

function updateMediaSession() {
    if ('mediaSession' in navigator) {
        const track = tracks[currentTrackIndex];
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            album: 'Ideamagix Music',
            artwork: [
                { src: track.cover, sizes: '512x512', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => playMusic());
        navigator.mediaSession.setActionHandler('pause', () => pauseMusic());
        navigator.mediaSession.setActionHandler('previoustrack', () => prevTrack());
        navigator.mediaSession.setActionHandler('nexttrack', () => nextTrack());
    }
}

function addToRecentlyPlayed(trackId) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== trackId);
    recentlyPlayed.push(trackId);

    // Limit to last 10 tracks
    if (recentlyPlayed.length > 10) {
        recentlyPlayed.shift();
    }

    // Save to localStorage
    localStorage.setItem('recently_played', JSON.stringify(recentlyPlayed));

    // Re-render the section
    renderRecentlyPlayed();
}

function playMusic() {
    isPlaying = true;

    // Initialize Audio Context for better volume/output control
    initAudioContext();

    audio.play();
    iconPlay.classList.add('d-none');
    iconPause.classList.remove('d-none');
    playerBar.classList.remove('hidden-player');

    // Sync Detail View
    if (detailPlayIcon) {
        detailPlayIcon.classList.add('d-none');
        detailPauseIcon.classList.remove('d-none');
    }

    // Sync Lyrics mini player
    if (lyricsPlayIcon) {
        lyricsPlayIcon.classList.add('d-none');
        lyricsPauseIcon.classList.remove('d-none');
    }
}

function pauseMusic() {
    isPlaying = false;
    audio.pause();
    iconPlay.classList.remove('d-none');
    iconPause.classList.add('d-none');

    // Sync Detail View
    if (detailPlayIcon) {
        detailPlayIcon.classList.remove('d-none');
        detailPauseIcon.classList.add('d-none');
    }

    // Sync Lyrics mini player
    if (lyricsPlayIcon) {
        lyricsPlayIcon.classList.remove('d-none');
        lyricsPauseIcon.classList.add('d-none');
    }
}

function togglePlay() {
    if (isPlaying) pauseMusic();
    else playMusic();
}

function nextTrack() {
    // Check Queue First
    if (songQueue.length > 0) {
        const nextId = songQueue.shift();
        const nextIndex = tracks.findIndex(t => t.id === nextId);
        if (nextIndex !== -1) {
            currentTrackIndex = nextIndex;
            loadTrack(currentTrackIndex);
            playMusic();
            return;
        }
    }

    if (isShuffle) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * tracks.length);
        } while (newIndex === currentTrackIndex && tracks.length > 1);
        currentTrackIndex = newIndex;
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    loadTrack(currentTrackIndex);
    playMusic();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playMusic();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update time text
    if (duration) {
        timeCurrent.textContent = formatTime(currentTime);
        timeTotal.textContent = formatTime(duration);

        // Update Lyrics Mini Progress
        if (lyricsMiniProgress) {
            lyricsMiniProgress.style.width = `${progressPercent}%`;
        }
        if (lyricsMiniCurrent) lyricsMiniCurrent.textContent = formatTime(currentTime);
        if (lyricsMiniTotal) lyricsMiniTotal.textContent = formatTime(duration);

        // Auto-scroll lyrics if open
        updateLyricsScroll();
    }
}

function updateLyricsScroll() {
    if (lyricsOverlay && !lyricsOverlay.classList.contains('d-none') && audio.duration) {
        const currentTime = audio.currentTime;
        const lines = lyricsContent.querySelectorAll('.lyric-line');
        let activeLine = null;

        lines.forEach((line, index) => {
            const lineTime = parseFloat(line.dataset.time);
            const nextLineTime = lines[index + 1] ? parseFloat(lines[index + 1].dataset.time) : audio.duration;

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('active');
                activeLine = line;
            } else {
                line.classList.remove('active');
            }
        });

        if (activeLine) {
            const wrapperCenter = lyricsContentWrapper.clientHeight / 2;
            const lineTop = activeLine.offsetTop;
            const lineCenter = activeLine.clientHeight / 2;
            const scrollTarget = lineTop - wrapperCenter + lineCenter;

            lyricsContentWrapper.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });
        }
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function setupEventListeners() {
    // Search Mic Button
    if (btnMic) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-US';
            let isListening = false;

            recognition.onstart = () => {
                isListening = true;
                searchInput.placeholder = "Listening... Speak now";
                btnMic.classList.add('text-danger', 'pulse-animation');
                btnMic.classList.remove('text-secondary');
            };

            recognition.onend = () => {
                isListening = false;
                searchInput.placeholder = "Search artists, songs, albums...";
                btnMic.classList.remove('text-danger', 'pulse-animation');
                btnMic.classList.add('text-secondary');
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                searchInput.value = transcript;

                // Trigger Search Logic
                const filteredTracks = tracks.filter(track =>
                    track.title.toLowerCase().includes(transcript) ||
                    track.artist.toLowerCase().includes(transcript)
                );
                renderTracks(filteredTracks);
            };

            recognition.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                isListening = false;
                searchInput.placeholder = "Error. Try again.";
                btnMic.classList.remove('text-danger', 'pulse-animation');
                btnMic.classList.add('text-secondary');
            };

            btnMic.addEventListener('click', () => {
                if (isListening) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            });
        } else {
            btnMic.style.display = 'none';
            console.log("Web Speech API not supported in this browser.");
        }
    }

    // View All button listeners
    const categoryGrids = {
        latest: latestGrid,
        ninety: ninetyGrid,
        bollywood: bollywoodGrid,
        marathi: marathiGrid,
        devotional: devotionalGrid
    };

    Object.keys(categoryGrids).forEach(category => {
        const btn = document.getElementById(`view-all-${category}`);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                showCategoryPage(category);
            });
        }
    });

    if (btnBackHome) {
        btnBackHome.addEventListener('click', () => {
            categoryFullView.classList.add('d-none');
            homeView.classList.remove('d-none');
            window.scrollTo(0, 0);
        });
    }

    btnPlayPause?.addEventListener('click', togglePlay);
    btnPrev?.addEventListener('click', prevTrack);
    btnNext?.addEventListener('click', nextTrack);

    // Volume Control Logic
    const updateVolumeUI = () => {
        if (audio.muted || audio.volume === 0) {
            volumeBar.style.width = '0%';
            btnVolume?.classList.add('text-danger');
            btnVolume?.classList.remove('text-secondary');
            if (iconVolume) iconVolume.className = 'bi bi-volume-mute';
        } else {
            volumeBar.style.width = `${audio.volume * 100}%`;
            btnVolume?.classList.remove('text-danger');
            btnVolume?.classList.add('text-secondary');
            if (iconVolume) {
                if (audio.volume > 0.6) iconVolume.className = 'bi bi-volume-up';
                else if (audio.volume > 0) iconVolume.className = 'bi bi-volume-down';
                else iconVolume.className = 'bi bi-volume-mute';
            }
        }
        // Save volume preference
        localStorage.setItem('audio_volume', audio.volume);
    };

    btnVolume?.addEventListener('click', () => {
        if (audio) {
            audio.muted = !audio.muted;
            updateVolumeUI();
        }
    });

    volumeContainer?.addEventListener('click', (e) => {
        const width = volumeContainer.clientWidth;
        const clickX = e.offsetX;
        const volumeValue = clickX / width;

        audio.muted = false;
        audio.volume = Math.max(0, Math.min(1, volumeValue));
        updateVolumeUI();
    });

    // Sync volume UI whenever audio element volume changes (e.g. from system or keyboard)
    audio.addEventListener('volumechange', () => {
        updateVolumeUI();
    });

    // Initialize volume bar on page load
    updateVolumeUI();

    // Keyboard controls for volume (Arrow Up/Down and Media Keys)
    document.addEventListener('keydown', (e) => {
        // Volume Up: Arrow Up or Volume Up media key
        if (e.key === 'ArrowUp' || e.key === 'AudioVolumeUp') {
            // No preventDefault() here to allow system volume change
            const newVolume = Math.min(1, audio.volume + 0.05);
            audio.volume = newVolume;
            audio.muted = false;
            updateVolumeUI();
        }
        // Volume Down: Arrow Down or Volume Down media key
        else if (e.key === 'ArrowDown' || e.key === 'AudioVolumeDown') {
            // No preventDefault() here to allow system volume change
            const newVolume = Math.max(0, audio.volume - 0.05);
            audio.volume = newVolume;
            updateVolumeUI();
        }
        // Mute: M key or Volume Mute media key
        else if (e.key === 'm' || e.key === 'M' || e.key === 'AudioVolumeMute') {
            e.preventDefault();
            audio.muted = !audio.muted;
            updateVolumeUI();
        }
        // Play/Pause: Space bar or Media Play/Pause
        else if (e.key === ' ' || e.key === 'MediaPlayPause') {
            e.preventDefault();
            togglePlay();
        }
        // Next Track: Media Track Next
        else if (e.key === 'MediaTrackNext') {
            e.preventDefault();
            nextTrack();
        }
        // Previous Track: Media Track Previous
        else if (e.key === 'MediaTrackPrevious') {
            e.preventDefault();
            prevTrack();
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        const durationStr = formatTime(audio.duration);
        timeTotal.textContent = durationStr;
        if (lyricsMiniTotal) lyricsMiniTotal.textContent = durationStr;
        if (detailActiveDuration) detailActiveDuration.textContent = durationStr;
        if (detailArtistInfo) {
            const track = tracks[currentTrackIndex];
            detailArtistInfo.textContent = `${track.artist} • ${track.year} • 1 song, ${durationStr}`;
        }
    });

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => {
        if (isRepeat) {
            loadTrack(currentTrackIndex);
            playMusic();
        } else {
            nextTrack();
        }
    });

    // Seek
    progressContainer?.addEventListener('click', setProgress);

    // Detail View Toggle
    playerArt?.addEventListener('click', () => {
        updateDetailView();
        playerDetailView.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
    });

    btnCloseDetail?.addEventListener('click', () => {
        playerDetailView.classList.add('d-none');
        document.body.style.overflow = 'auto';
    });

    btnDetailPlay?.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
            detailPlayIcon.classList.remove('d-none');
            detailPauseIcon.classList.add('d-none');
        } else {
            playMusic();
            detailPlayIcon.classList.add('d-none');
            detailPauseIcon.classList.remove('d-none');
        }
    });

    // Shuffle Toggle
    const toggleShuffle = () => {
        isShuffle = !isShuffle;
        const toggleActive = (btn) => {
            if (btn) {
                if (isShuffle) {
                    btn.classList.add('text-green-active');
                    btn.classList.remove('text-secondary');
                } else {
                    btn.classList.remove('text-green-active');
                    btn.classList.add('text-secondary');
                }
            }
        };
        toggleActive(btnShuffle);
        toggleActive(btnDetailShuffle);
    };

    btnShuffle?.addEventListener('click', toggleShuffle);
    btnDetailShuffle?.addEventListener('click', toggleShuffle);

    // Repeat Toggle
    btnRepeat?.addEventListener('click', () => {
        isRepeat = !isRepeat;
        if (isRepeat) {
            btnRepeat.classList.add('text-green-active');
            btnRepeat.classList.remove('text-secondary');
        } else {
            btnRepeat.classList.remove('text-green-active');
            btnRepeat.classList.add('text-secondary');
        }
    });

    // Heart Toggle
    btnDetailHeart?.addEventListener('click', () => {
        btnDetailHeart.classList.toggle('text-danger');
        btnDetailHeart.classList.toggle('text-secondary');
    });

    btnDetailPlus?.addEventListener('click', () => {
    });

    // Download
    btnDetailDownload?.addEventListener('click', () => {
    });


    // Close Player Bar
    btnClosePlayer?.addEventListener('click', () => {
        playerBar.classList.add('hidden-player');
        pauseMusic();
    });

    // Sign In Toggle
    btnSignIn?.addEventListener('click', () => {
        signinOverlay.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
        if (signinError) signinError.classList.add('d-none');

        // Close Mobile Nav if open
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });

    btnCloseSignIn?.addEventListener('click', () => {
        signinOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';
    });

    // Close on outside click
    signinOverlay?.addEventListener('click', (e) => {
        if (e.target === signinOverlay) {
            signinOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }
    });

    // Sign In Submit
    signinForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const users = getUsers();

        const user = users.find(u => u.email === email);

        if (!user) {
            signinError.textContent = 'please register email id and password';
            signinError.classList.remove('d-none');
            return;
        }

        if (user.password !== password) {
            signinError.textContent = 'please enter correct password';
            signinError.classList.remove('d-none');
            return;
        }

        // Success
        if (signinError) signinError.classList.add('d-none');
        alert(`Welcome back, ${user.name || 'User'}!`);
        if (signinOverlay) {
            signinOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }

        currentUser = user;
        updateHeaderUI(user);
    });

    function updateHeaderUI(user) {
        if (authButtons && userProfileSection) {
            authButtons.classList.add('d-none');
            authButtons.classList.remove('d-flex');

            userProfileSection.classList.remove('d-none');
            userProfileSection.classList.add('d-flex');

            if (userAvatar && user.name) {
                userAvatar.textContent = user.name.charAt(0).toUpperCase();
            }
        }
    }

    // Profile Show Logic
    btnShowProfile?.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser) {
            // Populate data
            if (profileAvatarLarge) profileAvatarLarge.textContent = currentUser.name.charAt(0).toUpperCase();
            if (profileNameDisplay) profileNameDisplay.textContent = currentUser.name;
            if (profileEmailDisplay) profileEmailDisplay.textContent = currentUser.email;
            if (profileFullName) profileFullName.textContent = currentUser.name;
            if (profileFullEmail) profileFullEmail.textContent = currentUser.email;

            if (profileOverlay) {
                profileOverlay.classList.remove('d-none');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    btnCloseProfile?.addEventListener('click', () => {
        profileOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';
    });

    profileOverlay?.addEventListener('click', (e) => {
        if (e.target === profileOverlay) {
            profileOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }
    });

    // Logout Helper
    function handleLogout() {
        currentUser = null;
        if (authButtons && userProfileSection) {
            userProfileSection.classList.add('d-none');
            userProfileSection.classList.remove('d-flex');

            authButtons.classList.remove('d-none');
            authButtons.classList.add('d-flex');
        }

        profileOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';
        alert('You have been logged out.');
    }

    btnLogout?.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Profile Button Logic
    btnShowProfile?.addEventListener('click', (e) => {
        e.preventDefault();

        // Populate Profile Data
        if (currentUser) {
            if (profileNameDisplay) profileNameDisplay.textContent = currentUser.name;
            if (profileEmailDisplay) profileEmailDisplay.textContent = currentUser.email;

            // Update additional fields if they exist
            const pFullName = document.getElementById('profile-full-name');
            const pFullEmail = document.getElementById('profile-full-email');

            if (pFullName) pFullName.textContent = currentUser.name;
            if (pFullEmail) pFullEmail.textContent = currentUser.email;

            // Update avatar letter
            if (profileAvatarLarge && currentUser.name) {
                profileAvatarLarge.textContent = currentUser.name.charAt(0).toUpperCase();
            }
        }

        if (profileOverlay) {
            profileOverlay.classList.remove('d-none');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close Profile Logic
    btnCloseProfile?.addEventListener('click', () => {
        if (profileOverlay) {
            profileOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }
    });

    profileOverlay?.addEventListener('click', (e) => {
        if (e.target === profileOverlay) {
            profileOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }
    });

    btnLogoutProfile?.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Sign Up Toggle
    btnSignUp?.addEventListener('click', () => {
        signupOverlay.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
        if (signupError) signupError.classList.add('d-none');

        // Close Mobile Nav if open
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });

    btnCloseSignUp?.addEventListener('click', () => {
        signupOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';
    });

    signupOverlay?.addEventListener('click', (e) => {
        if (e.target === signupOverlay) {
            signupOverlay.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }
    });

    // Switch between Sign In and Sign Up
    linkToSignIn?.addEventListener('click', (e) => {
        e.preventDefault();
        signupOverlay.classList.add('d-none');
        signinOverlay.classList.remove('d-none');
        signinError.classList.add('d-none');
    });

    linkToSignUp?.addEventListener('click', (e) => {
        e.preventDefault();
        signinOverlay.classList.add('d-none');
        signupOverlay.classList.remove('d-none');
        if (signupError) signupError.classList.add('d-none');
    });

    // Sign Up Submit
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        // Check if user already exists
        const users = getUsers();
        if (users.some(u => u.email === email)) {
            alert('This email is already registered. Please Sign In.');
            return;
        }

        saveUser({ name, email, password });
        alert(`Welcome to Sonic Flow, ${name}! Your account has been created successfully. You can now Sign In.`);
        if (signupOverlay) signupOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';

        // Auto-open sign in after successful signup
        if (signinOverlay) signinOverlay.classList.remove('d-none');
    });

    // Search Box logic
    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredTracks = tracks.filter(track =>
            track.title.toLowerCase().includes(query) ||
            track.artist.toLowerCase().includes(query)
        );
        renderTracks(filteredTracks);
    });
    // Playback Auth Listeners
    btnClosePlayAuth?.addEventListener('click', () => {
        if (playAuthOverlay) playAuthOverlay.classList.add('d-none');
        document.body.style.overflow = 'auto';
    });

    btnAuthSignup?.addEventListener('click', () => {
        if (playAuthOverlay) playAuthOverlay.classList.add('d-none');
        if (signupOverlay) signupOverlay.classList.remove('d-none');
    });

    btnAuthLogin?.addEventListener('click', (e) => {
        e.preventDefault();
        if (playAuthOverlay) playAuthOverlay.classList.add('d-none');
        if (signinOverlay) signinOverlay.classList.remove('d-none');
    });

    if (playAuthOverlay) {
        playAuthOverlay.addEventListener('click', (e) => {
            if (e.target === playAuthOverlay) {
                playAuthOverlay.classList.add('d-none');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Heart/Like Button Logic
    if (btnDetailHeart) {
        btnDetailHeart.addEventListener('click', () => {
            const icon = btnDetailHeart.querySelector('i');
            if (icon) {
                if (icon.classList.contains('bi-heart')) {
                    icon.classList.remove('bi-heart');
                    icon.classList.add('bi-heart-fill');
                    btnDetailHeart.classList.remove('text-secondary');
                    btnDetailHeart.classList.add('text-success');
                } else {
                    icon.classList.remove('bi-heart-fill');
                    icon.classList.add('bi-heart');
                    btnDetailHeart.classList.remove('text-success');
                    btnDetailHeart.classList.add('text-secondary');
                }
            }
        });
    }

    // More Options Menu Logic
    if (btnDetailOptions && moreOptionsMenu) {
        btnDetailOptions.addEventListener('click', (e) => {
            e.stopPropagation();
            moreOptionsMenu.classList.toggle('d-none');
        });

        document.addEventListener('click', (e) => {
            if (!moreOptionsMenu.classList.contains('d-none') &&
                !moreOptionsMenu.contains(e.target) &&
                e.target !== btnDetailOptions) {
                moreOptionsMenu.classList.add('d-none');
            }
        });

        // Social Share Elements
        const socialShareOverlay = document.getElementById('social-share-overlay');
        const btnCloseShare = document.getElementById('btn-close-share');
        const btnCopyLink = document.getElementById('btn-copy-link');
        const shareLinkInput = document.getElementById('share-link-input');
        const shareWhatsapp = document.getElementById('share-whatsapp');
        const shareTwitter = document.getElementById('share-twitter');
        const shareFacebook = document.getElementById('share-facebook');

        if (optShare) {
            optShare.addEventListener('click', () => {
                moreOptionsMenu.classList.add('d-none');

                const track = tracks[currentTrackIndex];
                const shareUrl = window.location.href;
                const shareText = `Check out ${track.title} by ${track.artist} on INAM Music!`;

                // Update Links
                if (shareWhatsapp) shareWhatsapp.href = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
                if (shareTwitter) shareTwitter.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                if (shareFacebook) shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

                // Update Input
                if (shareLinkInput) shareLinkInput.value = shareUrl;

                // Show Overlay
                if (socialShareOverlay) {
                    socialShareOverlay.classList.remove('d-none');
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        // Close Share Modal Logic
        const closeShareModal = () => {
            if (socialShareOverlay) {
                socialShareOverlay.classList.add('d-none');
                document.body.style.overflow = 'auto';
            }
        };

        if (btnCloseShare) btnCloseShare.addEventListener('click', closeShareModal);

        if (socialShareOverlay) {
            socialShareOverlay.addEventListener('click', (e) => {
                if (e.target === socialShareOverlay) closeShareModal();
            });
        }

        // Copy Link Logic
        if (btnCopyLink && shareLinkInput) {
            btnCopyLink.addEventListener('click', () => {
                navigator.clipboard.writeText(shareLinkInput.value).then(() => {
                    const originalText = btnCopyLink.textContent;
                    btnCopyLink.textContent = 'Copied!';
                    setTimeout(() => btnCopyLink.textContent = originalText, 2000);
                });
            });
        }

        // Lyrics Option
        if (optLyrics) {
            optLyrics.addEventListener('click', () => {
                const track = tracks[currentTrackIndex];
                lyricsSongTitle.textContent = track.title;
                lyricsSongArtist.textContent = track.artist;

                // Optimized Lyrics Rendering with Timestamp Support
                const rawLyrics = getLyricsForSong(track.title);
                const lines = rawLyrics.split('\n');

                lyricsContent.innerHTML = '';

                const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2})\]/;

                // First pass: extract lines with times
                const parsedLines = lines.map(line => {
                    const match = line.match(timeRegex);
                    if (match) {
                        const mins = parseInt(match[1]);
                        const secs = parseInt(match[2]);
                        const ms = parseInt(match[3]);
                        const time = mins * 60 + secs + ms / 100;
                        return { time, text: line.replace(timeRegex, '').trim() };
                    }
                    return { time: null, text: line.trim() };
                }).filter(l => l.text !== '');

                // Fill in missing times using linear interpolation between known tags
                for (let i = 0; i < parsedLines.length; i++) {
                    if (parsedLines[i].time === null) {
                        let prevTime = 0, prevIndex = -1;
                        for (let j = i - 1; j >= 0; j--) {
                            if (parsedLines[j].time !== null) { prevTime = parsedLines[j].time; prevIndex = j; break; }
                        }
                        let nextTime = audio.duration || parsedLines.length * 3, nextIndex = parsedLines.length;
                        for (let j = i + 1; j < parsedLines.length; j++) {
                            if (parsedLines[j].time !== null) { nextTime = parsedLines[j].time; nextIndex = j; break; }
                        }
                        const steps = nextIndex - prevIndex;
                        const timeStep = (nextTime - prevTime) / steps;
                        parsedLines[i].time = prevTime + timeStep * (i - prevIndex);
                    }
                }

                parsedLines.forEach((line) => {
                    const span = document.createElement('span');
                    span.className = 'lyric-line d-block';
                    if (line.text.startsWith('(') && line.text.endsWith(')')) {
                        span.classList.add('lyrics-header-text', 'opacity-50', 'fs-5', 'mt-4');
                    }
                    span.textContent = line.text;
                    span.dataset.time = line.time;
                    lyricsContent.appendChild(span);
                });

                lyricsOverlay.classList.remove('d-none');
                if (playerBar) playerBar.classList.add('d-none');

                // scroll to top
                if (lyricsContentWrapper) lyricsContentWrapper.scrollTop = 0;

                // Sync mini player info
                if (lyricsMiniTitle) lyricsMiniTitle.textContent = track.title;
                if (lyricsMiniArtist) lyricsMiniArtist.textContent = track.artist;

                document.body.style.overflow = 'hidden';
                updateLyricsScroll();
                moreOptionsMenu.classList.add('d-none');
            });
        }

        // View Artist Option
        if (optArtist) {
            optArtist.addEventListener('click', () => {
                const track = tracks[currentTrackIndex];
                const primaryArtist = track.artist.split(',')[0].trim();
                showArtistPage(primaryArtist);
                moreOptionsMenu.classList.add('d-none');
            });
        }

        // Add to Queue Option
        if (optQueue) {
            optQueue.addEventListener('click', () => {
                const track = tracks[currentTrackIndex];
                songQueue.push(track.id);
                alert(`${track.title} added to queue!`);
                moreOptionsMenu.classList.add('d-none');
            });
        }
    }

    // Lyrics Close Logic
    if (btnCloseLyrics) {
        btnCloseLyrics.addEventListener('click', () => {
            lyricsOverlay.classList.add('d-none');
            if (playerBar) playerBar.classList.remove('d-none');
            document.body.style.overflow = 'auto';
        });
    }

    // Lyrics Mini Player Event
    if (btnLyricsPlayPause) {
        btnLyricsPlayPause.addEventListener('click', togglePlay);
    }
    if (lyricsMiniContainer) {
        lyricsMiniContainer.addEventListener('click', setProgress);
    }

    // Splash Screen Dismissal
    window.addEventListener('load', () => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            setTimeout(() => {
                splash.classList.add('fade-out');
                setTimeout(() => {
                    splash.remove();
                }, 600);
            }, 1500);
        }
    });
}
