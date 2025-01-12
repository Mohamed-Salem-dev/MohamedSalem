//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

// document.addEventListener("DOMContentLoaded", () => {
// createElement in Dom
let layerScreen = document.createElement("div");
layerScreen.className = "box-layer-screen";
layerScreen.textContent = "";
// تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
document.body.appendChild(layerScreen);
let navbarComprehensive = document.querySelector(".box-navbar");
layerScreen.remove();

//   --------------------------------------------------
btnToggle.onclick = () => {
  // console.log("btnToggle");
  listNav.classList.toggle("active");

  // ---------------------
  if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
    navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
    setTimeout(() => {
      layerScreen.classList.add("visible");
    }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
  } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
    layerScreen.classList.toggle("visible");
  }
};

//   -----------------------------
btnCloseNav.onclick = () => {
  console.log("btnCloseNav");
  listNav.classList.remove("active");

  //-------------------
  if (layerScreen && navbarComprehensive.contains(layerScreen)) {
    layerScreen.classList.remove("visible");

    setTimeout(() => {
      layerScreen.remove();
    }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
  }
};

// -------------------------------
layerScreen.onclick = () => {
  console.log("layerScreen");
  listNav.classList.remove("active");
  if (layerScreen && navbarComprehensive.contains(layerScreen)) {
    layerScreen.classList.remove("visible");

    setTimeout(() => {
      layerScreen.remove();
    }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
  }
};
// });
// ====================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".item-nav-link");
  const sections = document.querySelectorAll(".section-link-nav");

  // وظيفة لإزالة الفئة النشطة من جميع الروابط
  const removeActiveClasses = () => {
    links.forEach((link) => link.classList.remove("active"));
  };

  // وظيفة لتحديد الرابط النشط بناءً على القسم المرئي
  const setActiveLink = () => {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    removeActiveClasses();
    links[index].classList.add("active");
  };

  // إضافة مستمع النقر على الروابط
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      removeActiveClasses();
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    });
  });

  // إضافة مستمع للتمرير لتحديث الرابط النشط
  window.addEventListener("scroll", setActiveLink);

  // تعيين الرابط النشط عند تحميل الصفحة
  setActiveLink();
});

// ====================================================================================================
// Companies & CLIENTS

$(document).ready(function(){
  $(".owl-carousel-client-companies").owlCarousel({
    dots: true,
  
    items: 4,
    loop: true,
    margin: 10,
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  
    responsive: {
      0: {
        items: 3,
      },
      415: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1199: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});




// $(".play").on("click", function () {
//   owl.trigger("play.owl.autoplay", [1000]);
// });
// $(".stop").on("click", function () {
//   owl.trigger("stop.owl.autoplay");
// });

// ======================================================
// ACHIEVEMENTS
function dt_counterFlip() {
  var oTop = $(".counterTop").offset().top - window.innerHeight;
  $(window).bind("scroll", function () {
    var pTop = $(this).scrollTop();

    if (pTop > oTop) {
      $(window).unbind("scroll");
      $(".count", ".counterTop").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 5000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }
  });
}
$(document).ready(function () {
  dt_counterFlip();
});

// ======================================================================

// const elements = document.querySelectorAll('.box-titel-skills');

//   // Loop through each element and apply alternating border colors
//   elements.forEach((element, index) => {
//     if (index % 2 === 0) {
//       element.style.borderLeftColor = '#b621fe'; // First color
//     } else {
//       element.style.borderLeftColor = '#1fd1f9'; // Second color
//     }
//   });
// ====================================================================================================================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (error) => {
        console.log("ServiceWorker registration failed: ", error);
      }
    );
  });
}

// ======================================================================
