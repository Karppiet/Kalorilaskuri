function calculate(){
    event.preventDefault();
    let weight = document.querySelector("#weight").value;
    let length = document.querySelector("#length").value;
    let age = document.querySelector("#age").value;
    let sex = document.querySelector("input[type='radio'][name=sex]:checked").value;

    console.log(weight, length, age, sex);


} 