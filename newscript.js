const rating = document.querySelector(".rating");
const child = document.querySelectorAll(".child");
const feedback_section = document.querySelector(".feedback-section");
const btn = document.querySelector("#btn");
const experienceInput = document.querySelector("#experience"); // Added to capture user experience input

let icon;

rating.addEventListener("click", (event) => {
  icon = event.target.parentNode;

  for (let i = 0; i < child.length; i++) {
    console.log(child[i]);
    child[i].classList.remove("active");
  }

  if (!icon.classList.contains("active")) {
    icon.classList.add("active");
  }
});

btn.addEventListener("click", () => {
  console.log(icon);

  let user_feedback;
  let user_feedback_icon;
  let user_experience; // Added to capture user experience input

  if (icon === undefined) {
    user_feedback = "";
  } else {
    user_feedback = icon.children[1].innerText;
    user_feedback_icon = icon.children[0].innerText;
  }

  if (user_experience === undefined) {
    // Check if experience is provided
    user_experience = "";
  } else {
    user_experience = experienceInput.value;
  }

  if (user_feedback !== "") {
    feedback_section.innerHTML = `
         <div class="response-screen ">
            <p>${user_feedback_icon}</p>
            <h3>Your Feedback: ${user_feedback}</h3>
            <h3>Your Experience: ${user_experience}</h3> <!-- Display user experience -->
            <p>💖 Thank You  for your response</p>
      
         <div class="feedback-button">
            <a href="index.html">Back</a>
           </div>
        </div>
      `;
  }
});
