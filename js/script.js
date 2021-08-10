// Countdown
const countdown = () => {
  const countDate = new Date("August 17, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

// Maps
// Initialize and add the map
function initMap() {
  // Map options
  const place = { lat: -7.727989, lng: 109.005913 };
  // New map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: place,
  });
  // Add marker
  const marker = new google.maps.Marker({
    position: place,
    map: map,
  });
}

// Popup Wedding Gift
// Popup Transer
const openPopupBtns = document.querySelectorAll("[data-popup-target]");
const closePopupBtns = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openPopupBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.popupTarget);
    openPopup(popup);
  });
});

closePopupBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

// Popup Kirim
const closePopupBtns2 = document.querySelectorAll("[data-close-button-2]");

closePopupBtns2.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup2");
    closePopup(popup);
  });
});

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

// Event pada saat button di klik
$(".page-scroll").on("click", function (e) {
  // Ambil isi href
  const tujuan = $(this).attr("href");

  // Tangkap elemen yang bersangkutan
  const elemenTujuan = $(tujuan);

  // Pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top,
    },
    1000,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// Parallax
$(window).scroll(function () {
  // Date
  const wScroll = $(this).scrollTop();
  if (wScroll > $(".date").offset().top - 300) {
    setTimeout(function () {
      $(".date .countdown").addClass("show");
    }, 300);
  }

  if (wScroll > $(".date").offset().top - 200) {
    setTimeout(function () {
      $(".date .caption-date").addClass("show");
    }, 500);
  }

  if (wScroll > $(".date").offset().top - 300) {
    setTimeout(function () {
      $(".date .schedule").addClass("show");
    }, 300);
  }

  // The Couples
  if (wScroll > $(".couples").offset().top - 700) {
    setTimeout(function () {
      $(".couples .container").addClass("show");
    }, 1000);
  }

  if (wScroll > $(".couples").offset().top - 650) {
    setTimeout(function () {
      $(".couples .woman").addClass("show");
    }, 1000);
  }

  if (wScroll > $(".couples").offset().top - 600) {
    setTimeout(function () {
      $(".couples .man").addClass("show");
    }, 1000);
  }

  // When & Where
  if (wScroll > $(".place").offset().top - 500) {
    setTimeout(function () {
      $(".place .card").addClass("show");
    }, 1000);
  }

  // Prokes
  if (wScroll > $(".prokes").offset().top + 300) {
    setTimeout(function () {
      $(".prokes .attention").addClass("show");
    }, 500);
  }

  // Wedding Gift
  if (wScroll > $(".gift").offset().top - 600) {
    setTimeout(function () {
      $(".gift .card").addClass("show");
    }, 1000);
  }
});

// Comment Wishes
function render(data) {
  const html =
    "<div class='comment-box'><span>" +
    data.name +
    "</span><p>" +
    data.text +
    "</p></div>";
  $(".wish .comment").append(html);
}

$(document).ready(function () {
  const comment = [{ name: "Rai Akmal", text: "Hello World" }];

  for (let i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $(".wish .btn").click(function () {
    const addObj = {
      name: $("#formGroupInput").val(),
      text: $("#formControlTextarea1").val(),
    };

    alert("Terima Kasih Atas Ucapan dan Do'a nya");

    comment.push(addObj);
    render(addObj);
    $("#formGroupInput").val("");
    $("#formControlTextarea1").val("");
  });
});

// Scroll Up
window.addEventListener("scroll", function () {
  const scroll = document.querySelector(".scrollUp");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollUp() {
  window.scrollTo(
    {
      top: 0,
    },
    "easeInOutExpo"
  );
}
