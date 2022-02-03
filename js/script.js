document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.querySelector("#input_cidade").value;
  new PegaCidade(input);
});
