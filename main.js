const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

document.querySelectorAll(".image-row img").forEach(img => {
    img.addEventListener("click", function () {
        imageModal.style.display = "block";
        modalImg.src = this.src;
        modalImg.style.width = "1500px";
        modalImg.style.height = "600px";
    });
});

document.querySelectorAll(".display0 img").forEach(img => {
    img.addEventListener('click', function () {

        imageModal.style.display = 'block';
        modalImg.src = this.src;
        modalImg.style.width = "1500px";
        modalImg.style.height = "600px";

    });
});

close.addEventListener('click', () => {
    imageModal.style.display = "none";
});

imageModal.addEventListener('click', function () {
    imageModal.style.display = "none";
});

const logout = document.getElementById('logout');

logout.addEventListener('click', () => {
    const pop1 = document.getElementById('pop1').style.display = "flex";
    document.getElementById('pop2').style.display = 'block';
});

function proceedtoLogout() {
    window.location.href = "index.html";
}
function canceling() {
    pop1.style.display = 'none';
}
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
const fullscreen = document.getElementById("fullscreen");

fullscreen.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
        document.webkitExitFullscreen();
    } else if (document.msFullscreenElement) {
        document.msExitFullscreen();
    } else {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { 
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { 
            document.documentElement.msRequestFullscreen();
        }
    }
});
