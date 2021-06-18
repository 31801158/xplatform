<template>
    <div class="rank">
        <van-nav-bar title="排行榜" color="#1989fa"
                     :fixed="true"/>
        <div style="width: 90%;margin: 50px auto;text-align: left;">
            <div style="border-radius: 10px;border: 2px solid #005dc6;padding: 10px 2px;margin-bottom: 10px;">
                <van-cell-group>
                    <van-cell title="总积分"  style="font-weight:bold;">{{total}}</van-cell>
                    <van-cell title="您的段位"  >
                        <van-rate v-model="star" disabled disabled-color="#6db8ff" />
                    </van-cell>
                </van-cell-group>

            </div>
            <van-tabs type="card" color="#1989fa">
                <van-tab title="总积分">
                    <div style="border-radius: 10px;border: 2px solid #005dc6;padding: 10px 2px;margin: 10px 0;display: flex;justify-content: space-between;">
                        <div v-for="rank in ranks" style="width: 29%;font-size: 14px;text-align: center;border-right: 1px dashed darkgrey">
                            <p>{{rank.num}}</p>
                            <p>{{rank.rankname}}</p>
                        </div>
                    </div>
                    <div style="margin: 10px 0 0 20px;">
                        <div v-for="(r,index) in rankList" style="clear: both;font-weight:bold;">
                            <p style="display:block;width: 20px;float:left;border: 2px #1989fa solid;color:#1989fa;border-radius:20px;text-align: center;height: 20px;">{{index+1}}</p>
                            <p style="display:block;width: 60%;float:left;margin-left: 10px;color:#1989fa;">{{r.user_name}}</p>
                            <p style="display:block;width: 20%;float:left;text-align: right;color: #005dc6;">{{r.time}}分</p>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="年度积分">年度积分</van-tab>
            </van-tabs>

        </div>

    </div>
</template>

<script>
    import {Toast} from "vant";
    import { Dialog } from 'vant';
    export default {
        name: "Rank",
        data() {
            return {
                star:3,
                myrank:1,
                total:'',
                ranks:[
                    {
                        rankname:'您在全国总排名',
                        num:199785
                    },
                    {
                        rankname:'您在组内的排名',
                        num:1
                    },
                    {
                        rankname:'近七日组内排名',
                        num:1
                    }
                ],
                rankList:[]
            };
        },
        created() {
            var _this=this;
            var compare = function (prop) {
                return function (obj1, obj2) {
                    var val1 = obj1[prop];
                    var val2 = obj2[prop];if (val1 < val2) {
                        return 1;
                    } else if (val1 > val2) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            }
            axios.get('http://192.168.43.23:9785/posts').then(function(resp){//返回数组
                _this.rankList=resp.data.sort(compare("time"));
                let i=0;
                for(i=0;i<_this.rankList.length;i++){
                    if(_this.rankList[i].user_name===localStorage.username){
                        break;
                    }
                }
                _this.myrank=i+1;
                _this.ranks[0].num=_this.myrank
                _this.total=_this.rankList[i].time+'分';

                console.log(_this.myrank)
            })

        },
        methods: {

      },
    }
</script>

<style scoped>
</style>
