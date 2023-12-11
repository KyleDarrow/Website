
// automatically trasitions between photos
function imageSlider() {
    var counter = 2;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 4) {
            counter = 1;
        }
    }, 5000);
}

function gitClick() {
    window.open("https://github.com/KyleDarrow?tab=repositories", "_blank");
}

function process() {
    window.open("https://github.com/KyleDarrow/ProcessScheduling", "_blank");
}

function para() {
    window.open("https://github.com/KyleDarrow/Parasocial", "_blank");
}

function flight() {
    window.open("https://github.com/KyleDarrow/ShortestFlight", "_blank");
}

function validate() {
    let person = document.getElementById("person").value.trim();
    let mail = document.getElementById("mail").value.trim();
    let mess = document.getElementById("mess").value.trim();

    if (person === "" || mail === "" || mess === "") {
        displayAlert("All fields must be filled out.");
        return false;
    }
    document.forms["feedback"].submit();
}

function displayAlert(notification) {
    let alertBox = document.getElementById("alerts");
    alertBox.innerHTML = `<div class="alert">${notification}</div>`;
    alertBox.classList.add("show");
}

new Vue({
    el: '#app',
    data: {
        visible: false,
        text: "Show me!"
    },
    methods: {
        toggleTable() {
            this.visible = !this.visible;
            this.text = this.visible ? "I've seen enough" : "Show me!"
        }
    }
});
