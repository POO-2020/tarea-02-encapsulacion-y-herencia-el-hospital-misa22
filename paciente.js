import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
export default class Paciente{
    /**
     * @param {string} nombre;
     * @param {string} fechaDeNacimiento;
     * @param {number} telefono;
     */
    constructor (nombre,fechaDeNacimiento,telefono){
        this._nombre = nombre;
        this._fechaDeNacimiento = fechaDeNacimiento;
        this._telefono = telefono;
    }
    getPerfil(){
        return `${this._nombre.getNombreCompleto()},${this._fechaDeNacimiento.getFecha()},${this._telefono}`;
    }
}