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
        y: 0
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
        }
    }
});
