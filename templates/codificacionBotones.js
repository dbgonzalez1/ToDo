/*Variable para definir a nuesta tabla*/
var tIndex,
  table = document.getElementById("table");

/*verificación si existe o no datos en el formulario*/
function verificacionDatos() {
  var isEmpty = false,
    tarea = document.getElementById("tarea").value,
    correoelectronico = document.getElementById("correoelectronico").value,
    prioridad = document.getElementById("prioridad").value;

  if (tarea === "") {
    alert("Ingrese su tarea");
    isEmpty = true;
  } else if (correoelectronico === "") {
    alert("Ingrese email válido");
    isEmpty = true;
  } else if (prioridad === "") {
    alert("Ingrese prioridad");
    isEmpty = true;
  }
  return isEmpty;
}

/*Función para agregar datos por celda*/
function agregarDatos() {
  if (!verificacionDatos()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      tarea = document.getElementById("tarea").value,
      correoelectronico = document.getElementById("correoelectronico").value,
      prioridad = document.getElementById("prioridad").value;

    cell1.innerHTML = tarea;
    cell2.innerHTML = correoelectronico;
    cell3.innerHTML = prioridad;
    /*Llama al elemento set y agrega*/
    seleccionarDato();
  }
}

/*Funcion para seleccionar dato de la tabla*/
function seleccionarDato() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      tIndex = this.rowIndex;
      document.getElementById("tarea").value = this.cells[0].innerHTML;
      document.getElementById("correoelectronico").value = this.cells[1].innerHTML;
      document.getElementById("prioridad").value = this.cells[2].innerHTML;
    };
  }
}
seleccionarDato();

function editarDato() {
  var fname = document.getElementById("tarea").value,
    lname = document.getElementById("correoelectronico").value,
    age = document.getElementById("prioridad").value;
  if (!checkEmptyInput()) {
    table.rows[tIndex].cells[0].innerHTML = tarea;
    table.rows[tIndex].cells[1].innerHTML = correoelectronico;
    table.rows[tIndex].cells[2].innerHTML = prioridad;
  }
}

function eliminarDato() {
  table.deleteRow(tIndex);
  /*Limpia la fila*/
  document.getElementById("tarea").value = "";
  document.getElementById("correoelectronico").value = "";
  document.getElementById("prioridad").value = "";
}
