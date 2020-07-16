var vm = new Vue({

    el: '#ff',
    data: {
        view: 'Introduction'

    },

    components: {
        Introduction: {
            template: "#Introduction"
        },
        history: {
            template: "#history"
        },
        Current_situation: {
            template: '#Current_situation'
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
