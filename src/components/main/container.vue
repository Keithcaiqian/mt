<template>
  <div class="m-container">
    <div class="container">
      <dl :class="arrs.class">
        <dt>{{arrs.title}}</dt>
        <dd
          class="proDetail"
          v-for="(props,number) in arrs.arr"
          :key="number"
          @mouseenter="changeShow($event,props.content)"
        >{{props.name}}</dd>
      </dl>
      <el-row class="show">
          <el-col :span="8" v-for="(item, index) in list" :key="index">
            <img :src="item.src" class="image" />
            <div>
              <div class="name">{{item.name}}</div>
              <div class="m-detail">{{item.detail}}</div>
              <div class="price">
                <span class="cur" v-show="item.pri">
                  ￥
                  <span class="pri">{{item.pri}}</span>
                </span>
                <span class="oldPri" v-show="item.oldPri">门市价￥{{item.oldPri}}</span>
                <span class="per" v-show="item.per">
                  ￥
                  <span class="pri">{{item.per}}</span>/人均
                </span>
                <span class="area" v-show="item.area">{{item.area}}</span>
              </div>
            </div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.list = this.arrs.arr[0].content;
    this.dom = document.getElementsByClassName(this.arrs.class);
    this.dom[0]
      .getElementsByClassName("proDetail")[0]
      .classList.add("selected");
  },
  props: ["arrs", "curIndex"],
  data() {
    return {
      dom: null,
      tag: "",
      list: null,
      lifeList: null,
      liveList: null
    };
  },
  methods: {
    changeShow(e, data) {
      this.list = data;
      this.dom[0]
        .getElementsByClassName("selected")[0]
        .classList.remove("selected");
      e.target.classList.add("selected");
    }
  }
};
</script>

<style scoped>
.container {
  width: 1190px;
  border-radius: 15px;
  background-color: #fff;
  margin: 40px auto;
}
.food-bar {
  background-image: linear-gradient(
    to right,
    rgb(194, 176, 142) 3%,
    rgb(190, 164, 116) 100%
  );
}

.area-bar {
  background: linear-gradient(
      to right,
      rgb(243, 182, 74) 2%,
      rgb(242, 197, 69) 97%
    )
    rgb(243, 182, 74);
}
.container dl {
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: 44px;
}
.container dt,
.container dd {
  display: inline-block;
  color: #fff;
  line-height: 44px;
  padding: 0 5px;
  cursor: pointer;
  position: relative;
}
.container dd.selected::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom-color: #fff;
}
.container dt {
  font-size: 18px;
  margin: 0 10px 0 13px;
}
.show {
  padding: 11px 10px 10px;
}
.show .el-col {
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
}
.show .el-col:hover {
  background-color: rgb(247, 244, 244);
}
.show .el-col img {
  width: 100%;
  height: 208px;
  border-radius: 5px;
}
.name {
  margin: 8px 0;
  font-size: 16px;
  color: #222;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.m-detail {
  margin: 0 0 7px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {
  overflow: hidden;
}
.cur,
.per {
  color: #be9e4d;
  margin: 0 6px 0 0;
}
.cur .pri,
.per .pri {
  font-size: 22px;
}
.oldPri {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
}
.area {
  float: right;
  margin: 10px 0 0;
  color: #999;
  font-size: 12px;
}
</style>