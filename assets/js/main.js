

const app = new Vue(
    {
        el: "#root",

        data: {
            img: [
                "./assets/img/torino1.jpg",
                "./assets/img/torino2.jpg",
                "./assets/img/parco_valentino.jpg",
                "./assets/img/basilica_superga.jpg",
                "./assets/img/fontana_angelica.jpg"
            ],
            indice: 0
        },

        methods: {
            /* funzione poer tornare all'immagine successiva */

            next: function next() {
                if (this.indice < this.img.length - 1) {
                    return this.indice += 1;
                } else {
                    return this.indice = 0
                }
            },
            /* funzione poer tornare all'immagine precedente */
            previous: function prevgious() {
                if (this.indice != 0) {
                    return this.indice -= 1;
                } else {
                    return this.indice = this.img.length - 1
                }
            },

            selected: function selected(e) {
                return this.indice = (e.currentTarget.getAttribute('data-number'));
            }
        }
    }
)

