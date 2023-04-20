const { createApp } = Vue;

createApp({

  data(){
    return{

      todoList: [],

      newTodoInfo: '',

      fullList: '',

    }
  },

  methods: {
    getList() {

      axios.get('./server.php').then(response => {
        
        this.todoList = response.data;

      });
    },

    newTodo(){
      
      let data = {
        newTodo: this.newTodoInfo
      };
      
      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

        this.getList();
        
      });

      this.newTodoInfo = '';
    },

    doneTask(index){

      let data = {
        activeIndex: index
      }

      axios.post('./server.php', data, {headers: {'Content-Type': 'multipart/form-data'}}).then(response => {

        this.getList();
        
      });
      
    },
  },

  mounted() {

    this.getList();

  },
}).mount('#app');