<template>
    <div class="smallSort"
         style="border: 1px solid darkgrey;border-radius: 10px;
         width:110px;height: 25px; ;float: left;margin-bottom: 10px;" @click="handleClick">
    {{this.smallSortName}}</div>

</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: "smallSort",
        props:{
            smallSortName:{
                type:[String]
            }
        },
        methods:{
            handleClick(){
                Toast(this.smallSortName);
            }
        }
    }
</script>
