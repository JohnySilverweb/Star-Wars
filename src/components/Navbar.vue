<template>
  <header>
    <a href="#">Upcoming</a>
    <a href="#">Legacy</a>
    <img src="@/assets/img/logo.png" alt="star wars logo" />
    <a href="#">Merch</a>
    <a href="#">About</a>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@font-face {
  font-family: "Droid Sans Bold";
  src: url("@/assets/fonts/droid-sans/DroidSans-Bold.ttf");
}

header {
  margin: 0 26%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 77px;
  font-size: 20px;
}

header a {
  font-family: "Droid Sans Bold";
  text-decoration: none;
  color: white;
}

header img {
  width: 210px;
  height: 127px;
}
</style>
