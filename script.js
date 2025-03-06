function checkForm() {
    event.preventDefault();
    //haetaan muuttujiin formin arvot
  
    let weight = document.querySelector("#weight");
    let height = document.querySelector("#height");
    let age = document.querySelector("#age");
    let sex = document.querySelector("input[type='radio'][name=sex]:checked");
    let activity  = document.querySelector("#activity");
  
    let wErr = document.querySelector("#weightErr");
    let hErr = document.querySelector("#heightErr");
    let aErr = document.querySelector("#ageErr");
    let sErr = document.querySelector("#sErr");
    let acErr = document.querySelector("#actError")
  
    //alusteaan x
    let x = true;
    
    // tsekataan kenttien arvot, jos eivät sovi annettuihin vaatimuksiin annetaan virheilmoitus
    if (weight.value < 40 || weight.value > 199 || isNaN(weight.value) == true) {
      console.log("Painon pitää olla väliltä 40-199kg");
      weight.style.border = "3px solid red";
      wErr.innerHTML = `<p style="color:red">Painon pitää olla väliltä 40-199kg</p>`;
  
      x = false;
    }else{
      weight.style.border= "";
      wErr.innerHTML = "";
    }
  
    if (height.value < 80 || height.value > 240 || isNaN(height.value) == true) {
      console.log("Pituus pitää olla välillä 80-240cm");
      height.style.border = "3px solid red";
      hErr.innerHTML = `<p style="color:red">Pituus pitää olla väliltä 80-240cm</p>`
  
      x = false;
    }else{
      height.style.border= "";
      hErr.innerHTML = "";
    }
  
    if (age.value < 1 || age.value > 120 || isNaN(age.value) == true) {
      console.log("Ikä pitää olla välillä 1-120");
      age.style.border = "3px solid red";
      aErr.innerHTML = `<p style="color:red">Ikä pitää olla väliltä 1-120 vuotta</p>`
  
      x = false;
    }else{
      age.style.border= "";
      aErr.innerHTML = "";
    }
  
  
    if (sex == null) {
      console.log("Sukupuoli pitää olla valittuna");
      sErr.innerHTML = `<p style="color:red">Sukupuoli pitää olla valittuna</p>`

      x = false;
    }else{
      hErr.innerHTML = "";
    }
  

    if(activity.value == ""){      
      console.log("Aktiivisuus pitää olla valittuna");
      activity.style.outline = "3px solid red";
      acErr.innerHTML = `<p style="color:red">Aktiivisuus pitää olla valittuna</p>`
      

      x = false;
    }else{
      height.style.border= "";
      activity.style.outline = "";
      acErr.innerHTML = "";
    }
  
  
    console.log(x);
  
    //jos virheitä ei tule ajetaan calculateEnergy() ja tyhjennetään virheilmoitukset
    if (x == true) {
      calculateEnergy();
      wErr.innerHTML = "";
      hErr.innerHTML = "";
      aErr.innerHTML = "";
      sErr.innerHTML = "";
      acErr.innerHTML = "";
  
      weight.style.border= "";
      height.style.border = "";
      age.style.border = "";
      activity.style.outline = "";
    //   cal.style.borderColor = "";
      
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
    // if else lause joka laskee aktiivisuuskertoimen avulla lopullisen kalorintarpeen sekä sijoitetaan tulos h3 kenttään divissä
    // sekä pyöristetään tulos
    if (sex == "woman") {
      if (activity == "no") {
        results.innerHTML = `<h3>${Math.round(1.3 * wresult)} kcal/päivä</h3>`;
      } else if (activity == "some") {
        results.innerHTML = `<h3>${Math.round(1.5 * wresult)} kcal/päivä</h3>`;
      } else if (activity == "frequent") {
        results.innerHTML = `<h3>${Math.round(1.7 * wresult)} kcal/päivä</h3>`;
      } else if (activity == "active") {
        results.innerHTML = `<h3>${Math.round(1.9 * wresult)} kcal/päivä</h3>`;
      } else if (activity == "max") {
        results.innerHTML = `<h3>${Math.round(2.2 * wresult)} kcal/päivä</h3>`;
      }
    } else if ((sex = "man")) {
      if (activity == "no") {
        results.innerHTML = `<h3>${Math.round(1.3 * mresult)} kcal/päivä</h3>`;
      } else if (activity == "some") {
        results.innerHTML = `<h3>${Math.round(1.5 * mresult)} kcal/päivä</h3>`;
      } else if (activity == "frequent") {
        results.innerHTML = `<h3>${Math.round(1.7 * mresult)} kcal/päivä</h3>`;
      } else if (activity == "active") {
        results.innerHTML = `<h3>${Math.round(1.9 * mresult)} kcal/päivä</h3>`;
      } else if (activity == "max") {
        results.innerHTML = `<h3>${Math.round(2.2 * mresult)} kcal/päivä</h3>`;
      }
    }
  }
  
  function checkForm2() {
    // estetään lomakkeen uudelleenlataus
    event.preventDefault();
    // alustetaan x
    let x = true;
    // asetetaan muuttujaan oikea kenttä
    let day = document.querySelector("#day");
    let meal = document.querySelector("#eating");
    let kcal = document.querySelector("#kcal");
    let cErr = document.querySelector("#calErr");
    let dErr = document.querySelector("#dayErr");
    let mErr = document.querySelector("#mealErr");

    if( day.value == ""){
      console.log("Päivä pitää olla valittuna");

      day.style.outline = "3px solid red";
      dErr.innerHTML =`<p style="color:red">Päivä pitää olla valittuna</p>`
      x = false;

    }else{
      day.style.outline = "";
      dErr.innerHTML = "";
    }

    if( meal.value == ""){
      console.log("Ateria pitää olla valittuna");

      meal.style.outline = "3px solid red";
      mErr.innerHTML =`<p style="color:red">Ateria pitää olla valittuna</p>`
      x = false;

    }else{
      meal.style.outline = "";
      mErr.innerHTML ="";
    }
  
    // tsekataan syötetty määärä kaloreita ja muutetaan x falseksi jos luvut eivät täsmää
    if (kcal.value < 1 || kcal.value > 3000 || isNaN(kcal.value) == true) {
        
      kcal.style.border = "3px solid red";
      cErr.innerHTML =`<p style="color:red">Kalorit pitää olla väliltä 1-3000 kcal</p>`
      x = false;
    }else{
      kcal.style.border = "";
      cErr.innerHTML = "";

    }
  
    // jos x jää true arvolle ajetaan calculateIntake funktio sekä tyhjennetään virheilmoitukset
    if (x == true) {
      calculateIntake();
      
      day.style.outline = "";
      meal.style.outline = "";
      kcal.style.border = "";
      kcal.value = "";
      
      cErr.innerHTML = "";
      dErr.innerHTML = "";
      mErr.innerHTML = "";
  
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
      table.style.color = "white";
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
  
    // liitetään sum muuttuja h3 tagin sisällä diviin
    result.innerHTML = `<h3>Yhteensä: ${sum} KCAL</h3>`;
  }
  