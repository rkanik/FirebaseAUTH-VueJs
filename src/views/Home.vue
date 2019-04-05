<template>
  <div class="home">
    
    <!-- Header of the application -->
    <PageHeader v-on:showPupUp="showPupUp()"/>

    <!-- An invisible overlay -->
    <div @click="onClickOverlay()" 
    class="overlay hide" 
    v-bind:class="{'show':pro_popup_sh}"></div>

    <div class="pro-popup hide" v-bind:class="{'show':pro_popup_sh}">
      <div class="pop-na-us">
        <h3>{{firstName}} {{lastName}}</h3>
        <p>@{{userName}}</p>
      </div>
      <div class="pop-ul pop-basic">
        <ul>
          <li @click="onClickProfile()">Profile</li>
          <li>Favourite</li>
          <li>Watch list</li>
        </ul>
      </div>
      <div class="pop-ul pop-set">
        <ul>
          <li>Settings & privacy</li>
          <li>Help Center</li>
          <li @click="logOutUser()">Log out</li>
        </ul>
      </div>
    </div>
    <!-- <p v-if="isSigninedIn">{{currentUser}}</p>
    <p v-if="isSigninedIn">{{uid}}</p> -->
    <div class="main-content">
      <Profile 
        v-if="showProfile"
        class="com-profile"/>

      <div class="main-con-middle">

        <SelectCategories
        class="com-sel-cat" v-if="isCategoriesNotEmpty"/>

        <SearchResult v-if=isSearch class="com-se-res"/>

        <!-- <OnHistory/> -->

        <OnCategory v-if="!isCategoriesNotEmpty"/>

      </div>
    </div>
  </div>
</template>

<script>

// Bus
import { bus } from '../main';

// Firebase
import db from '../components/firebaseInit'
const firebase = require('firebase');
const auth = firebase.auth();

// Components
import Profile from '../components/Profile'
import PageHeader from '../components/layouts/PageHeader'
import SelectCategories from '../components/SelectCategories'
import OnCategory from '../components/OnCategory'
import SearchResult from '../components/SearchResult'
import OnHistory from '../components/OnHistory'

export default {
  name: 'home',
  props:['pro_data'],
  data(){
    return{
      pro_popup_sh:false,isSigninedIn:false,
      currentUser:null,uid:'',
      
      firstName:'',lastName:'',userName:'',

      showProfile:true,isCategoriesNotEmpty:false,
      favCategories:null,isSearch:false
    }
  },
  components: {
    Profile, PageHeader, SelectCategories, OnCategory,
    SearchResult, OnHistory
  },
  methods:{
    showPupUp(){
      this.pro_popup_sh = !this.pro_popup_sh;
    },
    logOutUser(){
      auth.signOut().then( () => {
        //console.log(result);
        //console.log('Logged Out');
        this.$router.push('/signin')
      })
      // .catch((err) => {
      //   //console.log('Error logging out');
      //   //console.log(err);
      // });
    },
    onClickOverlay(){
      //console.log('onClickOverlay');
      this.pro_popup_sh = !this.pro_popup_sh;
    },
    onClickProfile(){
      //console.log('onClickProfile');
      if(!this.showProfile){this.showProfile=true}
      this.pro_popup_sh = false ;
    },
  },
  created(){
    //console.log('onCreated');
    if( auth.currentUser ){
      this.isSigninedIn = true;
      this.currentUser = auth.currentUser.email;
      //this.uid = auth.currentUser.uid;

      db.collection('Users').where('_id', '==', auth.currentUser.uid ).get()
        .then( result => {
          result.forEach( doc => {
            //console.log(doc.data());
            if( doc.data().favCategories.length === 0 ){
              //console.log('empty category');
              this.isCategoriesNotEmpty = true;
            }else{
              //console.log('not empty category');
              this.isCategoriesNotEmpty = false;
              //this.favCategories
            }
            // console.log(doc.data().userName);
            // console.log(doc.data().firstName);
            this.firstName = doc.data().firstName;
            this.lastName = doc.data().lastName;
            this.userName = doc.data().userName;
          })
        })
        // .catch((err) => {
        //   //console.log('Error getting user data', err);
        // });
    }

    bus.$on('updateCat', () =>{
      //console.log(favCat);
      this.isCategoriesNotEmpty = true;
    })
    bus.$on('Cat-Updated', () => {
      this.isCategoriesNotEmpty = false ;
    })

    // Search
    bus.$on( 'Search', (key) => {

      //console.log("KEY:", key);
      this.isSearch = true;

      var Post = [];

      db.collection('Movies').get()
        .then( snapShot => {
          snapShot.forEach( doc => {
            //console.log('MOVIEMOVIEMOVIEMOVIE');
            let MergeArray = [];
            MergeArray.push(doc.data().Name)
            MergeArray = MergeArray.concat(doc.data().Categories)
            MergeArray = MergeArray.concat(doc.data().Stars)
            MergeArray.push(doc.data().Country)
            MergeArray.push(doc.data().Director)
            MergeArray.push(doc.data().Language)
            MergeArray.push(doc.data().ReleaseYear)
            //console.log(MergeArray);

            let Break = {}
            let Matched = false ;
            try{
            MergeArray.forEach( el => {
              //console.log(el);
              if( !Matched ){
                if(el.toLowerCase().indexOf(key.toLowerCase()) >- 1 ){
                  //console.log('matched');
                  Matched = true;
                  throw Break
                }
              }
            })}
            catch(e){ if( e !== Break) throw e }
            if(Matched){
              //console.log('Matched Movie: ', doc.data().Name);
              let d = {
                _id:doc.data()._id,
                Name:doc.data().Name,
                ReleaseYear:doc.data().ReleaseYear,
                ReleaseDate:doc.data().ReleaseDate,
                Rating:doc.data().Rating,
                Type:doc.data().Categories,
                Country:doc.data().Country,
                src:doc.data().src
              }
              Post = Post.filter( m => m.Name !== d.Name )
              Post.push(d);
              bus.$emit('MovieFound', Post );
              //console.log(Post);
            }
          })
          //console.log('inThen');
          if(Post.length === 0 ){
            //console.log('Noting Found');
            bus.$emit('NotingFound');
          }
        })
      //   .catch( err => {
      //     //console.log(err);
      // });
      // Storing Searched keywords
      db.collection('Users').where('_id', '==', auth.currentUser.uid )
        .get().then( result => {
          result.forEach( doc => {
            if( doc.data().recentSearched ){
              //console.log(doc.data());
              let recentSearched = doc.data().recentSearched;
              if( recentSearched.length <= 100 ){
                let flag = 0;
                recentSearched = recentSearched
                .filter( el => { if(el.key !== key){ return el.key }else{flag = el.flag }});
                //console.log(flag);
                let s = {key:key.trim().toLowerCase(),time:new Date(),flag:flag+1}
                recentSearched.push(s);
                //console.log(recentSearched);
                doc.ref.update({recentSearched:recentSearched})
              }
            }
            else{
              //console.log('dont have recentSearched');
              let recentSearched = [];
              let s = {key:key.trim().toLowerCase(),time:new Date(),flag:1}
              recentSearched.push(s)
              doc.ref.update({recentSearched:recentSearched})
            }
          })
        })
    })
    // Search End

    bus.$on('HideSearch', () => {
      this.isSearch = false ;
    })
  }
}
</script>

<style scoped>
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  .pro-popup{
    position: absolute;
    width: 12rem;
    right: 2rem;
    top:64px;
    background-color: white;
    box-shadow: 0 0 4px 0 rgb(184, 184, 184);
    border-radius: 0.3rem;
    z-index: 100;
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 95;
  }
  .pop-na-us{
    border-bottom: 1px solid #dadce0;
    padding-bottom: 12px;
    padding: 1.2rem;
  }
  .pop-basic,.pop-set{
    border-bottom: 1px solid #dadce0;
    padding-bottom: 12px;
    padding-top: 12px;
  }
  .pop-ul li{
    list-style-type: none;
    display: block;
    padding: 8px 0 8px 1.2rem;
    cursor: pointer;
  }
  .pop-ul li:hover{
    background-color: rgb(235, 235, 235);
  }
  .main-content{
    width: 100%;
    /* border: 1px solid; */
    display: grid;
    grid-template-columns: 23rem auto;
  }
  .com-profile{
    /* display: inline-block; */
    box-sizing: border-box;
    width: 21rem;
    /* min-height: 54rem; */
    margin-top: 1rem;
    margin-left: 1rem;
    border: 1.5px solid #dadce0;
    border-radius: 0.4rem;
    margin-bottom: 1rem;
  }
  .main-con-middle{
    padding: 1rem;
    box-sizing: border-box;
    padding-left: 0;
  }
  .com-sel-cat{
    border: 1.5px solid #dadce0;
    border-radius: 0.4rem;
    padding: 1rem;
    overflow: hidden;
  }
  .com-se-res{
    width: 100%;
    overflow: hidden;
  }
</style>