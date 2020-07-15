var vm = new Vue({

    el: '#ff',
    data: {
        view: 'Introduction'
    },

    components: {
        Introduction: {
            template: `<p>This is home.</p>`
        },
        history: {
            template: `<p>This is posts.</p>`
        },
        Current_situation: {
            template: '#w'
        }
    }
});
var app = new Vue({
    el: "#e",
    methods: {
        changeView(viewName) {
            vm.view = viewName
        }
    }
})