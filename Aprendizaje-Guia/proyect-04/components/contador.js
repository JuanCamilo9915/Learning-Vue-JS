Vue.component('counter', {
    template: `
    <div>
        <h2>{{count}}</h2>
        <button @click="count++">+</button>
    </div>
    `,
    data() {
        return {
            count: 0
        }
    }
})