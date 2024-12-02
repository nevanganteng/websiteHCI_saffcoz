const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

// Tambahkan event listener pada hamburger menu
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  //   console.log("Hamburger clicked!");
});

// klik diluar sidebar biar ilang nav
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// contact javascript
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // Full Name Validation
    const fullName = document.getElementById("full-name").value;
    const nameError = document.getElementById("name-error");
    console.log(fullName.length);
    if (!fullName) {
      nameError.textContent = "Full name is required.";
      isValid = false;
    } else if (fullName.length < 6 || fullName > 20) {
      isValid = false;
      nameError.textContent = "Full name must be between 6 and 20 characters.";
      // console.log("tess");
    } else {
      nameError.textContent = "";
      // console.log("error");
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    if (!email) {
      emailError.textContent = "Email address is required.";
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Phone Number Validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phone-error");
    if (phone && phone.length < 10) {
      phoneError.textContent = "Phone number must be at least 10 digits long.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Gender Validation
    const gender = document.getElementById("gender").value;
    const genderError = document.getElementById("gender-error");
    if (!gender) {
      genderError.textContent = "Please select your gender.";
      isValid = false;
    } else {
      genderError.textContent = "";
    }

    // Newsletter Subscription Validation
    const newsletter = document.getElementById("newsletter").checked;
    const newsletterError = document.getElementById("newsletter-error");
    if (!newsletter) {
      newsletterError.textContent =
        "You must agree to receive the latest news and offers.";
      isValid = false;
    } else {
      newsletterError.textContent = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

// console.log(hamburgerMenu);
// console.log(navbarNav);
