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
        nuevofabricante: ''
    },
    methods: {
        prueba: function(){
            alert('Esto es la forma antigua de como se podia utilizar un método en Vue JS');
        },
        agregarFabricanteAviones () {
            /*console.log("Se agrego el precio al producto");
            alert('Se agrego el precio al producto');*/
            this.aviones.push({
                empresa: this.nuevofabricante
            })
        }
    }
});