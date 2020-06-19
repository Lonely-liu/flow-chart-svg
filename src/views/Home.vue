<template>
  <div class="home">
    <div class="top-bar">Top-bar</div>
    <section class="container">
      <div class="tool-bar">
        <a-tabs default-active-key="1" @change="callback">
          <a-tab-pane key="1" tab="Tab 1">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2" force-render>
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="Tab 3">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="draw-board">

      </div>
      <div class="data-base">

      </div>
    </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'Home',
  components: {
    HelloWorld
  }
})
export default class extends Vue{
  
  
}
</script>

<style lang="scss" scoped>
.top-bar {
  height: 40px;
  line-height: 40px;
  background-color: #f8f8fa;
  border-bottom: 1px solid #ddd;
}
.container {
  display: flex;
  height: calc(100vh - 40px);
  .tool-bar, .draw-board, .data-base {
    height: 100%;
  }
  .tool-bar {
    flex: 0 0 200px;
    background-color: #f8f8fa;
    border-right: 1px solid #ddd;
  }
  .draw-board {
    flex: 1;
  }
  .data-base {
    flex: 0 0 250px;
    background-color: #f8f8fa;
    border-left: 1px solid #ddd;
  }
}
</style>
