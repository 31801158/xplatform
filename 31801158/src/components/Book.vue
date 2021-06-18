<template>
    <div class="book"  style="width: 22%;float: left;margin-right: 5px;">
        <img :src="this.img" style="width: 75px;float: left;margin-bottom: 5px;">
        <div style="padding: 5px; text-align: left;">
            <p style="font-size: 12px;font-weight: bold;line-height: 15px;">{{this.bookName}}</p>
            <p style="font-size: 13px;height: 37px;line-height: 18px;
            display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                {{this.describe}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "book",
        props:{
            bookName:{
                type:[String]
            },
            img:{
                type:[String]
            },
            describe:{
                type:[String]
            }
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>
