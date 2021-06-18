<template>
    <div class="bigSort"  style="  width: 100%;float: left;margin: 5px 0 5px 0">

        <div  v-for="bs in bigSort">
            <p style="font-weight: bold" class="title">{{bs.big}}</p>
            <div style=" display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between">
                <small-sort v-for="s in bs.small" :smallSortName="s"></small-sort>
            </div>
        </div>
    </div>

</template>

<script>
    import SmallSort from "./SmallSort";
    export default {
        name: "bigSort",
        components: {SmallSort},
        props:{
            bigSort:{
                type:[Array]
            }
        }
    }
</script>
