var root = new Vue ({
    el: "#root",

    data: {
        filmList: [],
        keyWord: "",
    },

    // mounted() {
         
    // },

    methods: {
        sendData() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=52dbf5b6e21f1268285391475335cb84&query=" + this.keyWord),
            axios.get("https://api.themoviedb.org/3/search/tv?api_key=52dbf5b6e21f1268285391475335cb84&query=" + this.keyWord)
            .then( (result) =>{
                console.log(result.data.results);
                this.filmList = result.data.results;

                this.filmList.vote_average = "prova";
            });

            console.log(this.filmList.vote_average);
        },
    },

});