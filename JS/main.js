let navbar_resposive = document.querySelector(".navbar-resposive");
let navbar_section_resposive = document.querySelector(".navbar-section-resposive");
let navbar_section_resposive_ul = document.querySelector(".navbar-section-resposive-ul");
let section = document.querySelector(".section");

navbar_resposive.onclick = function(){
  navbar_resposive.classList.toggle("active");
  navbar_section_resposive.classList.toggle("active");
  navbar_section_resposive_ul.classList.toggle("active");
  section.classList.toggle("active");
}