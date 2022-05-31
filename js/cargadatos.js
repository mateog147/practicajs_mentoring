import { data } from "./export.js";
import { orderByName } from "./orderData.js";
export const dataTable = () =>{
    const container = document.querySelector("#container");
    
    const helloWorld = ()=>{

        console.log(tableData.rows.length)
        let cell = tableData.rows[1].cells;
        replaceAll();
    }

    const replaceAll =  (displayData) =>{
        let cell;
        console.log(data[0].nombre)
        console.log(displayData[0].nombre);
        for(let i = 1; i < tableData.rows.length; i++){
                cell = tableData.rows[i].cells;
                cell[0].textContent = displayData[i-1].nombre;
                cell[1].textContent = displayData[i-1].apellidos;
                cell[2].textContent = displayData[i-1].edad;
                cell[3].textContent = displayData[i-1].email;
                cell[4].textContent = displayData[i-1].telefono;
        }
    }

    const orderByName = () =>{
        let sortedData = data.sort((a, b)=>{
            if(a.nombre < b.nombre ){
                return -1;
            }
            if(a.nombre > b.nombre ){
                return 1;
            }
    
            return 0;
        })
    
        console.log(sortedData);
        replaceAll(sortedData);

    }


    //Creo la tabla
    const tableData = document.createElement("table");
    tableData.classList.add("table");

    //Creo el encabezado
    const tableHeader = document.createElement("tr");
    const nameCol = document.createElement("th");
    nameCol.textContent = "Nombre"
    nameCol.addEventListener("click",orderByName,true);

    const lastNameCol = document.createElement("th");
    lastNameCol.textContent = "Apellido"
    lastNameCol.addEventListener("click",helloWorld,true);

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