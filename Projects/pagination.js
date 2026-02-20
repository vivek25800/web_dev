const sections = document.querySelectorAll('.course-section');
const paginationLinks = document.querySelectorAll('.pagination li a');
const prevButton = document.querySelector('.prev-btn a');
const nextButton = document.querySelector('.next-btn a');

// Initial page index
let currentPageIndex = 0;

// Function to navigate to a specific page
function goToPage(pageIndex) {
  if (pageIndex < 1 || pageIndex > sections.length || pageIndex === currentPageIndex + 1) {
    return;
  }
  
  const offset = (pageIndex - 1) * -100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  
  currentPageIndex = pageIndex - 1;
  
  // Update active class for pagination links
  paginationLinks.forEach((link, index) => {
    if (index === currentPageIndex + 1) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Function to move carousel by one section forward or backward
function moveCarousel(direction) {
  currentPageIndex = (currentPageIndex + direction + sections.length) % sections.length;
  const offset = currentPageIndex * -100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  
  // Update active class for pagination links
  paginationLinks.forEach((link, index) => {
    if (index === currentPageIndex + 1) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initial active state for first page
paginationLinks[1].classList.add('active');
