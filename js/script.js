var buy = document.querySelectorAll(".btn-buy");
var buyPopup = document.querySelector(".item-added");
var buyExit = document.querySelector(".item-added-exit");

for (var i = 0; i < buy.length; i++) {
  var buyItem = buy[i];
  buyItem.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
  });
};
buyExit.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    }
  }
});

var feedback = document.querySelector(".btn-feedback");
var feedbackPopup = document.querySelector(".modal-question");
var feedbackExit = document.querySelector(".modal-question-exit");
var userName = feedbackPopup.querySelector("[name=user-name]");
var email = feedbackPopup.querySelector("[name=email]");
var userText = feedbackPopup.querySelector("[name=user-text]");
var form = feedbackPopup.querySelector(".question");
var map = document.querySelector(".cart-img");
var mapPopup = document.querySelector(".map-popup");
var mapExit = document.querySelector(".map-exit");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapExit.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
  userName.focus();
});
feedbackExit.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});
form.addEventListener("submit", function(evt) {
  if (!userName.value || !email.value || !userText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
    if (buyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      buyPopup.classList.remove("modal-show");
    }
  }
});