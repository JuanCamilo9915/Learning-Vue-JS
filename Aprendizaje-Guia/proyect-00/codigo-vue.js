const appVue = new Vue({
    el: '#app-vue-js',
    data: {
        titulo: 'Hellow Vue JS',
        frutas: ['Mango','Pera',"Manzana"],
        carros: ['Onix RS','Polo','Escape','Alto 800'],
        aviones: [
            {empresa: 'Boing', flota: [787,737,747]},
            {empresa: 'Airbus', flota: [350,320,380]}
        ]
    }
});