import './style.css';

const divPrimero = document.querySelector("div");
divPrimero.classList.add("container");

const divS = document.querySelectorAll("div div");

const divHijo1 = divS[0];
divHijo1.classList.add("search");

const divHijo2 = divS[1];
divHijo2.classList.add("li-container");

const divHijo3 = divS[2];
divHijo3.classList.add("empty");


divHijo3.textContent = "You have no pending tasks";

const divHijo4 = divS[3];
divHijo4.classList.add("task-count");
divHijo4.textContent = "Number of tasks: 0"; 

const boton = document.querySelector("button");
boton.classList.add("btn-add");

const ul = document.querySelector("ul");


const crearP = () => {
  const p = document.createElement("p");
  return p;
}


const crearSpan = (texto) => {
  const span = document.createElement("span");
  span.textContent = texto;
  return span;
}


const actualizarContador = () => {
  const numTasks = ul.children.length;
  divHijo4.textContent = `Number of tasks: ${numTasks}`;

  
  if (numTasks === 0) {
    divHijo3.textContent="You have no pending tasks";
  } else {
    divHijo3.textContent = ""; 
  }
};

boton.addEventListener("click", function(event) {
  event.preventDefault(); 

  const input = document.querySelector("input");

  const p = crearP();
  const s = crearSpan(input.value); 
  const li = document.createElement("li");

  p.appendChild(s);
  li.appendChild(p); 
  
  const but = document.createElement("button");
  but.classList.add("btn-delete");
  but.textContent = "X";
  li.appendChild(but);

  ul.appendChild(li); 

  
  input.value="";

  actualizarContador(); 

  
  p.addEventListener("click", () => {

    p.style.textDecoration = p.style.textDecoration === "line-through" ? "none" : "line-through"
  });


  but.addEventListener("click",(e)=>{
    ul.removeChild(li);
    actualizarContador();
  })
});



