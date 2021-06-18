<template>
    <div class="my-button"
         style="border: 2px solid #1989fa;border-radius: 5px;padding: 10px 0;    box-shadow: 3px 3px 3px grey ;
         width:31%;float: left;margin-bottom: 10px;margin-top:10px;color:#005dc6;text-align: center;">
        <van-icon :name="myicon"  color="#005dc6" style="position: relative;top: 2px;"/>
        {{this.mytext}}
   </div>

</template>

<script>

    export default {
        name: "my-button",
        props:{
            mytext:{
                type:[String]
            },
            myicon:{
                type:[String]
            }
        },
        methods:{

        }
    }
</script>
