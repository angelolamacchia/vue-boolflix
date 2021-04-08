var root = new Vue ({
    el: "#root",

    data: {
        filmList: [],
        filmListMod: [],
        serieList: [],
        serieListMod: [],
        keyWord: "",
        titleFilm: "",
        titleSerie: "",
        background: "img/netflix.0.gif",
        popUpVis: "notVisible",
        filmCounter: "NaN",
        filmId: "",
        actors: [],
    },

    // mounted() {
         
    // },

    methods: {
        sendData() {
            axios
            .get("https://api.themoviedb.org/3/search/movie?api_key=52dbf5b6e21f1268285391475335cb84&language=it&query=" + this.keyWord)
            .then( (result) =>{
                this.filmList = [];
                this.filmListMod= [];
                this.titleFilm= "Film";
                this.background= "",

                this.filmList = result.data.results;

                console.log(this.filmList);
                if (this.filmList.length > 0) {
                    // creo un nuovo array solo con i film con poster
                    this.filmList.forEach( (element) => {
                        if (!(element.poster_path == null)) {
                            this.filmListMod.push(element);
                        }
                    });

                };
            });

            axios
            .get("https://api.themoviedb.org/3/search/tv?api_key=52dbf5b6e21f1268285391475335cb84&language=it&query=" + this.keyWord)
            .then( (result) =>{
                this.serieList = [];
                this.serieListMod= [];
                this.titleSerie= "Serie tv";

                this.serieList = result.data.results;

                if (this.serieList.length > 0) {
                    // creo un nuovo array solo con le serie con poster
                    this.serieList.forEach( (element) => {
                        if (!(element.poster_path == null)) {
                            this.serieListMod.push(element);
                        }
                    });

                };
            });
        },

        getFlag(country) {
            switch (country) {
                case "en": 
                    return 'https://www.countryflags.io/gb/flat/64.png';
                    break;

                case "cs":
                    return 'https://www.countryflags.io/cz/flat/64.png';
                    break;

                case "da":
                    return 'https://www.countryflags.io/dk/flat/64.png';
                    break;

                case "ja":
                    return 'https://www.countryflags.io/jp/flat/64.png';
                    break;

                case "hi":
                    return 'https://www.countryflags.io/in/flat/64.png';
                    break;

                case "zh":
                    return 'https://www.countryflags.io/cn/flat/64.png';
                    break;

                case "ko":
                    return 'https://www.countryflags.io/kr/flat/64.png';
                    break;

                default:
                    return 'https://www.countryflags.io/' + country + '/flat/64.png';
            }         
        },

        popUpShow(index) {
            this.filmCounter = index;
            
            this.filmId = this.filmListMod[index].id;
            
            axios
            .get("https://api.themoviedb.org/3/movie/" + this.filmId + "/credits?api_key=52dbf5b6e21f1268285391475335cb84")
            .then( (result) => {
                this.actors= [];
                for (let i=0; i<5; i++) {
                    this.actors.push(result.data.cast[i].name);
                }
            });
        },
        popUpClose(index) {
            this.filmCounter = 'NaN';
        }
        
    },

});