import Doctor from "./doctor.js";
import Cita from "./cita.js";

export default class Hospital {
    /**
     * @param {string} nombre "nombre del hospital";
     * @param {string} direccion "Direccion del hospital"
     */
    constructor(nombre, direccion) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._doctores = [];
        this._citas = [];
    }
    /**
    * @param {string} doctor 
    */
    registrarDoctor(doctor) {
         this._doctores.push(doctor);
    }
    listarDoctores = _ => this._doctores.forEach(d => console.log(d.getPerfil(), '\n'));

    /**
     * 
     * @param {string} cita 
     */
    registrarCita = cita => this._citas.push(cita);

    listarCitas = _ => this._citas.forEach(c => console.log(c.getCita(), '\n'));

}