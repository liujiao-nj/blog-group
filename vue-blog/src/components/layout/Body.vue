<template>
  <div class="container">
      <div class="left"><router-view/></div>
      <div class="right">
          <div class="author-info">
              <div class="guide">about me</div>
              <div class="author">
                  <img src="../../assets/9x16-dummy.png">
                  <div class="name">liujiao</div>
                  <div class="tag">
                      <span>前端奶爸</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BlogBody'
}
</script>

<style lang="less">
.container {
    position: relative;
    width: 960px;
    margin: 20px auto;
    .left {
        width: 700px;
        margin-right: 260px;
        border-radius: 2px;
        box-sizing: border-box;
    }
    .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 240px;
        border-radius: 2px;
        .author-info {
            width: 100%;
            border-radius: 2px;
            background: @bgwhite;
            .guide {
                padding: 13px;
                font-size: @annotation-little-font;
                .border-bottom(@border-color);
            }
            .author {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 13px;
                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 60px;
                    background: @author-avatar;
                }
                .name {
                    margin: 14px 0;
                }
                .tag {
                    font-size: @annotation-little-font;
                    color: @annotation-color;
                }
            }
        }
    }
}
</style>
