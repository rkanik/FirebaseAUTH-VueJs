<template>
    <div class="onhistory">
        <div class="on-he">
            <div class="loading" v-if="isLoading"></div>
            <h3 class="con-cat-title">Suggested Movies</h3>
            <p class="con-cat-subTitle">Based on Search History</p>
            <h3 class="con-cat-subTitle">WORKING ON IT</h3>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'
import db from './firebaseInit'

const auth = firebase.auth();

export default {

    name:'onhistory',
    data(){
        return{

            
            recentSearches:[],  mostSearched:[],

            
            isLoading:true
        }
    },
    created(){
        
        db.collection('Users').where('_id', '==', auth.currentUser.uid )
          .get().then((result) => {
            result.forEach( doc =>{
                let temp = doc.data().recentSearched;

                var sortby_flag_dsc = (a, b ) => {
                if( a.flag > b.flag ) return - 1
                else if( a.flag < b.flag ) return 1
                return 0}

                temp.sort(sortby_flag_dsc)
                this.mostSearched = []

                temp.forEach( (el, index) =>{
                    if( index < 5 ){ this.mostSearched.push(el)}
                })

                console.log(this.mostSearched);

                var sortby_date_dsc = (a, b ) => {
                if( a.time > b.time ) return - 1
                else if( a.time < b.time ) return 1
                return 0}

                temp.sort(sortby_date_dsc)

                this.recentSearches = []

                temp.forEach( (el, index) =>{
                    if( index < 6 ){ this.recentSearches.push(el)}
                })

                console.log(this.recentSearches);
            })
        })
    }
}
</script>

<style lang='scss' scoped>

    
    @import '../assets/CSS/colors.scss';

    .onhistory{
        .on-he{
            margin-top: 0.5rem;
            margin-right: 1rem;
            background-color: $green50;
            border-left: 5px solid $green400;
            padding: 0.2rem 0 ; 
            padding-left: 0.8rem;
            box-sizing: border-box;
            margin-bottom: 1rem;
            position: relative;
        }
    }
</style>