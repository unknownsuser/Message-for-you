function show(id){
    document.querySelectorAll(".container").forEach(page=>{
        page.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

function nextPage(){
    show("page2");
}

function yes(){
    show("page3");
}

function letter(){
    show("page4");
}

function moveButton(){
    const btn = document.getElementById("noBtn");

    const maxX = 220;
    const maxY = 90;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
document.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
}, { once: true });
// ===== Music Button =====

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML = "🔇 Music OFF";

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 Music ON";

    }

}

// First click par music automatically play hoga
document.addEventListener("click", () => {

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.innerHTML = "🔇 Music OFF";

    }

}, { once: true });
