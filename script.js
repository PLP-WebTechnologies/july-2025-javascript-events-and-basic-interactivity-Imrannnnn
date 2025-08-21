// When "Click Me" button is clicked → show a message
document.getElementById("showMsg").addEventListener("click", () => {
  document.getElementById("message").textContent = "Button was clicked!";
});

// When "Dark Mode" button is clicked → toggle dark theme
document.getElementById("toggleMode").onclick = () =>
  document.body.classList.toggle("dark");



// Counter starts at 0
let count = 0;
// When "+" button is clicked → increase count by 1 and show it
document.getElementById("plusBtn").onclick = () =>
  document.getElementById("count").textContent = ++count;

// FAQ Toggle: Show or hide the answer when the question is clicked
document.querySelector(".faq").onclick = (e) => {
  const ans = e.target.nextElementSibling; // get the <p> after <h3>
  ans.style.display = ans.style.display === "block" ? "none" : "block";
};


/* 3. Form Validation*/
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop page from refreshing when form submits

  // Get values from inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value.trim();
  let msg = ""; // feedback message


  if (name.length < 3) msg = "Name must be at least 3 letters.";
  else if (!email.includes("@")) msg = "Enter a valid email.";
  else if (pass.length < 6) msg = "Password must be 6+ chars.";
  else msg = "Form submitted successfully!";

  // Show feedback to user
  document.getElementById("formMsg").textContent = msg;
});
