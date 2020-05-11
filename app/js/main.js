const selectedAll = document.querySelectorAll(".select-box__current");

selectedAll.forEach((selected) => {
  const selectedBody = selected.previousElementSibling;
  const selectedList = selectedBody.querySelectorAll(".select-box__body-item");

  selected.addEventListener("click", () => {
    if (selectedBody.classList.contains("active")) {
      selectedBody.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".select-box__body.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }
      selectedBody.classList.add("active");
    }
  });

  selectedList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      selectedBody.classList.remove("active");
    });
  });
});

// $(document).ready(function () {
//   $(".slider").slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//   });
// });

const gallerySwiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 5,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // clickable: true,
  },
});

new WOW().init();
