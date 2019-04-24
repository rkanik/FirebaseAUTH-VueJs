<template>
    <div class="profile">
        <div class="cover-area">
            <div v-if="isSpinning" class="spinner"> 
                <div class="loading">
                    <div class="spinner">
                        <div class="circle circle-1">
                            <div class="circle-inner"></div>
                        </div>
                        <div class="circle circle-2">
                            <div class="circle-inner"></div>
                        </div>
                    </div>
                </div>
            </div>
            <button>Change</button>
            <input type="file" @change="uploadCover" title="">
            <img :src='coverSource'>
        </div>
        <div class="pro-pic">
            <input type="file" @change="updateProfileImage" title="">
            <img :src='profileThumbnail'>
        </div>
        <div class="top-info">
            <h2>{{fullName}}</h2>
            <p>@{{userName}}</p>
        </div>
        <hr class="hr hr-un-to">
        <div class="basic-info">
            <p class="pi-p">Profile</p>
            <div class="info-com birthday">
                <i class="fas fa-birthday-cake fa-lg"></i>
                <h4>Birthday</h4>
                <p>Feb 02 1997</p>
            </div>
            <div class="info-com gender">
                <i class="fas fa-transgender fa-lg"></i>
                <h4>Gender</h4>
                <p>Male</p>
            </div>
        </div>
        <div class="basic-info">
            <p class="pi-p">Contact & security</p>
            <div class="info-com email">
                <i class="fas fa-envelope fa-lg"></i>
                <h4>Email address</h4>
                <p>{{email}}</p>
            </div>
            <div class="info-com phone">
                <i class="fas fa-phone fa-lg"></i>
                <h4>Phone</h4>
                <p>01703577953</p>
                <p>01987886450</p>
            </div>
            <div class="info-com password">
                <i class="fas fa-unlock-alt fa-lg"></i>
                <h4>Password</h4>
                <p>●●●●●●</p>
            </div>
        </div>
        <hr class="hr">
        <div class="fav-his-info">
            <p class="pi-p" style="float:left">Favorite categories</p>
            <button @click="updateCat">EDIT</button>
            <div style="grid-column:1/3">
                <p class="p" 
                    v-for="(cat, index) in favCat" 
                    v-bind:key="cat" 
                    :class="['color'+index]">{{cat}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import firebase from 'firebase';
    import db from './firebaseInit'
    let auth = firebase.auth()

    import { bus } from '../main';

    export default {
        name: 'profile',
        props: ['pro_data'],
        components:{
        },
        data() {
            return {
                fullName: '',
                email: '',
                userName: '',
                favCat:[],
                coverSource: '',
                profileThumbnail: '',

                uid: auth.currentUser.uid,
                isSpinning:false
            }
        },
        created() {

            db.collection('Users').where('_id', '==', this.uid ).get()
                .then((result) => {
                    result.forEach( document => {
                        this.fullName = document.data().firstName+ ' ' +document.data().lastName ;
                        this.userName = document.data().userName;
                        this.email = document.data().email;
                        this.favCat = document.data().favCategories;
                        
                        
                    })
                }).catch((err) => {
                    
                });

            let coverRef = firebase.storage().ref(`Users/${this.uid}/CoverPhoto`);
            coverRef.getDownloadURL().then(
                (url) => {
                    
                    this.coverSource = url
                    
                }).catch((err) => {
                console.log(err);
            });

            let profileRef = firebase.storage().ref(`Users/${this.uid}/ProfilePhoto`);
            profileRef.getDownloadURL().then(
                (url) => {
                    
                    this.profileThumbnail = url
                }).catch((err) => {
                console.log(err);
            });
            bus.$on('Cat-Updated', value => {
                value.sort();
                this.favCat = value ;
            })
        },
        methods: {
            uploadCover(event) {
                this.isSpinning = true;
                let file = event.target.files[0];
                console.log(file);
                console.log(this.uid);

                let storageRef = firebase.storage().ref(`Users/${this.uid}/CoverPhoto`)
                let task = storageRef.put(file);

                
                task.on('state_changed',
                    (snapshot) => {
                        console.log(snapshot);
                    },
                    (err) => {
                        console.log(err);
                    },
                    () => {
                        console.log('upload Complete');
                        storageRef.getDownloadURL().then(
                            (url) => {
                                console.log(url);
                                this.coverSource = url
                                console.log(this.coverSource);
                                this.isSpinning = false;
                            }).catch((err) => {
                            console.log(err);
                        });
                        
                    }
                )
            },
            updateProfileImage(){
                let file = event.target.files[0];
                console.log(file);
                console.log(this.uid);

                let storageRef = firebase.storage().ref(`Users/${this.uid}/ProfilePhoto`)
                let task = storageRef.put(file);

                
                task.on('state_changed',
                    (snapshot) => {
                        console.log(snapshot);
                    },
                    (err) => {
                        console.log(err);
                    },
                    () => {
                        console.log('upload Complete');
                        storageRef.getDownloadURL().then(
                            (url) => {
                                console.log(url);
                                this.profileThumbnail = url
                            }).catch((err) => {
                            console.log(err);
                        });
                    }
                )
            },
            updateCat(){
                bus.$emit('updateCat', this.favCat )
            }
        }
    }
</script>

<style scoped>
/* @import url('../assets/CSS/spiner.css'); */
    .profile {
        position: relative;
    }

    .cover-area {
        position: relative;
    }

    .cover-area img {
        width: 100%;
        height: 10rem;
        background-size: cover;
        background-position: top;
        border-top-right-radius: 0.4rem;
        border-top-left-radius: 0.4rem;
        object-fit: cover;
        object-position: top;
    }

    .cover-area button {
        position: absolute;
        top: 1rem;
        left: 1rem;
        border: 1.5px solid #00968757;
        background-color: rgba(0, 0, 0, 0.20);
        border-radius: 0.2rem;
        color: white;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        cursor: pointer;
    }

    .cover-area input {
        position: absolute;
        top: 1rem;
        left: 1rem;
        opacity: 0;
        width: 4rem;
        cursor: pointer;
    }

    .pro-pic {
        height: 6rem;
        width: 6rem;
        border-radius: 5rem;
        padding: 0.2rem;
        position: absolute;
        top: 8rem;
        left: 1rem;
    }
    .pro-pic img {
        height: 6rem;
        width: 6rem;
        border-radius: 4rem;
        border: 3px solid white;
        cursor: pointer;
        object-fit: cover;
        object-position: top;
        box-shadow: 0 2px 6px 0 #b3b4b6;
    }
    .pro-pic input{
        height: 6rem;
        width: 6rem;
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    .top-info {
        margin-left: 8.5rem;
        margin-top: 0.5rem;
    }

    .hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #dadce0;
        margin: 1.5em 0;
        padding: 0;
    }

    .basic-info {
        padding-left: 2rem;
    }

    .pi-p {
        color: #009688;
        margin-bottom: 1rem;
    }

    .info-com {
        display: grid;
        grid-template-columns: 2rem auto;
        margin-bottom: 1rem;
    }

    .info-com i {
        color: #424242;
        grid-row: 1/3;
        padding-top: 0.65rem;
    }

    .info-com h4,
    .info-com p {
        color: #424242;
        line-height: 1.4;
    }

    .info-com p {
        grid-column: 2;
    }
    .fav-his-info{
        padding-left: 2rem;
        padding-bottom: 2rem;
        padding-right: 1rem;
        overflow: hidden;

        display: grid;
        grid-template-columns: auto 4rem;
    }
    .fav-his-info button{
        float: right;
        height: 1.5rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    .fav-his-info button:hover{
        color: #00acc1;
    }
    .fav-his-info .p{
        padding: 0.2rem 0.7rem;
        border-radius: 2rem;
        margin: 0.2rem;
        min-width:4rem;
        float: left;
        color: #424242;
    }
    .color0{
        /* red */
        border: 1px solid #ffcdd2;
        background-color: #ffebee;
    }
    .color1{
        /* teal */
        border: 1px solid #b2dfdb;
        background-color: #e0f2f1;
    }
    .color2{
        /* orange */
        border: 1px solid #ffe0b2;
        background-color: #fff3e0;
    }
    .color3{
        /* deep purple */
        border: 1px solid #d1c4e9;
        background-color: #ede7f6;
    }
    .color4{
        /* cyan */
        border: 1px solid #b2ebf2;
        background-color: #e0f7fa;
    }
    .color5{
        /* pink */
        border: 1px solid #f8bbd0;
        background-color: #fce4ec;
    }
    .color6{
        /* indigo */
        border: 1px solid #c5cae9;
        background-color: #e8eaf6;
    }
    .color7{
        /* amber */
        border: 1px solid #ffecb3;
        background-color: #fff8e1;
    }
    .color8{
        /* brown */
        border: 1px solid #d7ccc8;
        background-color: #d7ccc8;
    }
    .color9{
        /* blue grey */
        border: 1px solid #cfd8dc;
        background-color: #eceff1;
    }
    .color10{
        /* blue grey */
        border: 1px solid #cfd8dc;
        background-color: #eceff1;
    }
    .color11{
        /* deep orange */
        border: 1px solid #ffccbc;
        background-color: #fbe9e7;
    }
    .color12{
        /* brown */
        border: 1px solid #d7ccc8;
        background-color: #d7ccc8;
    }
    .color13{
        /* green */
        border: 1px solid #c8e6c9;
        background-color: #e8f5e9;
    }
    .color14{
        /* purple */
        border: 1px solid #e1bee7;
        background-color: #f3e5f5;
    }
    .color15{
        /* orange*/
        border: 1px solid #ffe0b2;
        background-color: #fff3e0;
    }
    .color16{
        /* light blue */
        border: 1px solid #b3e5fc;
        background-color: #e1f5fe;
    }
    .color17{
        /* indigo */
        border: 1px solid #c5cae9;
        background-color: #e8eaf6;
    }



    /* -------SPINNER------- */
    .spinner{
        position: absolute;
        top: 50%;
        left: 50% ;
        transform: translate(-50%,-50%);
    }

    .loading .spinner * {
        box-sizing: border-box;
    }
    .loading .spinner {
        display: inline-block;
        animation-name: anim-spinner;
        animation-duration: 0.7s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    .loading .spinner .circle {
        width: 2em;
        height: 1em;
        overflow: hidden;
    }
    .loading .spinner .circle-inner {
        transform: rotate(45deg);
        border-radius: 50%;
        border: 0.25em solid #00acc1;
        border-right: 0.25em solid transparent;
        border-bottom: 0.25em solid transparent;
        width: 100%;
        height: 200%;
        animation-name: anim-circle-1;
        animation-duration: 0.7s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: cubic-bezier(0.25, 0.1, 0.5, 1);
    }
    .loading .spinner .circle-2 {
        transform: rotate(180deg);
    }
    .loading .spinner .circle-2 .circle-inner {
        animation-name: anim-circle-2;
    }
    @keyframes anim-circle-1 {
        from {
            transform: rotate(60deg);
        }
        to {
            transform: rotate(205deg);
        }
    }
    @keyframes anim-circle-2 {
        from {
            transform: rotate(30deg);
        }
        to {
            transform: rotate(-115deg);
        }
    }
    @keyframes anim-spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>