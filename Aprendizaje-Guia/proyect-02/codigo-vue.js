const appVue = new Vue({
    el: '#appVue',
    data: {
        message: 'JuanCamiloDev',
        contador: 0
    },
    methods: {

    },
    computed: {
        messageInvert(){
            return this.message.split('').reverse().join('');
        },
        colorBarra(){
            return {
                'bg-danger': this.contador <= 30,
                'bg-warning': this.contador > 30 && this.contador < 47,
                'bg-success': this.contador >= 47
            }
        }
    }
});