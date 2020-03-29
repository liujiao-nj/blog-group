<template>
    <div class="list">
        <template v-for="item in getArticleList">
            <div class="hljs" ref="hlDiv" v-html="item.articleContent" :key="item.articleId"></div>
        </template>
    </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
// eslint-disable-next-line
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/monokai-sublime.css'
const renderer = new marked.Renderer()
marked.setOptions({
  renderer,
  highlight (code) {
    return hljs.highlightAuto(code).value
  },
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false
})
export default {
  name: 'ArticleList',
  data () {
    return {
      list: [
        {
          articleId: '1',
          articleContent: '```javascript\nfunction name (num) {\n\tconsole.log(num)\n}\n```\noj'
        },
        {
          articleId: '2',
          articleContent: '```javascript\nvar num = 1\n```'
        },
        {
          articleId: '3',
          articleContent: '123'
        }
      ]
    }
  },
  computed: {
    getArticleList () {
      return this.list.map((item) => {
        item.articleContent = marked(item.articleContent)
        return item
      })
    }
  }
}
</script>
<style lang="less">
.hljs {
  border-radius: @border-radius;
  padding: 0 20px;
  background: @bgwhite;
  color: @author-color;
  & + .hljs {
    margin-top: 20px;
  }
  pre {
    border-radius: @border-radius;
    padding: 10px;
    background: #23241f;
    color: #f8f8f2;
  }
}
</style>
