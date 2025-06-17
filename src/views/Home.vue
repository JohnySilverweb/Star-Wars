<template>
  <div class="content">
    <div
      class="item"
      v-for="character in characters"
      :style="getImage(character)"
      :key="character.id"
    >
      <div class="data">
        <div class="text">
          <p>
            Name: <span>{{ character.name }}</span>
          </p>
          <p>
            Height: <span>{{ character.height }}</span>
          </p>
          <p>
            Mass: <span>{{ character.mass }}</span>
          </p>
          <p>
            Hair color: <span>{{ character.hairColor }}</span>
          </p>
          <p>
            Skin color: <span>{{ character.skinColor }}</span>
          </p>
          <p>
            Eye color: <span>{{ character.eyeColor }}</span>
          </p>
          <p>
            Birth year: <span>{{ character.birthYear }}</span>
          </p>
          <p>
            Gender: <span>{{ character.gender }}</span>
          </p>
        </div>
        <button @click="goToEdit(character.id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { characters } from "@/data/cardInfo.js";

export default {
  data() {
    return {
      characters,
    };
  },

  methods: {
    goToEdit(id) {
      this.$router.push(`/edit/${id}`);
    },

    getImage(character) {
      return {
        background: `linear-gradient(180deg, rgba(0,0,0,0) 29.41%, 
        rgba(0,0,0,0.8) 62.6%), 
        url(${character.image})
        center / cover no-repeat`,
      };
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Droid Sans";
  src: url("@/assets/fonts/droid-sans/DroidSans.ttf");
}

.content {
  padding: 150px;
  gap: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    width: 283px;
    height: 614px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0px 0px 250px 0px #e3d61d66;
    .data {
      margin: 33px 20px;
      display: flex;
      flex-direction: column;
      color: white;
      gap: 38px;
      .text {
        font-size: 18px;
        p {
          font-family: Droid Sans;
          margin: 8px;
        }
        span {
          font-family: Droid Sans Bold;
        }
      }
    }
  }
}
</style>
