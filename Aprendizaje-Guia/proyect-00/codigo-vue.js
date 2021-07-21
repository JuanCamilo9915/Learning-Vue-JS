const appVue = new Vue({
    el: '#app-vue-js',//"el" es una palabra reservada de vue JS
    data: {//"data" es una palabra reservada de vue JS
        titulo: 'Hellow Vue JS',
        frutas: ['Mango', 'Pera', "Manzana"],
        carros: ['Onix RS', 'Polo', 'Escape', 'Alto 800'],
        aviones: [
            { empresa: 'Boing', flota: [787, 737, 747] },
            { empresa: 'Airbus', flota: [350, 320, 380] }
        ],
        nuevofabricante: '',
        id: null,
        muestraEstadistica: [
            {etapaPersonas: 'Adultos', porcentaje: 50},
            {etapaPersonas: 'Jovenes', porcentaje: 25},
            {etapaPersonas: 'Niños', porcentaje: 25}
        ],
        totalMuestra: 0
    },
    methods: {
        metodoPrueba: function(){
            alert('Esto es la forma antigua de como se podia utilizar un método en Vue JS');
        },
        agregarFabricanteAviones () {
            this.aviones.push({
                empresa: this.nuevofabricante
            })
            this.nuevofabricante = "";
        }
    },
    computed: {
        sumaPoblacion(){
            this.totalMuestra = 0;
            for (poblacion of this.muestraEstadistica) {
                this.totalMuestra += poblacion.porcentaje;
            }
            return this.totalMuestra;
        }
    }
});