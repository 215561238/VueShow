<template>
  <div>
    <div class="banner">
      <img v-for="(v,i) in img" :key="i" :src="v" v-show="i==n" alt="">
      <div class="banner-circle">
        <ul>
          <li v-for="(v,i) in img" :key="i" :class="i==n ?'selected':''"></li>
        </ul>
      </div>
    </div>

    <!-- <div class="index-category">
              <div class="category" v-for="(list,index) in lists" :key="index">
                  <i class="iconfont" :class="list.icon" :style="{background:list.color}"></i>
                  <label>{{list.title}}</label>
                </div>
            </div> -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        n: 0,
        img: [require('../assets/img/look at the computer dog.png'),
        require('../assets/img/look at the computer dog.png'),
        require('../assets/img/look at the computer dog.png'),
        require('../assets/img/look at the computer dog.png'),
        require('../assets/img/look at the computer dog.png')]
      }
    },
    methods: {
      fun: function () {
        // setInterval(函数体，时间)
        setInterval(this.play, 2000)
      },
      play: function () {
        this.n++
        if (this.n === this.img.length) {
          this.n = 0
        }
      }
    },
    mounted: function () { // 生命周期  狗子函数  挂载完成
      this.fun()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }

  body {
    font-size: 14px;
    background: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  html,
  body {
    max-width: 720px;
    height: 100%;
    margin: 0 auto;
  }

  /* index */
  .banner {
    position: relative;
  }

  .banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
  }

  .banner .banner-circle li {
    display: inline-block;
    background: rgba(0, 0, 0, .3);
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
  }

  .banner .banner-circle ul {
    text-align: center;
  }

  .banner .banner-circle .selected {
    background: rgba(0, 0, 0, .8);
  }

  .index-content .banner img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>