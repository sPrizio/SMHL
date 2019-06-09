<template>
    <div id="app">
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="home">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="SMHL Website Brand" width="112" height="28" />
                    </router-link>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarData" v-on:click="toggleNav" v-bind:class="toggleNavView">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarData" class="navbar-menu noselect" v-bind:class="toggleNavView">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <small>Version 0.1</small>
                        </div>
                    </div>
                    <div class="navbar-end">

                        <router-link to="scores" class="navbar-item">
                            Scores
                        </router-link>

                        <router-link to="stats" class="navbar-item">
                            Stats
                        </router-link>

                        <router-link to="standings" class="navbar-item">
                            Standings
                        </router-link>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Players
                            </a>

                            <div class="navbar-dropdown">
                                <router-link to="skaters" class="navbar-item">
                                    Skaters
                                </router-link>
                                <router-link to="goalies" class="navbar-item">
                                    Goalies
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view/>
        <footer class="footer smhl-footer">
            <div class="content has-text-centered">
                <p>
                    <strong>SMHL &copy;</strong> 2019 All rights reserved
                </p>
                <p>
                    Powered by HDM
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                isMobileNav: false
            }
        },
        computed: {
            toggleNavView: function () {
                return this.isMobileNav ? 'is-active' : '';
            },
        },
        methods: {
            toggleNav: function () {
                this.isMobileNav ? this.isMobileNav = false : this.isMobileNav = true;
            },

        }
    }
</script>

<style lang="scss">

    .participant-link {
        text-decoration: none;
        color: rgb(54, 54, 54);

        &:hover {
            color: dodgerblue;
            cursor: pointer;
        }
    }

    .hr {
        border: 1px solid rgba(215, 215, 215, 0.5);
    }

    .view {
        min-height: 75vh;
    }

    .smhl-footer {
        background-color: white !important;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
    }

    #nav {
        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .smhl-table-centering {
        text-align: center !important;
    }

    @media screen and (max-width: 992px) {
        .smhl-table-centering {
            text-align: left !important;
        }
    }

    //  TABLE CSS

    /*//////////////////////////////////////////////////////////////////
    [ FONT ]*/

    @font-face {
        font-family: OpenSans-Regular;
        src: url('assets/fonts/OpenSans/OpenSans-Regular.ttf');
    }

    @font-face {
        font-family: OpenSans-Bold;
        src: url('assets/fonts/OpenSans/OpenSans-Bold.ttf');
    }

    /* ------------------------------------ */
    a {
        margin: 0;
        transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
    }

    a:focus {
        outline: none !important;
    }

    /*//////////////////////////////////////////////////////////////////
    [ Table ]*/

    th, td {
        vertical-align: middle !important;
    }

    table * {
        position: relative;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
        /* Non-prefixed version, currently
                                         supported by Chrome and Opera */
    }

    .container-smhl-table {
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .wrap-smhl-table {
        width: 100%;
    }

    .smhl-table table {
        border-spacing: 1px;
        border-collapse: collapse;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    .smhl-table table thead tr {
        height: 60px;
        background: #36304a;

        th {
            &:hover {
                cursor: pointer;
            }
        }
    }

    .smhl-table table tbody tr {
        height: 50px;
    }

    .smhl-table table tbody tr:last-child {
        border: 0;
    }

    .smhl-table-head th {
        font-family: OpenSans-Regular, sans-serif;
        font-size: 18px;
        color: #fff;
        line-height: 1.2;
        font-weight: unset;
    }

    .smhl-table tbody tr:nth-child(even) {
        background-color: #f5f5f5;
    }

    .smhl-table tbody tr {
        font-family: OpenSans-Regular, sans-serif;
        font-size: 15px;
        color: #808080;
        line-height: 1.2;
        font-weight: unset;
    }

    .smhl-table tbody tr:hover {
        color: #555555;
        background-color: #f5f5f5;
        cursor: pointer;
    }

    .column1 {
        width: 250px;
        padding-left: 40px;
    }

    .column2 {
        width: 80px;
    }

    .column3 {
        width: 80px;
    }

    .column4 {
        width: 80px;
    }

    .column5 {
        width: 80px;
    }

    .column6 {
        width: 80px;
    }

    .column7 {
        width: 80px;
    }

    .column8 {
        width: 80px;
    }

    .column9 {
        width: 80px;
        padding-right: 62px;
    }

    @media screen and (max-width: 992px) {
        .smhl-table table {
            display: block;
        }
        .smhl-table table > *, .smhl-table table tr, .smhl-table table td, .smhl-table table th {
            display: block;
        }
        .smhl-table table thead {
            display: none;
        }
        .smhl-table table tbody tr {
            height: auto;
            padding: 37px 0;
        }
        .smhl-table table tbody tr td {
            padding-left: 40% !important;
            margin-bottom: 24px;
        }
        .smhl-table table tbody tr td:last-child {
            margin-bottom: 0;
        }
        .smhl-table table tbody tr td:before {
            color: #999999;
            line-height: 1.2;
            position: absolute;
            width: 40%;
            left: 30px;
            top: 0;
            text-align: left;
            font-family: OpenSans-Bold, sans-serif;
        }
        .smhl-table table tbody tr td:nth-child(1):before {
            content: "Name";
        }
        .smhl-table table tbody tr td:nth-child(2):before {
            content: "Pos";
        }
        .smhl-table table tbody tr td:nth-child(3):before {
            content: "GP";
        }
        .smhl-table table tbody tr td:nth-child(4):before {
            content: "Goals";
        }
        .smhl-table table tbody tr td:nth-child(5):before {
            content: "Assists";
        }
        .smhl-table table tbody tr td:nth-child(6):before {
            content: "Points";
        }
        .smhl-table table tbody tr td:nth-child(7):before {
            content: "PPG";
        }
        .smhl-table table tbody tr td:nth-child(8):before {
            content: "Shots";
        }
        .smhl-table table tbody tr td:nth-child(9):before {
            content: "BS";
        }

        .column1,
        .column2,
        .column3,
        .column4,
        .column5,
        .column6,
        .column7,
        .column8,
        .column9 {
            width: 100%;
            text-align: left;
        }
    }

    @media (max-width: 576px) {
        .container-smhl-table {
            padding-left: 15px;
            padding-right: 15px;
        }
    }

</style>
