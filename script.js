const exp_academica = [
  {
    "titulo": "Ciclo superior Desarrollo de Aplicaciones Web",
    "periodo": "2025-27",
    "centro": "CPR Afundación A Coruña"
  },
  {
    "titulo": "Bachillerato",
    "periodo": "2023-25",
    "centro": "Colegio Calasanz"
  }
];

const exp_profesional = [
  {
    "titulo": "Staff en el evento Champions Burguer",
    "periodo": "2025",
    "centro": "SL GrastroEnsueños"
  }
];

function mostrarExperiencia(items, idContenedor) {
  const contenedor = document.getElementById(idContenedor);

  items.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("item");

    const titulo = document.createElement("h3");
    titulo.textContent = item.titulo;

    const centro = document.createElement("p");
    centro.classList.add("lugar");
    centro.textContent = item.centro;

    const periodo = document.createElement("p");
    periodo.classList.add("fechas");
    periodo.textContent = item.periodo;

    article.append(titulo, centro, periodo);
    contenedor.appendChild(article);
  });
}

mostrarExperiencia(exp_academica, "lista-academica");
mostrarExperiencia(exp_profesional, "lista-profesional");