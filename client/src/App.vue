<template>
  <!---<div id="app">
    <button v-on:click="toggle='character-viewer'; getCharacters()">View all characters</button>
    <button v-on:click="toggle='character-creator'">Create a character</button>
    <CharacterViewer v-show="toggle==='character-viewer'" :characters="characters" />
    <CharacterCreator v-show="toggle==='character-creator'" />
  </div>--->
  <div>
    <header
      class="w-1/3 mx-auto px-4 py-3 bg-primary text-white text-2xl font-bold text-center"
    >Tiêu đề</header>
    <section class="flex py-10">
      <div class="w-1/2 px-10">
        <!-- Tiêu đề -->
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Tin tức nổi bậc</span>
          </h2>
          <ul class="px-10 list-disc text-base">
            <li
              class="hljs-bullet"
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>

            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Lorem ipsum dolor sit amet 2</span>
          </h2>
          <ul class="px-10 list-disc">
            <li
              class="hljs-bullet"
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Lorem ipsum dolor sit amet 3</span>
          </h2>
          <div class="flex">
            <div class="w-1/2 my-auto">
              <ul class="px-10 list-disc">
                <li
                  class="hljs-bullet"
                >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
              </ul>
            </div>
            <div class="w-1/2">
              <div class="px-12">
                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
              </div>
            </div>
          </div>
          <div class="px-10 mt-5">
            <table class="table-auto">
              <thead>
                <tr class="text-left text-white bg-primary">
                  <th class="px-4 py-2">Title</th>
                  <th class="px-4 py-2">Author</th>
                  <th class="px-4 py-2">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">Intro to CSS</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">858</td>
                </tr>
                <tr class="bg-gray-100">
                  <td
                    class="border px-4 py-2"
                  >A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">Intro to JavaScript</td>
                  <td class="border px-4 py-2">Chris</td>
                  <td class="border px-4 py-2">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Lorem ipsum dolor sit amet 4</span>
          </h2>
          <ul class="px-10 list-disc">
            <li
              class="hljs-bullet"
            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Lorem ipsum dolor sit amet 5</span>
          </h2>
          <ul class="px-10 list-disc">
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</li>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean commodo ligula eget dolor. Aenean massa.</li>
          </ul>
        </div>
        <div>
          <h2 class="font-bold text-xl uppercase underline my-5 text-primary">
            <span>Lorem ipsum dolor sit amet 5</span>
          </h2>
          <div class="px-10 mt-5">
            <table class="table-auto">
              <thead>
                <tr class="text-left text-white bg-primary">
                  <th class="px-4 py-2">Title</th>
                  <th class="px-4 py-2">Author</th>
                  <th class="px-4 py-2">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">Intro to CSS</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">858</td>
                </tr>
                <tr class="bg-gray-100">
                  <td
                    class="border px-4 py-2"
                  >A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                  <td class="border px-4 py-2">Adam</td>
                  <td class="border px-4 py-2">112</td>
                </tr>
                <tr>
                  <td class="border px-4 py-2">Intro to JavaScript</td>
                  <td class="border px-4 py-2">Chris</td>
                  <td class="border px-4 py-2">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-10 mt-5">
            <line-chart :data="chartData" :options="chartOptions" :height="500"></line-chart>
          </div>
        </div>
      </div>
    </section>
    <footer class="w-full p-10 text-center bg-gray-300">"Thank you for trusting my works"</footer>
  </div>
</template>

<script>
import axios from "axios";
import "./styles/tailwindcss.scss";
import PieChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
export default {
  name: "App",
  components: { PieChart, LineChart },
  data: function() {
    return {
      toggle: "character-viewer",
      characters: null,
      chartOptions: {
        hoverBorderWidth: 10
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["consectetuer", "amet", "ipsum"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      }
    };
  },
  methods: {
    getCharacters: function() {
      axios
        .get("https://gwz-easy.herokuapp.com/characters")
        .then(response => (this.characters = response.data));
    }
  },
  mounted: function() {
    this.getCharacters();
  }
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
