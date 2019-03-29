<template>
    <div class="row" id="menu">
        <div class="col">
            <Header :username="username"/>
            <div class="row" id="menu-bot">
                <div class="col menu-card">
                    <router-link to="/hello-world">HellowWorld</router-link>
                </div>
                <div class="col menu-card">
                    <router-link to="/world-hello">WorldHello</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    export default {
        name: "MenuPage",
        data: function () {
            return {
                username: "toto"
            }
        },
        components: {
            Header
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #menu-bot {
        border-bottom: 1px solid #ddd;
    }

    .menu-card {
        color: #555;
        cursor: default;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
    }

    .menu-card > p {
        color: #337ab7;
        text-decoration: none;
        background-color: transparent;
    }
</style>
