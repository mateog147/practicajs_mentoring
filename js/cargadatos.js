import { data } from "./export.js";
export const dataTable = () =>{
    const container = document.querySelector("#container");
    

    //Creo la tabla
    const tableData = document.createElement("table");
    tableData.classList.add("table");

    //Creo el encabezado
    const tableHeader = document.createElement("tr");
    const nameCol = document.createElement("th");
    nameCol.textContent = "Nombre"
    const lastNameCol = document.createElement("th");
    lastNameCol.textContent = "Apellido"
    const ageCol = document.createElement("th");
    ageCol.textContent = "Edad";

    const emailCol = document.createElement("th");
    emailCol.textContent = "Email"
    const telCol = document.createElement("th");
    telCol.textContent = "Telefono"

    tableHeader.append(nameCol, lastNameCol, ageCol, emailCol,telCol);
    tableData.append(tableHeader);

    //Alimento la informacion
    data.forEach((value, index, array)=>{
        const tableRow = document.createElement("tr");
        const name = document.createElement("td");
        name.textContent = value.nombre;
        const lastName = document.createElement("td");
        lastName.textContent = value.apellidos;
        const age = document.createElement("td");
        age.textContent = value.edad;
        const email = document.createElement("td");
        email.textContent = value.email;
        const tel = document.createElement("td");
        tel.textContent = value.telefono;
    
        tableRow.append(name, lastName, age, email,tel);
    
        tableData.append(tableRow);
    })


    container.append(tableData);

};