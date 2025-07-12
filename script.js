
(function() {const script = document.createElement('script');
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-13L7JE0MJB";
document.head.appendChild(script);

script.onload = function() {window.dataLayer = window.dataLayer || [];
function gtag() {dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-13L7JE0MJB');};
})();$(document).ready(function () {$('#menu').click(function () {$(this).toggleClass('fa-times');
$('.navbar').toggleClass('nav-toggle');});$(window).on('scroll load', function () {$('#menu').removeClass('fa-times');
$('.navbar').removeClass('nav-toggle');if (window.scrollY > 60) {document.querySelector('#scroll-top').classList.add('active');} else {document.querySelector('#scroll-top').classList.remove('active');}$('section').each(function () {let height = $(this).height();
let offset = $(this).offset().top - 200;
let top = $(window).scrollTop();
let id = $(this).attr('id');if (top > offset && top < offset + height) {$('.navbar ul li a').removeClass('active');
$('.navbar').find(`[href="#${id}"]`).addClass('active');}});});$('a[href*="#"]').on('click', function (e) {e.preventDefault();
let target = $($(this).attr('href'));
if (target.length) {$('html, body').animate({scrollTop: target.offset().top - 65 }, 500, 'swing'); }});$("#contact-form").submit(function (event) {emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
.then(function (response) {console.log('SUCCESS!', response.status, response.text);
document.getElementById("contact-form").reset();
alert("Form Submitted Successfully");}, function (error) {console.log('FAILED...', error);
alert("Form Submission Failed! Try Again");});
event.preventDefault();});});const FIREBASE_URL = "https://resume-builder-suggestions-default-rtdb.firebaseio.com/PortfolioView.json";fetch(FIREBASE_URL)
.then(res => res.json())
.then(current => {const updated = (current || 0) + 1;fetch(FIREBASE_URL, {method: "PUT",
body: JSON.stringify(updated),
headers: {"Content-Type": "application/json"
}});document.getElementById("viewCount").textContent = updated;
})
.catch(err => {console.error("Error fetching views:", err);
document.getElementById("viewCount").textContent = "Error";
});document.addEventListener('visibilitychange',
function () {if (document.visibilityState === "visible") {document.title = "Portfolio | NishantSingh";
$("#favicon").attr("href", "./Images/N.png");}
else {document.title = "Portfolio | NishantSingh";
$("#favicon").attr("href", "./Images/N.png");}});
var typed = new Typed(".typing-text", {strings: ["2+ year of Experience on Deep learning","Built a high quality and ATS freindly Resume Builder application","worked on Vision Transformer based object classification Models","worked on RAG models","Worked on various LangGraph based Multi-Agent models","worked on Building Highend React Applications","worked on Transformer based large language Models","worked on CNN based Object Segmentation Models","Built DL/React based Online exam proctoring System"],
loop: true,
typeSpeed: 60,
backSpeed: 30,
backDelay: 500,});async function fetchData(type = "skills") {let response
type === "skills" ?
response = await fetch("skills.json")
:
response = await fetch("./projects/projects.json")
const data = await response.json();
return data;}function showSkills(skills) {let skillsContainer = document.getElementById("skillsContainer");
let skillHTML = "";
skills.forEach(skill => {skillHTML += `
<div class="bar">
<div class="info">
<img src=${skill.icon} alt="skill" />
<span>${skill.name}</span>
</div>
</div>`});
skillsContainer.innerHTML = skillHTML;}function showProjects(projects) {let projectsContainer = document.querySelector("#work .box-container");
let projectHTML = "";
projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {projectHTML += `
<div class="box tilt">
<img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
<div class="content">
<div class="tag">
<h3>${project.name}</h3>
</div>
<div class="desc">
<p>${project.desc}</p>
<div class="btns">
<a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
<a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
</div>
</div>
</div>
</div>`});
projectsContainer.innerHTML = projectHTML;VanillaTilt.init(document.querySelectorAll(".tilt"), {max: 15,});const srtop = ScrollReveal({origin: 'top',
distance: '80px',
duration: 1000,
reset: true});srtop.reveal('.work .box', { interval: 200 });}fetchData().then(data => {showSkills(data);});fetchData("projects").then(data => {showProjects(data);});document.onkeydown = function (e) {if (e.keyCode == 123) {return false;}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {return false;}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {return false;}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {return false;}
if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {return false;}}
const srtop = ScrollReveal({origin: 'top',
distance: '80px',
duration: 1000,
reset: true});srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .hackerrank', { interval: 600 });srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .Btn', { delay: 200 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });srtop.reveal('.education .box', { interval: 200 });srtop.reveal('.experience .box', { interval: 200 });srtop.reveal('.work .box', { interval: 200 });srtop.reveal('.Achievements .timeline', { delay: 400 });
srtop.reveal('.Achievements .timeline .container', { interval: 400 });srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
