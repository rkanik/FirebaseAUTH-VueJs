(function(e){function t(t){for(var a,n,o=t[0],c=t[1],l=t[2],d=0,h=[];d<o.length;d++)n=o[d],i[n]&&h.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},i={app:0},r=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"015f":function(e,t,s){"use strict";var a=s("c833"),i=s.n(a);i.a},"034f":function(e,t,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},"0748":function(e,t,s){"use strict";var a=s("82d8"),i=s.n(a);i.a},"0a45":function(e,t,s){},1528:function(e,t,s){"use strict";var a=s("afab"),i=s.n(a);i.a},"2c58":function(e,t,s){"use strict";var a=s("60c3"),i=s.n(a);i.a},"3a9e":function(e,t,s){},"3ab7":function(e,t,s){},"3e8c":function(e,t,s){"use strict";var a=s("eb7a"),i=s.n(a);i.a},"4ea1":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],n=(s("034f"),s("2877")),o={},c=Object(n["a"])(o,i,r,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("PageHeader",{on:{showPupUp:function(t){return e.showPupUp()}}}),s("div",{staticClass:"overlay hide",class:{show:e.pro_popup_sh},on:{click:function(t){return e.onClickOverlay()}}}),s("div",{staticClass:"pro-popup hide",class:{show:e.pro_popup_sh}},[s("div",{staticClass:"pop-na-us"},[s("h3",[e._v(e._s(e.firstName)+" "+e._s(e.lastName))]),s("p",[e._v("@"+e._s(e.userName))])]),s("div",{staticClass:"pop-ul pop-basic"},[s("ul",[s("li",{on:{click:function(t){return e.onClickProfile()}}},[e._v("Profile")]),s("li",[e._v("Favourite")]),s("li",[e._v("Watch list")])])]),s("div",{staticClass:"pop-ul pop-set"},[s("ul",[s("li",[e._v("Settings & privacy")]),s("li",[e._v("Help Center")]),s("li",{on:{click:function(t){return e.logOutUser()}}},[e._v("Log out")])])])]),s("div",{staticClass:"main-content"},[e.showProfile?s("Profile",{staticClass:"com-profile"}):e._e(),s("div",{staticClass:"main-con-middle"},[e.isCategoriesNotEmpty?s("SelectCategories",{staticClass:"com-sel-cat"}):e._e(),e.isSearch?s("SearchResult",{staticClass:"com-se-res"}):e._e(),e.isCategoriesNotEmpty?e._e():s("OnCategory"),e.isSearchedEmpty?e._e():s("OnSearched")],1)],1)],1)},h=[],m=(s("ac6a"),{apiKey:"AIzaSyBDrcAUv9j5GWaNg9-PjebdhL958qFerLw",authDomain:"fir-auth-prac.firebaseapp.com",databaseURL:"https://fir-auth-prac.firebaseio.com",projectId:"fir-auth-prac",storageBucket:"fir-auth-prac.appspot.com",messagingSenderId:"157167760017"}),f=s("59ca");s("e71f");var p=f.initializeApp(m),v=p.firestore(),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[s("div",{staticClass:"cover-area"},[e.isSpinning?s("div",{staticClass:"spinner"},[e._m(0)]):e._e(),s("button",[e._v("Change")]),s("input",{attrs:{type:"file",title:""},on:{change:e.uploadCover}}),s("img",{attrs:{src:e.coverSource}})]),s("div",{staticClass:"pro-pic"},[s("input",{attrs:{type:"file",title:""},on:{change:e.updateProfileImage}}),s("img",{attrs:{src:e.profileThumbnail}})]),s("div",{staticClass:"top-info"},[s("h2",[e._v(e._s(e.fullName))]),s("p",[e._v("@"+e._s(e.userName))])]),s("hr",{staticClass:"hr hr-un-to"}),e._m(1),s("div",{staticClass:"basic-info"},[s("p",{staticClass:"pi-p"},[e._v("Contact & security")]),s("div",{staticClass:"info-com email"},[s("i",{staticClass:"fas fa-envelope fa-lg"}),s("h4",[e._v("Email address")]),s("p",[e._v(e._s(e.email))])]),e._m(2),e._m(3)]),s("hr",{staticClass:"hr"}),s("div",{staticClass:"fav-his-info"},[s("p",{staticClass:"pi-p",staticStyle:{float:"left"}},[e._v("Favorite categories")]),s("button",{on:{click:e.updateCat}},[e._v("EDIT")]),s("div",{staticStyle:{"grid-column":"1/3"}},e._l(e.favCat,function(t,a){return s("p",{key:t,staticClass:"p",class:["color"+a]},[e._v(e._s(t)+"\n            ")])}),0)])])},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loading"},[s("div",{staticClass:"spinner"},[s("div",{staticClass:"circle circle-1"},[s("div",{staticClass:"circle-inner"})]),s("div",{staticClass:"circle circle-2"},[s("div",{staticClass:"circle-inner"})])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"basic-info"},[s("p",{staticClass:"pi-p"},[e._v("Profile")]),s("div",{staticClass:"info-com birthday"},[s("i",{staticClass:"fas fa-birthday-cake fa-lg"}),s("h4",[e._v("Birthday")]),s("p",[e._v("Feb 02 1997")])]),s("div",{staticClass:"info-com gender"},[s("i",{staticClass:"fas fa-transgender fa-lg"}),s("h4",[e._v("Gender")]),s("p",[e._v("Male")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-com phone"},[s("i",{staticClass:"fas fa-phone fa-lg"}),s("h4",[e._v("Phone")]),s("p",[e._v("01703577953")]),s("p",[e._v("01987886450")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-com password"},[s("i",{staticClass:"fas fa-unlock-alt fa-lg"}),s("h4",[e._v("Password")]),s("p",[e._v("●●●●●●")])])}],C=(s("55dd"),s("8aa5")),w=s.n(C),S=w.a.auth(),y={name:"profile",props:["pro_data"],components:{},data:function(){return{fullName:"",email:"",userName:"",favCat:[],coverSource:"",profileThumbnail:"",uid:S.currentUser.uid,isSpinning:!1}},created:function(){var e=this;v.collection("Users").where("_id","==",this.uid).get().then(function(t){t.forEach(function(t){e.fullName=t.data().firstName+" "+t.data().lastName,e.userName=t.data().userName,e.email=t.data().email,e.favCat=t.data().favCategories})}).catch(function(e){});var t=w.a.storage().ref("Users/".concat(this.uid,"/CoverPhoto"));t.getDownloadURL().then(function(t){e.coverSource=t}).catch(function(e){console.log(e)});var s=w.a.storage().ref("Users/".concat(this.uid,"/ProfilePhoto"));s.getDownloadURL().then(function(t){e.profileThumbnail=t}).catch(function(e){console.log(e)}),st.$on("Cat-Updated",function(t){t.sort(),e.favCat=t})},methods:{uploadCover:function(e){var t=this;this.isSpinning=!0;var s=e.target.files[0];console.log(s),console.log(this.uid);var a=w.a.storage().ref("Users/".concat(this.uid,"/CoverPhoto")),i=a.put(s);i.on("state_changed",function(e){console.log(e)},function(e){console.log(e)},function(){console.log("upload Complete"),a.getDownloadURL().then(function(e){console.log(e),t.coverSource=e,console.log(t.coverSource),t.isSpinning=!1}).catch(function(e){console.log(e)})})},updateProfileImage:function(){var e=this,t=event.target.files[0];console.log(t),console.log(this.uid);var s=w.a.storage().ref("Users/".concat(this.uid,"/ProfilePhoto")),a=s.put(t);a.on("state_changed",function(e){console.log(e)},function(e){console.log(e)},function(){console.log("upload Complete"),s.getDownloadURL().then(function(t){console.log(t),e.profileThumbnail=t}).catch(function(e){console.log(e)})})},updateCat:function(){st.$emit("updateCat",this.favCat)}}},b=y,x=(s("7949"),Object(n["a"])(b,g,_,!1,null,"28670c98",null)),N=x.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"overlay hide",class:{show:e.isHaveSuggestions},on:{click:function(t){e.isHaveSuggestions=!e.isHaveSuggestions}}}),s("header",[s("div",{staticClass:"menu-toogle"},[s("g",{attrs:{transform:"translate(-71 -97)"}},[s("rect",{attrs:{width:"57.194",height:"12",rx:"6",transform:"translate(71 97)",fill:"#424242"}}),s("rect",{attrs:{width:"96.49",height:"12",rx:"6",transform:"translate(71 122)",fill:"#424242"}}),s("rect",{attrs:{width:"84.429",height:"12",rx:"6",transform:"translate(71 147)",fill:"#424242"}})])]),e._m(0),s("div",{staticClass:"ap-na"},[s("h3",{staticStyle:{cursor:"pointer"},on:{click:e.goToHome}},[e._v("Application")])]),s("div",{staticClass:"search-box"},[s("div",{staticClass:"se-bo"},[s("div",{staticClass:"se-icon"}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{type:"text",placeholder:"Search your favorite"},domProps:{value:e.word},on:{keyup:e.onKeyUp,focus:e.onFocus,input:function(t){t.target.composing||(e.word=t.target.value)}}})])]),s("div",{staticClass:"account"})]),e.isHaveSuggestions?s("div",{staticClass:"sugg_box"},[s("ul",{staticClass:"most-se-ul"},[s("p",{staticClass:"most-se-p"},[e._v("Recent Searches")]),e._l(e.recentSearches,function(t){return s("li",{key:t.key,on:{click:e.onClickListItem}},[e._v("\n        "+e._s(t.key)+"\n      ")])})],2),s("ul",{staticClass:"most-se-ul"},[s("p",{staticClass:"most-se-p"},[e._v("Most Searched")]),e._l(e.mostSearched,function(t){return s("li",{key:t.key,on:{click:e.onClickListItem}},[e._v("\n        "+e._s(t.key)+"\n      ")])})],2),s("ul",{staticClass:"sugg-ul"},[s("p",{staticClass:"most-se-p"},[e._v("Auto Suggestion")]),e._l(e.suggestion,function(t){return s("li",{key:t,on:{click:e.onClickListItem}},[e._v(e._s(t))])})],2)]):e._e()])},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cLogo"},[a("img",{attrs:{src:s("cf05")}})])}],U=w.a.auth(),k={name:"page-header",components:{},data:function(){return{keywords:[],suggestion:[],mostSearched:[],recentSearches:[],word:"",isHaveSuggestions:!1,isKeywordsLoadedAlready:!1}},methods:{goToHome:function(){this.$router.go({path:this.$router.path})},onKeyUp:function(e){var t=this;this.suggestion=[];var s=this.word.trim().toLowerCase();if(""!==s){var a=e.keyCode?e.keyCode:e.which;13==a?(st.$emit("Search",this.word),this.isHaveSuggestions=!1):(this.keywords.forEach(function(e){e.indexOf(s)>-1&&t.suggestion.length<9?(t.suggestion.push(e),t.isHaveSuggestions=!0):t.suggestion.length<=0&&(t.isHaveSuggestions=!1)}),this.getRecentSearches())}else this.isHaveSuggestions=!1},onFocus:function(){var e=this;this.isKeywordsLoadedAlready||(v.collection("Keywords").where("_id","==","KEYID").get().then(function(t){t.forEach(function(t){e.keywords=t.data().words,e.isKeywordsLoadedAlready=!0})}),this.getRecentSearches())},getRecentSearches:function(){var e=this;v.collection("Users").where("_id","==",U.currentUser.uid).get().then(function(t){t.forEach(function(t){var s=t.data().recentSearched,a=function(e,t){return e.flag>t.flag?-1:e.flag<t.flag?1:0};s.sort(a),e.mostSearched=s.slice(0,5);var i=function(e,t){return e.time>t.time?-1:e.time<t.time?1:0};s.sort(i),e.recentSearches=s.slice(0,6)})})},onClickListItem:function(e){this.word=e.target.innerText,this.isHaveSuggestions=!1,st.$emit("Search",this.word)}},created:function(){var e=this;st.$on("HideSearch",function(){e.word=""})}},L=k,$=(s("d5ba"),Object(n["a"])(L,P,E,!1,null,"cc47cfc8",null)),R=$.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"selectCategories"},[e.isSomethingSelected?s("h3",{staticClass:"sC-ch"},[e._v("Selected Categories")]):e._e(),e.isSomethingSelected?s("div",{staticClass:"sC-ch"},e._l(e.Selected,function(t){return s("div",{key:t,staticClass:"sel-box",on:{click:e.redSelected}},[s("p",[e._v(e._s(t))])])}),0):e._e(),e.err?s("p",{staticClass:"err"},[e._v("Select atleast 3 categories")]):e._e(),s("h3",{staticClass:"sC-ch"},[e._v("Select your favorite categories")]),s("div",{staticClass:"sC-ch"},e._l(e.Categories,function(t){return s("p",{key:t,staticClass:"cat-box in-bl",on:{click:e.setSelected}},[e._v(e._s(t))])}),0),e.isSomethingSelected?s("button",{on:{click:e.SaveSelectedCategories}},[e._v("SAVE")]):e._e()])},D=[],A=s("8aa5"),T=A.auth(),M={name:"selectCategories",props:["uid"],data:function(){return{Categories:["Action","Fantasy","Mystery","Thriller","Horror","Crime","Adventure","War","Drama","Romance","Sci-Fi","Comedy","Musical","Animation","Biography","History","Family","Western"],Selected:[],isSomethingSelected:!1,err:!1}},created:function(){var e=this;v.collection("Users").where("_id","==",T.currentUser.uid).get().then(function(t){t.forEach(function(t){0!==t.data().favCategories.length?(e.Selected=t.data().favCategories,e.Selected.forEach(function(t){e.Categories=e.Categories.filter(function(e){return e!==t})}),window.scrollTo(0,0),e.isSomethingSelected=!0):e.isSomethingSelected=!1})})},mounted:function(){},methods:{setSelected:function(e){this.Selected.push(e.target.innerText),this.Categories=this.Categories.filter(function(t){return t!==e.target.innerText}),this.Selected.length>0?this.isSomethingSelected=!0:this.isSomethingSelected=!1,this.err&&(this.err=!1)},redSelected:function(e){this.Categories.push(e.target.innerText),this.Selected=this.Selected.filter(function(t){return t!==e.target.innerText}),this.Selected.length>0?this.isSomethingSelected=!0:this.isSomethingSelected=!1},showDeseltBtn:function(e){this.deselect=!0},hideDeselectBtn:function(){this.deselect=!1},SaveSelectedCategories:function(){var e=this;this.Selected.length<3?this.err=!0:(this.err=!1,v.collection("Users").where("_id","==",T.currentUser.uid).get().then(function(t){t.forEach(function(t){t.ref.update({favCategories:e.Selected}).then(function(t){st.$emit("Cat-Updated",e.Selected)})})}))}}},H=M,j=(s("6b19"),Object(n["a"])(H,O,D,!1,null,"0c153d21",null)),q=j.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"oncategory"},[s("div",{staticClass:"on-he"},[e.isLoading?s("div",{staticClass:"loading"}):e._e(),s("h3",{staticClass:"con-cat-title"},[e._v("Newest Release")]),s("p",{staticClass:"con-cat-subTitle"},[e._v("Based on Favourite Categories")])]),s("ul",{staticClass:"on-cat-ul"},e._l(e.Post,function(t){return s("li",{key:t._id},[s("div",{staticClass:"img"},[e._m(0,!0),s("img",{attrs:{src:t.src}})]),s("div",{staticClass:"item"},[s("h4",[e._v(e._s(t.Name)+"("+e._s(t.ReleaseYear)+")")]),s("p",[s("b",[e._v("Release:")]),e._v("\n          "+e._s(t.ReleaseDate)+"("+e._s(t.Country)+")\n        ")]),s("p",[s("b",[e._v("IMDB:")]),e._v("\n          "+e._s(t.Rating)+"\n        ")]),s("p",[s("b",[e._v("Type:")]),e._l(t.Categories,function(t){return s("span",{key:t},[e._v(e._s(t)+", ")])})],2)])])}),0)])},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"go-to-mv-de"},[s("div",{staticClass:"gtmd-overlay"}),s("button",[e._v("DETAILS")])])}],K=(s("6762"),s("2fdb"),s("28a5"),s("0b16"),s("8aa5")),B=K.auth(),Y={name:"oncategory",data:function(){return{Post:[],months:{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},MovieSrc:[],isLoading:!1,showDetails:!0}},created:function(){var e,t=this;this.isLoading=!0,v.collection("Users").where("_id","==",B.currentUser.uid).get().then(function(t){t.forEach(function(t){e=t.data().favCategories})}),v.collection("Movies").orderBy("ReleaseDate","desc").get().then(function(s){t.Post=[],s.forEach(function(s){t.srcChanged=!1;var a=s.data(),i=s.data().ReleaseDate.split("-");i[2],t.months[i[1]],i[0];e.forEach(function(e){a.Categories.includes(e)&&t.Post.length<8&&(t.Post=t.Post.filter(function(e){return e.Name!==a.Name}),t.Post.push(a),t.isLoading=!1)})})})},methods:{}},J=Y,W=(s("2c58"),Object(n["a"])(J,F,I,!1,null,"6463e67f",null)),G=W.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"SearchResult"}},[e.HaveResult?s("Spinner"):e._e(),e.nothingFound?s("div",{staticClass:"no-fo-di"},[s("p",[e._v("Result not found!!")])]):e._e(),e.nothingFound?e._e():s("div",{staticClass:"on-he"},[s("h3",{staticClass:"se-re-h3"},[e._v("Searched Result")])]),s("ul",{staticClass:"on-cat-ul"},e._l(e.Post,function(t){return s("li",{key:t._id},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.src}})]),s("div",{staticClass:"item"},[s("h4",[e._v(e._s(t.Name)+"("+e._s(t.ReleaseYear)+")")]),s("p",[s("b",[e._v("Release: ")]),e._v(e._s(t.ReleaseDate)+"("+e._s(t.Country)+")")]),s("p",[s("b",[e._v("IMDB: ")]),e._v(e._s(t.Rating))]),s("p",[s("b",[e._v("Type:")]),e._l(t.Type,function(t){return s("span",{key:t},[e._v(" "+e._s(t))])})],2)])])}),0)],1)},z=[],Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"spinner-box"},[s("div",{staticClass:"loading"},[s("div",{staticClass:"spinner"},[s("div",{staticClass:"circle circle-1"},[s("div",{staticClass:"circle-inner"})]),s("div",{staticClass:"circle circle-2"},[s("div",{staticClass:"circle-inner"})])])])])}],Z={name:"spinner"},ee=Z,te=(s("c667"),Object(n["a"])(ee,Q,X,!1,null,"664982ab",null)),se=te.exports,ae={name:"searchresult",data:function(){return{Post:[],HaveResult:!0,nothingFound:!1}},components:{Spinner:se},created:function(){var e=this;st.$on("MovieFound",function(t){e.Post=t,e.HaveResult=!1,e.nothingFound=!1}),st.$on("NotingFound",function(){e.HaveResult=!1,e.nothingFound=!0,e.Post=[]})},methods:{HideSearch:function(){st.$emit("HideSearch")}}},ie=ae,re=(s("015f"),Object(n["a"])(ie,V,z,!1,null,"a3016366",null)),ne=re.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"onhistory"},[s("div",{staticClass:"on-he"},[e.isLoading?s("div",{staticClass:"loading"}):e._e(),s("h3",{staticClass:"con-cat-title"},[e._v("Suggested Movies")]),s("p",{staticClass:"con-cat-subTitle"},[e._v("Based on Search History")]),s("h3",{staticClass:"con-cat-subTitle"},[e._v("WORKING ON IT")])])])},ce=[],le=w.a.auth(),ue={name:"onhistory",data:function(){return{recentSearches:[],mostSearched:[],isLoading:!0}},created:function(){var e=this;v.collection("Users").where("_id","==",le.currentUser.uid).get().then(function(t){t.forEach(function(t){var s=t.data().recentSearched,a=function(e,t){return e.flag>t.flag?-1:e.flag<t.flag?1:0};s.sort(a),e.mostSearched=[],s.forEach(function(t,s){s<5&&e.mostSearched.push(t)}),console.log(e.mostSearched);var i=function(e,t){return e.time>t.time?-1:e.time<t.time?1:0};s.sort(i),e.recentSearches=[],s.forEach(function(t,s){s<6&&e.recentSearches.push(t)}),console.log(e.recentSearches)})})}},de=ue,he=(s("a251"),Object(n["a"])(de,oe,ce,!1,null,"69c6a516",null)),me=he.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"OnSearched"}},[e.Post.length>0?s("div",{staticClass:"on-he"},[e.isLoading?s("div",{staticClass:"loading"}):e._e(),s("h3",{staticClass:"con-cat-title"},[e._v("Top Searched")]),s("p",{staticClass:"con-cat-subTitle"},[e._v("Based on your top Searched")])]):e._e(),s("ul",{staticClass:"on-cat-ul"},e._l(e.Post,function(t){return s("li",{key:t._id},[s("div",{staticClass:"img"},[e._m(0,!0),s("img",{attrs:{src:t.src}})]),s("div",{staticClass:"item"},[s("h4",[e._v(e._s(t.Name)+"("+e._s(t.ReleaseYear)+")")]),s("p",[s("b",[e._v("Release:")]),e._v("\n                    "+e._s(t.ReleaseDate)+"("+e._s(t.Country)+")\n                ")]),s("p",[s("b",[e._v("IMDB:")]),e._v("\n                    "+e._s(t.Rating)+"\n                ")]),s("p",[s("b",[e._v("Type:")]),e._l(t.Categories,function(t){return s("span",{key:t},[e._v(e._s(t)+",")])})],2)])])}),0)])},pe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"go-to-mv-de"},[s("div",{staticClass:"gtmd-overlay"}),s("button",[e._v("DETAILS")])])}],ve=s("8aa5"),ge=(ve.auth(),{name:"OnSearched",data:function(){return{Post:{},months:{"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},MovieSrc:[],isLoading:!0}},created:function(){var e=this;st.$on("TopSearched",function(t){var s=t,a=function(e,t){return e.flag>t.flag?-1:e.flag<t.flag?1:0};s.sort(a);var i=s.slice(0,10);v.collection("Movies").get().then(function(t){e.Post=[],t.forEach(function(t){e.srcChanged=!1;var s=t.data(),a=s.Categories;a.push(s.Name),a=a.concat(s.Stars),a.push(s.Country),a.push(s.Director),a.push(s.Language),a.push(s.ReleaseYear),a=a.map(function(e){return e.toLowerCase()});var r=t.data().ReleaseDate.split("-");r[2],e.months[r[1]],r[0];i.forEach(function(t){a.includes(t.key)&&e.Post.length<12&&(e.Post=e.Post.filter(function(e){return e.Name!==s.Name}),e.Post.push(s),e.isLoading=!1)})})}),0===e.Post.length&&(e.isLoading=!1),e.isLoading=!1})},mounted:function(){},methods:{}}),_e=ge,Ce=(s("1528"),Object(n["a"])(_e,fe,pe,!1,null,"a43d0072",null)),we=Ce.exports,Se=s("8aa5"),ye=Se.auth(),be={name:"home",props:["pro_data"],data:function(){return{pro_popup_sh:!1,isSigninedIn:!1,currentUser:null,uid:"",firstName:"",lastName:"",userName:"",showProfile:!0,isCategoriesNotEmpty:!1,isSearchedEmpty:!1,favCategories:null,isSearch:!1}},components:{Profile:N,PageHeader:R,SelectCategories:q,OnCategory:G,SearchResult:ne,OnHistory:me,OnSearched:we},methods:{showPupUp:function(){this.pro_popup_sh=!this.pro_popup_sh},logOutUser:function(){var e=this;ye.signOut().then(function(){e.$router.push("/signin")})},onClickOverlay:function(){this.pro_popup_sh=!this.pro_popup_sh},onClickProfile:function(){this.showProfile||(this.showProfile=!0),this.pro_popup_sh=!1}},created:function(){var e=this;ye.currentUser&&(this.isSigninedIn=!0,this.currentUser=ye.currentUser.email,v.collection("Users").where("_id","==",ye.currentUser.uid).get().then(function(t){t.forEach(function(t){0===t.data().favCategories.length?e.isCategoriesNotEmpty=!0:e.isCategoriesNotEmpty=!1,e.firstName=t.data().firstName,e.lastName=t.data().lastName,e.userName=t.data().userName,st.$emit("TopSearched",t.data().recentSearched)})})),st.$on("updateCat",function(){e.isCategoriesNotEmpty=!0,e.isSearchedEmpty=!0}),st.$on("Cat-Updated",function(){e.isCategoriesNotEmpty=!1,e.isSearchedEmpty=!1}),st.$on("Search",function(t){e.isSearch=!0;var s=[];v.collection("Movies").get().then(function(e){e.forEach(function(e){var a=[];a.push(e.data().Name),a=a.concat(e.data().Categories),a=a.concat(e.data().Stars),a.push(e.data().Country),a.push(e.data().Director),a.push(e.data().Language),a.push(e.data().ReleaseYear);var i={},r=!1;try{a.forEach(function(e){if(!r&&e.toLowerCase().indexOf(t.toLowerCase())>-1)throw r=!0,i})}catch(o){if(o!==i)throw o}if(r){var n={_id:e.data()._id,Name:e.data().Name,ReleaseYear:e.data().ReleaseYear,ReleaseDate:e.data().ReleaseDate,Rating:e.data().Rating,Type:e.data().Categories,Country:e.data().Country,src:e.data().src};s=s.filter(function(e){return e.Name!==n.Name}),s.push(n),st.$emit("MovieFound",s)}}),0===s.length&&st.$emit("NotingFound")}),v.collection("Users").where("_id","==",ye.currentUser.uid).get().then(function(e){e.forEach(function(e){if(e.data().recentSearched){var s=e.data().recentSearched;if(s.length<=100){var a=0;s=s.filter(function(e){if(e.key!==t)return e.key;a=e.flag});var i={key:t.trim().toLowerCase(),time:new Date,flag:a+1};s.push(i),e.ref.update({recentSearched:s})}}else{var r=[],n={key:t.trim().toLowerCase(),time:new Date,flag:1};r.push(n),e.ref.update({recentSearched:r})}})})}),st.$on("HideSearch",function(){e.isSearch=!1})}},xe=be,Ne=(s("0748"),Object(n["a"])(xe,d,h,!1,null,"26d521ac",null)),Pe=Ne.exports,Ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"signin"},[e.isLoading?s("div",{staticClass:"loading"}):e._e(),e._m(0),e._m(1),s("div",{staticClass:"in-box in-box-em",class:{"wh-er":e.em_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"in-em",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("label",{class:{"red-text":e.em_err},attrs:{for:"in-em"}},[e._v("Email address")]),s("p",{staticClass:"note hide",class:{"err-show red-text":e.em_err},staticStyle:{"margin-bottom":"0.2rem"}},[e._v(e._s(e.em_msg))])]),s("div",{staticClass:"in-box in-box-pass",class:{"wh-er":e.pass_err}},["checkbox"===(e.sh_ps?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"in-pass",required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{change:function(t){var s=e.password,a=t.target,i=!!a.checked;if(Array.isArray(s)){var r=null,n=e._i(s,r);a.checked?n<0&&(e.password=s.concat([r])):n>-1&&(e.password=s.slice(0,n).concat(s.slice(n+1)))}else e.password=i}}}):"radio"===(e.sh_ps?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"in-pass",required:"",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"in-pass",required:"",type:e.sh_ps?"text":"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("label",{class:{"red-text":e.pass_err},attrs:{for:"in-pass"}},[e._v("Password")]),s("p",{staticClass:"red-text hide",class:{"err-show":e.pass_err}},[e._v(e._s(e.ps_msg))]),s("span",{staticClass:"ps-eye",on:{click:function(t){return e.showPass()}}},[s("img",{staticClass:"eye-img",attrs:{src:e.eye_src}})])]),e._m(2),s("div",[s("router-link",{staticClass:"reg-ins",attrs:{to:"/register"}},[e._v("Create account")])],1),s("div",[s("button",{staticClass:"sin-btn",on:{click:function(t){return e.SigninUser()}}},[e._v("Signin")])])])},Ue=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bo-co-na"},[s("h2",[e._v("Company")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bo-cr-ac"},[s("h2",[s("span",{staticClass:"si-in"},[e._v("Signin")]),s("br"),e._v("with your email address & password")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fo-pa"},[s("p",[e._v("Forgot password?")])])}],ke=s("8aa5"),Le=ke.auth(),$e={name:"signin",data:function(){return{email:"",password:"",type:"password",em_err:!1,pass_err:!1,sh_ps:!1,isLoading:!1,em_msg:"Enter your email address",ps_msg:"Enter your password",eye_src:"https://img.icons8.com/ios-glyphs/30/000000/invisible.png"}},methods:{showPass:function(){this.sh_ps=!this.sh_ps,this.sh_ps?this.eye_src="https://img.icons8.com/ios-glyphs/30/000000/visible.png":this.eye_src="https://img.icons8.com/ios-glyphs/30/000000/invisible.png"},SigninUser:function(){var e=this;this.isLoading=!0,""===this.email?this.em_err=!0:this.em_err=!1,""===this.password?this.pass_err=!0:this.pass_err=!1,this.em_err||this.pass_err?this.isLoading=!1:Le.signInWithEmailAndPassword(this.email,this.password).then(function(t){e.isLoading=!0,e.$router.go({path:e.$router.path})}).catch(function(t){"auth/wrong-password"===t.code?(e.pass_err=!0,e.ps_msg="Wrong password!"):"auth/user-not-found"===t.code?(e.em_err=!0,e.em_msg="Wrong email address!"):"auth/invalid-email"===t.code?(e.em_err=!0,e.em_msg="invalid email address!"):(e.em_err=!1,e.em_msg="Enter your email address"),e.isLoading=!1})}}},Re=$e,Oe=(s("ada0"),Object(n["a"])(Re,Ee,Ue,!1,null,"2f6efb87",null)),De=Oe.exports,Ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register"},[e.showLoading?s("div",{staticClass:"loading"}):e._e(),e._m(0),e._m(1),s("div",{staticClass:"grid-wrapper"},[s("div",{staticClass:"in-box in-box-us",class:{"wh-er":e.usr_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text",id:"in-us",required:""},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),s("label",{class:{"red-text":e.usr_err},attrs:{for:"in-us"}},[e._v("User name")]),s("p",{staticClass:"note",class:{"err-show red-text":e.usr_err},staticStyle:{"margin-bottom":"0.2rem"}},[e._v(e._s(e.us_msg))])]),s("div",{staticClass:"in-box in-box-suu",class:{hide:!e.userSug}},[e._l(e.ranUserName,function(t){return s("p",{key:t,on:{click:e.setSuggestedUserName}},[e._v(e._s(t))])}),s("span",[e._v("available")])],2),s("div",{staticClass:"in-box in-box-fn",class:{"wh-er":e.fn_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",id:"in-fn",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),s("label",{class:{"red-text":e.fn_err},attrs:{for:"in-fn"}},[e._v("First name")]),s("p",{staticClass:"red-text hide",class:{"err-show":e.fn_err}},[e._v("Enter First name")])]),s("div",{staticClass:"in-box in-box-ln",class:{"wh-er":e.ln_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",id:"in-ln",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),s("label",{class:{"red-text":e.ln_err},attrs:{for:"in-ln"}},[e._v("Last name")]),s("p",{staticClass:"red-text hide",class:{"err-show":e.ln_err}},[e._v("Enter Last name")])]),s("div",{staticClass:"in-box in-box-em",class:{"wh-er":e.em_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",id:"in-em",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("label",{class:{"red-text":e.em_err},attrs:{for:"in-em"}},[e._v("Email address")]),s("p",{staticClass:"sa-em"},[e._v("sample@sample.com")]),s("p",{staticClass:"red-text hide",class:{"err-show":e.em_err}},[e._v(e._s(e.em_msg))])]),s("div",{staticClass:"in-box in-box-pass",class:{"wh-er":e.pass_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"in-pass",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("label",{class:{"red-text":e.pass_err},attrs:{for:"in-pass"}},[e._v("Password")]),s("p",{staticClass:"note",class:{"err-show red-text":e.pass_err}},[e._v(e._s(e.ps_note))])]),s("div",{staticClass:"in-box in-box-cpass",class:{"wh-er":e.cPass_err}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.cPass,expression:"cPass"}],attrs:{type:"password",id:"in-cPass",required:""},domProps:{value:e.cPass},on:{input:function(t){t.target.composing||(e.cPass=t.target.value)}}}),s("label",{class:{"red-text":e.cPass_err},attrs:{for:"in-cPass"}},[e._v("Confirm")]),s("p",{staticClass:"note hide",class:{"err-show red-text":e.cPass_err}},[e._v(e._s(e.cPs_msg))])])]),s("div",[s("router-link",{staticClass:"sign-ins",attrs:{to:"/signin"}},[e._v("or Signin instead")])],1),s("div",[s("button",{staticClass:"reg-btn",on:{click:function(t){return e.registerUser()}}},[e._v("Register")])])])},Te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bo-co-na"},[s("h2",[e._v("Company")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bo-cr-ac"},[s("h2",[e._v("Create your Company Account")])])}],Me=(s("a481"),s("8aa5")),He=Me.auth(),je={name:"register",data:function(){return{userName:"",firstName:"",lastName:"",email:"",password:"",cPass:"",ranUserName:[],usr_err:!1,fn_err:!1,ln_err:!1,em_err:!1,pass_err:!1,cPass_err:!1,to_er:!1,showLoading:!1,userSug:!1,us_msg:"User name have to be unique",em_msg:"Enter Email Address",ps_note:"Use 6 or more characters with a mix of letters, numbers & symbols",cPs_msg:"Use 6 or more characters with a mix of letters, numbers & symbols"}},methods:{setSuggestedUserName:function(e){console.log(e),this.userName=e.target.innerText,this.usr_err=!1,this.us_msg="User name have to be unique"},registerUser:function(){var e=this;if(this.showLoading=!0,""===this.userName?(this.usr_err=!0,this.us_msg="Enter User name",this.to_er=!0,this.showLoading=!1):(this.usr_err=!1,this.us_msg="User name have to be unique",this.to_er=!1),""===this.firstName?(this.fn_err=!0,this.to_er=!0,this.showLoading=!1):(this.fn_err=!1,this.to_er=!1),""===this.lastName?(this.ln_err=!0,this.to_er=!0,this.showLoading=!1):(this.ln_err=!1,this.to_er=!1),""===this.email?(this.em_err=!0,this.to_er=!0,this.em_msg="Enter Email Address",this.showLoading=!1):(this.em_err=!1,this.to_er=!1),""===this.password?(this.pass_err=!0,this.ps_note="Enter Password",this.to_er=!0,this.showLoading=!1):(this.pass_err=!1,this.to_er=!1,this.ps_note="Use 8 or more characters with a mix of letters, numbers & symbols"),""===this.cPass)return this.cPass_err=!0,this.to_er=!0,this.cPs_msg="Confirm Password",void(this.showLoading=!1);this.cPass_err=!1,this.to_er=!1,this.cPs_msg="Use 8 or more characters with a mix of letters, numbers & symbols",this.password!==this.cPass?(this.cPass_err=!0,this.cPs_msg="Password doesn't matches",this.to_er=!0,this.showLoading=!1):(this.to_er=!1,this.cPass_err=!1),!1===this.to_er&&v.collection("Users").orderBy("userName").startAt(this.userName).endAt(this.userName+"").get().then(function(t){var s=[];if(t.forEach(function(e){s.push(e.data().userName)}),s.includes(e.userName)){var a=function(e){var t="";while(e>0)t+="9",e--;return t},i=function(e){return Math.floor(Math.random()*(e-1)+1)};e.ranUserName=[],e.usr_err=!0,e.us_msg="User name has already been taken",e.showLoading=!1;var r=e.userName.replace(/[0-9]/g,""),n=0;while(n<2){var o=Math.floor(4*Math.random()+1),c=r+i(a(o));s.includes(c)||(e.ranUserName=e.ranUserName.filter(function(e){return e!==c}),e.ranUserName.push(c),n++)}e.userSug=!0}else e.usr_err=!1,e.us_msg="User name have to be unique",He.createUserWithEmailAndPassword(e.email,e.password).then(function(t){v.collection("Users").add({_id:t.user.uid,userName:e.userName,firstName:e.firstName,lastName:e.lastName,email:e.email,favCategories:[],recentSearched:[]}).then(function(){e.showLoading=!1,e.$router.push("/signin")})}).catch(function(t){"auth/email-already-in-use"===t.code?(e.em_err=!0,e.em_msg="Email already used"):"auth/invalid-email"===t.code?(e.em_err=!0,e.em_msg="Enter a valid email address"):(e.em_err=!1,e.em_msg="Enter Email Address"),e.showLoading=!1})})}}},qe=je,Fe=(s("3e8c"),Object(n["a"])(qe,Ae,Te,!1,null,"4040aa68",null)),Ie=Fe.exports,Ke=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"admin"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.contxt,expression:"contxt"}],staticClass:"cntx-area",attrs:{cols:"180",rows:"16"},domProps:{value:e.contxt},on:{input:function(t){t.target.composing||(e.contxt=t.target.value)}}}),s("button",{attrs:{id:"save"},on:{click:e.saveMovie}},[e._v("SAVE")]),e.isSuc?s("h1",[e._v("Successfully added")]):e._e()])},Be=[],Ye=(s("7f7f"),s("11c1")),Je=s.n(Ye),We={name:"admin",data:function(){return{contxt:{},isSuc:!1}},methods:{saveMovie:function(){var e=this;console.log(this.context);var t=Je.a.v4(),s={getDetails:function(){return{_id:t,Name:this.context.name,src:this.context.image,Categories:this.context.genre,Stars:this.getStars(),Director:this.context.director.name,Plot:this.context.description,ReleaseDate:this.context.datePublished,ReleaseYear:this.getYear(),Duration:this.getDuration(),Rating:this.context.aggregateRating.ratingValue,Language:this.context.review.inLanguage,Country:"USA"}},getStars:function(){var e=[];return this.context.actor.forEach(function(t){return e.push(t.name),t.name}),e},getYear:function(){var e=this.context.datePublished.split("-");return e[0]},getDuration:function(){var e=this.context.duration.split("T"),t=e[1].split("H"),s=t[0],a=t[1].split("M")[0],i={hour:s,minute:a};return i},getKeywords:function(){var e=[];e.push(this.context.name.toLowerCase()),e.push(this.context.director.name.toLowerCase()),e.push(this.getYear()),e.push(this.context.review.inLanguage.toLowerCase());try{this.context.genre.forEach(function(t){e.push(t.toLowerCase())})}catch(t){e.push(this.context.genre)}return this.getStars().forEach(function(t){e.push(t.toLowerCase())}),e},time:this.time,context:JSON.parse(this.contxt)};console.log("Details",s.getDetails()),console.log("Keywords",s.getKeywords()),v.collection("Movies").add(s.getDetails()).then(function(){console.log("Movie Added"),e.isSuc=!0,e.contxt=""});var a=s.getKeywords();v.collection("Keywords").where("_id","==","KEYID").get().then(function(t){t.forEach(function(t){var s=t.data().words;a.forEach(function(e){-1===s.indexOf(e)&&s.push(e)}),t.ref.update({words:s}),console.log("Keyword updated"),e.isKeyword=!0}),e.context={},e.time=""})}}},Ge=We,Ve=(s("da77"),Object(n["a"])(Ge,Ke,Be,!1,null,"e9177d02",null)),ze=Ve.exports,Qe=s("8aa5");a["a"].use(u["a"]);var Xe=new u["a"]({routes:[{path:"/",name:"home",component:Pe,meta:{requiresAuth:!0}},{path:"/signin",name:"signin",component:De,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:Ie,meta:{requiresGuest:!0}},{path:"/admin",name:"admin",component:ze,meta:{requiresGuest:!1}}]});Xe.beforeEach(function(e,t,s){e.matched.some(function(e){return e.meta.requiresAuth})?Qe.auth().currentUser?s():s({path:"/signin",query:{redirect:e.fullPath}}):e.matched.some(function(e){return e.meta.requiresGuest})&&Qe.auth().currentUser?s({path:"/",query:{redirect:e.fullPath}}):s()});var Ze=Xe;s.d(t,"bus",function(){return st});var et=s("8aa5");a["a"].config.productionTip=!1;var tt,st=new a["a"];et.auth().onAuthStateChanged(function(){tt||(tt=new a["a"]({router:Ze,render:function(e){return e(l)}}).$mount("#app"))})},"60c3":function(e,t,s){},"64a9":function(e,t,s){},"6b19":function(e,t,s){"use strict";var a=s("9085"),i=s.n(a);i.a},"715f":function(e,t,s){},7949:function(e,t,s){"use strict";var a=s("0a45"),i=s.n(a);i.a},"82d8":function(e,t,s){},9038:function(e,t,s){},9085:function(e,t,s){},a251:function(e,t,s){"use strict";var a=s("9038"),i=s.n(a);i.a},ada0:function(e,t,s){"use strict";var a=s("3ab7"),i=s.n(a);i.a},afab:function(e,t,s){},c667:function(e,t,s){"use strict";var a=s("715f"),i=s.n(a);i.a},c833:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},d5ba:function(e,t,s){"use strict";var a=s("4ea1"),i=s.n(a);i.a},da77:function(e,t,s){"use strict";var a=s("3a9e"),i=s.n(a);i.a},eb7a:function(e,t,s){}});
//# sourceMappingURL=app.96e1c81d.js.map