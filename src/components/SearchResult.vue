<template>
    <div id="SearchResult">
        <Spinner v-if=HaveResult />
        <div class="no-fo-di" v-if=nothingFound >
            <p>Result not found!!</p>
            <img @click="HideSearch" src="https://img.icons8.com/ios/50/000000/delete-sign-filled.png">
        </div>
        <div class="on-he" v-if=!nothingFound>
            <h3 class="se-re-h3" >Searched Result</h3>
        </div>
        <ul class="on-cat-ul">
            <li v-for="p in Post" v-bind:key="p._id">
                <div class="img"><img v-bind:src=p.src ></div>
                <div class="item">
                    <h4>{{p.Name}}({{p.ReleaseYear}})</h4>
                    <p><b>Release: </b>{{p.ReleaseDate}}({{p.Country}})</p>
                    <p><b>IMDB: </b>{{p.Rating}}</p>
                    <p><b>Type:</b> <span v-for="cat in p.Type" v-bind:key="cat"> {{cat}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {bus} from '../main'
import Spinner from './layouts/Spinner';
export default {
    name:'searchresult',
    data(){
        return{
            Post:[],
            HaveResult:true,
            nothingFound:false
        }
    },
    components:{
        Spinner
    },
    created(){
        //console.log('created: SearchResult');

        bus.$on('MovieFound', Post => {
            this.Post = Post;
            //console.log(this.Post);
            this.HaveResult = false
            this.nothingFound = false;
        })
        bus.$on('NotingFound', () => {
            this.HaveResult = false
            this.nothingFound = true
            this.Post = []
        })
    },
    methods:{
        HideSearch(){
            bus.$emit('HideSearch');
        }
    }
}
</script>

<style scoped>
    .on-he{
        margin-top: 0.5rem;
        margin-right: 1rem;
        background-color: #e0f2f1;
        border-left: 5px solid #26a69a;
        padding: 0.2rem 0 ; 
        padding-left: 0.8rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
    }
    .on-cat-ul li{
        list-style-type: none;
        border: 1.5px solid #dadce0;
        width: 14rem;
        min-height: 18rem;
        float: left;
        margin-right: 1rem;
        margin-bottom: 1rem;
        box-sizing: border-box;
        overflow: hidden;
        color: #313131;
        border-radius: 0.4rem;
    }

    .on-cat-ul li:hover{
        border: none;
        box-shadow: 1px 3px 6px 0 #a8a8a8;
    }

    .on-cat-ul li h4{
        font-weight: 600;
    }
    .on-cat-ul li p{
        font-size: 0.9em;
    }
    .img{
        height: 9rem;
        width: 14rem;
        background-color: #ebebeb;
        box-sizing: border-box;
        overflow: hidden;
    }
    .img img{
        height: 9rem;
        width: 14rem;
        object-fit: cover;
        object-position: top;
    }
    .item{
        padding: 1rem;
        box-sizing: border-box;
        line-height: 1.4;
    }
    .con-cat-title{
        color: #313131;
    }
    .con-cat-subTitle{
        margin-bottom: 0.5rem;
        font-size: 0.9em;
    }
    .se-re-h3{
        /* margin-bottom: 1rem; */
        color: #313131;
    }
    .no-fo-di{
        position: relative;
        width: 100%;
        padding: 1rem 2rem;
        margin-bottom: 1rem;
        background-color: #ffebee;
        border: 1.5px solid #e57373;
        border-radius: 4rem;
    }
    .no-fo-di img{
        height: 1.1rem;
        position: absolute;
        right: 1.7rem;
        top: 1rem;
        cursor: pointer;
    }
</style>
