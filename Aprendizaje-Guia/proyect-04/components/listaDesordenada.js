Vue.component('list', {
    template: `
    <div>
        <ul>
            <li>{{uno}}</li>
            <li>{{dos}}</li>
            <li>{{tres}}</li>
        </ul>
    </div>
    `,
    data() {
        return {
            uno: 'Elemento # 1',
            dos: 'Elemento # 2',
            tres: 'Elemento # 3'
        }
    }
})