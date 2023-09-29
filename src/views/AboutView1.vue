<template>
  <section class="team">
    <div class="container_team pb-20">
      <h1 class="heading text-yellow-500 text-6xl font-extrabold mt-28 pt-28">Meet Our Team</h1>
      <p class="caption text-white text-2xl pb-12">Halo, calon klien Ini Karya Kita! Senang bisa bertemu dengan kalian, salam kenal!</p>
      <div class="flex flex-wrap justify-center -m-4">
        <div class="card m-4 h-72 w-80 bg-white text-center rounded overflow-hidden transition-transform hover:scale-90">
          <div class="image mt-4 pt-8">
            <img :src="adfi" alt="Adfi" class="h-48 w-48 rounded-full border-2 border-blue-500 shadow-md object-cover mx-auto" />
          </div>
          <div class="info">
            <div v-for="(item, index) in asist" :key="index" ref="asist">
              <h3 class="text-blue-500 text-2xl font-bold mt-2">{{ item.name }}</h3>
              <span class="text-blue-500 text-xl">{{ item.nrp }}</span>
            </div>
            <div class="icons flex justify-center items-center mt-16">
              <a href="https://www.facebook.com/iki.adfi.7?mibextid=ZbWKwL" class="fa-facebook text-blue-700 hover:text-blue-900 mr-2" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" size="sm" /></a>
              <a href="https://instagram.com/ini.adfi" class="fa-instagram text-pink-600 hover:text-pink-800 mr-2" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" size="sm" /></a>
              <a href="https://www.linkedin.com/in/iki-adfi-nur-mohamad-485b06248" class="fa-linkedin text-blue-700 hover:text-blue-900" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" size="sm" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import adfi from "@/assets/images/adfi.jpg";
import caca from "@/assets/images/caca.jpg";
import hafiz from "@/assets/images/hafiz.jpg";

export default {
  // template refs
  mounted() {
    console.log(this.$refs.asist);
  },
  data() {
    return {
      asist: [
        {
          name: "Wisnuyasha Faizal",
          nrp: 5027211036,
        },
        {
          name: "Aloysius B. M.",
          nrp: 5027211008,
        },
        {
          name: "Midyanisa Yuniar",
          nrp: 5027211025,
        },
        {
          name: "Reynold Putra Merdeka",
          nrp: 5027211034,
        },
        {
          name: "Rifqi Akhmad Maulana",
          nrp: 5027211035,
        },
        {
          name: "Moh. Sulthan Arief Rahmatullah",
          nrp: 5027211045,
        },
      ],
    };
  },
};
</script>
