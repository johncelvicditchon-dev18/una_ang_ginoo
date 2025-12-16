const username = document.getElementById('username-log'); const password = document.getElementById('password-log'); const message = document.getElementById('message');
const sign = document.getElementById("signup"); const load = document.getElementById('loading'); const loginbutton = document.getElementById('loginbutton');
const dev = document.getElementById('devinfo'); const popUp = document.getElementById('popUpGwapo'); const show = document.getElementById('show-log');
const donotshow = document.getElementById('donotshow-log'); const notice = document.getElementById('notice'); const notice1 = document.getElementById('notice1');

message.addEventListener('click', (e) => { if (e.target.classList.contains('fa-x')) { message.style.display = 'none'; } });
sign.addEventListener('click', () => {
    alert("Username: johncel | Password: ditchon");

})
show.addEventListener('click', () => {
    if (password.type === "password") {
        donotshow.style.display = 'block';
        show.style.display = 'none';
        password.type = 'text';
    }

});
donotshow.addEventListener('click', () => {
    if (password.type === 'text') {
        show.style.display = 'block';
        password.type = 'password';
        donotshow.style.display = 'none';
    }
});
password.addEventListener('input', () => {
    if (password.value === "") {
        show.style.display = "none";
    }
    else {
        show.style.display = "block";
    }
});
dev.addEventListener('click', () => {
    popUp.style.display = 'block';
    document.getElementById('popUpGwapo1').style.display = 'block';

});
popUp.addEventListener('click', () => {
    popUp.style.display = 'none';
});
username.addEventListener('click', () => {
    username.style.border = 'none';
    password.style.border = 'none';
    notice.style.display = 'none';
    notice1.style.display = 'none';
});
password.addEventListener('click', () => {
    username.style.border = 'none';
    password.style.border = 'none';
    notice.style.display = 'none';
    notice1.style.display = 'none';
});


function login(event, form) {
    event.preventDefault();
    const user = username.value.trim();
    const pass = password.value.trim();

    if (user == "johncel" && pass == "ditchon") {
        load.style.display = "block";
        loginbutton.style.fontSize = "14px";
        show.style.display = "none";
        donotshow.style.display = "none";
        message.style.cssText = `
            display: block;
            color: #00a300;
            font-size: 15px;
            font-weight: 500;
            box-shadow: 0 2px 15px rgba(0, 163, 0, 0.80);
            padding: 8px 12px;
            border: 1px solid #00a300;
            border-radius: 5px;
            background-color: #FDECEA;
        `;

        message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Login Successfully!'
        username.value = "";
        password.value = "";

        setTimeout(() => {
            window.location.href = "main.html";
        }, 3000);
        return;
    }
    else if (user === "" && pass === "") {
        message.style.cssText = `
                display: block;
                color: maroon;
                font-size: 14px;
                font-weight: 500px;
                box-shadow: 0 2px 10px rgba(231, 76, 60, 0.4);
                padding: 8px 12px;  
                border-radius: 5px;
                background-color: #FDECEA;
                `;
        message.innerHTML = ' Please complete all required fields. <i class="fa-solid fa-x" id="fa-x"></i>';
        return;
    }

    else if (user === "") {
        notice.style.display = 'block';
        username.style.border = "1px solid maroon";
        message.style.cssText = `
            display: block;
            color: maroon;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 2px 10px rgba(231, 76, 60, 0.4);
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #FDECEA;
        `;

        message.innerHTML = 'Please enter your username.<i class="fa-solid fa-x"></i>'
        return;
    }
    else if (pass === "") {
        notice1.style.display = 'block';
        password.style.border = "1px solid maroon";
        donotshow.style.display = 'none';
        message.style.cssText = `
            display: block;
            color: maroon;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 2px 10px rgba(231, 76, 60, 0.4);
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #FDECEA;
        `;
        message.innerHTML = 'Please enter your password.<i class="fa-solid fa-x"></i>';
        return;
    }
    else {
        message.style.cssText = `
            display: block;
            color: maroon;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 2px 10px rgba(231, 76, 60, 0.4);
            padding: 8px 12px;
            border-radius: 5px;
            background-color: #FDECEA;
        `;
        message.innerHTML = 'Incorrect username or password. <i class="fa-solid fa-x"></i>';


    }
}

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



