var root = new Vue ({
    el: "#root",

    data: {
        filmList: [],
        filmListMod: [],
        serieList: [],
        serieListMod: [],
        keyWord: "",
    },

    // mounted() {
         
    // },

    methods: {
        sendData() {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=52dbf5b6e21f1268285391475335cb84&language=it_IT&query=" + this.keyWord)
            .then( (result) =>{
                this.filmList = [],
                this.filmListMod= [],

                this.filmList = result.data.results;

                console.log(this.filmList);
                if (this.filmList.length > 0) {

                    this.filmList.forEach( (element) => {
                        if (!(element.poster_path == null)) {
                            this.filmListMod.push(element);
                        }
                    });

                };
            });

            axios.get("https://api.themoviedb.org/3/search/tv?api_key=52dbf5b6e21f1268285391475335cb84&language=it_IT&query=" + this.keyWord)
            .then( (result) =>{
                this.serieList = [],
                this.serieListMod= [],

                this.serieList = result.data.results;

                if (this.serieList.length > 0) {

                    this.serieList.forEach( (element) => {
                        if (!(element.poster_path == null)) {
                            this.serieListMod.push(element);
                        }
                    });

                };
            });
        },
    },

});