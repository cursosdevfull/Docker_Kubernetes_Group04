const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

const API_CONFIG = "/api/config";

fetch(API_CONFIG)
  .then((response) => response.json())
  .then((response) => fetch(response.pathBackend1))
  .then((response) => response.json())
  .then((response) => {
    message1.innerHTML = response.messageBackend1;
    message2.innerHTML = response.messageBackend2;
  });
