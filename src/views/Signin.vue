<template>
    <div class="signin">
        <div class="loading" v-if="isLoading"></div>
        <div class="bo-co-na"><h2>Company</h2></div>
        <div class="bo-cr-ac"><h2><span class="si-in">Signin</span>
        <br>with your email address & password</h2></div>
        <div class="in-box in-box-em" v-bind:class="{'wh-er':em_err}">
            <input type="text" v-model="email" id="in-em" required>
            <label for="in-em" v-bind:class="{'red-text':em_err}">Email address</label>
            <p style="margin-bottom:0.2rem;" class="note hide" v-bind:class="{'err-show red-text':em_err}">{{em_msg}}</p>
        </div>
        <div class="in-box in-box-pass" v-bind:class="{'wh-er':pass_err}">
            <input :type="sh_ps?'text':'password'" v-model="password" id="in-pass" required>
            <label for="in-pass" v-bind:class="{'red-text':pass_err}">Password</label>
            <p class="red-text hide" v-bind:class="{'err-show':pass_err}">{{ps_msg}}</p>
            <span @click="showPass()" class="ps-eye"><img :src=eye_src class="eye-img"></span>
        </div>
        <div class="fo-pa">
            <p>Forgot password?</p>
        </div>
        <div>
            <router-link class="reg-ins" to="/register">Create account</router-link>
        </div>
        <div>
            <button @click="SigninUser()" class="sin-btn">Signin</button>
        </div>
    </div>
</template>

<script>

import db from '../components/firebaseInit';
import { bus } from '../main';
const firebase = require('firebase');
const auth = firebase.auth();

export default {
    name:'signin',
    data(){
        return{
            email:'',
            password:'',
            type:'password',

            em_err:false,   pass_err:false, sh_ps:false,
            isLoading:false,

            em_msg:'Enter your email address',
            ps_msg:'Enter your password',

            eye_src:'https://img.icons8.com/ios-glyphs/30/000000/invisible.png'
        }
    },
    methods:{
        showPass(){
            //console.log('showPass');
            this.sh_ps = !this.sh_ps ;
            if(this.sh_ps){
                this.eye_src = 'https://img.icons8.com/ios-glyphs/30/000000/visible.png'
            }else{this.eye_src = 'https://img.icons8.com/ios-glyphs/30/000000/invisible.png'}
        },
        SigninUser(){
            this.isLoading = true;
            //console.log('SigninUser');
            this.email === '' ? this.em_err = true : this.em_err = false ;
            this.password === '' ? this.pass_err = true : this.pass_err = false ;

            if( this.em_err || this.pass_err ){
                //console.log('Filled error');
                this.isLoading = false;
            }
            else{
                auth.signInWithEmailAndPassword(this.email,this.password)
                    .then( result => {
                        //console.log(result);
                        //bus.$emit('userInfo',result);
                        this.isLoading = true;
                        this.$router.go({path:this.$router.path});
                        // this.$router.push('/');
                    }).catch((err) => {
                        //console.log('Signin error!');
                        //console.log(err);
                        if( err.code === 'auth/wrong-password' ){
                            this.pass_err = true ;
                            this.ps_msg = 'Wrong password!';
                        }else if( err.code === 'auth/user-not-found' ){
                            this.em_err = true ;
                            this.em_msg = 'Wrong email address!';
                        }else if( err.code === 'auth/invalid-email' ){
                            this.em_err = true ;
                            this.em_msg = 'invalid email address!';
                        }else{
                            this.em_err = false ;
                            this.em_msg = 'Enter your email address';
                        }
                    this.isLoading = false;
                });
            }
        }
    }
}
</script>

<style scoped>
    .signin{
        padding: 3rem;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 90vh;
        width: 500px;
        overflow: hidden;
        transform: translate(-50%,-50%);
        border: 0.8px solid rgb(209, 210, 214);
        border-radius: 0.4rem;
    }
    .loading{
        position: absolute;
        height: 5px;
        width: 500px;
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
        margin-bottom: 2rem;
        text-align: center;
    }
    .bo-cr-ac{
        margin-bottom: 2rem;
    }
    .si-in{
        font-weight: 400;
        font-size: 1.1em;
    }
    .bo-cr-ac h2{
        font-weight: 300;
        text-align: center;
        font-size: 1.3em;
        line-height: 1.5;
    }
    .in-box{
        position: relative;
        display: block;
        margin: 0 auto;
        width: 80%;
        margin-bottom: 0.8rem;
        box-sizing: border-box;
    }
    .in-box input{
        height: 2.7rem;
        border: 1px solid rgb(185, 187, 190);
        border-radius: 0.3rem;
        padding-left: 1rem;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.1em;
    }
    .in-box label{
        position: absolute;
        top: 0.8rem;
        left: 1rem;
        color: #424242;
        font-size: 0.95em;
        transition: top 0.2s, left 0.2s;
    }
    .in-box input:focus{
        border: 1.5px solid #2196f3;
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
    .ps-eye{
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
        height: 2.4rem;
        width: 2.4rem;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        background-color: rgb(238, 238, 238);
        cursor: pointer;
        padding: 0.45rem;
        box-sizing: border-box;
    }
    .eye-img{
        height: 1.4rem;
        opacity: 0.7;
    }
    .fo-pa{
        display: block;
        width: 80%;
        margin:1rem auto;
        
    }
    .fo-pa p{
        color: #1976d2;
        cursor: pointer;
    }
    .fo-pa p:hover{
        color: #2196f3
    }
    .reg-ins{
        float: left;
        margin-top: 1.6rem;
        margin-left: 0.52rem;
        text-decoration: none;
        color: #1e88e5;
    }
    .sin-btn{
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
    .sin-btn:hover{
        background-color:#1e88e5;
    }
</style>
