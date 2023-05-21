document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", form.action, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        successMessage.classList.remove("hidden");
        form.reset();
        setTimeout(function() {
          successMessage.classList.add("hidden");
        }, 5000);
      }
    };

    xhr.send(formData);
  });
});

const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');

nameInput.addEventListener('input', () => {
  const name = nameInput.value;
  const capitalized = capitalizeAfterSpace(name);
  nameInput.value = capitalized;
  
  if (isFakeName(capitalized)) {
    nameError.textContent = 'Please enter a valid name.';
  } else {
    nameError.textContent = '';
  }
});

function capitalizeAfterSpace(name) {
  return name.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}

function isFakeName(name) {
  const fakeNames = ['Fake', 'Random', 'Invalid']; // Example list of fake names
  
  // Convert the name to lowercase for case-insensitive matching
  const lowercaseName = name.toLowerCase();
  
  // Check if the lowercase name is present in the list of fake names
  return fakeNames.includes(lowercaseName);
}