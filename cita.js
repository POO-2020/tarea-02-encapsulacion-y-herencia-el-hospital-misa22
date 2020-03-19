import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js"
import Doctor from "./doctor.js";
export default class Cita{
    /**
     * @param {string} fecha;
     * @param {string} hora;
     * @param {string} doctor;
     * @param {string} paciente;
     */
    constructor(fecha,hora,doctor,paciente){
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }
    getCita = _ =>
        `${this.fecha.getFecha()} ${this.hora.getFormato24()} Dr. ${this.doctor.nombre.getNombreCompleto()} ${this.paciente.nombre.getNombreCompleto()}`;
}