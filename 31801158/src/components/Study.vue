<template>
    <div class="study"  style="border-bottom: 1px solid darkgrey;  width: 100%;float: left;margin: 5px 0 5px 0">
        <div style="width:52%;float: left; padding: 5px; text-align: left;line-height: 15px;">
            <p style="font-size: 16px;font-weight:bold;">{{this.title}}</p>

            <p style="font-size: 16px;display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;">{{this.describe}}</p>
            <p style="font-size: 13px;"><van-icon name="eye-o"/>  {{this.count}}人正在参与</p>

        </div>
        <img :src="this.img" style="width: 44%;float: right;margin-bottom: 5px;">


    </div>

</template>

<script>
    export default {
        name: "book",
        props:{
            title:{
                type:[String]
            },
            img:{
                type:[String]
            },
            describe:{
                type:[String]
            },
            count:{
                type:[Number]
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