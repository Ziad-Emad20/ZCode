// All Courses
const pathAllCourse = "/Courses/courses.json";
const idForCourses = "courses-wrapper";
// HTML Video
const pathHtmlVideo = '/Courses/Html.json';
const idForHtmlVideo = 'htmlCoursePage';
// Bootstrap Video
const pathBootstrapVideo = '/Courses/bootstrap.json';
const idForBootstrapVideo = 'bootstrapCoursePage';
//  Get Data
async function fetchCourses(url,idForContainer) {
  try {
    const res = await fetch(url);
    const courses = await res.json();
    console.log(courses);
    displayCourses(courses, idForContainer);
  } catch (err) {
    console.error("Faild: ", err);
  }
}
// Create Card
function createCourseSlide(course) {
  return `
        <div class="swiper-slide d-flex justify-content-center">
          <div class="card course-card shadow-sm ">
            <img src="${course.thumbnail}" class="card-img-top " alt="${course.title}">
            <div class="card-body">
              <h6 class="card-title fw-bold">${course.title}</h6>
              <h6 class="card-text text-muted">Instractor: <strong>${course.instractor}</strong></h6>
              <a href="${course.pagePath}" target="blank" class="btn btn-primary w-100 mt-2" >${course.txtBtn}</a>
            </div>
          </div>
        </div>
      `;
}
// Display Card
function displayCourses(courses, idForContainer) {
  const wrapper = document.getElementById(idForContainer);
  wrapper.innerHTML = courses.map(createCourseSlide).join("");
}
// Set All Courses
fetchCourses(pathAllCourse, idForCourses);
// Set HTML Video
fetchCourses(pathHtmlVideo,idForHtmlVideo)
// Set Bootstrap Video
fetchCourses(pathBootstrapVideo,idForBootstrapVideo)


// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  //   loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
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
