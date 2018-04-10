<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <h1>Testing store</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap text-xs-center>
            <v-flex xs12>
                <v-btn color="success" @click="startLoading">Start loading</v-btn>
                <v-btn color="error" @click="stopLoading">Stop loading</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap v-if="isLoading" text-xs-center>
            <v-flex xs12>
                <v-progress-circular indeterminate :size="70" :width="7" color="blue"></v-progress-circular>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: 'asdasd'
            }
        },
        computed: {
            isLoading() {
                return this.$store.getters.isLoading;
            }
        },
        methods: {
            startLoading() {
                this.$store.dispatch('loadingStart');
            },
            stopLoading() {
                this.$store.dispatch('loadingStop');
            }
        }
    }
</script>