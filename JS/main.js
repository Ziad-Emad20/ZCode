 async function fetchCourses() {
      try {
        const res = await fetch('/Courses/courses.json'); // عدل المسار حسب مكان الملف
        const courses = await res.json();
        console.log(courses);
        displayCourses(courses);
        initSwiper(); // بعد ما الكروت تتولد
      } catch (err) {
        console.error("Faild: ", err);
      }
    }

    function createCourseSlide(course) {
      return `
        <div class="swiper-slide d-flex justify-content-center">
          <div class="card course-card shadow-sm ">
            <img src="${course.thumbnail}" class="card-img-top " alt="${course.title}">
            <div class="card-body">
              <h6 class="card-title fw-bold">${course.title}</h6>
              <h6 class="card-text text-muted">Instractor: <strong>${course.instractor}</strong></ا>
              <a href="${course.pagePath}" class="btn btn-primary w-100 mt-3" onclick="event.preventDefault();">Start Course</a>
            </div>
          </div>
        </div>
      `;
    }

    function displayCourses(courses) {
      const wrapper = document.getElementById('courses-wrapper');
      wrapper.innerHTML = courses.map(createCourseSlide).join('');
    }

fetchCourses();



// Swiper
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  centerSlides: true,
  loop: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,

  },
  autoplay: {
    delay: 3000,   
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
