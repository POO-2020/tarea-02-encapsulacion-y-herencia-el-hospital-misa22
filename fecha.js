export default class Fecha {
    /**
     * 
     * @param {String} dia Dia del mes
     * @param {String} mes Mes del año, comienza en 0(Enero)
     * @param {String} annio Año de la fecha
     */
    constructor(dia, mes, annio) {
        this._fecha = new Date(annio, mes, dia);
    }
    formatearMsecs = (dividendo) => Math.trunc((Date.now() - this._fecha) / dividendo);

    getAnnios = _ => this.formatearMsecs(31557600000);

    getMeses = _ => this.formatearMsecs(2629800000);

    getSemanas = _ => this.formatearMsecs(604800000);

    getDias = _ => this.formatearMsecs(86400000);

    getFecha = _ => {
        const meses = ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agto', 'Sept', 'Oct', 'Nov', 'Dic'];
        return `${this._fecha.getDate()}/${meses[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`;
    }
    getDiaFecha = _ => {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return dias[this._fecha.getDay()];
    }
}