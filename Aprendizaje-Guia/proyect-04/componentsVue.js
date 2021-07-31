//Componentes en Vue:
//Nota Importante: todo componente debe estar encima de la instancia de la app de vue.
Vue.component('welcome', {
    template: `
    <div>
        <h1>Hola Mundo! utilizando componentes con la sigte info...{{greeting2}}</h1>
    
        <h3>New Message: 
            <u style="color: green">
                Este componente esta en el mismo archivo de la instancia de Vue-JS
            </u>
        </h3>
    </div>
    `,
    data() {
        return {
            greeting2: 'Retornando datos desde un componente'
        }
    }
})

const appVue = new Vue({
    el: '#appVue',
    data: {
        greeting: 'Hellow JuanCamiloDev'
    },
    methods: {

    },
    computed: {

    }
});