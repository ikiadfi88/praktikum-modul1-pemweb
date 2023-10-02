import { reactive } from "vue";

// Fungsi untuk menyimpan data ke local storage
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Fungsi untuk mengambil data dari local storage
const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const todoStore = reactive({
  todos: getFromLocalStorage("todos") || [],

  createTodo(todo) {
    this.todos.push(todo);
    saveToLocalStorage("todos", this.todos);
  },

  deleteTodo(todoId) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
      saveToLocalStorage("todos", this.todos);
    }
  },

  updateTodo(updatedtodo) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === updatedtodo.id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1, updatedtodo);
    } else {
      // Jika pengguna tidak ditemukan, Anda dapat menambahkannya ke akhir array
      this.todos.push(updatedtodo);
    }
    saveToLocalStorage("todos", this.todos);
  },

  deleteAllTodos() {
    this.todos = []; // Menghapus semua elemen dalam array todos
    saveToLocalStorage("todos", this.todos); // Menyimpan perubahan ke local storage
  },
});
