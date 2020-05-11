const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const navlinks = document.querySelector("#nav_links_container");
const navsocial = document.querySelector("#nav_social_container");
const nav = document.querySelector("#nav");
const logoblue = document.querySelector(".logo_blue");
const logowhite = document.querySelector(".logo_white");

hamburger.addEventListener("click" , function() {
  hamburger.style.display = "none";
  close.style.display = "block";
  navlinks.style.display ="block";
  navsocial.style.display ="block";
  nav.classList.add("blue");
  logowhite.style.display = "block";
  logoblue.style.display = "none";
});

close.addEventListener("click", function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  navlinks.style.display = "none";
  navsocial.style.display = "none";
  nav.classList.remove("blue");
  logoblue.style.display = "block";
  logowhite.style.display = "none";
});

window.addEventListener ("resize", function() {
  if (window.innerWidth < 992) {
    hamburger.style.display = "block";
  }
  else {
    hamburger.style.display = "none";
  }
});

const btn_feature1 = document.querySelector("#btn_feature1");
const btn_feature2 = document.querySelector("#btn_feature2");
const btn_feature3 = document.querySelector("#btn_feature3");
const feature1 = document.querySelector("#feature1");
const feature2 = document.querySelector("#feature2");
const feature3 = document.querySelector("#feature3");

btn_feature1.addEventListener("click", function() {
  feature1.style.display = "block";
  feature2.style.display = "none";
  feature3.style.display = "none";
  btn_feature1.classList.remove("btn_features");
  btn_feature1.classList.add("btn_features_active");
  btn_feature2.classList.add("btn_features");
  btn_feature2.classList.remove("btn_features_active");
  btn_feature3.classList.add("btn_features");
  btn_feature3.classList.remove("btn_features_active");
});

btn_feature2.addEventListener("click", function() {
  feature1.style.display = "none";
  feature2.style.display = "block";
  feature3.style.display = "none";
  btn_feature2.classList.add("btn_features_active");
  btn_feature2.classList.remove("btn_features");
  btn_feature1.classList.remove("btn_features_active");
  btn_feature1.classList.add("btn_features");
  btn_feature3.classList.add("btn_features");
  btn_feature3.classList.remove("btn_features_active");
});

btn_feature3.addEventListener("click", function() {
  feature1.style.display = "none";
  feature2.style.display = "none";
  feature3.style.display = "block";
  btn_feature3.classList.add("btn_features_active");
  btn_feature3.classList.remove("btn_features");
  btn_feature2.classList.add("btn_features");
  btn_feature2.classList.remove("btn_features_active");
  btn_feature1.classList.add("btn_features");
  btn_feature1.classList.remove("btn_features_active");
});

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active_accordion");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
