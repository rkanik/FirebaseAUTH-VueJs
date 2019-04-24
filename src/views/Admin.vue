<template>
    <div class="admin">
        <textarea class="cntx-area" v-model="contxt" cols="180" rows="16"></textarea>
        <button id="save" @click="saveMovie">SAVE</button>
        <h1 v-if='isSuc'>Successfully added</h1>
    </div>
</template>

<script>

import db from "../components/firebaseInit";
import uuid from "uuid";
export default {
    name: "admin",
    data() {
        return {
            contxt: {},
            isSuc: false,
        };
    },
    methods: {
        saveMovie() {
            
            console.log(this.context);
            
            let id = uuid.v4();
            var desc = {
                getDetails: function() {
                    return {
                        _id: id,
                        Name: this.context.name,
                        src: this.context.image,
                        Categories: this.context.genre,
                        Stars: this.getStars(),
                        Director: this.context.director.name,
                        Plot: this.context.description,
                        ReleaseDate: this.context.datePublished,
                        ReleaseYear: this.getYear(),
                        Duration: this.getDuration(),
                        Rating: this.context.aggregateRating.ratingValue,
                        Language: this.context.review.inLanguage,
                        Country: "USA"
                    };
                },
                getStars: function() {
                    let actors = [];
                    this.context.actor.forEach(function(element) {
                        actors.push(element.name);
                        return element.name;
                        
                    });
                    return actors;
                },
                getYear: function() {
                    let date = this.context.datePublished.split("-");
                    return date[0];
                },
                getDuration: function() {

                  let d = this.context.duration.split('T');
                  let he = d[1].split('H');
                  let h = he[0];
                  let m = he[1].split('M')[0];

                  let duration = {
                     hour:h,minute:m
                  };
                  return duration;

                },
                getKeywords: function() {
                    let keys = [];

                    keys.push(this.context.name.toLowerCase());
                    keys.push(this.context.director.name.toLowerCase());
                    keys.push(this.getYear());
                    keys.push(this.context.review.inLanguage.toLowerCase());
                    

                    try {
                        this.context.genre.forEach(el => {
                            keys.push(el.toLowerCase());
                        });
                    } catch (error) {
                        keys.push(this.context.genre);
                    }
                    this.getStars().forEach(el => {
                        keys.push(el.toLowerCase());
                    });
                    
                    return keys;
                },
                time: this.time,
                context: JSON.parse(this.contxt)
            };
            
         
            

            console.log("Details", desc.getDetails());
            console.log("Keywords", desc.getKeywords());

            

            
            db.collection("Movies")
                .add(desc.getDetails())
                .then(() => {
                    console.log("Movie Added");
                    this.isSuc = true;
                    this.contxt = '';
                });
            let aW = desc.getKeywords();
            db.collection("Keywords")
                .where("_id", "==", "KEYID")
                .get()
                .then(result => {
                    result.forEach(doc => {
                        let words = doc.data().words;

                        aW.forEach(val => {
                            if (words.indexOf(val) === -1) {
                                words.push(val);
                            }
                        });
                        doc.ref.update({
                            words: words
                        });
                        console.log("Keyword updated");
                        this.isKeyword = true;
                    });
                    this.context = {};
                    this.time = "";
                });
        }
    }
};
</script>

<style scoped>
.cntx-area {
    margin: 0.2rem auto;
    display: block;
}
input {
    padding: 0.2rem 1rem;
    width: 12rem;
    margin: 0.2rem;
}
#save {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 4rem;
    width: 12rem;
    background-color: #009688;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
}
#save:hover {
    background-color: #00bdaa;
}
</style>
