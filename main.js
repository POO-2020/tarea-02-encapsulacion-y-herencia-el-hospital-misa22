import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";
const nombre1 = new Nombre("Eduardo Misael","Solano","Rolon");
const nombre2 = new Nombre("Ximena","Solano","Rolon");
const probarNombre = _ => console.log(nombre1.getNombreCompleto());
probarNombre();
const probarApellido = _ => console.log(nombre1.getApellidoNombre());
probarApellido ();
const probarIniciales = _ => console.log(nombre1.getIniciales());
probarIniciales();
const fecha1 = new Fecha("25","05","2002");
const probarFecha = _ =>
    console.log(
        fecha1.getAnnios(),
        fecha1.getDiaFecha(),
        fecha1.getDias(),
        fecha1.getFecha(),
        fecha1.getMeses(),
        fecha1.getSemanas()
    );
    probarFecha();
    const tiempo1 = new Tiempo(10,25,"PM");
    const probarTiempo = _ => 
    console.log(
        tiempo1.getFormato12(),
        tiempo1.getFormato24()
    )
    probarTiempo();
    const paciente1 = new Paciente(nombre1,fecha1,3121838023);
    const probarPaciente = _ => console.log(paciente1.getPerfil());
    probarPaciente();
    const doctor1= new Doctor(nombre2,"cirugano",3121839801,"5asdf5660");
    const probarDoctor = _ => console.log(doctor1.getPerfil());
    probarDoctor();
    const cita1 = new Cita(fecha1,tiempo1,doctor1,paciente1);
    const probarCita = _ => console.log(cita1.getCita());
    probarCita();
    const hospita1 = new Hospital("Imms 1","Villa de alvarez")
    const probarHospital = _ => {
        hospita1.registrarDoctor(doctor1);
        hospita1.listarDoctores();
        hospita1.registrarCita(cita1);
        hospita1.listarCitas();
    
    }
    probarHospital();