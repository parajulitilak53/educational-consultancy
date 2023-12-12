let menuToggle = document.querySelector(".menuToggle");
let navbar = document.querySelector(".navbar");

menuToggle.onclick = function () {
  navbar.classList.toggle("active");
};

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

let abroadArrow = document.querySelector(".abroad-arrow");
let abroadDropContent = document.querySelector(".abroad-dropdown-content");

abroadArrow.onclick = function () {
  abroadDropContent.classList.toggle("show1");
};

let testArrow = document.querySelector(".test-arrow");
let testDropContent = document.querySelector(".test-dropdown-content");

testArrow.onclick = function () {
  testDropContent.classList.toggle("show2");
};

window.onclick = function (event) {
  if (!event.target.matches(".abroad-arrow")) {
    var abroaddropdowns = document.getElementsByClassName(
      "abroad-dropdown-content"
    );
    var i;
    for (i = 0; i < abroaddropdowns.length; i++) {
      var abroadOpenDropdown = abroaddropdowns[i];
      if (abroadOpenDropdown.classList.contains("show1")) {
        abroadOpenDropdown.classList.remove("show1");
      }
    }
  }
  if (!event.target.matches(".test-arrow")) {
    var testdropdowns = document.getElementsByClassName(
      "test-dropdown-content"
    );
    var j;
    for (j = 0; j < testdropdowns.length; j++) {
      var testOpenDropdown = testdropdowns[j];
      if (testOpenDropdown.classList.contains("show2")) {
        testOpenDropdown.classList.remove("show2");
      }
    }
  }
};

// window.onclick = function (event) {
//   if (!event.target.matches(".test-arrow")) {
//     var testdropdowns = document.getElementsByClassName("test-dropdown-content");
//     var j;
//     for (j = 0; j < testdropdowns.length; j++) {
//       var testOpenDropdown = testdropdowns[j];
//       if (testOpenDropdown.classList.contains("show2")) {
//         testOpenDropdown.classList.remove("show2");
//       }
//     }
//   }
// };
