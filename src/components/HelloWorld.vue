<template>
    <div class="gridbox">
        <div v-for="post in posts" class="postgrid" v-bind:key="post.id">
            <h3>{{ post.title }}</h3>
            <p class="description">{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "HelloWorld",
    data() {
        return { posts: [] };
    },
    mounted() {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                this.posts = response.data;
                console.log(response.data);
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },

    props: {
        msg: String,
    },
};
</script>

<style scoped>
.gridbox {
    display: flex;
    flex-wrap: wrap;
}
.postgrid {
    display: flex;
    max-width: 250px;
    flex-direction: column;
    margin: 2rem;
    cursor: pointer;
    padding: 2rem;
    box-shadow: 0px 0px 3px 0px rgba(7, 28, 58, 0.932);
}

.description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
