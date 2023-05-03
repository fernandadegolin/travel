function converterDolar() {
  let mediaDolar = 5.09;
  let dolarNy = document.getElementById("dolar");
  let dolar = dolarNy.value;

  let converteDolar = (dolar * mediaDolar).toFixed(2);

  let valorDolar = document.getElementById("valorDolar");
  valorDolar.innerHTML = `R$ <strong>${converteDolar}</strong>`;

  dolarNy.value = "";
}

function converterEuro() {
  let mediaEuro = 5.59;
  let euroBarcelona = document.getElementById("euro");
  let euro = euroBarcelona.value;

  let converteEuro = (euro * mediaEuro).toFixed(2);

  let valorEuro = document.getElementById("valorEuro");
  valorEuro.innerHTML = `R$ <strong>${converteEuro}</strong>`;
}

function converterLibra() {
  let mediaLibra = 6.18;

  let libraLondres = document.getElementById("libra");
  let libra = libraLondres.value;

  let converteLibra = (libra * mediaLibra).toFixed(2);

  let valorLibra = document.getElementById("valorLibra");
  valorLibra.innerHTML = `R$ <strong>${converteLibra}</strong>`;
}
