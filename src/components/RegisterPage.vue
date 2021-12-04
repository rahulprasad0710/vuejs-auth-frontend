/* eslint-disable prettier/prettier */
<template>
    <div class="RegisterPage">
        <h1 class="title">Sign Up Here</h1>
        <div class="loginWrapper">
            <div class="right">
                <input
                    type="text"
                    v-model="username"
                    placeholder="username"
                    required
                />
                <input
                    type="email"
                    v-model="email"
                    placeholder="email"
                    required
                />
                <input
                    type="password"
                    v-model="password"
                    placeholder="password"
                    required
                />
                <input
                    type="password"
                    v-model="passwordAgain"
                    placeholder="Confirm password"
                    required
                />
                <button @click="handleNormalRegister">Sign Up</button>
                <p>
                    Already have an account ?
                    <router-link class="register-Link" to="/login"
                        >Login
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            username: "",
            password: "",
            passwordAgain: "",
            isLogin: false,
            email: "",
        };
    },
    name: "RegisterPage",
    props: {
        msg: String,
    },

    methods: {
        async handleNormalRegister() {
            const userInfo = {
                username: this.username,
                email: this.email,
                password: this.password,
            };
            const registerUser = await axios.post("/auth/register", userInfo);
            console.log(registerUser);
        },
    },
};
</script>

<style scoped>
.RegisterPage {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 68px);
    align-items: center;
}
.register-Link {
    color: #33cc99;
    cursor: pointer;
    text-decoration: none;
    justify-self: end;
}
.title {
    color: #33cc99;
}
.loginIcon {
    height: 30px;
    width: 30px;
}
.loginButton {
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
    margin-bottom: 1rem;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    color: #083244;
}
.loginButton:hover {
    background-color: rgba(240, 240, 240, 0.692);
    border: 1px solid #81d8bb;
}
.loginButton h5 {
    font-size: 1rem;
    margin: 0;
    padding: 1rem 0.5rem;
}

.loginIcon {
    padding-right: 0.8rem;
}

.loginWrapper {
    padding: 2rem;
    width: 350px;
    height: 60%;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px rgba(67, 97, 143, 0.75);
    display: flex;
    align-items: center;
}

.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.centerLine {
    height: 100%;
    background: #1f729675;
    width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
}

.or {
    border: 2px solid lightgray;
    padding: 1rem;
    border-radius: 50%;
    background-color: #ffffff;
    color: #33cc99;
    font-size: 16px;
    font-weight: bold;
}

.right input {
    min-width: 90%;
    padding: 1em 1rem;
    line-height: 0.2rem;
    border: 1px solid rgb(151, 161, 156);
    margin-bottom: 1em;
    box-sizing: border-box;
}
.right input[type="text"]:focus {
    border: 1px solid rgb(151, 233, 192);
}

.right button {
    min-width: 90%;
    padding: 1em 1.2em;
    background-color: #33cc99;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #33cc99;
    box-shadow: 0px 0px 1px 0px rgba(33, 56, 47, 0.75);
    cursor: pointer;
}
</style>
