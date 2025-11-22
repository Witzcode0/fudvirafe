// USER DROPDOWN
const userIcon = document.querySelector(".user-dropdown");
userIcon.addEventListener("click", () => {
    userIcon.classList.toggle("show");
});

// Close dropdown on outside click
document.addEventListener("click", (e) => {
    if (!userIcon.contains(e.target)) {
        userIcon.classList.remove("show");
    }
});


const items = document.querySelectorAll(".category-item");
const preview = document.getElementById("categoryPreview");

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        preview.src = item.getAttribute("data-img");
    });
});
const track = document.getElementById("track");
const slides = Array.from(track.children);
const dotsContainer = document.getElementById("dots");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

/* Create dots */
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.children;

/* Go to Slide */
function goToSlide(i) {
  currentIndex = i;
  const width = track.clientWidth;
  track.style.transform = `translateX(-${i * width}px)`;
  updateDots();
}

/* Update dots */
function updateDots() {
  [...dots].forEach((d, i) =>
    d.classList.toggle("active", i === currentIndex)
  );
}

/* Navigation Buttons */
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});

/* Auto Scroll */
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
}, 3500);

/* Pause on Hover */
track.addEventListener("mouseenter", () => clearInterval(autoSlide));
track.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  }, 3500);
});

/* Responsive Screen Fix */
window.addEventListener("resize", () => goToSlide(currentIndex));
