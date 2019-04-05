<template>
  <div class="header">
    <div class="overlay hide" v-bind:class="{'show':isHaveSuggestions}" @click='isHaveSuggestions = !isHaveSuggestions'></div>
    <header>
      <div class="menu-toogle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 96.49 62">
          <g transform="translate(-71 -97)">
            <rect width="57.194" height="12" rx="6" transform="translate(71 97)" fill="#424242" />
            <rect width="96.49" height="12" rx="6" transform="translate(71 122)" fill="#424242" />
            <rect width="84.429" height="12" rx="6" transform="translate(71 147)" fill="#424242" />
          </g>
        </svg>
      </div>
      <div class="cLogo">
        <img src="../../assets/logo.png">
      </div>
      <div class="ap-na">
        <h3 @click="goToHome" style="cursor:pointer">Application</h3>
      </div>
      <div class="search-box">
        <div class="se-bo">
          <div class="se-icon">
            <img src="https://img.icons8.com/material-outlined/30/000000/search.png">
          </div>
          <input type="text" 
            placeholder="Search your favorite" 
            @keyup="onKeyUp" 
            @focus="onFocus"
            v-model="word"
          >
        </div>
      </div>
      <div class="account">
        <img @click="$emit('showPupUp')" src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4.png">
      </div>
    </header>
    <div class="sugg_box" v-if=isHaveSuggestions >
      <ul class='most-se-ul'>
        <p class='most-se-p'>Recent Searches</p>
        <li v-for="k in recentSearches" v-bind:key="k.key" @click="onClickListItem">
          {{k.key}}
        </li>
      </ul>
      <ul class='most-se-ul'>
        <p class='most-se-p'>Most Searched</p>
        <li v-for="k in mostSearched" v-bind:key="k.key" @click="onClickListItem">
          {{k.key}}
        </li>
      </ul>
      <ul class="sugg-ul">
        <p class='most-se-p'>Auto Suggestion</p>
        <li v-for="word in suggestion" v-bind:key="word" @click="onClickListItem">{{word}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {bus} from '../../main';
import db from '../firebaseInit';
import firebase from 'firebase';
const auth = firebase.auth();
  export default {
    name: 'page-header',
    components: {},
    data(){
      return{
        //Arrays or obejcts
        keywords:[],
        suggestion:[],
        mostSearched:[],
        recentSearches:[],
        
        // Variables
        word:'',

        // Booleans
        isHaveSuggestions:false,
        isKeywordsLoadedAlready:false
      }
    },
    methods:{
      goToHome(){
        this.$router.go({path:this.$router.path})
      },
      onKeyUp(event){
        this.suggestion = []
        let word = this.word.trim().toLowerCase();
        if( word !== '' ){
          var code = (event.keyCode ? event.keyCode : event.which);
          if(code == 13) {
            bus.$emit('Search',this.word);
            this.isHaveSuggestions = false;
            //return;
          }
          else{
            //console.log(this.keywords);
            this.keywords.forEach( key => {
              if( key.indexOf(word) >- 1 && this.suggestion.length < 9 ){
                  this.suggestion.push(key)
                  this.isHaveSuggestions = true;
              }else if( this.suggestion.length <= 0 ){
                this.isHaveSuggestions = false ;
              }
            })
          this.getRecentSearches()
          }
        }else{
          this.isHaveSuggestions = false;
        }
      },
      onFocus(){
        if( !this.isKeywordsLoadedAlready ){
          db.collection('Keywords').where('_id', '==', 'KEYID')
            .get().then((result) => {
              result.forEach( doc =>{
                this.keywords = doc.data().words
                this.isKeywordsLoadedAlready = true
              })
            })
          this.getRecentSearches();
        }
      },
      getRecentSearches(){
        // Loading Users most searched word
        db.collection('Users').where('_id', '==', auth.currentUser.uid )
        .get().then((result) => {
            result.forEach( doc =>{
            let temp = doc.data().recentSearched;
            var sortby_flag_dsc = (a, b ) => {
              if( a.flag > b.flag ) return - 1
              else if( a.flag < b.flag ) return 1
              return 0}
            temp.sort(sortby_flag_dsc)
            this.mostSearched = temp.slice(0,5);
            
            var sortby_date_dsc = (a, b ) => {
            if( a.time > b.time ) return - 1
            else if( a.time < b.time ) return 1
            return 0}
            temp.sort(sortby_date_dsc)
            this.recentSearches = temp.slice(0,6);
            })
        })
      },
      onClickListItem(event){

        //console.log(event.target.innerText);
        this.word = event.target.innerText;
        this.isHaveSuggestions = false;

        bus.$emit('Search',this.word);
      }
    },
    created(){
      bus.$on('HideSearch', () => {
        this.word = '' ;
      })
    }
  }
</script>

<style scoped>
  header {
    border-bottom: 1px solid #dadce0;
    border-bottom-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    box-shadow: 0 1px 2px 0 #dadce0;
    padding: 4px;
    display: grid;
    grid-template-columns: 64px 64px 150px auto 96px;
    grid-auto-rows: 54px;
  }
  .menu-toogle{
    padding: 1rem;
    padding-left: 1.5rem;
    box-sizing: border-box;
  }
  .cLogo img{
    height: 40px;
    width: 40px;
    margin-top: 7px;
    border: 1px solid #dadce0;
    border-radius: 50pt;
    box-shadow: 0 1px 2px 0 #bfc1c4;
  }
  .ap-na{
    padding: 0.7rem 0;
  }
  .ap-na h3{
    /* margin-top: 12px; */
    font-size: 1.4em;
    margin-top: 4px;
    color: #646464;
    font-weight: 400;
  }
  .search-box{
    /* border: 1px solid; */
    padding: 10px;
    width: 38rem;
    z-index: 95;
    /* margin: 0 auto 4rem 0; */
  }
  .se-bo{
    display: grid;
    grid-template-columns: 28px auto;
    border: 1.5px solid #dadce0;
    /* box-shadow: 0 1px 4px 0 rgb(221, 221, 221); */
    border-radius: 2rem;
    padding: 0.15rem;
    padding-left: 0.25rem;
    padding-right: 1rem;
  }
  .se-bo input{
    background-color: transparent;
    /* background-color: blue; */
  }
  .se-icon{
    border-radius: 2rem;
    height: 28px;
    padding: 5px;
    background-color: #e9e9e9;
    cursor: pointer;
  }
  .se-icon:hover{
    background-color: #c4c4c4;
  }
  .se-icon img{
    height: 18px;
    opacity: 0.65;
  }
  .se-bo input{
    border: none;
    padding-left: 0.8rem;
    font-size: 1em;
  }
  .account{
    padding: 4px;
  }
  .account img{
    cursor: pointer;
  }

  .sugg_box{
    display: block;
    position: absolute;
    top: 3.4rem;
    left: 16rem;

    min-height: 2rem;
    max-height: 24rem;
    overflow: auto;
    width: 50%;
    z-index: 24;
    background: #212121;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px #141414;
    padding: 1rem 0;
    box-sizing: border-box;
    z-index: 100;
  }
  .sugg-ul li{
    list-style-type: none;
    padding: 0.5rem 1rem;
    padding-left: 2rem;
    font-size: 1.2em;
    cursor: pointer;
    color: #e0e0e0;
  }
  .sugg-ul li:hover{
    background-color: #313131;
  }
  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 50;
    /* background-color: rgba(0, 0, 0, 0.226) ; */
  }
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  .most-se-ul{
    overflow: hidden;
    width: 100%;
    /* padding-bottom: 1rem; */
  }
  .most-se-p{
    margin-left: 1rem;
    margin-bottom: 1rem;
    color: #26a69a;
  }
  .most-se-ul li{
    color: #bdbdbd;
    list-style-type: none;
    border: 1px solid #4b4b4b;
    min-width: 5.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    border-radius: 3rem;
    text-align: center;
    float: left;
    padding: 0.3rem 1rem;
    font-size: 1em;
    cursor: pointer;
  }
  .most-se-ul li:hover{
    background-color: #646464;
  }

  /* width */
  ::-webkit-scrollbar {
      width: 8px;
    }
    
  /* Track */
  ::-webkit-scrollbar-track {
    background: #212121;
  }
    
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #313131; 
  }
    
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #424242;
  }

</style>