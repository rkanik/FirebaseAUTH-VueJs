<template>
    <div class="admin">
        <!-- <div class="form">
            <input type="text" placeholder="Name" v-model=name><br>
            <input type="text" placeholder="Language" v-model=lang><br>
            <input type="text" placeholder="Plot" v-model=plot><br>
            <input type="text" placeholder="Country" v-model="Country"><br>
            <input type="number" placeholder="Rating" v-model="Rating"><br>
            <input type="date" placeholder="Date" v-model="relDate"><br>

            <input type="text" placeholder="Release Year" v-model="relYear"><br>
            <div class="stars">
                <input 
                    v-for="index in noOfStar" 
                    v-bind:key="index" 
                    type="text" 
                    placeholder="Star"
                    v-model="stars[index-1]"
                >
                <button @click="addStar">add start</button>
            </div>
            <input type="number" placeholder="Hour" v-model='hour'>
            <input type="number" placeholder="Min" v-model='min'><br>
            <input type="text" placeholder="Director" v-model=Director><br>
            <div class="cats">
                <input 
                    v-for="index in noOfCategory" 
                    v-bind:key="index" type="text" 
                    placeholder="Category"
                    v-model="cats[index-1]"
                >
                <button @click="AddCat">Add Category</button>
            </div>
            <input type="text" placeholder="Image Source" v-model=src>
            <button @click="saveMovie">SAVE</button>
        </div>
        <h1 v-if="isSuc">Successful</h1> -->
        <textarea class="cntx-area" v-model="context" cols="180" rows="16">
        </textarea>
        <input class="cntx-area" type="text" v-model="time" placeholder="Time: 2h 33min">
        <button id="save" @click="saveMovie">SAVE</button>
        <h1 v-if="isMovie">Movie Added Successfully</h1>
        <h1 v-if="isKeyword">Keyword Updated</h1>
    </div>
</template>

<script>
//import firebase from 'firebase'
import db from '../components/firebaseInit'
import uuid from 'uuid'
export default {
    name:'admin',
    data(){
        return{

            context:{},time:'',

            noOfStar:1,
            noOfCategory:1,

            name:'',lang:'',plot:'',Country:'',
            Rating:0.0,relDate:'',relYear:'',stars:[],
            hour:0,min:0,Director:'',cats:[],src:'',

            isSuc:false,
            file:null, isMovie : false, isKeyword: false 
        }
    },
    methods:{
        addStar(){
            this.noOfStar++;
        },
        AddCat(){
            this.noOfCategory++;
        },
        saveMovie(){
            // SAVE MOVIE //
            let id = uuid.v4();
            var desc = {
                getDetails: function(){
                    return {
                        _id:id,
                        Name:this.context.name,
                        src:this.context.image,
                        Categories:this.context.genre,
                        Stars: this.getStars(),
                        Director: this.context.director.name,
                        Plot:this.context.description,
                        ReleaseDate:this.context.datePublished,
                        ReleaseYear:this.getYear(),
                        Duration:this.getDuration(),
                        Rating:this.context.aggregateRating.ratingValue,
                        Language:this.context.review.inLanguage,
                        Country:'USA'
                    }
                },
                getStars: function() {
                    let actors = []
                    this.context.actor.forEach ( function(element) {
                    actors.push(element.name)
                    return element.name
                    //console.log(element);
                    })
                    return actors
                },
                getYear: function(){
                    let date = this.context.datePublished.split('-')
                    return date[0]
                },
                getDuration: function(){
                    let dur = this.time.split(' ');
                    //console.log(dur);
                    let hour = dur[0].split('')

                    let duration = new Object()
                    duration.hour = hour[0]
                    
                    let mins = dur[1].split('')
                    duration.minute = mins[0]+mins[1]

                    return duration

                },
                getKeywords: function(){
                    let keys = []

                    keys.push(this.context.name.toLowerCase())
                    keys.push(this.context.director.name.toLowerCase())
                    keys.push(this.getYear())
                    keys.push(this.context.review.inLanguage.toLowerCase())
                    // keys.push('usa')

                    try {
                        this.context.genre.forEach( el => {
                            keys.push(el.toLowerCase())
                        })
                    } catch (error) {
                        keys.push(this.context.genre);
                    }
                    this.getStars().forEach( el => {
                        keys.push(el.toLowerCase())
                    })
                    return keys
                },
                time:this.time,
                context:JSON.parse(this.context)
            }
            
            //let CONTXT = JSON.parse(this.context)
            //console.log(CONTXT);
            // console.log(typeof(this.context));
            // console.log(this.context);
            
            // ----- UPDATED ----- //

            console.log('Details', desc.getDetails());
            console.log('Keywords', desc.getKeywords());

            //console.log(desc.getDetails());
            //console.log(desc.getKeywords());


            db.collection('Movies').add(desc.getDetails())
            .then( () => {
                console.log('Movie Added');
                this.isMovie = true })
            let aW = desc.getKeywords()
            db.collection('Keywords').where('_id', '==', 'KEYID')
            .get().then((result) => {
                result.forEach( doc =>{
                    let words = doc.data().words;
                    // aW.forEach( val => { words = words.filter( v => v !== val )})
                    // words = words.concat(aW);
                    //console.log('WORDS CONCAT: ',words);
                    aW.forEach( val => {
                        if( words.indexOf(val) === -1 ){
                            words.push(val)
                        }})
                    doc.ref.update({
                        words:words })
                    console.log('Keyword updated');
                    this.isKeyword = true
                })
                this.context={}
                this.time=''
            })


            // console.log('saveMovie');
            // console.log(this.name);console.log(this.lang);console.log(this.plot);
            // console.log(this.Country);console.log(this.Rating);console.log(this.relDate);
            // console.log(this.relYear);console.log(this.stars);console.log(this.hour);
            // console.log(this.min);console.log(this.Director);console.log(this.cats);
            // console.log(this.src);

            // console.log(this.relDate);
            // console.log(new Date(this.relDate));

            // db.collection('Date').add(
            //     {Date:new Date(this.relDate)}
            // )

            // db.collection('Date').get().then((result) => {
            //     result.forEach( doc => {
            //         console.log('GetDate');
            //         console.log( toDate(doc.data().Date));
            //     })
            // })
            
            // let Dur = {
            //     hour:this.hour,
            //     minute:this.min
            // }
            // let id = uuid.v4();
            // db.collection('Movies').add({
            //     _id:id,Categories:this.cats,
            //     Country:this.Country,Director:this.Director,
            //     Duration:Dur,Language:this.lang,
            //     Name:this.name,Plot:this.plot,
            //     Rating:this.Rating,ReleaseYear:this.relYear,
            //     ReleaseDate:this.relDate,Stars:this.stars,
            //     src:this.src
            // })
            // .then( () => {
            //     //console.log(result);
            //     //console.log('Success');
            //     this.isSuc = true;
            //     this.name='';this.lang='';this.plot='';
            //     this.Country='';this.Rating=0.0;
            //     this.relDate='';this.relYear='';
            //     this.stars = ''; this.hour ='';
            //     this.min='';this.Director='';
            //     this.cats='';this.noOfCategory=1;
            //     this.noOfStar = 1;
            // })

            // .catch((err) => {
            //     //console.log(err);
            // });

            

            // aW.push(this.name.trim().toLowerCase())
            // aW.push(this.Director.trim().toLowerCase())
            // aW.push(this.relYear);aW.push(this.lang.trim().toLowerCase())
            // aW.push(this.Country.trim().toLowerCase())
            // this.cats.forEach( c => { aW.push(c.trim().toLowerCase())})
            // this.stars.forEach( s => { aW.push(s.trim().toLowerCase())})
            // aW = aW.filter( a => a !== '' )

            
            

            //     .catch((err) => {
            //     //console.log(err);
            // });
        }
    }
}
</script>

<style scoped>
    .cntx-area{
        margin: 0.2rem auto;
        display: block;
    }
    input{
        padding: 0.2rem 1rem;
        width:12rem;
        margin: 0.2rem;
    }
    #save{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        height: 4rem;
        width: 12rem;
        background-color: #009688;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5em;
    }
    #save:hover{
        background-color: #00bdaa;
    }
</style>
