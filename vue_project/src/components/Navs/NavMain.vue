<template>
    <nav class="nav nav__main">
        <ul class="nav__container border-1px">
            <router-link tag="li" :to="{name: 'home'}" class="nav__item nav__item01">
                <a class="nav__link">
                    <i class="nav__img"></i>
                    <em class="nav__text">首页</em>
                </a>
            </router-link>
            <router-link tag="li" :to="{name: 'product'}" class="nav__item  nav__item02">
                <a class="nav__link">
                    <i class="nav__img"></i>
                    <em class="nav__text">投资</em>
                </a>
            </router-link>
            <router-link tag="li" :to="{name: 'user'}" class="nav__item nav__item03">
                <a class="nav__link">
                    <i class="nav__img"></i>
                    <em class="nav__text">我的</em>
                </a>
            </router-link>
            <router-link tag="li" :to="{name: 'more'}" class="nav__item nav__item04">
                <a class="nav__link">
                    <i class="nav__img"></i>
                    <em class="nav__text">更多</em>
                </a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'nav-main'
    };
</script>

<style lang="scss">
    @import "../../assets/sass/index";

    .nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        &__container {
            display: flex;
            height: 1.28rem;
            background-color: #f9f9f9;
            @include border-1px(#d4d4d4, 'top');
        }
        &__item {
            flex: 1;
            text-align: center;

            &.nav__item01 {
                .nav__img {
                    background-image: url(./nav_item01.png);
                    background-size: 0.586rem 0.586rem;
                }
            }
            &.nav__item02 {
                .nav__img {
                    background-image: url(./nav_item02.png);
                    background-size: 0.586rem 0.586rem;
                }
            }
            &.nav__item03 {
                .nav__img {
                    background-image: url(./nav_item03.png);
                    background-size: 0.586rem 0.586rem;
                }
            }
            &.nav__item04 {
                .nav__img {
                    background-image: url(./nav_item04.png);
                    background-size: 0.586rem 0.586rem;
                }
            }
            &.is-active {
                &.nav__item01 {
                    .nav__img {
                        background-image: url(./nav_item01_active.png);
                        background-size: 0.586rem 0.586rem;
                    }
                }
                &.nav__item02 {
                    .nav__img {
                        background-image: url(./nav_item02_active.png);
                        background-size: 0.586rem 0.586rem;
                    }
                }
                &.nav__item03 {
                    .nav__img {
                        background-image: url(./nav_item03_active.png);
                        background-size: 0.586rem 0.586rem;
                    }
                }
                &.nav__item04 {
                    .nav__img {
                        background-image: url(./nav_item04_active.png);
                        background-size: 0.586rem 0.586rem;
                    }
                }
                .nav__text {
                    color: #f63;
                }
            }
        }
        &__link {
            display: block;
            height: 100%;
        }
        &__img {
            display: block;
            margin-top: 0.106rem;
            height: 0.586rem;
            background-position: center center;
            background-repeat: no-repeat;
        }
        &__text {
            display: block;
            line-height: 0.586rem;
            color: #555;
            @include font-dpr(12px);
        }
    }
</style>
