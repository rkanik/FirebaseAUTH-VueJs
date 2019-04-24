<template>
    <div class="register">
        <div class="loading" v-if='showLoading'></div>
        <div class="bo-co-na"><h2>Company</h2></div>
        <div class="bo-cr-ac"><h2>Create your Company Account</h2></div>
        <div class="grid-wrapper">
            <div class="in-box in-box-us" v-bind:class="{'wh-er':usr_err}">
                <input type="text" v-model="userName" id="in-us" required>
                <label for="in-us" v-bind:class="{'red-text':usr_err}">User name</label>
                <p style="margin-bottom:0.2rem;" class="note" v-bind:class="{'err-show red-text':usr_err}">{{us_msg}}</p>
                <!-- <p class="red-text hide" v-bind:class="{'err-show':usr_err}">Enter User name</p> -->
            </div>
            <div class="in-box in-box-suu" v-bind:class="{'hide':!userSug}">
                <p v-for="r in ranUserName" v-bind:key=r @click="setSuggestedUserName">{{r}}</p>
                <span>available</span>
            </div>
            <div class="in-box in-box-fn" v-bind:class="{'wh-er':fn_err}">
                <input type="text" v-model="firstName" id="in-fn" required>
                <label for="in-fn" v-bind:class="{'red-text':fn_err}">First name</label>
                <p class="red-text hide" v-bind:class="{'err-show':fn_err}">Enter First name</p>
            </div>
            <div class="in-box in-box-ln" v-bind:class="{'wh-er':ln_err}">
                <input type="text" v-model="lastName" id="in-ln" required>
                <label for="in-ln" v-bind:class="{'red-text':ln_err}">Last name</label>
                <p class="red-text hide" v-bind:class="{'err-show':ln_err}">Enter Last name</p>
            </div>
            <div class="in-box in-box-em" v-bind:class="{'wh-er':em_err}">
                <input type="text" v-model="email" id="in-em" required>
                <label for="in-em" v-bind:class="{'red-text':em_err}">Email address</label>
                <p class="sa-em">sample@sample.com</p>
                <p class="red-text hide" v-bind:class="{'err-show':em_err}">{{em_msg}}</p>
            </div>
            <div class="in-box in-box-pass" v-bind:class="{'wh-er':pass_err}">
                <input type="password" v-model="password" id="in-pass" required>
                <label for="in-pass" v-bind:class="{'red-text':pass_err}">Password</label>
                <p class="note" v-bind:class="{'err-show red-text':pass_err}">{{ps_note}}</p>
                <!-- <p class="red-text hide">Enter Password</p> -->
            </div>
            <div class="in-box in-box-cpass" v-bind:class="{'wh-er':cPass_err}">
                <input type="password" v-model="cPass" id="in-cPass" required>
                <label for="in-cPass" v-bind:class="{'red-text':cPass_err}">Confirm</label>
                <p class="note hide" v-bind:class="{'err-show red-text':cPass_err}">{{cPs_msg}}</p>
                <!-- <p class="red-text hide">Password doesn't matches</p> -->
            </div>
        </div>
        <div>
            <router-link class="sign-ins" to="/signin">or Signin instead</router-link>
        </div>
        <div>
            <button @click="registerUser()" class="reg-btn">Register</button>
        </div>
    </div>
</template>

<script>

import db from '../components/firebaseInit';
const firebase = require('firebase');
const auth = firebase.auth();

export default {
    name:'register',
    data(){
        return{

            
            userName:'',    firstName:'',   lastName:'',
            email   :'',    password :'',   cPass   :'',
            ranUserName:[],

            
            usr_err:false,  fn_err  :false,   ln_err   :false,
            em_err :false,  pass_err:false,   cPass_err:false,
            to_er  :false,  showLoading:false,userSug:false,

            
            us_msg  :'User name have to be unique',
            em_msg  :'Enter Email Address',
            ps_note :'Use 6 or more characters with a mix of letters, numbers & symbols',
            cPs_msg :"Use 6 or more characters with a mix of letters, numbers & symbols"
            
        }
    },
    methods:{
        setSuggestedUserName(event){
            console.log(event);
            this.userName = event.target.innerText;
            this.usr_err = false;
            this.us_msg='User name have to be unique';
        },
        registerUser(){
            this.showLoading = true;
            if(this.userName === ''){
                this.usr_err = true;
                this.us_msg = 'Enter User name';
                this.to_er = true;
                this.showLoading = false ;
                
            }else{
                this.usr_err = false;
                this.us_msg = 'User name have to be unique';
                this.to_er = false;
            }
            if(this.firstName === ''){
                this.fn_err = true;
                this.to_er = true;
                this.showLoading = false ;
            }else{
                this.fn_err = false;
                this.to_er = false;
            }
            if(this.lastName === ''){
                this.ln_err = true;
                this.to_er = true;
                this.showLoading = false ;
            }else{
                this.ln_err = false;
                this.to_er = false;
            }
            if(this.email === ''){
                this.em_err = true;
                this.to_er = true;
                this.em_msg = 'Enter Email Address';
                this.showLoading = false ;
            }else{
                this.em_err = false;
                this.to_er = false;
            }
            if(this.password === ''){
                this.pass_err = true;
                this.ps_note = 'Enter Password';
                this.to_er = true;
                this.showLoading = false ;
            }else{
                this.pass_err = false;
                this.to_er = false;
                this.ps_note = 'Use 8 or more characters with a mix of letters, numbers & symbols';
            }
            if(this.cPass === ''){
                this.cPass_err = true;
                this.to_er = true;
                this.cPs_msg = "Confirm Password"
                this.showLoading = false ;
                return;
            }else{
                this.cPass_err = false;
                this.to_er = false;
                this.cPs_msg = 'Use 8 or more characters with a mix of letters, numbers & symbols';
            }
            if( this.password !== this.cPass ){
                this.cPass_err = true;
                this.cPs_msg = "Password doesn't matches"
                this.to_er = true;
                this.showLoading = false ;
            }else{this.to_er = false;this.cPass_err = false;}

            if( this.to_er === false ){
                db.collection('Users').orderBy('userName').startAt(this.userName)
                    .endAt(this.userName+'\uf8ff').get().then( dataSnapshot => {
                        let probUsers = []
                        dataSnapshot.forEach( doc => {
                            probUsers.push(doc.data().userName)
                        })

                        if( probUsers.includes(this.userName )){
                            
                            this.ranUserName = [];
                            this.usr_err = true;
                            this.us_msg = 'User name has already been taken';
                            this.showLoading = false;

                            function RandomLength(ranLen){
                                let highDigit = '' ;
                                while ( ranLen > 0 ) {highDigit += '9';ranLen--}
                                return highDigit;}

                            let uNameNoDigit = this.userName.replace(/[0-9]/g, '');

                            function RandomNumber( highest ){
                                return Math.floor(( Math.random() * (highest - 1 )) + 1 )}
                            
                            let l = 0 ;
                            while ( l < 2 ){
                                let ranLen = Math.floor(( Math.random() * ( 5 - 1 )) + 1 )
                                var ru = uNameNoDigit+RandomNumber(RandomLength(ranLen));
                                if( !probUsers.includes(ru)){
                                    this.ranUserName = this.ranUserName.filter( el => el !== ru );
                                    this.ranUserName.push(ru);
                                    l++;
                                }
                            }
                            
                            
                            
                            this.userSug = true;
                        }else{
                            this.usr_err = false;
                            this.us_msg = 'User name have to be unique';
                            auth.createUserWithEmailAndPassword(this.email,this.password)
                            .then((result) => {
                                
                                
                                db.collection('Users').add({
                                    _id:result.user.uid,
                                    userName:this.userName,
                                    firstName:this.firstName,
                                    lastName:this.lastName,
                                    email:this.email,
                                    favCategories:[],
                                    recentSearched:[]
                                })
                                .then( () => {
                                    this.showLoading = false;
                                    
                                    this.$router.push('/signin');
                                })
                                
                                
                                
                            }).catch((err) => {
                                
                                
                                if( err.code === 'auth/email-already-in-use'){
                                    this.em_err = true;
                                    this.em_msg = 'Email already used'
                                }
                                else if( err.code === 'auth/invalid-email'){
                                    this.em_err = true;
                                    this.em_msg = 'Enter a valid email address'
                                }
                                else{
                                    this.em_err = false;
                                    this.em_msg = 'Enter Email Address'
                                }
                                this.showLoading = false;
                            });
                        }
                        
                            
                        
                        
                            
                            
                            

                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                        
                    })
                
                
                
                
            }
            
            
            
        }
    }
}
</script>

<style scoped>
    .register{
        padding: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 90vh;
        width: 580px;
        overflow: hidden;
        transform: translate(-50%,-50%);
        border: 0.8px solid rgb(209, 210, 214);
        border-radius: 0.4rem;
    }
    .loading{
        position: absolute;
        height: 5px;
        width: 580px;
        left: 50%;
        top: 3px;
        transform: translate(-50%,-50%);
        background-color: #e2e2e2;
    }
    .loading::before{
        display: block;
        content: '';
        height: 5px;
        width: 0;
        position: absolute;
        left: 0rem;
        border-radius: 2rem;
        background-color: #37a2ff;
        animation: animLoading 1.2s linear infinite;
    }

    @keyframes animLoading{
        /* 0%{ left: 0 ; width: 0;}
        40%{ width: 22rem ;}
        60%{ width: 22rem ;}
        100%{ left: 24rem; width: 0;} */
        0%{
            left: 0; width: 0;
        }
        50%{
            left: 50%; width: 50%;
        }
    }

    .bo-co-na{
        margin-bottom: 1rem;
    }
    .bo-cr-ac{
        margin-bottom: 2rem;
    }
    .bo-cr-ac h2{
        font-weight: 400;
    }
    .grid-wrapper{
        display: grid;
        grid-template-columns: repeat(2,1fr);

    }
    .in-box{
        position: relative;
        /* width: 100%;
        display: inline-block;
        width: calc( 100% / 2 ); */
        margin-bottom: 0.8rem;
        box-sizing: border-box;
    }
    .in-box input{
        height: 2.2rem;
        border: 1px solid rgb(185, 187, 190);
        border-radius: 0.2rem;
        padding-left: 0.8rem;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.1em;
    }
    .in-box label{
        position: absolute;
        top: 0.5rem;
        left: 0.8rem;
        color: #424242;
        font-size: 0.95em;
        transition: top 0.2s, left 0.2s;
    }
    .in-box input:focus{
        border: 1px solid #2196f3;
    }
    .wh-er input{
        border: 1.5px solid #d32f2f;
    }
    .wh-er input:focus{
        border: 1.5px solid #d32f2f;
    }
    .in-box input:focus ~ label,
    .in-box input:valid ~ label{
        top: -0.5rem;
        left: 0.3rem;
        font-size: 0.8em;
        color: #2196f3;
        background-color: white;
        padding: 0 0.3rem;
    }
    .in-box-us{
        margin-right: 1rem;
        padding-right: 1.2rem;
    }
    .in-box-fn{
        padding-right: 1.2rem;
    }
    .in-box-em{
        /* width: 100%; */
        grid-column: 1/3;
    }
    .in-box-em input{
        width: 100%;
    }
    .in-box-pass{
        padding-right: 1.2rem;
    }
    .red-text{
        color:#d32f2f !important;
    }
    .hide{
        font-size: 0.9em;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        visibility: hidden;
    }
    .err-show{
        visibility: visible;
    }
    .sa-em{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: rgba(0, 0, 0, 0.25);
        pointer-events: none;
    }
    .note{
        font-size: 0.8em;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        display: block;
    }
    .none{
        display: none;
    }
    .sign-ins{
        float: left;
        margin-top: 1.6rem;
        margin-left: 0.52rem;
        text-decoration: none;
        color: #1e88e5;
    }
    .reg-btn{
        float: right;
        border: none;
        margin-top: 1rem;
        padding: 0.5rem 2rem;
        background-color: #2196f3;
        border-radius: 0.2rem;
        box-shadow: 0 0 2px 0 rgb(173, 173, 173);
        color: white;
        font-size: 1em;
        cursor: pointer;
    }
    .reg-btn:hover{
        background-color:#1e88e5;
    }
    .in-box-suu p{
        padding: 0.3rem 1rem ;
        border: 1px solid #dadce0;
        border-radius: 2rem;
        display: inline-block;
        text-align: center;
        margin-right: 8px;
        cursor: pointer; 
    }
    .in-box-suu span{
        margin-top: 0.2rem;
        margin-left: 1rem;
        font-size: 0.9em;
        color: #424242;
    }
</style>
