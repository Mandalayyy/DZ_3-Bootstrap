const progress = document.querySelector('.progress-bar-site');
window.onload = function() {
    inactivityTime();
  }
window.addEventListener('scroll', progressBar);

function progressBar(e) {
let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let per = windowScroll / windowHeight *100;

progress.style.width = per+'%';

}

/* document.addEventListener('contextmenu', event => event.preventDefault());
window.onkeydown = function(evt) {
    if(evt.keyCode == 123) return false;
};
window.onkeypress = function(evt) {
    if(evt.keyCode == 123) return false;
}; */

let inactivityTime = function () {
    let time;
    window.onload = resetTimer;
    // DOM Events
    document.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onmousedown = resetTimer; // touchscreen presses
    document.ontouchstart = resetTimer;
    document.onclick = resetTimer;     // touchpad clicks
    document.onkeydown = resetTimer;   // onkeypress is deprectaed
    document.addEventListener('scroll', resetTimer, true); // improved; see comments
    function logout() {
        var the_answer = confirm("Ви ще тут?");
        if (the_answer == true) {
            resetTimer;
        } else {
            window.open("register.html", '_self');
            window.close();
        }
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 5*60000)
        // 1000 milliseconds = 1 second
    }
};

let browserName = (function (agent) {        switch (true) {
    case agent.indexOf("edge") > -1: return "MS Edge";
    case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
    case agent.indexOf("trident") > -1: return "MS IE";
    case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
    case agent.indexOf("safari") > -1: return "Safari";
    default: return "other";
}
})(window.navigator.userAgent.toLowerCase());
document.querySelector(".browser-info").innerText="You are using "+ browserName +" browser";
document.querySelector(".full-info").innerText=navigator.userAgent;

function myFunction() {
    let nav = document.querySelector('.nav-site');
    nav.classList.toggle("bg-dark");
    let main = document.querySelector('main');
    main.classList.toggle('bg-secondary');
    let header = document.querySelector('header');
    let footer = document.querySelector('footer');
    header.classList.toggle("bg-dark");
    footer.classList.toggle("bg-dark");
    footer.classList.toggle("text-white");
    let mode = document.querySelector('.mode');
    mode.classList.toggle('bg-light');
    mode.classList.toggle('text-dark');
    if (mode.textContent.toLowerCase().includes('dark')) {
        mode.textContent = 'Light';
      } else {
        mode.textContent = 'Dark';
      }

    };

    function scrollToTop() {
        var position =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (position) {
            window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
            scrollAnimation = setTimeout("scrollToTop()", 30);
        } else clearTimeout(scrollAnimation);
    }