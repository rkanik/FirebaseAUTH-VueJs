<template>
    <div id="OnSearched">
        <div class="on-he" v-if="Post.length>0">
            <div class="loading" v-if="isLoading"></div>
            <h3 class="con-cat-title">Top Searched</h3>
            <p class="con-cat-subTitle">Based on your top Searched</p>
        </div>
        <ul class="on-cat-ul">
            <li v-for="p in Post" v-bind:key="p._id">
                <div class="img">
                    <div class="go-to-mv-de">
                        <div class="gtmd-overlay"></div>
                        <button>DETAILS</button>
                    </div>
                    <img v-bind:src="p.src">
                </div>
                <div class="item">
                    <h4>{{p.Name}}({{p.ReleaseYear}})</h4>
                    <p>
                        <b>Release:</b>
                        {{p.ReleaseDate}}({{p.Country}})
                    </p>
                    <p>
                        <b>IMDB:</b>
                        {{p.Rating}}
                    </p>
                    <p>
                        <b>Type:</b>
                        <span v-for="cat in p.Categories" v-bind:key="cat">{{cat}},</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import db from "../components/firebaseInit";
/*import { URLSearchParams } from "url";*/
const firebase = require("firebase");
const auth = firebase.auth();
import { bus } from "../main";

export default {
    name: "OnSearched",
    data() {
        return {
            /* Objects */
            Post: {},
            months: {
                "01": "Jan",
                "02": "Feb",
                "03": "Mar",
                "04": "Apr",
                "05": "May",
                "06": "Jun",
                "07": "Jul",
                "08": "Aug",
                "09": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec"
            },
            MovieSrc: [],

            /* Booleans */
            isLoading: true
        };
    },
    created() {
        bus.$on("TopSearched", data => {
            
            let temp = data;
            var sortby_flag_dsc = (a, b) => {
                if (a.flag > b.flag) return -1;
                else if (a.flag < b.flag) return 1;
                return 0;
            };
            temp.sort(sortby_flag_dsc);
            let mostSearched = temp.slice(0, 10);

            var MCategory;
            db.collection("Movies")
                .get()
                .then(result => {
                    this.Post = [];
                    result.forEach(doc => {
                        this.srcChanged = false;

                        let Movie = doc.data();
                        let keys = Movie.Categories;
                        keys.push(Movie.Name);
                        keys = keys.concat(Movie.Stars);
                        keys.push(Movie.Country);
                        keys.push(Movie.Director);
                        keys.push(Movie.Language);
                        keys.push(Movie.ReleaseYear);

                        keys = keys.map(m => m.toLowerCase());

                        let dateArray = doc.data().ReleaseDate.split("-");

                        let date =
                            dateArray[2] +
                            " " +
                            this.months[dateArray[1]] +
                            " " +
                            dateArray[0];

                        mostSearched.forEach(searched => {
                            if (keys.includes(searched.key) && this.Post.length<12) {
                                this.Post = this.Post.filter(
                                    m => m.Name !== Movie.Name
                                );
                                this.Post.push(Movie);
                                this.isLoading = false;
                            }
                        });
            
                    });
                });
            if (this.Post.length === 0) {
                this.isLoading = false;
            }


            this.isLoading = false;
        });
    },
    mounted() {},
    methods: {}
};
</script>

<style scoped lang='scss'>
// Importing All Material colors
@import "../assets/CSS/colors.scss";

.on-he {
    margin-top: 0.5rem;
    margin-right: 1rem;
    background-color: #e0f2f1;
    border-left: 5px solid #26a69a;
    padding: 0.2rem 0;
    padding-left: 0.8rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
    position: relative;
}
.on-cat-ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(18rem 22rem);
}
.on-cat-ul li {
    list-style-type: none;
    border: 1.5px solid #dadce0;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    color: #313131;
    border-radius: 0.4rem;
}

.on-cat-ul li:hover {
    border: 1.5px solid transparent;
    box-shadow: 1px 3px 6px 0 #a8a8a8;
}

.on-cat-ul li h4 {
    font-weight: 600;
}
.on-cat-ul li p {
    font-size: 0.9em;
}
.img {
    height: 9rem;
    width: 14rem;
    background-color: #ebebeb;
    box-sizing: border-box;
    overflow: visible;
    position: relative;
}
.img img {
    height: 9rem;
    width: 14rem;
    object-fit: cover;
    object-position: top;
    cursor: pointer;
}
.go-to-mv-de {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    .gtmd-overlay {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #00000057;
    }
    button {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 0.4rem 1rem;
        border: none;
        background-color: #00cfbb;
        color: $grey900;
        border-radius: 0.2rem;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.37);
        transform: translate(-50%, -50%);
        cursor: pointer;
    }
}
.show {
    display: block;
}
.item {
    padding: 1rem;
    box-sizing: border-box;
    line-height: 1.4;
}
.con-cat-title {
    margin-top: 0.3rem;
    color: #313131;
}
.con-cat-subTitle {
    margin-bottom: 0.2rem;
    font-size: 0.9em;
}

.loading {
    position: absolute;
    height: 5px;
    width: 100%;
    left: 50%;
    bottom: -3px;
    transform: translate(-50%, -50%);
    background-color: #e0f2f1;
}
.loading::before {
    display: block;
    content: "";
    height: 5px;
    width: 0;
    position: absolute;
    left: 0rem;
    border-radius: 2rem;
    background-color: #80cbc4;
    animation: animLoading 1.5s linear infinite;
}
@keyframes animLoading {
    0% {
        left: 0;
        width: 0;
    }
    50% {
        left: 50%;
        width: 50%;
    }
}
</style>