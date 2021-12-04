<template>
    <div id="nav">
        <router-link to="/"><h2 class="navbar_brand">MEVN</h2></router-link>
        <div>
            <button class="login_button">
                <router-link to="/about">Login</router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        msg: String,
    },
};
</script>

<style scoped>
#nav {
    min-height: 60px;
    background: #2c3e50;
    color: #42b983;
    padding: 0rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar_brand {
    cursor: pointer;
}

.login_button {
    background-color: #13aa52;
    border: 1px solid #13aa52;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont,
        sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    outline: 0;
    padding: 10px 25px;
    text-align: center;
    transform: translateY(0);
    transition: transform 150ms, box-shadow 150ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.login_button:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
}

@media (min-width: 768px) {
    .login_button {
        padding: 10px 30px;
    }
}
a {
    color: #42b983;
}
</style>
