<template>
    <div class="spinner-box">
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
</template>

<script>
    export default {
        name: 'spinner'
    }
</script>

<style scoped>
/* -------SPINNER------- */
    .spinner-box{
        width: 2.2rem;
        overflow: hidden;
        display: block;
        margin: 0 auto;
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