<template>
    <nav class="navbar">
        <a href="#"> Home </a>
        <a href="#"> About us </a>
        <a href="#"> Products </a>
        <a href="/blogs"> Blog </a>
        <a href="#"> Contact </a>
        <span/>
    </nav>
</template>

<style scoped>
.navbar {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
}

.navbar a {
    position: relative;
    display: inline-block;
    font-size: 1em;
    color: white;
    text-decoration: none;
    padding: 0 23px;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar span {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background: linear-gradient(45deg, #2e3192, #1bffff);
    transition: .5s ease;
}

.navbar a:nth-child(1):hover~span {
    left: 0;
}

.navbar a:nth-child(2):hover~span {
    left: 20%;
}

.navbar a:nth-child(3):hover~span {
    left: 40%;
}

.navbar a:nth-child(4):hover~span {
    left: 60%;
}

.navbar a:nth-child(5):hover~span {
    left: 80%;
}
</style>