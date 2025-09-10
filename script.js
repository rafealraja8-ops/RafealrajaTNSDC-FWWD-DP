function scrollToId(id) {

  const el = document.getElementById(id);

  if (el) el.scrollIntoView({ behavior: "smooth" });

}

function handleSubmit(e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("formStatus");

  if (name.length < 2) { status.textContent = "Enter a valid name."; return false; }

  if (!email.includes("@")) { status.textContent = "Enter a valid email."; return false; }

  if (message.length < 6) { status.textContent = "Message is too short."; return false; }

  status.textContent = "Sending...";

  setTimeout(() => {

    status.textContent = "Message sent! ✅";

    document.getElementById("contactForm").reset();

  }, 800);

  return false;

}

// Keyboard accessibility

document.querySelectorAll(".nav button").forEach(btn => {

  btn.addEventListener("keydown", e => {

    if (e.key === "Enter" || e.key === " ") {

      e.preventDefault();

      btn.click();

    }

  });

});