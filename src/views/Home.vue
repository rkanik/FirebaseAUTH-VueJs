<template>
  <div class="home">
    <!-- Header of the application -->
    <PageHeader v-on:showPupUp="showPupUp()"/>

    <!-- An invisible overlay -->
    <div @click="onClickOverlay()" class="overlay hide" v-bind:class="{'show':pro_popup_sh}"></div>

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
    <p v-if="isSigninedIn">{{uid}}</p>-->
    <div class="main-content">
      <Profile v-if="showProfile" class="com-profile"/>

      <div class="main-con-middle">
        <SelectCategories class="com-sel-cat" v-if="isCategoriesNotEmpty"/>

        <SearchResult v-if="isSearch" class="com-se-res"/>

        <!-- <OnHistory/> -->
        <OnCategory v-if="!isCategoriesNotEmpty"/>

        <OnSearched v-if='!isSearchedEmpty'/>

      </div>
    </div>
  </div>
</template>

<script>

import { bus } from "../main";


import db from "../components/firebaseInit";
const firebase = require("firebase");
const auth = firebase.auth();


import Profile from "../components/Profile";
import PageHeader from "../components/layouts/PageHeader";
import SelectCategories from "../components/SelectCategories";
import OnCategory from "../components/OnCategory";
import SearchResult from "../components/SearchResult";
import OnHistory from "../components/OnHistory";
import OnSearched from "../components/OnSearched";

export default {
  name: "home",
  props: ["pro_data"],
  data() {
    return {
      pro_popup_sh: false,
      isSigninedIn: false,
      currentUser: null,
      uid: "",

      firstName: "",
      lastName: "",
      userName: "",

      showProfile: true,
      isCategoriesNotEmpty: false,
      isSearchedEmpty:false,
      favCategories: null,
      isSearch: false
    };
  },
  components: {
    Profile,
    PageHeader,
    SelectCategories,
    OnCategory,
    SearchResult,
    OnHistory,
    OnSearched
  },
  methods: {
    showPupUp() {
      this.pro_popup_sh = !this.pro_popup_sh;
    },
    logOutUser() {
      auth.signOut().then(() => {
        
        
        this.$router.push("/signin");
      });
    },
    onClickOverlay() {
      
      this.pro_popup_sh = !this.pro_popup_sh;
    },
    onClickProfile() {
      
      if (!this.showProfile) {
        this.showProfile = true;
      }
      this.pro_popup_sh = false;
    }
  },
  created() {
    
    if (auth.currentUser) {
      this.isSigninedIn = true;
      this.currentUser = auth.currentUser.email;

      db.collection("Users")
      .where("_id", "==", auth.currentUser.uid)
      .get()
      .then(result => {
         result.forEach(doc => {
         if (doc.data().favCategories.length === 0) {
            this.isCategoriesNotEmpty = true;
         } else {
            this.isCategoriesNotEmpty = false;
         }
         this.firstName = doc.data().firstName;
         this.lastName = doc.data().lastName;
         this.userName = doc.data().userName;

         bus.$emit('TopSearched',doc.data().recentSearched);

         });
      });
    }

    bus.$on("updateCat", () => {
      
      this.isCategoriesNotEmpty = true;
      this.isSearchedEmpty = true;
    });
    bus.$on("Cat-Updated", () => {
      this.isCategoriesNotEmpty = false;
      this.isSearchedEmpty = false;
    });

    
    bus.$on("Search", key => {
      
      this.isSearch = true;

      var Post = [];

      db.collection("Movies")
        .get()
        .then(snapShot => {
          snapShot.forEach(doc => {
            
            let MergeArray = [];
            MergeArray.push(doc.data().Name);
            MergeArray = MergeArray.concat(doc.data().Categories);
            MergeArray = MergeArray.concat(doc.data().Stars);
            MergeArray.push(doc.data().Country);
            MergeArray.push(doc.data().Director);
            MergeArray.push(doc.data().Language);
            MergeArray.push(doc.data().ReleaseYear);
            

            let Break = {};
            let Matched = false;
            try {
              MergeArray.forEach(el => {
                
                if (!Matched) {
                  if (el.toLowerCase().indexOf(key.toLowerCase()) > -1) {
                    
                    Matched = true;
                    throw Break;
                  }
                }
              });
            } catch (e) {
              if (e !== Break) throw e;
            }
            if (Matched) {
              
              let d = {
                _id: doc.data()._id,
                Name: doc.data().Name,
                ReleaseYear: doc.data().ReleaseYear,
                ReleaseDate: doc.data().ReleaseDate,
                Rating: doc.data().Rating,
                Type: doc.data().Categories,
                Country: doc.data().Country,
                src: doc.data().src
              };
              Post = Post.filter(m => m.Name !== d.Name);
              Post.push(d);
              bus.$emit("MovieFound", Post);
              
            }
          });
          
          if (Post.length === 0) {
            
            bus.$emit("NotingFound");
          }
        });
      
      
      
      
      db.collection("Users")
        .where("_id", "==", auth.currentUser.uid)
        .get()
        .then(result => {
          result.forEach(doc => {
            if (doc.data().recentSearched) {
              
              let recentSearched = doc.data().recentSearched;
              if (recentSearched.length <= 100) {
                let flag = 0;
                recentSearched = recentSearched.filter(el => {
                  if (el.key !== key) {
                    return el.key;
                  } else {
                    flag = el.flag;
                  }
                });
                
                let s = {
                  key: key.trim().toLowerCase(),
                  time: new Date(),
                  flag: flag + 1
                };
                recentSearched.push(s);
                
                doc.ref.update({ recentSearched: recentSearched });
              }
            } else {
              
              let recentSearched = [];
              let s = {
                key: key.trim().toLowerCase(),
                time: new Date(),
                flag: 1
              };
              recentSearched.push(s);
              doc.ref.update({ recentSearched: recentSearched });
            }
          });
        });
    });
    

    bus.$on("HideSearch", () => {
      this.isSearch = false;
    });
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
.show {
  display: block;
}
.pro-popup {
  position: absolute;
  width: 12rem;
  right: 2rem;
  top: 64px;
  background-color: white;
  box-shadow: 0 0 4px 0 rgb(184, 184, 184);
  border-radius: 0.3rem;
  z-index: 100;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 95;
}
.pop-na-us {
  border-bottom: 1px solid #dadce0;
  padding-bottom: 12px;
  padding: 1.2rem;
}
.pop-basic,
.pop-set {
  border-bottom: 1px solid #dadce0;
  padding-bottom: 12px;
  padding-top: 12px;
}
.pop-ul li {
  list-style-type: none;
  display: block;
  padding: 8px 0 8px 1.2rem;
  cursor: pointer;
}
.pop-ul li:hover {
  background-color: rgb(235, 235, 235);
}
.main-content {
  width: 100%;
  /* border: 1px solid; */
  display: grid;
  grid-template-columns: 23rem auto;
}
.com-profile {
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
.main-con-middle {
  padding: 1rem;
  box-sizing: border-box;
  padding-left: 0;
}
.com-sel-cat {
  border: 1.5px solid #dadce0;
  border-radius: 0.4rem;
  padding: 1rem;
  overflow: hidden;
}
.com-se-res {
  width: 100%;
  overflow: hidden;
}
</style>