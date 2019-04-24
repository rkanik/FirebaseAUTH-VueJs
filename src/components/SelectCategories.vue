<template>
    <div class="selectCategories">
        <h3 class="sC-ch" v-if="isSomethingSelected">Selected Categories</h3>
        <div class="sC-ch" v-if="isSomethingSelected">
            <div v-for="cat in Selected" v-bind:key="cat" class="sel-box" @click="redSelected" >
                <p>{{cat}}</p>
            </div>
        </div>
        <p class="err" v-if="err">Select atleast 3 categories</p>
        <h3 class="sC-ch">Select your favorite categories</h3>
        <div class="sC-ch">
            <p @click="setSelected" v-for="cat in Categories" v-bind:key="cat" class="cat-box in-bl">{{cat}}</p>
        </div>
        <button v-if="isSomethingSelected" @click="SaveSelectedCategories">SAVE</button>
    </div>
</template>
<script>

import { bus } from '../main';
import db from '../components/firebaseInit'
const firebase = require('firebase');
const auth = firebase.auth();
export default {
    name:'selectCategories',
    props:['uid'],
    data(){
        return{
            Categories:['Action','Fantasy','Mystery','Thriller','Horror',
                'Crime','Adventure','War','Drama','Romance',
                'Sci-Fi','Comedy','Musical','Animation','Biography',
                'History','Family','Western'
            ],
            Selected:[],
            isSomethingSelected:false,
            err:false
        }
    },
    created(){
        
        
        db.collection('Users').where('_id', '==', auth.currentUser.uid )
            .get().then((result) => {
                
                result.forEach( doc => {
                    
                    
                   

                    if( doc.data().favCategories.length !== 0 ){
                        this.Selected = doc.data().favCategories
                        this.Selected.forEach(x => {
                            this.Categories = this.Categories.filter( y => y !== x );
                        })
                        window.scrollTo(0,0);
                        this.isSomethingSelected = true;
                    }else{
                        this.isSomethingSelected = false;
                    }
                })
            })
        
        
        
    },
    mounted(){
    },
    methods:{
        setSelected(event){
            this.Selected.push(event.target.innerText);
            this.Categories = this.Categories.filter( data => data !== event.target.innerText );
            if(this.Selected.length > 0 ){
                this.isSomethingSelected = true ;
            }else{ this.isSomethingSelected = false }
            if(this.err){
                this.err = false;
            }
        },
        redSelected(event){
            
            this.Categories.push(event.target.innerText);
            this.Selected = this.Selected.filter( data => data !== event.target.innerText )
            if(this.Selected.length > 0 ){
                this.isSomethingSelected = true ;
            }else{ this.isSomethingSelected = false }
        },
        showDeseltBtn(event){
            
            this.deselect = true;
        },
        hideDeselectBtn(){
            this.deselect = false ;
        },
        SaveSelectedCategories(){
            if(this.Selected.length < 3 ){
                this.err = true;
            }else{
                this.err = false ;
                

                db.collection('Users').where( '_id', '==' , auth.currentUser.uid)
                .get().then((result) => {
                    result.forEach( doc => {
                        
                        doc.ref.update({
                            favCategories:this.Selected
                        })
                        .then((result) => {
                          
                          bus.$emit('Cat-Updated',this.Selected);
                        
                        })
                    })
                })
                
                    
                
            }
        }
    }
}
</script>

<style scoped>
    .selectCategories{
        position: relative;
    }
    .sC-ch{
        width: 100%;
        overflow: hidden;
    }
    .selectCategories h3{
        color: #424242;
        margin-bottom: 1rem;
        font-weight: normal;
    }
    .cat-box{
        border: 1px solid #dadce0;
        box-shadow: 0 1px 1px 0 #cfcfcf;
        padding: 0.5rem 2rem;
        margin: 0.3rem;
        cursor: pointer;
        border-radius: 2rem;
    }
    .cat-box:hover{
        transition: background-color 0.3s ;
        background-color: #00897b;
        border-color: #009688;
        color: white;
    }
    .sel-box{
        background-color: #00897b;
        float: left;
        /* border: 1.5px solid #00897b; */
        padding: 0.4rem 0.8rem;
        border-radius: 5rem;
        margin-right: 1rem;
        margin-bottom: 1rem;
        cursor: pointer;
        color: white;
    }
    .sel-box:hover{
        transition: background-color 0.3s ;
        background-color: #f44336;
        border-color: #f44336;
        
    }
    .sel-box p{
        margin: 0.2rem 1rem;

    }
    .in-bl{
        display: inline-block;
    }

    button{
        margin-top: 2rem;
        padding: 0.6rem 3rem;
        border: 1.5px solid #009688;
        background-color: transparent;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        font-size: 1em;
        letter-spacing: 2px;
    }
    button:hover{
        background-color: #009688;
        color: white;
    }
    .err{
        margin: 1rem 0;
        color: #f44336;
    }
</style>
