//1) Select the section with an id of container without using querySelector.

const id = document.getElementById('container');
console.log(id);

//2) Select the section with an id of container using querySelector.

const id2 = document.querySelector('#container');
console.log(id2);

//3) Select all of the list items with a class of "second".

const id3 = document.querySelectorAll(".second");
console.log(id3);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const id4 = document.querySelector("ol .third");
console.log(id4);

//5) Give the section with an id of container the text "Hello!".
const id5 = document.getElementById("container");
id5.append("Hello!");
console.log(id5);

//6) Add the class main to the div with a class of footer.
let id6 = document.querySelector('.footer');
id6.classList.add("main");
//7) Remove the class main on the div with a class of footer.
let id7 = document.querySelector(".footer");
id6.classList.remove("main");

//8) Create a new li element.
let idli = document.createElement("li");
//9) Give the li the text "four".
idli.innerText ="four"; 
console.log(idli);


//10) Append the li to the ul element.
let id10 = document.querySelector("ul");
id10.appendChild(idli);
console.log(id10);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const id11 = document.querySelectorAll("ol li");
    for (let i = 0; i<id11.length ;i++) 
    {
        id11[i].style.backgroundColor = "green";
    }
    console.log(id11);

//13) Remove the div with a class of footer.
let id12 = document.querySelector(".footer");
id12.remove();
console.log(id12);
