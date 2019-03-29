<template>
    <div class="row" id="menu-top">
        <div class="col">
            <img src="" alt="SSTRN">
        </div>
        <div class="col">
            <p>Connecté en tant que : {{username}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        prop: {
            username: String
        },
        data: function () {
            return {
                username: this.username
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #menu-top {
        background: #145c90 top left no-repeat;
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>
