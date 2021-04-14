function chooseCountry() {
    let index = document.querySelector("select").selectedIndex;

    if (document.querySelector("select").querySelectorAll("option")[index].value == "ger") {

        cities.innerHTML = "";

        let city1 = document.createElement("option");
        city1.innerHTML = "Munich";
        cities.prepend(city1);

        let city2 = document.createElement("option");
        city2.innerHTML = "Hamburg";
        cities.prepend(city2);

        let city3 = document.createElement("option");
        city3.innerHTML = "Berlin";
        cities.prepend(city3);

    } else if (document.querySelector("select").querySelectorAll("option")[index].value == "usa") {

        cities.innerHTML = "";

        let city1 = document.createElement("option");
        city1.innerHTML = "New York";
        cities.prepend(city1);

        let city2 = document.createElement("option");
        city2.innerHTML = "Washington";
        cities.prepend(city2);

        let city3 = document.createElement("option");
        city3.innerHTML = "Chicago";
        cities.prepend(city3);

    } else if (document.querySelector("select").querySelectorAll("option")[index].value == "ukr") {

        cities.innerHTML = "";

        let city1 = document.createElement("option");
        city1.innerHTML = "Lviv";
        cities.prepend(city1);

        let city2 = document.createElement("option");
        city2.innerHTML = "Odessa";
        cities.prepend(city2);

        let city3 = document.createElement("option");
        city3.innerHTML = "Kyiv";
        cities.prepend(city3);
    }

}

function showResult() {
    const index1 = document.querySelector("select").selectedIndex;
    const index2 = document.getElementById("cities").selectedIndex;

    const value1 = document.querySelector("select").querySelectorAll("option")[index1].innerHTML;
    const value2 = document.getElementById("cities").querySelectorAll("option")[index2].innerHTML;

    document.querySelector("p").innerHTML = value1 + ", " + value2;
}

let city1 = document.createElement("option");
city1.innerHTML = "Munich";
cities.prepend(city1);

let city2 = document.createElement("option");
city2.innerHTML = "Hamburg";
cities.prepend(city2);

let city3 = document.createElement("option");
city3.innerHTML = "Berlin";
cities.prepend(city3);

showResult();

document.querySelector("select").addEventListener("change", chooseCountry);
document.querySelector("select").addEventListener("change", showResult);
document.getElementById("cities").addEventListener("change", showResult);