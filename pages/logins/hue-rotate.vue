<template>
    <div class="background">
        <div class="login-box">
            <form action="">
                <h2 class="title"> Login </h2>
                <div class="input-box">
                    <input type="email" required>
                    <label> Email </label>
                </div>
                <div class="input-box">
                    <input type="password" required>
                    <label> Password </label>
                </div>
                <button type="submit"> Login </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.background {
    background: url('https://cdn.wallpapersafari.com/92/70/pfS5Vg.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    animation: animated-bg 5s linear infinite;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

@keyframes animated-bg {
    100% {
        filter: hue-rotate(360deg);
    }
}

@media (max-width: 450px) {
    .login-box {
        width: 100%;
        height: 100vh;
        border: none;
        border-radius: none;
    }
}

.title {
    color: black;
    font-weight: bold;
}

.login-box {
    background: transparent;
    backdrop-filter: blur(15px);
    width: 450px;
    height: 350px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid 2px white;
}

.input-box {
    position: relative;
    width: 310px;
    margin: 30px 0;
    border-bottom: solid 2px black;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: black;
    pointer-events: none;
    transition: .5s;
}

.input-box input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: black;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}

button {
    width: 100%;
    height: 40px;
    background: white;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    font-size: 1em;
    color: black;
    font-weight: 500;
    border: solid 2px black;
}
</style>