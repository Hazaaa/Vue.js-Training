//Vue.js instanca
new Vue({
    //NAJBITNIJI atribut koji oznacava kojim ce elementima ova instanca da upravlja
    el: '#vue-app', //u ovom slucaju upravlja praznim divom u body-ju

    //Ovaj property oznacava podatke koje ce da sadzi ova vue.js instanca,
    //mogu da budu stringovi, nizovi, funkcije, objekti, itd...
    data: { 
        name: 'John Doe',
        job: "Software Engineer",
        website: "https://www.facebook.com/",
        websiteTag: "<a href='https://www.facebook.com/'>Vue Website Tag</a>",
        year: 2018,
        x: 0,  //pratimo koordinate misa kroz canvas
        y: 0,
        ime: "",    //vrednosti za two-way data binding
        godina: "",
        a: 0,       //vrednosti za computed properties
        b: 0,
        nesto: 20,
        available: false, //vrednosti za dinamicki css
        nearby: false,
        toogle: false,    //vrednosti za if uslov
        toogle2: true,
        niz1: ['Stefan', 'Steva','Pinki'],   //vrednosti za for petlju
        niz2: [
            {ime: 'Stefan', godina: 21},
            {ime: 'Marko', godina: 22},
            {ime: 'Djole', godina: 20}
        ],
        health: 100,    //vrednosti za igricu
        ended: false,
        refOutput: ''  //vrednost za ref
    },

    //Ovo je property za metode
    methods: {
        //obicna metoda
        greet: function() {
            return "Good morning!";
        },

        //metoda sa parametrom
        greet2: function(ime) {
            //kod vue.js pristup data property-ma se radi sa obicnim 
            //this.ime propertija bez potrebe da se dalje navodi data i slicno
            this.name = ime;
            return "Hello " + ime;
        },

        addYear: function() {
            this.year++;
        },

        decreaseYear: function() {
            this.year--;
        },

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        logName: function() {
            
        },

        logAge: function() {
            alert("You entered your age!");
        },

        //funkcije za igricu
        punch: function() {
            this.health -= 10;
            if( this.health <= 0) {
                this.ended = true;
            }
        },

        restart: function() {
            this.health = 100;
            this.ended = false;
        },

        //funkcija za ref
        submitFunction: function() {
            this.refOutput = this.$refs.input.value;
        }
    },

    computed: {
        addToA: function() {
            return this.a + this.nesto;
        },

        addToB: function() {
            return this.b + this.nesto;
        },

        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }

});

//Vue.js komponenta
Vue.component('greeting', {
    template: '<p>Hello there, i am re-usable component, {{ message }}. <button @click="changeMessage">Promeni</button></p>',
    data: function() {
        return {
            message: 'Ja sam u komponenti!'
        }
    },
    methods: {
        changeMessage: function() {
            this.message = 'Promenili smo poruku!'
        }
    }
});

//Dve razlicite Vue.js instance za kontrolisanje razlicitih delova
//Dva razlicita div-a obuhvataju i oni moraju da budu van jedan drugog
var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'Vue-app One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello from instance one!';
        }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'Vue-app Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "We changed title from app two!";
        }
    },
    computed: {
        greet: function() {
            return 'Hello from instance two!';
        }
    }
});
