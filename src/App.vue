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
            <div class="item item-1">
                <div class="data">
                    <div class="text">
                        <p>Name: <span>Yoda</span></p>
                        <p>Height: <span>66 cm</span></p>
                        <p>Mass: <span>13 kg</span></p>
                        <p>Hair color: <span>White</span></p>
                        <p>Skin color: <span>Green</span></p>
                        <p>Eye color: <span>Green-gold</span></p>
                        <p>Birth year: <span>896 BBY</span></p>
                        <p>Gender: <span>Male</span></p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
            <div class="item item-2">
                <div class="data">
                    <div class="text">
                        <p>Name: <span>Darth Vader</span></p>
                        <p>Height: <span>203 cm</span></p>
                        <p>Mass: <span>120 kg (with armor)</span></p>
                        <p>Hair color: <span>Dark</span></p>
                        <p>Skin color: <span>Pale</span></p>
                        <p>Eye color: <span>Yellow</span></p>
                        <p>Birth year: <span>41 BBY</span></p>
                        <p>Gender: <span>Male</span></p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
            <div class="item item-3">
                <div class="data">
                    <div class="text">
                        <p>Name: <span>Obi-wan Kenobi</span></p>
                        <p>Height: <span>182 cm</span></p>
                        <p>Mass: <span>81 kg</span></p>
                        <p>Hair color: <span>Auburn</span></p>
                        <p>Skin color: <span>Light</span></p>
                        <p>Eye color: <span>Gray-blue</span></p>
                        <p>Birth year: <span>57 BBY</span></p>
                        <p>Gender: <span>Male</span></p>
                    </div>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

</script>



<style>
@font-face {
    font-family: 'Droid Sans Bold';
    src: url('../public/fonts/droid-sans/DroidSans-Bold.ttf');
}

@font-face {
    font-family: 'Droid Sans';
    src: url('../public/fonts/droid-sans/DroidSans.ttf');
}

body {
    background-color: black;
    font-family: Droid Sans Bold;
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
    .item {
        width: 283px;
        height: 614px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-shadow: 0px 0px 250px 0px #E3D61D66;
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

            button {
                width: 146px;
                height: 44px;
                border-radius: 7px;
                padding: 8px 50px;
                border: none;
                background: #E3D61D;
                box-shadow: 0px 0px 30px 0px #E3D61D4D;
                align-self: center;
                cursor: pointer;
                font-size: 24px;
                font-weight: 700;
            }
        }
    }
    .item-1 {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.41%, rgba(0, 0, 0, 0.8) 62.6%),
        url('../public/img/yoda.jpg') center / cover no-repeat;
    }

    .item-2 {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.41%, rgba(0, 0, 0, 0.8) 62.6%),
        url('../public/img/darth_vader.jpg') center / cover no-repeat;
    }

    .item-3 {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 29.41%, rgba(0, 0, 0, 0.8) 62.6%),
        url('../public/img/obi_wan.jpg') center / cover no-repeat;
    }
}
</style>