<template>
    <div class="row">
        <div class="col"></div>
        <div class="col">
            <div class="form-group">
                <InputText v-model="loginData.value" v-bind:type="loginData.type" :placeholder="loginData.placeholder"/>
                <InputPassword v-model="passwordData.value" v-bind:type="passwordData.type" :placeholder="passwordData.placeholder"/>
                <button class="btn btn-primary button-submit" v-on:click="submit()">Login !</button>
            </div>
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
    import InputPassword from './inputs/InputPassword.vue';
    import InputText from './inputs/InputText.vue';
    import Axios from 'axios';

    export default {
        name: "LoginForm",
        components: {
            InputText,
            InputPassword
        },
        data() {
            return {
                loginData: {
                    value: '',
                    type: 'email',
                    placeholder: 'Adresse email',
                },
                passwordData: {
                    value: '',
                    type: 'password',
                    placeholder: 'Mot de passe',
                },
            }
        },
        methods: {
            submit() {
                console.log("SUBMIT");
                console.log(this.loginData.value);
                console.log(this.passwordData.value);
                // TODO URL back en fichier de conf
                Axios.post("http://localhost:3000/login", {
                    username: this.loginData.value,
                    password: this.passwordData.value
                }, {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    withCredentials: false
                }).then(result => console.log(result))
                    .catch(err => console.log(err));
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button-submit {
        width: 100%;
        margin-top: 10px;
    }
</style>
