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
  // localStorage.setItem('dataObject', JSON.stringify(dataObject));
  // let retrievedObject = localStorage.getItem('dataObject');

  // dataObject.push({"day":weekday, "eating":eat, "calories":cal})

  // console.log(storedData);

  //alustetaan summa
  let sum = 0;

  //ajetaan jokaiselle storedDatan elementille funktio iterateFunction
  storedData.forEach(iterateFunction);

  // funktio lisää sum muuttujaan kalorit ja laskee ne yhteen
  function iterateFunction(value){
    sum += parseInt(value.calories);
    
  }
  
  console.log(sum);


  //haetaan energyResults div IDn avulla
  let result = document.querySelector("#energyResults");


  // liitetään sum muuttuja h2 tagin sisällä diviin
  result.innerHTML = `<h2>${sum} KCAL</h2>`



  // Object.keys(localStorage).forEach(function (key) {
  //   let key1 = localStorage.getItem(key);
  //   console.log(key1);
  // });

  // for (const key in localStorage) {
  //   console.log(`${key}: ${localStorage.getItem(key)}`);
  // }

  // console.log("retrievedObject:", JSON.parse(retrievedObject));
}
