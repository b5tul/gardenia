const helpButton = document.querySelector("main button");
const helpDialog = document.querySelector("main dialog");
helpButton.addEventListener("click", () => {
  helpDialog.show();
});

function diary(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.showModal(); // Bu komut dialog'u açar ve arka planı kilitler
}

function diaryclose(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.close(); // Bu komut dialog'u kapatır
}
