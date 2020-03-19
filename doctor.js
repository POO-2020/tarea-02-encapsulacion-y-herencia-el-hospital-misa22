import Nombre from "./nombre.js";
export default class Doctor {
    /**
     * @param {string} nombre;
     * @param {string} especialidad;
     * @param {number} telefono;
     * @param {string} cedula:
     */
    constructor(nombre,especialidad, telefono, cedula) {
        this._nombre = nombre;
        this._especialidad = especialidad;
        this._telefono = telefono;
        this._cedula = cedula;
    }
    getPerfil(){
        return `${this._cedula},${this._especialidad},Dr.${this._nombre.getNombreCompleto()},${this._telefono},`;
    }
}