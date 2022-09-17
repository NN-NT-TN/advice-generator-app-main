const url='https://api.adviceslip.com/advice';
let app = new Vue(
    {
        el: '#app',
        data: {

            id: null,
            message: null,

        }, mounted() {
            axios
                .get(url)
                .then(response =>
                    (this.id = response.data.slip.id, this.message = response.data.slip.advice))
        },
        methods: {
            getrandom: function () {
                axios
                    .get(url)
                    .then(response =>
                        (this.id = response.data.slip.id, this.message = response.data.slip.advice))
            }
        }
    }
)

  


