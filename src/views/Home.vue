<template>
  <div class="content" :class="{ blurred: dialog }">
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
        <v-btn @click="openEdit(character.id)">Edit</v-btn>
      </div>
    </div>
  </div>
  <!-- DIALOG PANEL -->
  <v-dialog v-model="dialog" max-width="1000">
    <v-card title="Edit character" class="card">
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="12" sm="12">
            <v-text-field
              label="Name"
              v-model="selectedCharacter.name"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-text-field
              label="Height"
              v-model="selectedCharacter.height"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-text-field
              label="Mass"
              v-model="selectedCharacter.mass"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <v-text-field
              label="Hair color"
              v-model="selectedCharacter.hairColor"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <v-text-field
              label="Skin color"
              v-model="selectedCharacter.skinColor"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" sm="4">
            <v-text-field
              label="Eye color"
              v-model="selectedCharacter.eyeColor"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-text-field
              label="Birth year"
              v-model="selectedCharacter.birthYear"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" sm="6">
            <v-autocomplete
              :items="['Male', 'Female']"
              label="Gender"
              auto-select-first
              v-model="selectedCharacter.gender"
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn @click="dialog = false">Close</v-btn>
        <v-btn variant="plain" @click="saveEdit">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { characters } from "@/data/cardInfo.js";
import { computed, ref } from "vue";

const dialog = ref(false);
const selectedCharacterId = ref(null);
const selectedCharacter = computed(() =>
  characters.find((character) => character.id === selectedCharacterId.value)
);

function getImage(character) {
  return {
    background: `linear-gradient(180deg, rgba(0,0,0,0) 29.41%,
        rgba(0,0,0,0.8) 62.6%),
        url(${character.image})
        center / cover no-repeat`,
  };
}

function openEdit(id) {
  selectedCharacterId.value = id;
  dialog.value = true;
}

function saveEdit() {
  const characterIndex = characters.findIndex(
    (character) => character.id === selectedCharacterId.value
  );
  if (characterIndex !== -1) {
    characters[characterIndex] = { ...selectedCharacter.value };
  }
  dialog.value = false;
}
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
      margin: 33px 15px;
      display: flex;
      flex-direction: column;
      color: white;
      gap: 30px;
      .text {
        font-size: 18px;
        p {
          font-family: Droid Sans;
          margin: 5px;
        }
        span {
          font-family: Droid Sans Bold;
        }
      }
    }
  }
}
</style>
