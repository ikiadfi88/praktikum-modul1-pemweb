<script>
import { todoStore } from "../store/store.js";
export default {
  data() {
    return {
      todoStore,
    };
  },
  created() {
    const storedStatus = JSON.parse(localStorage.getItem("todoStatus"));
    if (storedStatus) {
      this.todoStore.todos.forEach((todo) => {
        if (todo.id in storedStatus) {
          todo.status = storedStatus[todo.id];
        }
      });
    }
  },
  methods: {
    updateStatus(todo) {
      const storedStatus = JSON.parse(localStorage.getItem("todoStatus")) || {};
      storedStatus[todo.id] = todo.status;
      localStorage.setItem("todoStatus", JSON.stringify(storedStatus));
    },
    todoClasses(todo) {
      const classes = {
        'p-3': true,
        'text-sm': true,
        'text-gray-700': true,
        'font-normal': true,
        'strikethrough': todo.status === '3',
        'highlight': todo.Priority === 'High'
      };
      return classes;
    },
  },
};
</script>

<template>
  <table class="rounded-lg bg-white overflow-hidden">
    <thead class="bg-sky-800">
      <tr>
        <th class="p-1 text-sm font-bold tracking-wide text-white">No.</th>
        <th class="p-3 text-sm font-bold tracking-wide text-white">Tasks</th>
        <th class="p-1 text-sm font-bold tracking-wide text-white">Deadline</th>
        <th class="p-1 text-sm font-bold tracking-wide text-white">Priority</th>
        <th class="p-1 text-sm font-bold tracking-wide text-white">Status</th>
        <th class="p-1 text-sm font-bold tracking-wide text-white">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b" v-for="(todo, index) in todoStore.todos" :key="todo.id">
    <th class="p-3 text-sm text-gray-700 font-normal" :class="todoClasses(todo)">
      {{ index + 1 }}
    </th>
    <th class="p-3 text-sm text-gray-700 font-normal" :class="todoClasses(todo)">
      {{ todo.name }}
    </th>
    <th class="p-3 text-sm text-gray-700 font-normal" :class="todoClasses(todo)">
      {{ todo.Deadline }}
    </th>
    <th class="p-3 text-sm text-gray-700 font-normal" :class="todoClasses(todo)">
      {{ todo.Priority }}
    </th>
        <th class="p-3 text-sm text-gray-700 font-normal">
          <select
            v-model="todo.status"
            @change="updateStatus(todo)"
            class="rounded-full bg-white focus:outline-none px-2"
            :class="{ 'nothing-selected': todo.status === '1', 'progress-selected': todo.status === '2', 'finished-selected': todo.status === '3' }"
          >
            <option value="1" class="text-center">Nothing</option>
            <option value="2" class="text-center">On Progress</option>
            <option value="3" class="text-center">Finished</option>
          </select>
        </th>
        <th>
          <div class="flex justify-center gap-4 items-center h-full w-full">
            <router-link :to="{ name: 'update', params: { id: todo.id } }">
              <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512" class="cursor-pointer">
                <path
                  d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                />
              </svg>
            </router-link>
            <svg @click="todoStore.deleteTodo(todo.id)" xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512" class="cursor-pointer">
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<style>
.strikethrough {
  text-decoration: line-through;
}
.highlight {
  color: red;
  font-weight: bold;
}

.nothing-selected {
  background-color: #fca5a5; /* Warna latar belakang untuk status 'Nothing' */
}
.progress-selected {
  background-color: #fde047; /* Warna latar belakang untuk status 'On Progress' */
}
.finished-selected {
  background-color: #86efac; /* Warna latar belakang untuk status 'Finished' */
}
</style>
