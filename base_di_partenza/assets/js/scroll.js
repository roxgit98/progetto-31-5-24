window.addEventListener("scroll", function () {
  let navbar = document.getElementsByTagName("nav")[0];
  let bottone = document.getElementById("bottone");
  if (window.scrollY > 300) {
    navbar.style.backgroundColor = "white";
    bottone.style.backgroundColor = "green";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    bottone.style.backgroundColor = "black";
  }
});
