function checkForm() {
  event.preventDefault();
  //haetaan muuttujiin formin arvot

  let weight = document.querySelector("#weight");
  let height = document.querySelector("#height");
  let age = document.querySelector("#age");
  let sex = document.querySelector("input[type='radio'][name=sex]:checked");

  let wErr = document.querySelector("#weightErr");
  let hErr = document.querySelector("#heightErr");
  let aErr = document.querySelector("#ageErr");

  //alusteaan x
  let x = true;
  
  if (weight.value < 40 || weight.value > 199 || isNaN(weight.value) == true) {
    console.log("Painon pitää olla väliltä 40-199kg");
    weight.style.borderColor = "red";
    wErr.innerHTML = `<p style="color:red">Painon pitää olla väliltä 40-199kg</p>`;

    x = false;
  }

  if (height.value < 80 || height.value > 240 || isNaN(height.value) == true) {
    console.log("Pituus pitää olla välillä 80-240cm");
    height.style.borderColor = "red";
    hErr.innerHTML = `<p style="color:red">Pituus pitää olla välillä 80-240cm</p>`

    x = false;
  }

  if (age.value < 1 || age.value > 120 || isNaN(age.value) == true) {
    console.log("Ikä pitää olla välillä 1-120");
    age.style.borderColor = "red";
    aErr.innerHTML = `<p style="color:red">kä pitää olla välillä 1-120 vuotta</p>`

    x = false;
  }

  if (sex == null) {
    console.log("Sukupuoli pitää olla valittuna");
    x = false;
  }

  console.log(x);

  if (x == true) {
    calculateEnergy();
    wErr.innerHTML = "";
    hErr.innerHTML = "";
    aErr.innerHTML = "";

    weight.style.borderColor = "";
    height.style.borderColor = "";
    age.style.borderColor = "";
    
  } else {
    console.log("täytä oikeat arvot");
  }
}

function calculateEnergy() {
  // estetään lomakkeen uudelleenlataus
  event.preventDefault();

  // sijoitetaan muuttujiin formiin syötetyt arvot
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let age = document.querySelector("#age").value;
  let sex = document.querySelector(
    "input[type='radio'][name=sex]:checked"
  ).value;
  let activity = document.querySelector("#activity").value;
  // haetaan div idn avulla
  let results = document.querySelector("#results");
  // console logits debuggausta varten
  console.log(weight, height, age, sex, activity);

  // sijoitetaan muuttujaan laskukaava jolla selvitetään kalorintarve naisten sekä miesten osalta
  let wresult = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

  let mresult = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  // if else lause joka laskee aktiivisuuskertoimen avulla lopullisen kalorintarpeen sekä sijoitetaan tulos h1 kenttään divissä
  // sekä pyöristetään tulos
  if (sex == "woman") {
    if (activity == "no") {
      results.innerHTML = `<h1>${Math.round(1.3 * wresult)} kcal/päivä</h1>`;
    } else if (activity == "some") {
      results.innerHTML = `<h1>${Math.round(1.5 * wresult)} kcal/päivä</h1>`;
    } else if (activity == "frequent") {
      results.innerHTML = `<h1>${Math.round(1.7 * wresult)} kcal/päivä</h1>`;
    } else if (activity == "active") {
      results.innerHTML = `<h1>${Math.round(1.9 * wresult)} kcal/päivä</h1>`;
    } else if (activity == "max") {
      results.innerHTML = `<h1>${Math.round(2.2 * wresult)} kcal/päivä</h1>`;
    }
  } else if ((sex = "man")) {
    if (activity == "no") {
      results.innerHTML = `<h1>${Math.round(1.3 * mresult)} kcal/päivä</h1>`;
    } else if (activity == "some") {
      results.innerHTML = `<h1>${Math.round(1.5 * mresult)} kcal/päivä</h1>`;
    } else if (activity == "frequent") {
      results.innerHTML = `<h1>${Math.round(1.7 * mresult)} kcal/päivä</h1>`;
    } else if (activity == "active") {
      results.innerHTML = `<h1>${Math.round(1.9 * mresult)} kcal/päivä</h1>`;
    } else if (activity == "max") {
      results.innerHTML = `<h1>${Math.round(2.2 * mresult)} kcal/päivä</h1>`;
    }
  }
}

function checkForm2() {
  // estetään lomakkeen uudelleenlataus
  event.preventDefault();
  // alustetaan x
  let x = true;
  // asetetaan muuttujaan oikea kenttä
  let kcal = document.querySelector("#kcal");

  // tsekataan syötetty määärä kaloreita ja muutetaan x falseksi jos luvut eivät täsmää
  if (kcal.value < 1 || kcal.value > 3000 || isNaN(kcal.value) == true) {
    console.log("Kalorit pitää olla väliltä 1-3000");
    kcal.style.borderColor = "red";
    x = false;
  }

  // jos x jää true arvolle ajetaan calculateIntake funktio
  if (x == true) {
    calculateIntake();
  } else {
    console.log("täytä oikeat arvot");
  }
}

function calculateIntake() {
  // estetään lomakkeen uudelleenlataus
  event.preventDefault();
  // haetaan arvot
  let weekday = document.querySelector("#day").value;
  let eat = document.querySelector("#eating").value;
  let cal = document.querySelector("#kcal").value;
  // logataan arvoja
  console.log(weekday, eat, cal);
  // luodaan objekti
  let dataObject = { day: weekday, eating: eat, calories: cal };
  // laitetaan muuttujaan storedData energyLog JSON objektin haku local storagesta, tai luodaan sellainen
  // jos ei sellaista ole, sekä parsetaan
  // energyLog javascript objektiksi
  let storedData = JSON.parse(localStorage.getItem("energyLog")) || [];

  // liitetään storedDataan listan sisälle dataObjectin sisältö loppuun
  storedData.push(dataObject);

  // asetetaan energyLog nimeksi Json objektille ja muutetaan storedData stringiksi ja laitetaan objekti local storageen
  localStorage.setItem("energyLog", JSON.stringify(storedData));

  // Katsotaan että storedData ei ole tyhjä
  if (storedData !== null) {
    // valitaan tablearea sekä loudaan taulukko ja sen osat
    let tablearea = document.querySelector("#tablearea");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    //luodaan taulukon otsikot arrayhin
    let headerRow = document.createElement("tr");
    let headers = ["Päivä", "Ateria", "Kalorit"];
    // ajetaan jokaiselle headersin funktio joka luo otsikkotason rivit 
    headers.forEach((headerText) => {
      let th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    // sijoittaa lapsielementin headerRow
    thead.appendChild(headerRow);

    // loopin avulla luodaan body tason rivit
    for (let i = 0; i < storedData.length; i++) {
      let tr = document.createElement("tr");

      let td = document.createElement("td");
      td.textContent = storedData[i].day;

      let tdEating = document.createElement("td");
      tdEating.textContent = storedData[i].eating;

      let tdCal = document.createElement("td");
      tdCal.textContent = storedData[i].calories;

      //liitetään rivit lapsielementteinä riviin
      tr.appendChild(td);
      tr.appendChild(tdEating);
      tr.appendChild(tdCal);
      tbody.appendChild(tr);
    }
    // liitetää headi ja body taulukkoon lapsielementtinä
    table.appendChild(thead);
    table.appendChild(tbody);
    //tyhjätään taulukku duplikaattien muodostumisen varalle
    tablearea.innerHTML = "";
    // liitetään taulukko taulukko tablearea
    tablearea.appendChild(table);
  }

  for (let i = 0; i < storedData.length; i++) {
    console.log(storedData[i].day);
  }

  //alustetaan summa
  let sum = 0;

  //ajetaan jokaiselle storedDatan elementille funktio iterateFunction
  storedData.forEach(iterateFunction);

  // funktio lisää sum muuttujaan kalorit ja laskee ne yhteen
  function iterateFunction(value) {
    sum += parseInt(value.calories);
  }

  console.log(sum);

  //haetaan energyResults div IDn avulla
  let result = document.querySelector("#energyResults");

  // liitetään sum muuttuja h2 tagin sisällä diviin
  result.innerHTML = `<h2>Yhteensä: ${sum} KCAL</h2>`;
}
