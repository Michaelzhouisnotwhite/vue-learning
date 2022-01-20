<template>
  <div class="app-container">
    <es-header title="购物车案例"></es-header>

    <es-goods
      v-for="item in goodslist"
      :key="item.id"
      :id="item.id"
      :thumb="item.goods_img"
      :title="item.goods_name"
      :price="item.goods_price"
      :count="item.goods_count"
      :checked="item.goods_state"
      @stateChange="onGoodsStateChange"
      @countChange="onGoodsCountChange"
    ></es-goods>

    <es-footer :total="total" :amount="amount" @fullChange="onFullStateChange">
    </es-footer>
  </div>
</template>

<script>
import EsHeader from "./components/es-header/EsHeader.vue";
import EsFooter from "./components/es-footer/EsFooter.vue";
import EsGoods from "./components/es-goods/EsGoods.vue";
export default {
  name: "MyApp",
  components: {
    EsHeader,
    EsFooter,
    EsGoods,
  },
  data() {
    return {
      goodslist: [],
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    onGoodsCountChange(e) {
      const res = this.goodslist.find((x) => x.id === e.id);
      if (res) {
        res.goods_count = e.value;
      }
    },
    async getGoodList() {
      const { data: res } = await this.$http.get("api/cart");
      if (res.status !== 200) {
        return alert("请求商品列表失败！");
      }
      console.log(res.message);
      this.goodslist = res.list;
    },
    onFullStateChange(isFull) {
      this.goodslist
        .filter((x) => x.goods_state == !isFull)
        .forEach((x) => {
          x.goods_state = isFull;
        });
    },
    onGoodsStateChange(e) {
      const findResult = this.goodslist.find((x) => x.id === e.id);
      if (findResult) {
        findResult.goods_state = e.value;
      }
    },
  },
  computed: {
    amount() {
      let a = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => {
          a += x.goods_price * x.goods_count;
        });
      return a;
    },
    total() {
      let sum = 0;
      this.goodslist
        .filter((x) => x.goods_state)
        .forEach((x) => (sum += x.goods_count));
      return sum;
    },
  },
};
</script>

<style>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
