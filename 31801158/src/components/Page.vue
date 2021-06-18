<template>
    <transition name = "slide-fade">
        <div class="page"
             style="width:100%; ;float: left;text-align: left;">
            <p>{{this.content}}</p></div>
    </transition>


</template>

<script>
    export default {
        name: "page",
        props:{
            content:{
                type:[String]
            }
        }
    }
</script>
<style>
    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }

</style>
