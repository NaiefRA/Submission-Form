const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let teamName = document.querySelector(".team--name").value;
  let country = document.querySelector(".country--name").value;
  let clg = document.querySelector(".clg--name").value;
  let email = document.querySelector(".email").value;
  let capt = document.querySelector(".capt").value;
  let age = document.querySelector(".age").value;
  let nationality = document.querySelector(".nationality").value;
  let size = document.querySelector(".size").value;

  console.log({ teamName, country, clg, email, capt, age, nationality, size });
  alert("Submitted");
});
