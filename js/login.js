const openPopup = document.getElementById("login");
const closePopup = document.getElementById("close");
const login = document.getElementById("loginBtn");

let background = document.getElementById('background');

function paintLoginPopup() {
    
    let div_window = `
        <div class="window">
            <div class="popup">
                <button id="close">닫기</button>
            </div>
        </div>`;
    
    let div = document.createElement("div");
    div.id = 'background';
    div.className = 'background show';
    div.innerHTML = div_window;
    document.body.appendChild(div);
}

function removeLoginPopUp() {
    let background = document.getElementById("background");
    background.remove();
}

function showLoginPopup() {
    background.classList.add('show');
}

function closeLoginPopup() {
    background.classList.remove('show');
}

function loginPromise() {
    console.log(1);
    
}

openPopup.addEventListener("click", showLoginPopup);
closePopup.addEventListener("click", closeLoginPopup);
login.addEventListener("click", loginPromise);