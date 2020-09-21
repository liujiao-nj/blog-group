<template>
  <div>
      <h2>模版语法</h2>
      <h3>interpolations - 插值</h3>
      <strong>text - 文本</strong>
      <p><span>Message: {{ msg }}</span></p>
      <p><span v-once>This will never change: {{msg}} </span></p>
      <p><input type="text" v-model="msg"></p>
      <strong>Raw HTML - 原始 HTML</strong>
      <p>Using mustache: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      <h3>Dynamic Arguments - 动态参数</h3>
      <p><a v-bind:[attributeName]="url">属性</a></p>
      <p><a v-on:[eventName]="doSomething">事件</a></p>
      <p><a :[attributeName]="url">属性</a></p>
      <p><a @[eventName]="doSomething">事件</a></p>
  </div>
</template>

<script>
export default {
    name: 'templateSyntax',

    data() {
        return {
            msg: 'v-once',
            rawHtml: '<span style="color: red"> This should be red. </span>',
            attributeName: 'href',
            url: 'http://www.itsudo.cn',
            eventName: 'click',
        }
    },

    methods: {
        doSomething: function() {
            console.log(`doSomething`);
        }
    }

}
</script>

<style>

</style>