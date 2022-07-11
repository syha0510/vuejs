<template>
    <div class="wrapper">
        <div class="container">
            <h2>Todo App</h2>
            <input type="text" name="" id="" class="input-task" v-model="task" @keyup.enter="addTask()" placeholder="Thêm công việc ">
            <TodoItemVue :tasks="ListTask"
                        @EventDeleteTask="EventDeleteTask"></TodoItemVue>
        </div>
    </div>
</template>

<script>
    import TodoItemVue from './TodoItem.vue'
    export default {
        components: {
            TodoItemVue,
        },
        data() {
            return {
                task:'',
                ListTask: [
                    {
                        name:'Code',
                        done:false,
                    },
                ],
            }
        },
        methods: {
            addTask() {
                this.ListTask.unshift({
                    name:this.task,
                    done:false,
                });
                this.task = '';
            },
            EventDeleteTask(data) {
                this.ListTask.splice(data.key,1);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        .container{
            width: 500px;
            height: 500px;
            background-color: #c7707f;
            border-radius: 10px;
            color:white;
            padding:0 2%;
            .input-task{
                width: 80%;
                padding: 2%;
                border-radius: 6px;
                border-color: white;
            }
        }
    }
    
</style> 