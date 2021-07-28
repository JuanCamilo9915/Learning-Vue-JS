const appVue = new Vue({
    el: '#appVue',
    data: {
        fondo: 'bg-success',
        color: false
    },
    methods: {

    }
});
/*-------------------------------------------*/
const appGym = new Vue({
    el: '#appGym',
    data: {
        titulo: 'Gestión de Ejercicios del Gym',
        ejercicios: [],
        nuevoEjercicio: ''
    },
    methods: {
        agregarEjercicio: function(){
            this.ejercicios.push({
                nombre: this.nuevoEjercicio,
                estado: false
            });
            console.log('Ejercicios: ' + this.ejercicios);
            this.nuevoEjercicio = "";
            localStorage.setItem('app-gym', JSON.stringify(this.ejercicios));
        },
        editarEjercicio: function(indexP){
            this.ejercicios[indexP].estado = true;
            localStorage.setItem('app-gym', JSON.stringify(this.ejercicios));
        },
        eliminarEjercicio: function(indexP){
            this.ejercicios.splice(indexP, 1);
            localStorage.setItem('app-gym', JSON.stringify(this.ejercicios));
        }
    },
    created: function(){
        let infoLocalStorageDB = JSON.parse(localStorage.getItem('app-gym'));

        if (infoLocalStorageDB === null) {
            this.ejercicios = [];
        }else{
            this.ejercicios = infoLocalStorageDB;
        }
    }
});