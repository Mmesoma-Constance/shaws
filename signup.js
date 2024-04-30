const imageFile = document.getElementById("image-upload");

let imageUrl = null;
imageFile.addEventListener("change", function (event) {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (event) {
      imageUrl = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
  }
});

function signin() {
  localStorage.setItem("imageUrl", imageUrl);

  // sessionStorage.setItem('userImage', URL.createObjectURL(imageFile));

  let spinner3 = document.getElementById("spinner3");
  let processMsg3 = document.getElementById("process3");
  let checkMsg3 = document.getElementById("checkMsg3");
  let available3 = document.getElementById("available3");

  let imageUpload = document.querySelector(".photoInputted");
  let imageValue = imageUpload.value;
  let photoError = document.querySelector(".photoError");
  let photoText = document.querySelector(".photoText");
  photoText.textContent = "Photo added!";
  document.getElementById("inputFile-container").classList.remove("errorImg");

  let nameInput = document.querySelector(".nameInputed");
  let nameValue = nameInput.value;
  let nameError = document.querySelector(".nameError");
  nameInput.style.border = "";

  let numberInput = document.querySelector(".numberInputed");
  let numberValue = numberInput.value;
  let numberError = document.querySelector(".numberError");
  numberInput.style.border = "";

  let cityInput = document.querySelector(".cityInputed");
  let cityValue = cityInput.value;
  let cityError = document.querySelector(".cityError");
  cityInput.style.border = "";

  let addressInput = document.querySelector(".addressInputed");
  let addressValue = addressInput.value;
  let addressError = document.querySelector(".addressError");
  addressInput.style.border = "";

  if (imageFile.files.length === 0) {
    imageUpload.focus();
    document.getElementById("inputFile-container").classList.add("errorImg");
    photoText.textContent = "Add a photo";

    photoError.innerHTML = "Please add your photo for easy recognition.";

    setTimeout(function () {
      photoError.innerText = "";
    }, 2500);
  } else if (nameValue === "") {
    nameInput.focus();
    nameInput.style.border = "2px solid red";

    nameError.innerHTML = "Please enter your name!";

    setTimeout(function () {
      nameError.innerText = "";
    }, 1500);
  } else if (nameValue.length < 2) {
    nameInput.style.border = "2px solid red";
    nameInput.focus();
    nameError.innerHTML = "Name must be up to 2 letters!";

    setTimeout(function () {
      nameError.innerText = "";
    }, 1500);
  } else if (numberValue === "") {
    numberInput.style.border = "2px solid red";
    numberInput.focus();
    numberError.innerHTML = "Please enter your phone number!";

    setTimeout(function () {
      numberError.innerText = "";
    }, 1500);
  } else if (isNaN(numberValue)) {
    numberInput.style.border = "2px solid red";
    numberInput.focus();
    numberError.innerHTML = "Please enter a valid number!";

    setTimeout(function () {
      numberError.innerText = "";
    }, 1500);
  } else if (numberValue.length < 11) {
    numberInput.style.border = "2px solid red";
    numberInput.focus();
    numberError.innerHTML = "Number less than 11 digits!";

    setTimeout(function () {
      numberError.innerText = "";
    }, 1500);
  } else if (numberValue.length > 11) {
    numberInput.style.border = "2px solid red";
    numberInput.focus();
    numberError.innerHTML = "Number more than 11 digits!";

    setTimeout(function () {
      numberError.innerText = "";
    }, 1500);
  } else if (cityValue === "") {
    cityInput.focus();
    cityInput.style.border = "2px solid red";

    cityError.innerHTML = "Please enter your City!";

    setTimeout(function () {
      cityError.innerText = "";
    }, 1500);
  } else if (cityValue.length < 2) {
    cityInput.style.border = "2px solid red";
    cityInput.focus();
    cityError.innerHTML = "City must be up to 2 letters!";

    setTimeout(function () {
      cityError.innerText = "";
    }, 1500);
  } else if (addressValue === "") {
    addressInput.focus();
    addressInput.style.border = "2px solid red";

    addressError.innerHTML = "Please enter your address!";

    setTimeout(function () {
      addressError.innerText = "";
    }, 1500);
  } else if (addressValue.length < 2) {
    addressInput.style.border = "2px solid red";
    addressInput.focus();
    addressError.innerHTML = "Address must be up to 2 letters!";

    setTimeout(function () {
      addressError.innerText = "";
    }, 1500);
  } else {
    localStorage.setItem("username", nameValue);
    localStorage.setItem("city", cityValue);
    localStorage.setItem("address", addressValue);

    spinner3.style.display = "inline-block";

    checkMsg3.style.display = "none";

    spinner3.style.display = "inline-block";
    processMsg3.style.display = "inline-block";

    setTimeout(function () {
      spinner3.style.display = "none";

      available3.textContent = "Signed in";
      processMsg3.style.display = "none";
    }, 5950);
    setTimeout(function () {
      window.location.href = "shawarma.html";
    }, 6000);
  }
}
