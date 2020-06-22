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
        <svg width="100%" height="100%"
          @mousemove="handleMove"
          @mousedown="handleDown"
          @mouseup="handleUp"
        >
          <path @click="handleCPath" d='M 200 200 c 100 0 0 100 100 100' stroke="orange" fill="none"></path>

          <rect x='0' y='0' width='100' height='100' fill='skyblue' canMove='1'
            :translateX="svgLeft"
            :translateY="svgTop"
            :transform="`translate(${svgLeft}, ${svgTop})`"
          ></rect>
          <rect
            x='100' y='100' width='100' height='100' fill='skyblue' canMove='1'
            :translateX="svgLeft"
            :translateY="svgTop"
            :transform="`translate(${svgLeft}, ${svgTop})`"
          ></rect>
          <rect
            width='100' height='100' fill='orange' canMove='1'
            :x='300' :y='300'
            :translateX="svgLeft"
            :translateY="svgTop"
            :transform="`translate(${svgLeft}, ${svgTop})`"
          ></rect>
          <!-- <rect x='300' y='300' width='100' height='100' fill='skyblue' canMove='1'></rect> -->
        </svg>
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
export default class extends Vue {

  private svgLeft: number = 0
  private svgTop: number = 0

  private currentDomX: number = 0
  private currentDomY: number = 0
  private originX: number = 0 // 原始x轴值
  private originY: number = 0 // 原始y轴值
  private canMove: boolean = false // 是否可以移动

  created() {
    // 鼠标移动
    // document.addEventListener('mousemove', (e: MouseEvent) => {
    //   console.log('e', e)
    // })
    // // 鼠标按下
    // document.addEventListener('mousedown', (e: MouseEvent) => {
    //   console.log('e', e)
    // })
    // // 鼠标抬起
    // document.addEventListener('mouseup', (e: MouseEvent) => {
    //   console.log('e', e)
    // })
  }

  private callback(val: any) {
    console.log('val', val.name)
  }

  handleMove(e: MouseEvent) {
    if (!this.canMove) return
    const diffX = e.clientX - this.originX
    const diffY = e.clientY - this.originY
    this.svgLeft = this.currentDomX + diffX
    this.svgTop = this.currentDomY + diffY
  }

  handleDown(e: MouseEvent) {
    const move = (e.target as any).attributes.canMove
    if (!move) return
    const svgX = (e.target as any).attributes.translateX.value
    const svgY = (e.target as any).attributes.translateY.value
    const canMove = move && move.value
    this.canMove = Number(canMove) ? true : false
    this.currentDomX = Number(svgX)
    this.currentDomY = Number(svgY)

    this.originX = e.clientX
    this.originY = e.clientY
  }

  handleUp(e: MouseEvent) {
    this.canMove = false
  }

  handleCPath() {
    console.log('---')
  }
  
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
