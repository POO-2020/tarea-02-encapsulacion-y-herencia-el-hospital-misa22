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
        this._fecha = fecha;
        this._hora = hora;
        this._doctor = doctor;
        this._paciente = paciente;
    }
    getCita = _ =>
        `${this._fecha.getFecha()} ${this._hora.getFormato24()} Dr. ${this._doctor._nombre.getNombreCompleto()} ${this._paciente._nombre.getNombreCompleto()}`;
}