<template>
<BaseLayout>
    <template v-slot:title>
        Báo cáo thống kê
    </template>
    <template v-slot:main>

            <!-- <el-timeline style="width:90%;margin:0 auto;margin-top: 40px;">
                <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>SYHA committed 2018/4/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>SYHA committed 2018/4/3 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>SYHA committed 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item>
            </el-timeline> -->
        <draggable class="list-group-box" :list="list" group="people" @change="log" >
            <div v-for="(valueParent,indexParent) in list" :key="indexParent" :id="valueParent.id">
                <div>
                    {{valueParent.title}}
                </div>
                <draggable class="list-group" :list="valueParent.cards" group="people">
                    <div class="list-group-item" 
                        v-for="(element) in valueParent.cards"
                        :key="element.id"

                    >
                    {{ element.title }}
                    </div>
                </draggable>
            </div>
        </draggable>
    </template>
</BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import draggable from "vuedraggable";
export default {
components: 
{
 BaseLayout,
 draggable
},  
data(){
    return{
       list: [
        {
          "id": 1,
          "title": "group 1",
          "user_id": 110,
          "index": 1,
          "created_at": "2022-08-03T11:14:27.000000Z",
          "updated_at": "2022-08-03T11:14:27.000000Z",
          "cards": [
            {
              "id": 822,
              "title": "task 1",
              "description": null,
              "status": null,
              "directory_id": 649,
              "index": 0,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T11:14:41.000000Z",
              "updated_at": "2022-08-03T11:14:43.000000Z",
              "labels": []
            },
            {
              "id": 823,
              "title": "task 2",
              "description": null,
              "status": null,
              "directory_id": 649,
              "index": 1,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:35.000000Z",
              "updated_at": "2022-08-03T12:22:35.000000Z",
              "labels": []
            },
            {
              "id": 824,
              "title": "task 3",
              "description": null,
              "status": null,
              "directory_id": 649,
              "index": 2,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:37.000000Z",
              "updated_at": "2022-08-03T12:22:37.000000Z",
              "labels": []
            },
            {
              "id": 825,
              "title": "task 4",
              "description": null,
              "status": null,
              "directory_id": 649,
              "index": 3,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:39.000000Z",
              "updated_at": "2022-08-03T12:22:39.000000Z",
              "labels": []
            }
          ]
        },
        {
          "id": 2,
          "title": "group 2",
          "user_id": 110,
          "index": 1,
          "created_at": "2022-08-03T11:14:29.000000Z",
          "updated_at": "2022-08-03T11:14:29.000000Z",
          "cards": [
            {
              "id": 821,
              "title": "task 5",
              "description": null,
              "status": null,
              "directory_id": 650,
              "index": 0,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T11:14:39.000000Z",
              "updated_at": "2022-08-03T11:14:43.000000Z",
              "labels": []
            },
            {
              "id": 826,
              "title": "task 6",
              "description": null,
              "status": null,
              "directory_id": 650,
              "index": 1,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:43.000000Z",
              "updated_at": "2022-08-03T12:22:43.000000Z",
              "labels": []
            },
            {
              "id": 827,
              "title": "task 7",
              "description": null,
              "status": null,
              "directory_id": 650,
              "index": 2,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:45.000000Z",
              "updated_at": "2022-08-03T12:22:45.000000Z",
              "labels": []
            },
            {
              "id": 828,
              "title": "task 8",
              "description": null,
              "status": null,
              "directory_id": 650,
              "index": 3,
              "deadline": null,
              "user_id": 110,
              "created_at": "2022-08-03T12:22:47.000000Z",
              "updated_at": "2022-08-03T12:22:47.000000Z",
              "labels": []
            }
          ]
        }
      ], 
    }
},
methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  }

}
</script>

<style lang="scss" scoped>
.list-group-box{
    width: 500px;
    height: 500px;
    margin: 5% auto;
    display: flex;
    border: 1px solid black;
}
.list-group{
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid black;
}
</style>