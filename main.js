const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLink = document.querySelectorAll(".nav__link");
  
  function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    /*Remove menu mobile*/
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  // SUBMITTING AN E-MAIL:
  
  function submitForm() {
    //now, we get the input values:
    let name = document.getElementById("contact_name").value;
    let email = document.getElementById("contact_email").value;
    let message = document.getElementById("contact_message").value;
  
    document.querySelector(".contact__form").reset();
  
    sendEmail(name, email, message);
  }
  
  // Sending email info:
  function sendEmail(name, email, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "konstantin.borimechkov14@gmail.com",
      Password: "ntbusazefpdpmmtq",
      To: "konstantin.borimechkov14@gmail.com",
      From: "konstantin.borimechkov14@gmail.com",
      Subject: `${name} sent you a message!`,
      Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("The mail has been sent successfully!"));
  }
  
  /*===== SCROLL REVEAL ANIMATION =====*/
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  /*SCROLL HOME*/
  sr.reveal(".button", { delay: 150 });
  sr.reveal(".home__img", { delay: 325 });
  sr.reveal(".home__social-icon", { interval: 150 });
  
  /*SCROLL ABOUT*/
  sr.reveal(".about__img", {});
  sr.reveal(".about__subtitle", { delay: 325 });
  sr.reveal(".about__text", { delay: 325 });
  
  /*SCROLL SKILLS*/
  sr.reveal(".skills__subtitle", {});
  sr.reveal(".skills__text", {});
  sr.reveal(".skills__data", { interval: 150 });
  sr.reveal(".skills__img", { delay: 500 });
  
  /*SCROLL WORK*/
  sr.reveal(".project-thumbnail", { interval: 120 });
  
  /*SCROLL CONTACT*/
  sr.reveal(".contact__input", { interval: 200 });
  