const form = document.getElementById("feedback-form");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");
const message = document.getElementById("message");
const feedbackDisplay =
document.getElementById("feedback-display");

// Character Count

comments.addEventListener("input", () => {

    charCount.textContent =
        `Characters: ${comments.value.length}`;
});

// Event Delegation + Tooltips

form.addEventListener("mouseover", (event) => {

    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        message.textContent =
            `Enter your ${event.target.id}`;
    }
});

form.addEventListener("mouseout", () => {

    message.textContent = "";
});

// Form Validation + Feedback Display

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const comment =
        comments.value;

    if (
        name === "" ||
        email === "" ||
        comment === ""
    ) {

        message.textContent =
            "All fields are required.";

        return;
    }

    const entry =
        document.createElement("div");

    entry.classList.add("feedback-entry");

    entry.textContent =
        `${name} (${email}): ${comment}`;

    feedbackDisplay.appendChild(entry);

    form.reset();

    charCount.textContent =
        "Characters: 0";

    message.textContent =
        "Feedback submitted!";
});

// stopPropagation Example

document
.getElementById("container")
.addEventListener("click", (event) => {

    event.stopPropagation();
});