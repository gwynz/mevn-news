<template>
  <div id="canvas">
    <header class="m-10 my-3 mx-16 relative">
      <img src="@/imgs/logo_company.png" class="absolute w-16 h-16 left-0 top-0 hidden lg:block" />
      <router-link to="/admin">
        <div
          class="rounded lg:w-1/3 cursor-pointer mx-auto hover:bg-primary_hover px-4 py-3 bg-primary text-white text-xl lg:text-3xl font-bold text-center uppercase shadow-lg"
        >
          <span style="white-space: pre-line">{{creator.nameOfNews}}</span>
        </div>
      </router-link>
    </header>
    <!--<div class="absolute flex justify-end mt-2 right-0 top-0 w-16 h-16 pr-10">
      <div class="hover:text-primary_hover cursor-pointer">
        <svg
          id="Layer_1"
          enable-background="new 0 0 512 512"
          height="26px"
          viewBox="0 0 512 512"
          width="26px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"
          />
          <path
            d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"
          />
        </svg>
      </div>
    </div>-->
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
      <div class>
        <div
          v-for="item in listItem"
          :key="item._id"
          class="bg-white rounded-lg p-3 float-left lg:w-1/2"
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
                <div class="w-full" :key="content._id" v-if="content.urlImage">
                  <div class="p-3 mr-3 w-full">
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

export default {
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
    };
  },
  methods: {
    getData() {
      axios.get("https://gwz-easy.herokuapp.com/news").then((response) => {
        this.listItem = response.data;
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
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: counter(section) ": ";
}
</style>