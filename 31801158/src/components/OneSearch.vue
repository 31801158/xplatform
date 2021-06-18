<template>
    <div class="smallSort"
         style="padding: 5px;
         width: 85px;float: left;margin-bottom: 10px;" @click="choose(searchName)">
        <img :src="this.img" style="height: 80px;width:80px;float: left;margin-bottom: 5px;">
    <span style=" position:relative;top:-6px;">{{this.searchName}}</span>
    </div>

</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: "oneSearch",
        props:{
            img:{
                type:[String]
            },
            searchName:{
                type:[String]

            }
        },
        methods:{
            choose:function(s){
                Toast(s);
                if(s==="拍照识图"){
                    this.$router.replace('/camera');
                }
            }
        }
    }
</script>
