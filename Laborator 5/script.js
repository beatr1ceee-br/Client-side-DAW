
let studenti = [
    {
        id: 1,
        nume: "Ana Popescu",
        grupa: "SI-231",
        varsta: 19,
        specialitate: "Securitate informațională",
        statut: "Înmatriculat"
    },
    {
        id: 2,
        nume: "Mihai Rusu",
        grupa: "SI-231",
        varsta: 20,
        specialitate: "Securitate informațională",
        statut: "Înmatriculat"
    },
    {
        id: 3,
        nume: "Irina Ciobanu",
        grupa: "PR-232",
        varsta: 18,
        specialitate: "Programare",
        statut: "Înmatriculat"
    },
    {
        id: 4,
        nume: "Andrei Munteanu",
        grupa: "PR-232",
        varsta: 21,
        specialitate: "Programare",
        statut: "Înmatriculat"
    }
];

let idNou = 5;

let formular = document.getElementById("formular");
let lista = document.getElementById("lista");
let numar = document.getElementById("numar");
let mesaj = document.getElementById("mesaj");

// Afișarea studenților
function afiseazaStudenti() {

    lista.innerHTML = "";

    for (let i = 0; i < studenti.length; i++) {

        lista.innerHTML += `
            <div class="card">

                <h3>${studenti[i].nume}</h3>

                <p>ID: ${studenti[i].id}</p>

                <p>Grupa: ${studenti[i].grupa}</p>

                <p>Vârsta: ${studenti[i].varsta} ani</p>

                <p>Specialitatea: ${studenti[i].specialitate}</p>

                <p>
                    Statut:
                    <span class="status">
                        ${studenti[i].statut}
                    </span>
                </p>

                <button onclick="stergeStudent(${studenti[i].id})">
                    Șterge
                </button>

            </div>
        `;
    }

    numar.innerHTML = studenti.length;

    if (studenti.length == 0) {
        mesaj.innerHTML = "Lista studenților este goală!";
    } else {
        mesaj.innerHTML = "";
    }
}

// Adăugarea studentului
formular.addEventListener("submit", function(event) {

    event.preventDefault();

    let nume = document.getElementById("nume").value.trim();
    let grupa = document.getElementById("grupa").value.trim();
    let varsta = Number(document.getElementById("varsta").value);
    let specialitate = document.getElementById("specialitate").value.trim();

    if (varsta < 14 || varsta > 100 || !Number.isInteger(varsta)) {
        alert("Vârsta trebuie să fie între 14 și 100!");
        return;
    }

    let studentNou = {
        id: idNou,
        nume: nume,
        grupa: grupa,
        varsta: varsta,
        specialitate: specialitate,
        statut: "Înmatriculat"
    };

    studenti.push(studentNou);

    idNou++;

    afiseazaStudenti();

    formular.reset();

});

// Ștergerea studentului
function stergeStudent(id) {

    for (let i = 0; i < studenti.length; i++) {

        if (studenti[i].id == id) {

            studenti.splice(i, 1);

            break;
        }
    }

    afiseazaStudenti();
}

// Justify-content
document.getElementById("justify").addEventListener("change", function() {

    lista.style.justifyContent = this.value;

});

// Align-items
document.getElementById("align").addEventListener("change", function() {

    lista.style.alignItems = this.value;

});

// Gap
document.getElementById("gap").addEventListener("change", function() {

    lista.style.gap = this.value;

});

// Flex-wrap
document.getElementById("wrap").addEventListener("change", function() {

    lista.style.flexWrap = this.value;

});

// Resetarea Flexbox
document.getElementById("reset").addEventListener("click", function() {

    lista.style.justifyContent = "flex-start";
    lista.style.alignItems = "stretch";
    lista.style.gap = "20px";
    lista.style.flexWrap = "wrap";

    document.getElementById("justify").value = "flex-start";
    document.getElementById("align").value = "stretch";
    document.getElementById("gap").value = "20px";
    document.getElementById("wrap").value = "wrap";

});

// Afișarea inițială
afiseazaStudenti();
