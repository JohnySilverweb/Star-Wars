<template>
  <form @submit.prevent>
    <input type="text" placeholder="Name" v-model="character.name" />
    <input type="text" placeholder="Height" v-model="character.height" />
    <button @click="save" type="submit">Save</button>
  </form>
  <button @click="goHome">Back</button>
  <p>Hello worrrrld</p>
</template>

<script>
import { characters } from "@/data/cardInfo.js";

export default {
  data() {
    return {
      characters,
      character: {
        name: "",
        height: "",
      },
      editIndex: null,
    };
  },

  methods: {
    goHome() {
      this.$router.push("/");
    },

    save() {
      const newCharacter = {
        name: this.character.name,
        height: this.character.height,
      };
      this.character.push(newCharacter);
    },
  },
};
</script>

<style scoped>
p {
  color: white;
}
</style>
