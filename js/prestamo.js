//evento para crear nuevo prestamo
document.getElementById('form').addEventListener('submit', saveTask);

function mostrarDatos(){
  var ci = document.getElementById("ci").value;
  var tmp = document.getElementById("tmp").value;
  var intp = document.getElementById("intp").value;
  var mostrar= document.getElementById("datos");
  mostrar.innerHTML= '';
  var cf= 0;
  var ct = 0;

  var nInteres = intp /100;

  cf = ci*(1+nInteres)^tmp;
  ct= cf/tmp;
  mostrar.innerHTML +='El capital final seria de '  + cf + ' y la cuota de '+ ct ;


}

function saveTask(e) {
  let ci = newFunction();
  let persona = document.getElementById("persona").value;
  let tmp = document.getElementById('tmp').value;
  let intp = document.getElementById("intp").value;
  let cf= 0;
  let ct = 0;

  var nInteres = intp /100;

  cf = ci*(1+nInteres)^tmp;
  ct= ci*tmp*nInteres;
  console.log(tmp)

  let task = {
    ci,
    persona,
    tmp,
    intp,
    cf,
    ct
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('form').reset();
  e.preventDefault();
}
function newFunction() {
    return document.getElementById('ci').value;
}

//eliminar
function deleteTask(ci) {
    console.log(ci)
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].ci == ci) {
        tasks.splice(i, 1);
      }
    }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
//funcion obtener
function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let ci = tasks[i].ci;
    let persona = tasks[i].persona;
    let tmp = tasks[i].tmp;
    let intp = tasks[i].intp;
    let cf = tasks[i].cf;
    let ct = tasks[i].ct;
    
    tasksView.innerHTML += `<tr>
    <td>${persona}</td>
    <td>${ci}</td>

    <td>${tmp}</td>
    <td>${intp}</td>
    <td>${cf}</td>
    <td>${ct}</td>
    
    <td><a href="#" onclick="deleteTask('${ci}')" class="btn btn-danger ml-5">Eliminar</a></td>
    </tr>`;
  
    const hoy = new Date() ;
 
  }


}


//funcion para  mostrar primera interfaz
function vistaPrincipal(){
  location.reload();
}

getTasks();