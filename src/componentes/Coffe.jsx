export function Coffe() {
    // const caliente=true
    // if(caliente){
    //     return (<h1>Cafe caliente</h1>)
    // }
    // else{
    //     return(<h1>Cafe frio</h1>)
    // }
    // return(<h1>Hola Coffe</h1>)
    //operador ternario
    //return(<h1>{caliente?"cafe caliente":"cafe frio"}</h1>)
    const datos = {
        nombre: "bahiron",   
        edad: 21
    }
    return (<div>
        <h1>{datos.nombre}</h1>
        <h1>{datos.edad}</h1>
    </div>)
}
//export default Coffe;