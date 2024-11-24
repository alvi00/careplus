const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 85) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const learnMoreButton = document.querySelector('.card .btn');

  learnMoreButton.addEventListener('click', () => {
      window.location.href = 'puberty.html'; // Redirect to the desired page
  });
});



//this is doctor part I am adding not sure it will work or not


const doctors = [
  { 
    name: "ডক্টর অর্ণব চৌধুরী",
    location: "Mirpur, Popular Hospital, Dhaka",
    specialty: "Gynecologist",
    contact: "0140108338",
    price: "1200tk"
  },
  { 
    name: "ডক্টর মৌসুমি খান",
    location: "Banani, United Hospital, Dhaka",
    specialty: "Obstetrician",
    contact: "0140108338",
    picture: "images/doctor2.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর সুমন বিশ্বাস",
    location: "Gulshan, Apollo Hospital, Dhaka",
    specialty: "Reproductive Endocrinologist",
    contact: "0140108338",
    picture: "images/doctor3.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর রিমা সেনগুপ্তা",
    location: "Dhanmondi, Square Hospital, Dhaka",
    specialty: "Maternal-Fetal Medicine Specialist",
    contact: "0140108338",
    picture: "images/doctor4.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর তানভীর আহমেদ",
    location: "Uttara, Ibn Sina Hospital, Dhaka",
    specialty: "Gynecologic Oncologist",
    contact: "0140108338",
    picture: "images/doctor5.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর ফারহানা রহমান",
    location: "Mohakhali, BRB Hospital, Dhaka",
    specialty: "Urogynecologist",
    contact: "0140108338",
    picture: "images/doctor6.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর রাকিব হাসান",
    location: "Bashundhara, Evercare Hospital, Dhaka",
    specialty: "Pelvic Reconstructive Surgeon",
    contact: "0140108338",
    picture: "images/doctor7.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর নাদিয়া ইসলাম",
    location: "Shyamoli, Labaid Hospital, Dhaka",
    specialty: "Perinatologist",
    contact: "0140108338",
    picture: "images/doctor8.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর অপু রায়",
    location: "Malibagh, Central Hospital, Dhaka",
    specialty: "Infertility Specialist",
    contact: "0140108338",
    picture: "images/doctor9.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর তানিয়া মজুমদার",
    location: "Tejgaon, Holy Family Red Crescent Medical College Hospital, Dhaka",
    specialty: "Menopause Specialist",
    contact: "0140108338",
    picture: "images/doctor10.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর বিপ্লব মল্লিক",
    location: "Uttara, Ibn Sina Hospital, Dhaka",
    specialty: "Gynecologic Surgeon",
    contact: "0140108338",
    picture: "images/doctor5.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর শারমিন আক্তার",
    location: "Khilgaon, Islami Bank Hospital, Dhaka",
    specialty: "Adolescent Gynecologist",
    contact: "0140108338",
    picture: "images/doctor11.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর জয় ব্যানার্জি",
    location: "Badda, Ayesha Memorial Hospital, Dhaka",
    specialty: "Gynecologic Radiologist",
    contact: "0140108338",
    picture: "images/doctor12.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর সুমিতা দাস",
    location: "Rampura, Comfort Diagnostic Center, Dhaka",
    specialty: "Family Planning Specialist",
    contact: "0140108338",
    picture: "images/doctor13.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর সুমিতা দাস",
    location: "Mohammadpur, City Hospital, Dhaka",
    specialty: "Gynecologic Pathologist",
    contact: "0140108338",
    picture: "images/doctor13.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর নাদিয়া ইসলাম",
    location: "Mohammadpur, City Hospital, Dhaka",
    specialty: "Contraceptive Specialist",
    contact: "0140108338",
    picture: "images/doctor14.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর অপু রায়",
    location: "Jatrabari, Medinova Medical Services, Dhaka",
    specialty: "Gynecologic Researcher",
    contact: "0140108338",
    picture: "images/doctor15.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর অর্ণব চৌধুরী",
    location: "Kallyanpur, Dhaka Medical College Hospital, Dhaka",
    specialty: "Women's Health Specialist",
    contact: "0140108338",
    picture: "images/doctor16.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
    location: "Azimpur, Sir Salimullah Medical College & Mitford Hospital, Dhaka",
    specialty: "Fertility Specialist",
    contact: "0140108338",
    picture: "images/doctor17.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর তানভীর আহমেদ",
    location: "Lalmatia, Green Life Medical College Hospital, Dhaka",
    specialty: "Gynecologic Endoscopist",
    contact: "0140108338",
    picture: "images/doctor18.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর প্রিয়াঙ্কা চৌধুরী",
    location: "Kakrail, Anwer Khan Modern Medical College Hospital, Dhaka",
    specialty: "Pelvic Pain Specialist",
    contact: "0140108338",
    picture: "images/doctor19.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর অর্ণব চৌধুরী",
    location: "Shahbagh, BIRDEM General Hospital, Dhaka",
    specialty: "Gynecologic Ultrasonographer",
    contact: "0140108338",
    picture: "images/doctor20.jpg",
    price: "1200tk"
  },
  { 
    name: "ডক্টর লীনা ফেরদৌস",
    location: "Motijheel, National Heart Foundation Hospital, Dhaka",
    specialty: "Gynecologic Surgery Specialist",
    contact: "0140108338",
    picture: "images/doctor21.jpg",
    price: "1200tk"
  }
];

    

document.getElementById("locationInput").addEventListener("input", searchDoctorsByLocation);
document.getElementById("specialtyInput").addEventListener("input", searchDoctorsBySpecialty);

function searchDoctorsByLocation() {
  const locationInput = document.getElementById("locationInput").value.toLowerCase();
  displayDoctors(doctors.filter(doctor => doctor.location.toLowerCase().includes(locationInput)));
}

function searchDoctorsBySpecialty() {
  const specialtyInput = document.getElementById("specialtyInput").value.toLowerCase();
  displayDoctors(doctors.filter(doctor => doctor.specialty.toLowerCase().includes(specialtyInput)));
}

function displayDoctors(doctorArray) {
  const doctorList = document.getElementById("doctorList");
  doctorList.innerHTML = ""; // Clear previous results

  doctorArray.forEach(doctor => {
    const li = document.createElement("li");
    li.className = "doctor-item";
    li.innerHTML = `
      <div class="doctor-card">
        <div class="doctor-upper-part">
          <div class="doctor-info">
            <h5>${doctor.name}</h5>
            <p>${doctor.specialty}</p>
          </div>
          <div class="doctor-icons">
            <i class="fa-solid fa-video"></i>
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
        <div class="doctor-middle-part">
          <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <p><a href="https://maps.google.com/?q=${encodeURIComponent(doctor.location)}" target="_blank">${doctor.location}</a></p>
          </div>
          <div class="availability">
            <i class="fa-solid fa-clock"></i>
            <p>Available: Today</p>
          </div>
          <div class="time-slots">
            <div class="time-slot">08:00 am</div>
            <div class="time-slot">09:00 am</div>
            <div class="time-slot">10:00 am</div>
          </div>
        </div>
        <div class="doctor-lower-part">
          <button onclick="bookAppointment()">Make an Appointment</button>
        </div>
      </div>`;
    doctorList.appendChild(li);
  });
}

function bookAppointment() {
  const modal = document.getElementById("appointmentModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("appointmentModal");
  modal.style.display = "none";
}

// Initial display of all doctors
displayDoctors(doctors);

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById("appointmentModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


document.addEventListener("DOMContentLoaded", function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'Animation - 1715894858911.json' // the path to the animation JSON
  });
});
