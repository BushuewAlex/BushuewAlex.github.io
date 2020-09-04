var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (Event) {
    if (Event.target == modal) {
        modal.style.display = "none";
    }
}



var modal__first = document.getElementById('myModal__first');
var btn__first = document.getElementById('myBtn__first');
var span__first = document.getElementsByClassName("close__first")[0];

btn__first.onclick = function () {
    modal__first.style.display = "block";
}

span__first.onclick = function () {
    modal__first.style.display = "none";
}

window.onclick = function (Event) {
    if (Event.target == modal__first) {
        modal__first.style.display = "none";
    }
}



var modal__second = document.getElementById('myModal__second');
var btn__second = document.getElementById('myBtn__second');
var span__second = document.getElementsByClassName("close__second")[0];

btn__second.onclick = function () {
    modal__second.style.display = "block";
}

span__second.onclick = function () {
    modal__second.style.display = "none";
}

window.onclick = function (Event) {
    if (Event.target == modal__second) {
        modal__second.style.display = "none";
    }
}



var modal__thirth = document.getElementById('myModal__thirth');
var btn__thirth = document.getElementById('myBtn__thirth');
var span__thirth = document.getElementsByClassName("close__thirth")[0];

btn__thirth.onclick = function () {
    modal__thirth.style.display = "block";
}

span__thirth.onclick = function () {
    modal__thirth.style.display = "none";
}

window.onclick = function (Event) {
    if (Event.target == modal__thirth) {
        modal__thirth.style.display = "none";
    }
}



let coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content__collapsible = this.nextElementSibling();
        if (content__collapsible.style.maxHeight) {
            content__collapsible.style.maxHeight = null;
        } else {
            content__collapsible.style.maxHeight = content__collapsible.scrollHeight + "px";
        }
    })
}