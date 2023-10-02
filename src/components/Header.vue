<script>
import { userStore } from "../store/store.js";
import Modal from "../components/Modal.vue";
import CreateUserForm from "../components/CreateUserForm.vue";

export default {
  components: {
    Modal,
    CreateUserForm,
  },
  data() {
    return {
      userStore,
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
    },
  },
};
</script>

<template>
  <span class="font-bold text-4xl text-sky-700">P08 Group To Do</span>
  <span class="font-base text-sm text-slate-400">{{ userStore.users.length }} To Do</span>
  <div class="w-full flex justify-end">
    <button @click="toggleModal" class="px-6 py-2 bg-sky-700 text-white font-bold mb-2 w-fit border-[1.5px] hover:scale-110 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">Add To Do</button>
    <Modal @close-modal="toggleModal" :isModal="isModal">
      <CreateUserForm @close-modal="toggleModal" />
    </Modal>
  </div>
</template>
