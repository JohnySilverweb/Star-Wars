<template>
    <div id ='main_container'>
        <header>
                <a href="#">Upcoming</a>
                <a href="#">Legacy</a>
                <img src="../public/img/logo.png" alt="star wars logo">
                <a href="#">Merch</a>
                <a href="#">About</a>
        </header>
        <div class="content">
            <div class="item-1">
                <div class="img-wrapper">
                    <img src="../public/img/yoda.jpg" alt="yoda">
                    <div class="data">
                        <div class="text">
                            <p>Name:<span></span></p>
                            <p>Heigth:<span></span></p>
                            <p>Mass:<span></span></p>
                            <p>Hair color:<span></span></p>
                            <p>Skin color:<span></span></p>
                            <p>Eye color:<span></span></p>
                            <p>Birth year:<span></span></p>
                            <p>Gender:<span></span></p>
                        </div>
                        <button>Edit</button>
                    </div>
                </div>
            </div>
            <div class="item-2">
                <img src="../public/img/darth_vader.jpg" alt="darth vader">
                <div class="data">
                    <div class="text">
                        <p>Name:<span></span></p>
                        <p>Heigth:<span></span></p>
                        <p>Mass:<span></span></p>
                        <p>Hair color:<span></span></p>
                        <p>Skin color:<span></span></p>
                        <p>Eye color:<span></span></p>
                        <p>Birth year:<span></span></p>
                        <p>Gender:<span></span></p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
            <div class="item-3">
                <img src="../public/img/obi_wan.jpg" alt="obi wan">
                <div class="data">
                    <div class="text">
                        <p>Name:<span></span></p>
                        <p>Heigth:<span></span></p>
                        <p>Mass:<span></span></p>
                        <p>Hair color:<span></span></p>
                        <p>Skin color:<span></span></p>
                        <p>Eye color:<span></span></p>
                        <p>Birth year:<span></span></p>
                        <p>Gender:<span></span></p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            likes: 0,
            dislikes: 0,
        }
    },
    methods: {
        addLike() {
            this.likes += 1;
        },
        addDislike() {
            this.dislikes += 1;
        }
    }
} 
</script>



<style>
@font-face {
    font-family: 'Droid Sans';
    src: url('../public/fonts/droid-sans/DroidSans-Bold.ttf');
}

body {
    background-color: black;
    font-family: 'Droid Sans';
}

header {
    margin: 0 26%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 77px;
    font-size: 20px;
    a {
        text-decoration: none;
        color: white;
    }
    img {
        width: 210px;
        height: 127px;
    }
}

.content {
    padding: 200px;
    gap: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-1,
    .item-2,
    .item-3 {
        width: 283px;
        height: 614px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        .data {
            width: 240px;
            height: 306px;
            color: white;
            gap: 38px;
            .text {
                margin: 0;
                gap: 8px;
                font-size: 18px;
            }
        }
    }
}
</style>