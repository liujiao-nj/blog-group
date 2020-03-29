<template>
    <div class="header-box">
        <header>
            <div class="header-wrapper">
                <div>logo</div>
                <div class="header-tabs">
                    <ul>
                        <router-link tag="li" to="/">home</router-link>
                        <router-link tag="li" to="/about">about</router-link>
                        <router-link tag="li" to="/">link</router-link>
                    </ul>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  name: 'BlogHeader'
}
</script>
<style lang="less" scoped>
.header-box {
    position: relative;
    height: 60px;
    background: @bgwhite;
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: @bgwhite;
        .header-wrapper {
            display: flex;
            align-items: center;
            width: 960px;
            height: 100%;
            margin: 0 auto;
            div:last-child {
                margin-left: auto;
            }
            div.header-tabs {
                height: 100%;
                line-height: 60px;
                ul {
                    display: flex;
                    margin: 0;
                    list-style-type: none;
                    li {
                        position: relative;
                        padding: 0 14px;
                        font-size: @header-font;
                        color: @header-color;
                        cursor: pointer;
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background: @hover;
                            transform: scaleX(0);
                            transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                        }
                        &:hover {
                            color: @hover;
                            transition: color .2s;
                            &::after {
                                transform: scaleX(1);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
