<template>
    <v-app>
        <v-navigation-drawer app>
            <v-list>
                <v-list-tile to="/" @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>Home</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/contacts" @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>Contacts</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app></v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {}
</script>