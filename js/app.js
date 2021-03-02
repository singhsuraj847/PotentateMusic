$(document).ready(function () {
  var main = document.querySelector(".container");
  var sections = document.querySelectorAll("section");

  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
  $(".menu a").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
  $(main).on("scroll", function () {
    handleActiveLink(sections, main);
    var scroll = $(main).scrollTop();
    if (scroll > 300) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
  activeLinkControl();
});

function activeLinkControl() {
  $(".navbar-nav .nav-item a").click(function () {
    // $(".nav-item").removeClass("active");
    $(this).closest(".nav-item").siblings().removeClass("active");

    $(this).closest(".nav-item").addClass("active");
  });
}

function handleActiveLink(sections, main) {
  var scrollPosition = $(main).scrollTop();

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
}

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  var selector = `nav a[href="#${id}"]`;
  console.log(selector);
  document.querySelector(selector).classList.add("active");
};
