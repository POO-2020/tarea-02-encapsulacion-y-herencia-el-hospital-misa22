import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
export default class Paciente{
    /**
     * @param {string} nombre;
     * @param {string} fechaDeNacimiento;
     * @param {number} telefono;
     */
    constructor (nombre,fechaDeNacimiento,telefono){
        this.nombre = nombre;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.telefono = telefono;
    }
    getPerfil(){
        return `${this.nombre.getNombreCompleto()},${this.fechaDeNacimiento.getFecha()},${this.telefono}`;
    }
}