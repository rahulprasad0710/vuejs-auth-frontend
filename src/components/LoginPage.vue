/* eslint-disable prettier/prettier */
<template>
    <div class="RegisterPage">
        <h1 class="title">Choose your Login Method</h1>
        <div class="loginWrapper">
            <div class="left">
                <div @click="handleGoogleLogin" class="loginButton">
                    <img
                        src="../assets/google.svg"
                        alt="Google"
                        class="loginIcon"
                    />
                    <h5>Login with Google</h5>
                </div>

                <div @click="handleFBLogin" class="loginButton">
                    <img src=../assets/facebook.svg alt="Facebook"
                    class="loginIcon" />
                    <h5>Login with Facebook</h5>
                </div>
            </div>
            <div class="centerLine">
                <div class="line" />
                <div class="or">OR</div>
            </div>
            <div class="right">
                <input
                    type="text"
                    v-model="username"
                    placeholder="username"
                    required
                />
                <input
                    type="password"
                    v-model="password"
                    placeholder="password"
                    required
                />
                <button @click="handleNormalLogin">Login</button>
                <p>
                    New To website ?
                    <router-link class="register-Link" to="/signup"
                        >SignUp Here</router-link
                    >
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
            userInfo: null,
            username: "",
            password: "",
            isLogin: false,
        };
    },
    name: "LoginPage",
    props: {
        msg: String,
    },

    methods: {
        async handleGoogleLogin() {
            const googleUser = await this.$gAuth.signIn();
            console.log(googleUser);
            // const googleBUser = await axios.get("/auth/google");
            // console.log(googleBUser);
        },
        async handleFBLogin() {
            const fbUser = await axios.get("/auth/facebook");
            console.log(fbUser);
        },

        handleNormalLogin: function () {
            axios
                .post("/login")
                .then((response) => {
                    this.userInfo = response.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    this.errors.push(e);
                });
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
a {
    text-decoration: none;
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
    width: 60%;
    height: 70%;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px rgba(67, 97, 143, 0.75);
    display: flex;
    align-items: center;
}

.left,
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
    min-width: 80%;
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
    min-width: 80%;
    padding: 1em 1.2em;
    background-color: #33cc99;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #33cc99;
    box-shadow: 0px 0px 2px 0px rgba(67, 143, 114, 0.75);
    cursor: pointer;
}
</style>
