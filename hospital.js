import Doctor from "./doctor.js";
import Cita from "./cita.js";

export default class Hospital {
    /**
     * @param {string} nombre "nombre del hospital";
     * @param {string} direccion "Direccion del hospital"
     */
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.doctores = [];
        this.citas = [];
    }
    /**
    * @param {string} doctor 
    */
    registrarDoctor(doctor) {
         this.doctores.push(doctor);
    }
    listarDoctores = _ => this.doctores.forEach(d => console.log(d.getPerfil(), '\n'));

    /**
     * 
     * @param {string} cita 
     */
    registrarCita = cita => this.citas.push(cita);

    listarCitas = _ => this.citas.forEach(c => console.log(c.getCita(), '\n'));

}