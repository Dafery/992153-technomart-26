for(var buy=document.querySelectorAll(".btn-buy"),buyPopup=document.querySelector(".item-added"),buyExit=document.querySelector(".item-added-exit"),i=0;i<buy.length;i++){var buyItem=buy[i];buyItem.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.add("modal-show")})}buyExit.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&buyPopup.classList.contains("modal-show")&&(e.preventDefault(),buyPopup.classList.remove("modal-show"))});var feedback=document.querySelector(".btn-feedback"),feedbackPopup=document.querySelector(".modal-question"),feedbackExit=document.querySelector(".modal-question-exit"),userName=feedbackPopup.querySelector("[name=user-name]"),email=feedbackPopup.querySelector("[name=email]"),userText=feedbackPopup.querySelector("[name=user-text]"),form=feedbackPopup.querySelector(".question"),map=document.querySelector(".cart-img"),mapPopup=document.querySelector(".map-popup"),mapExit=document.querySelector(".map-exit");function init(){var e=new ymaps.Map("map",{center:[59.938631,30.323055],zoom:[16]}),o=new ymaps.Placemark([59.938631,30.323055],{balloonContent:"г.Санкт-Петербург, ул.Б.Конюшенная, д.19/8",hintContent:"г.Санкт-Петербург, ул.Б.Конюшенная, д.19/8"});e.geoObjects.add(o),o.balloon.open()}map.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapExit.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),feedback.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.add("modal-show"),userName.focus()}),feedbackExit.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.remove("modal-show"),feedbackPopup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){userName.value&&email.value&&userText.value||(e.preventDefault(),feedbackPopup.classList.remove("modal-error"),feedbackPopup.offsetWidth=feedbackPopup.offsetWidth,feedbackPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(feedbackPopup.classList.contains("modal-show")&&(e.preventDefault(),feedbackPopup.classList.remove("modal-show"),feedbackPopup.classList.remove("modal-error")),mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show")),buyPopup.classList.contains("modal-show")&&(e.preventDefault(),buyPopup.classList.remove("modal-show")))}),ymaps.ready(init);