<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <div>
                <router-link class="nav_btn login_btn" to="/login"
                    >Login</router-link
                >
                <router-link class="nav_btn login_btn" to="/signup"
                    >Sign Up</router-link
                >
            </div>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    min-height: 60px;
    background: #2c3e50;
    padding: 0rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar_brand {
    cursor: pointer;
}
.nav_btn {
    padding-left: 2rem;
    color: #ffffff;
    transition: all 0s ease-in-out;
}
.nav_btn:hover {
    color: #42b983;
}
#nav a {
    font-weight: bold;
    color: #f3f3f3;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #42b983;
    text-decoration: none;
}
</style>
