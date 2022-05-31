import { data } from "./export.js"
export const orderByName = async () =>{
    let sortedData = data.sort((a, b)=>{
        if(a.nombre < b.nombre ){
            return -1;
        }
        if(a.nombre > b.nombre ){
            return 1;
        }
        return 0;
    })

    return sortedData;
}