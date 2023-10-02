<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-7xl font-bold text-red-700">404 Not Found</h1>
    <p class="text-xl">The page you are looking for does not exist.</p>
    <RouterLink to="/" class="px-3 py-3 mt-3 bg-red-700 text-white font-bold mb-2 w-fit hover:scale-90 transition-all hover:ease-in-out hover:duration-300 rounded-xl text-sm">Back to Home</RouterLink>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
