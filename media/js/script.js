var darkBtn = document.querySelector(".dark_mode");
var lightBtn = document.querySelector(".light_mode");

darkBtn.addEventListener("click", function () {
    lightBtn.classList.remove('hide');
    darkBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'dark');
    // localStorage.setItem('theme', 'dark');
});

lightBtn.addEventListener("click", function () {
    darkBtn.classList.remove('hide');
    lightBtn.classList.add('hide');
    document.documentElement.setAttribute('data-theme', 'light');
    // localStorage.setItem('theme', 'light');

});

/////////////////////////Changing Color of the section  ////////////////////////////////

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const skillsBtn = document.querySelector(".skills");
const qualificationsBtn = document.querySelector(".qualifications");
const certificatesBtn = document.querySelector(".certificates");
const projectsBtn = document.querySelector(".projects");
const contactMeBtn = document.querySelector(".contact");
const headOption = document.querySelectorAll(".head_optn");

var currSelected = homeBtn;

for(var i=0; i < headOption.length; i++) {
  headOption[i].addEventListener("click", function() {
    currSelected.classList.remove("selected");
    this.classList.add("selected");
    currSelected = this;
  });
}

//////// for scroll ///////

const sections = Array.prototype.slice.call(document.querySelectorAll(".section"));
// const footer = document.querySelector("#footer");

window.addEventListener("scroll", function() {
  const scrollY = window.pageYOffset;
      sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop-50;
      let sectionId = current.getAttribute("id");
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
      {
        document.querySelector(".menu a[href*=" + sectionId + "]").classList.add("selected")

        if(sectionId != "home") 
        {
          document.querySelector(".fixed-social").classList.add("fixed-social-show");
          document.querySelector(".back-to-top").classList.add("back-to-top-show");
        } 
        else {
          document.querySelector(".fixed-social").classList.remove("fixed-social-show");
          document.querySelector(".back-to-top").classList.remove("back-to-top-show");
          }
      } 
      else 
      {
        document.querySelector(".menu a[href*=" + sectionId + "]").classList.remove("selected");
      }
    });
});



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["a Web Developer.", "a C++ programmer.", "a Space Enthusiast.", "a Speed Cuber."];
const typingDelay = 50;
const erasingDelay = 70;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//////////////////////// Skills ///////////////////////////

const cardHead = document.querySelectorAll(".card-head");

for (var i = 0; i < cardHead.length; i++) { 

  cardHead[i].addEventListener("click", function() {
    // console.log(this);
    var content = this.nextElementSibling;    //will get next element on same level of card-head, which is skills-content
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.style.paddingBottom = 0 + "rem";
        this.classList.remove("flip");
      } 
      else 
      {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.paddingBottom = 2 + "rem";
        this.classList.add("flip");
      } 
  })
}

///////////////////////// Qualifications Toggle /////////////////////////////////

const menuToggle=document.querySelectorAll(".menu-heading");
const education=document.getElementById("education");
const achievements=document.getElementById("achievements");
const work=document.getElementById("work");

var qualSelector=document.querySelector(".menu-heading");
var qualContent=education;

menuToggle[0].addEventListener("click", function() {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector=this;

  qualContent.classList.add("hide");
  education.classList.remove("hide");
  qualContent=education;
})

menuToggle[1].addEventListener("click", function() {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector=this;

  qualContent.classList.add("hide");
  achievements.classList.remove("hide");
  qualContent=achievements;
})

menuToggle[2].addEventListener("click", function() {
  qualSelector.classList.remove("selected");
  this.classList.add("selected");
  qualSelector=this;

  qualContent.classList.add("hide");
  work.classList.remove("hide");
  qualContent=work;
})

////////////////// Project Toggle ///////////////////////////

const projectsToggle = document.querySelectorAll(".toggle-projects");
var projectSelect = projectsToggle[0];
var skip = [];

for(var i=0; i < projectsToggle.length; i++) {
  projectsToggle[i].addEventListener("click", function() {
    projectSelect.classList.remove("selected");
    this.classList.add("selected");
    projectSelect=this;
    if(this.getAttribute("id") == "web-apps") {
      skip = [6,7];
      currentSlide(1);
    } else if(this.getAttribute("id") == "electronics") {
      skip = [0, 1, 2, 3, 4, 5];
      currentSlide(7);
    } else {
      skip = [];
      currentSlide(1);
    }
    executeHide();  
  });
}


var numberText = document.querySelectorAll(".numbertext");
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");

const executeHide = () => {
  for(var i=0; i < dots.length; i++) {
    dots[i].classList.remove("hide-dot");
  }
  for(var i=0; i < skip.length; i++) {
    dots[skip[i]].classList.add("hide-dot");
  }
}

for(var i=0; i < (numberText.length - skip.length); i++) {
  numberText[i].innerHTML = i+1 + " / " + numberText.length;
}

document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);

});

document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});

var slide=document.querySelectorAll(".slide");
    document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(-1);
    slide[0].classList.remove("animate__backInRight");
    slide[0].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[0].classList.remove("animate__backInLeft");
    slide[0].classList.add("animate__backInRight");
  });

  document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(-1);
    slide[1].classList.remove("animate__backInRight");
    slide[1].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[1].classList.remove("animate__backInLeft");
    slide[1].classList.add("animate__backInRight");
  });

   document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(-1);
    slide[2].classList.remove("animate__backInRight");
    slide[2].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[2].classList.remove("animate__backInLeft");
    slide[2].classList.add("animate__backInRight");
  });

   document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(-1);
    slide[3].classList.remove("animate__backInRight");
    slide[3].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[3].classList.remove("animate__backInLeft");
    slide[3].classList.add("animate__backInRight");
  });

  document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(1);
    slide[4].classList.remove("animate__backInRight");
    slide[4].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[4].classList.remove("animate__backInLeft");
    slide[4].classList.add("animate__backInRight");
  });

  document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(1);
    slide[5].classList.remove("animate__backInRight");
    slide[5].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[5].classList.remove("animate__backInLeft");
    slide[5].classList.add("animate__backInRight");
  });

  document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(1);
    slide[6].classList.remove("animate__backInRight");
    slide[6].classList.add("animate__backInLeft");
  });
  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[6].classList.remove("animate__backInLeft");
    slide[6].classList.add("animate__backInRight");
  });

  document.querySelector(".prev").addEventListener("click", function() {
    // plusSlides(-1);
    slide[7].classList.remove("animate__backInRight");
    slide[7].classList.add("animate__backInLeft");
  });

  document.querySelector(".next").addEventListener("click", function() {
    // plusSlides(1);
    slide[7].classList.remove("animate__backInLeft");
    slide[7].classList.add("animate__backInRight");
  });


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  if(projectSelect != projectsToggle[0]) 
  {
    if (n+slideIndex > slides.length) {slideIndex = 0} 

    if(slideIndex + n >= 1 && slideIndex + n <= 6) {
      skip = [6,7];
      projectSelect.classList.remove("selected");
      projectsToggle[1].classList.add("selected");
      projectSelect=projectsToggle[1];
    }  
    else {
      skip = [0, 1, 2, 3, 4, 5];
      projectSelect.classList.remove("selected");
      projectsToggle[2].classList.add("selected");
      projectSelect=projectsToggle[2];
    }
    executeHide();
  }
  
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  /*for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }*/
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active-dot";
}


setInterval(changeimg, 5000);

var currImg=1;
function changeimg() {
  if(currImg == 1) {
    document.querySelector(".echallan-img").setAttribute("src", "./media/img/echallan1.jpeg");
    currImg=2;
  } else {
    document.querySelector(".echallan-img").setAttribute("src", "./media/img/echallan_img.jpeg");
    currImg=1;
  }
}

setInterval(changeimg2, 5000);

var currImg2=1;
function changeimg2() {
  if(currImg2 == 1) {
    document.querySelector(".automation-img").setAttribute("src", "./media/img/home4.jpeg");
    currImg2=2;
  } else {
    document.querySelector(".automation-img").setAttribute("src", "./media/img/home2.jpeg");
    currImg2=1;
  }
}




/////////// FORM //////////////////////

const form = document.getElementById("contact-form");

async function handleSubmit(event) {
	event.preventDefault();
	var message = document.getElementById("text-message");
	var data = new FormData(event.target);
	fetch(event.target.action, {
	    method: form.method,
	    body: data,
	    headers: {
	      Accept: "application/json",
	    },
    })

    .then((response) => {
	    message.innerHTML = "Your message has been sent.";
	    document.querySelector(".msg_style").style.display = "block";
	    document.querySelector(".msg_style").style.color = "green";

	    setTimeout(function () {
	      document.querySelector(".msg_style").style.display = "none";
	    }, 4000);
	    form.reset();
    })
    .catch((error) => {
        message.innerHTML =
          "Oops! There was a problem delivering your message, please contact via other means.";
        document.querySelector(".msg_style").style.display = "block";
        document.querySelector(".msg_style").style.color = "red";

        setTimeout(function () {
          document.querySelector(".msg_style").style.display = "none";
        }, 4000);
    });
}

form.addEventListener("submit", handleSubmit);