
// EXERCIȚIUL 1 – Creează prima listă

let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("Lista:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Număr de elemente:", fructe.length);


// EXERCIȚIUL 2 – Adaugă și elimină orașe

let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");
orase.unshift("Soroca");
orase.pop();
orase.shift();

console.log("Lista finală de orașe:", orase);


// EXERCIȚIILE 3 ȘI 4 – Lista de cumpărături

let produse = ["Pâine", "Lapte", "Ouă"];

function afiseazaProduse() {
  let zona = document.getElementById("listaProduse");

  if (produse.length === 0) {
    zona.textContent = "Lista este goală!";
  } else {
    zona.textContent = produse.join(", ");
  }
}

function adaugaLaSfarsit() {
  let camp = document.getElementById("produs");
  let produs = camp.value.trim();

  if (produs !== "") {
    produse.push(produs);
    camp.value = "";
    afiseazaProduse();
  } else {
    alert("Introdu numele unui produs!");
  }
}

function adaugaLaInceput() {
  let camp = document.getElementById("produs");
  let produs = camp.value.trim();

  if (produs !== "") {
    produse.unshift(produs);
    camp.value = "";
    afiseazaProduse();
  } else {
    alert("Introdu numele unui produs!");
  }
}

function stergePrimul() {
  if (produse.length > 0) {
    produse.shift();
  }

  afiseazaProduse();
}

function stergeUltimul() {
  if (produse.length > 0) {
    produse.pop();
  }

  afiseazaProduse();
}


// EXERCIȚIUL 5 – Catalog electronic al elevilor

let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

function afiseazaElevi() {
  let catalog = document.getElementById("catalog");

  catalog.innerHTML = "";

  elevi.forEach(function(elev, index) {
    let card = document.createElement("div");
    card.className = "student-card";

    let nume = document.createElement("strong");
    nume.textContent = (index + 1) + ". " + elev.nume;

    let detalii = document.createElement("div");
    detalii.textContent =
      "Vârsta: " + elev.varsta + " | Nota: " + elev.nota;

    card.appendChild(nume);
    card.appendChild(detalii);
    catalog.appendChild(card);
  });

  document.getElementById("numarElevi").textContent =
    "Număr de elevi: " + elevi.length;
}

function adaugaElev() {
  let nume = document.getElementById("nume").value.trim();
  let varstaValoare = document.getElementById("varsta").value.trim();
  let notaValoare = document.getElementById("nota").value.trim();

  if (
    nume === "" ||
    varstaValoare === "" ||
    notaValoare === ""
  ) {
    alert("Completează toate câmpurile!");
    return;
  }

  let varsta = Number(varstaValoare);
  let nota = Number(notaValoare);

  if (!Number.isInteger(varsta) || varsta < 1 || varsta > 120) {
    alert("Introdu o vârstă validă!");
    return;
  }

  if (!Number.isInteger(nota) || nota < 1 || nota > 10) {
    alert("Nota trebuie să fie un număr întreg între 1 și 10!");
    return;
  }

  let elevNou = {
    nume: nume,
    varsta: varsta,
    nota: nota
  };

  elevi.push(elevNou);

  document.getElementById("nume").value = "";
  document.getElementById("varsta").value = "";
  document.getElementById("nota").value = "";

  afiseazaElevi();
}

function stergeElev() {
  let numeCautat =
    document.getElementById("numeSterge").value.trim();

  if (numeCautat === "") {
    alert("Introdu numele elevului pe care dorești să îl ștergi!");
    return;
  }

  let elev = elevi.find(function(e) {
    return e.nume.toLowerCase() === numeCautat.toLowerCase();
  });

  if (elev !== undefined) {
    let index = elevi.indexOf(elev);

    elevi.splice(index, 1);

    document.getElementById("numeSterge").value = "";
    document.getElementById("rezultatCautare").textContent = "";

    afiseazaElevi();
  } else {
    alert("Elevul nu a fost găsit!");
  }
}

function cautaElev() {
  let numeCautat =
    document.getElementById("numeCauta").value.trim();

  let rezultat = document.getElementById("rezultatCautare");

  if (numeCautat === "") {
    rezultat.textContent = "Introdu numele elevului pe care îl cauți.";
    return;
  }

  let elev = elevi.find(function(e) {
    return e.nume.toLowerCase() === numeCautat.toLowerCase();
  });

  if (elev !== undefined) {
    rezultat.textContent =
      "Elev găsit! Nume: " + elev.nume +
      " | Vârsta: " + elev.varsta +
      " | Nota: " + elev.nota;
  } else {
    rezultat.textContent = "Elevul nu a fost găsit!";
  }
}


// Afișăm listele la încărcarea paginii

afiseazaProduse();
afiseazaElevi();
