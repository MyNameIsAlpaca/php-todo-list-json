const { createApp } = Vue;

createApp({

  data(){
    return{

      todoList: [],

      newTodoInfo: '',

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
  },

  mounted() {

    this.getList();

  },
}).mount('#app');