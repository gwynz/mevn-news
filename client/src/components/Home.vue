<template>
  <div id="canvas">
    <PageLoader :isloading="loading" />

    <header class="my-3 mx-16 relative" :class="currentLayout==0?'container mx-auto':''">
      <img src="@/imgs/logo_company.png" class="absolute w-16 h-16 left-0 top-0 hidden lg:block" />
      <router-link to="/admin">
        <div
          class="rounded lg:w-1/3 cursor-pointer mx-auto hover:bg-primary_hover px-4 py-3 bg-primary text-white text-xl lg:text-3xl font-bold text-center uppercase shadow-lg"
        >
          <span style="white-space: pre-line">{{creator.nameOfNews}}</span>
        </div>
      </router-link>
    </header>
    <section class="p-10 relative">
      <div
        class="absolute left-0 right-0 bg-center bg-repeat-x -mb-8 hidden md:block"
        style="z-index: -1"
      >
        <svg
          class="mt-48 w-full"
          style="height: 600px"
          viewBox="0 0 1440 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1440" height="190" fill="white" />
          <path
            d="M1440 95.4893C790 245.489 650 -54.5107 0 95.4893V0H1440V95.4893Z"
            fill="#F7FAFC"
          />
          <g stroke-width="2">
            <g stroke="#EDF2F7">
              <path d="M0 95.4893C650 -54.5107 790 245.489 1440 95.4893" />
              <path d="M0 95.4893C650 15.4893 790 175.489 1440 95.4893" />
              <path d="M0 95.4893C650 -214.511 790 405.489 1440 95.4893" />
            </g>
            <path d="M0 95.4893C650 -134.511 790 325.489 1440 95.4893" stroke="#fed7d7" />
          </g>
        </svg>
      </div>
      <div v-if="currentLayout==0" class="container mx-auto">
        <div
          v-for="item in listItem"
          :key="item._id"
          class="bg-white rounded-lg shadow-sm p-3 mt-4"
        >
          <h2
            class="cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"
          >
            <span>{{item.title.title}}</span>
          </h2>
          <ul class="px-10 list-disc text-base pb-3">
            <template v-for="content in item.contents">
              <li v-if="content.text" :key="content._id">
                <div class="text-xl">{{content.text}}</div>
              </li>
            </template>
            <div class="list-none flex flex--wrap justify-around">
              <template v-for="content in item.contents">
                <div :key="content._id" v-if="content.urlImage">
                  <div class="py-3 mr-3" style="max-width:400px">
                    <img :src="content.urlImage" class="w-full h-full" />
                  </div>
                </div>
              </template>
            </div>
          </ul>
        </div>
      </div>
      <div v-else-if="currentLayout==2">
        <div
          v-for="item in listItem"
          :key="item._id"
          class="bg-white rounded-lg shadow-sm p-3 float-left lg:w-1/2"
        >
          <h2
            class="cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"
          >
            <span>{{item.title.title}}</span>
          </h2>
          <ul class="px-10 list-disc text-base pb-3">
            <template v-for="content in item.contents">
              <li v-if="content.text" :key="content._id">
                <div class="text-xl">{{content.text}}</div>
              </li>
            </template>
            <div class="list-none flex flex--wrap justify-around">
              <template v-for="content in item.contents">
                <div :key="content._id" v-if="content.urlImage">
                  <div class="py-3 mr-3" style="max-width:400px">
                    <img :src="content.urlImage" class="w-full h-full" />
                  </div>
                </div>
              </template>
            </div>
          </ul>
        </div>
      </div>
      <div v-else-if="currentLayout==1" class="grid grid-cols-2">
        <div v-for="item in listItem" :key="item._id" class="bg-white rounded-lg shadow-sm p-3">
          <h2
            class="cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"
          >
            <span>{{item.title.title}}</span>
          </h2>
          <ul class="px-10 list-disc text-base pb-3">
            <template v-for="content in item.contents">
              <li v-if="content.text" :key="content._id">
                <div class="text-xl">{{content.text}}</div>
              </li>
            </template>
            <div class="list-none flex flex--wrap justify-around">
              <template v-for="content in item.contents">
                <div :key="content._id" v-if="content.urlImage">
                  <div class="py-3 mr-3" style="max-width:400px">
                    <img :src="content.urlImage" class="w-full h-full" />
                  </div>
                </div>
              </template>
            </div>
          </ul>
        </div>
      </div>
    </section>
    <footer class="clear-both w-full text-lg p-10 text-center bg-red-100 mt-5">
      <div class="font-bold">
        <span style="white-space: pre-line">{{creator.name}}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
import PageLoader from "./partial/pageLoader";
export default {
  components: {
    PageLoader,
  },
  data: function () {
    return {
      listItem: [],
      creator: "",
      toggle: "character-viewer",
      characters: null,
      chartOptions: {
        hoverBorderWidth: 10,
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["consectetuer", "amet", "ipsum"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5],
          },
        ],
      },
      loading: false,
    };
  },
  computed: {
    currentLayout() {
      return this.$store.state.typeOfLayout;
    },
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get("https://gwz-easy.herokuapp.com/news")
        .then((response) => {
          this.listItem = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
      axios.get("https://gwz-easy.herokuapp.com/creators").then((response) => {
        this.creator = response.data;
      });
    },
    genaratePdf() {
      var canvas = document.getElementById("canvas");
      html2canvas(canvas).then((canvas) => {
        var imgdata = canvas.toDataURL("image/png");
        var doc = new jspdf("p", "mm");
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.addImage(imgdata, "PNG", 0, 0, width, height);
        doc.save("news.pdf");
      });
    },
  },
  created: function () {
    this.getData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>