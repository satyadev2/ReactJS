URL = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(URL);

// console.log(promise);
const para = document.querySelector("#para");

const getFacts = async () => {
    console.log("getting data----");
    let responce = await fetch(URL);
    // console.log(responce);
    let data = await responce.json();
    console.log(data);
    data.forEach(element => {
        setTimeout(() => {
            console.log(element.text);
            para.innerText = element.text;
        }, 5000);

    });

}


console.log(getFacts());
