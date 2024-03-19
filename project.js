const submitButton = document.querySelector(".js_submit");
const divElement = document.querySelector("[data-content-area]");
const closeButton = document.querySelectorAll(".close_out");
const questionButton = document.querySelector(".questions_button");
const learnButton1 = document.querySelector(".learn_more1");
const learnButton2 = document.querySelector(".learn_more2");
const learnButton3 = document.querySelector(".learn_more3");
const learnButton4 = document.querySelector(".learn_more4");
const learnButton5 = document.querySelector(".learn_more5");
const learnButton6 = document.querySelector(".learn_more6");
const learnButton7 = document.querySelector(".learn_more7");
const learnButton8 = document.querySelector(".learn_more8");
const learnButton9 = document.querySelector(".learn_more9");
const learnButton10 = document.querySelector(".learn_more10");
const learnButton11 = document.querySelector(".learn_more11");
const learnButton12 = document.querySelector(".learn_more12");

  closeButton.forEach(element => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
const questionButton = document.querySelector(".question_card");
questionButton.classList.add("hidden");
});
});

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const dateInput = document.querySelector(".js_date");
    let birthDate = new Date(dateInput.value);
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    getYourSign(month, day, year);
});

questionButton.addEventListener("click", function () {
    const questionButton = document.querySelector(".question_card");
    questionButton.classList.toggle("hidden");
});

learnButton1.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".sza_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".sza_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton2.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".brent_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".brent_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton3.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".summer_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".summer_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton4.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".giveon_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".giveon_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton5.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".daniel_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".daniel_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton6.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".jhene_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".jhene_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton7.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".frank_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".frank_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton8.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".steve_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".steve_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton9.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".anderson_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".anderson_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton10.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".queen_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".queen_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton11.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".beyonce_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".beyonce_card");
    questionButton.classList.add("hidden");
    });
    });
});
learnButton12.addEventListener("click", function () {
    const learnButton1 = document.querySelector(".alicia_card");
    learnButton1.classList.toggle("hidden");

    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
    const questionButton = document.querySelector(".alicia_card");
    questionButton.classList.add("hidden");
    });
    });
});

function getYourSign(month, day, year) {
    let yourSign;
    if (month >= 3 && month <= 4) { 
        if (month == 3 && day < 21) { 
            yourSign = "Pisces"; 
        }
        else if (month == 4 && day > 19) { 
            yourSign = "Taurus";
        }
        else {
            yourSign = "Aries";
        }
    }

    else if (month >= 4 && month <= 5) { 
        if (month == 4 && day < 20) { 
            yourSign = "Aries"; 
        }
        else if (month == 5 && day > 20) { 
            yourSign = "Gemini";
        }
        else {
            yourSign = "Taurus";
        }
    }
    else if (month >= 5 && month <= 6) { 
        if (month == 5 && day < 21) { 
            yourSign = "Taurus"; 
        }
        else if (month == 6 && day > 20) {
            yourSign = "Cancer";
        }
        else {
            yourSign = "Gemini";
        }
    }
    else if (month >= 6 && month <= 7) { 
        if (month == 6 && day < 21) { 
            yourSign = "Gemini"; 
        }
        else if (month == 7 && day > 22) { 
            yourSign = "Leo";
        }
        else {
            yourSign = "Cancer";
        }
    }
    else if (month >= 7 && month <= 8) { 
        if (month == 7 && day < 23) { 
            yourSign = "Cancer"; 
        }
        else if (month == 7 && day > 22) {
            yourSign = "Virgo";
        }
        else {
            yourSign = "Leo";
        }
    }
    else if (month >= 8 && month <= 9) { 
        if (month == 8 && day < 23) { 
            yourSign = "Leo";
        }
        else if (month == 7 && day > 22) { 
            yourSign = "Libra";
        }
        else {
            yourSign = "Virgo"; 
        }
    }
    else if (month >= 9 && month <= 10) {
        if (month == 9 && day < 23) { 
            yourSign = "Virgo"; 
        }
        else if (month == 7 && day > 22) { 
            yourSign = "Scorpio";
        }
        else {
            yourSign = "Libra"; 
        }
    }
    else if (month >= 10 && month <= 11) { 
        if (month == 10 && day < 23) {
            yourSign = "Libra";
        }
        else if (month == 11 && day > 21) { 
            yourSign = "Sagittarius";
        }
        else {
            yourSign = "Scorpio";
        }
    }
    else if (month >= 11 && month <= 12) {
        if (month == 11 && day < 22) { 
            yourSign = "Scorpio"; 
        }
        else if (month == 12 && day > 21) { 
            yourSign = "Capricorn";
        }
        else {
            yourSign = "Sagittarius";
        }
    }
    else if (month >= 12 && month <= 1) { 
        if (month == 12 && day < 22) {
            yourSign = "Sagittarius";
        }
        else if (month == 1 && day > 19) { 
            yourSign = "Aquarius";
        }
        else {
            yourSign = "Capricorn";
        }
    }
    else if (month >= 1 && month <= 2) { 
        if (month == 1 && day < 20) {
            yourSign = "Capricorn"; 
        }
        else if (month == 2 && day > 18) { 
            yourSign = "Pisces";
        }
        else {
            yourSign = "Aquarius";
        }
    }
    else {
        yourSign = "Pisces";
    }

    let artist;

    if (yourSign == "Aquarius") {
        audio = document.getElementById("audio_sza");
        artist = document.getElementById("sza");
    }
    else if (yourSign == "Pisces") {
        audio = document.getElementById("audio_brent");
        artist = document.getElementById("brent");
    }
    else if (yourSign == "Aries") {
        audio = document.getElementById("audio_summer");
        artist = document.getElementById("summer");
    }
    else if (yourSign == "Taurus") {
        audio = document.getElementById("audio_giveon");
        artist = document.getElementById("giveon");
    }
    else if (yourSign == "Gemini") {
        audio = document.getElementById("audio_daniel");
        artist = document.getElementById("daniel");
    }
    else if (yourSign == "Cancer") {
        audio = document.getElementById("audio_jhene");
        artist = document.getElementById("jhene");
    }
    else if (yourSign == "Leo") {
        audio = document.getElementById("audio_frank");
        artist = document.getElementById("frank");
    }
    else if (yourSign == "Virgo") {
        audio = document.getElementById("audio_steve");
        artist = document.getElementById("steve");
    }
    else if (yourSign == "Libra") {
        audio = document.getElementById("audio_anderson");
        artist = document.getElementById("anderson");
    }
    else if (yourSign == "Scorpio") {
        audio = document.getElementById("audio_queen");
        artist = document.getElementById("queen");
    }
    else if (yourSign == "Sagittarius") {
        audio = document.getElementById("audio_beyonce");
        artist = document.getElementById("beyonce");
    }
    else if (yourSign == "Capricorn") {
        audio = document.getElementById("audio_alicia");
        artist = document.getElementById("alicia");
    }

    artist.classList.remove("hidden");
    audio.play();
    console.log(closeButton);
    closeButton.forEach(element => {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            artist.classList.add("hidden");
            audio.pause();
        });
    });
}