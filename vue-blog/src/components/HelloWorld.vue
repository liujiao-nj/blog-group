<template>
  <div class="hello">
    <div class="hljs" ref="hlDiv" v-html="compiledMarkdown"></div>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    article: ''
  }),
  directives: {
    highlight: {
      inserted (el) {
        const blocks = el.querySelectorAll('p code')
        blocks.forEach(block => {
          hljs.highlightBlock(block)
        })
      }
    }
  },
  computed: {
    compiledMarkdown () {
      return marked(this.article)
    }
  },
  created () {
    this.getArticle()
  },
  methods: {
    getArticle () {
      this.article = '## this is\n>hello\n\n```javascript\nvar a = 1\n```\n \n`label`'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
