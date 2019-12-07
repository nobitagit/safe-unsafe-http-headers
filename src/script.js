const [form] = document.forms;
const success = document.getElementById("success");
const content = document.getElementById("content");

form.addEventListener("submit", evt => {
  evt.preventDefault();
  const { "1": pw } = form;
  if (pw.value !== "password") {
    return false;
  }

  content.setAttribute("hidden", true);
  success.removeAttribute("hidden");
});
