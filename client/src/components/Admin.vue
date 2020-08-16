<template>
  <div class="relative">
    <div class="fixed">
      <div v-for="no in showNotify" :key="no" class="mt-4">
        <div v-if="no">
          <div
            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div>
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                  />
                </svg>
              </div>
              <div class="w-64">
                <p class="text-sm">Da luu thanh cong</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!no">
          <div
            class="fixed bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div>
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                  />
                </svg>
              </div>
              <div class="w-64">
                <p class="text-sm">Da luu that bai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      <div class="mb-4">
        <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">Tiêu đề</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="newTitle"
          placeholder="Nhập tiêu đề "
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="saveTitle"
        >Lưu</button>
      </div>

      <div class="rounded overflow-hidden shadow-md mt-5">
        <div class="px-6 py-4 hover:bg-gray-200" v-for="(item, index) in listItem" :key="item._id">
          <div class="flex justify-between">
            <p
              class="text-gray-700 text-base font-bold cursor-pointer"
              @click.prevent="showContentTitle(item)"
            >{{item.title.title}}</p>
            <button
              @click="removeTitle(item.title._id)"
              class="h-6 bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-full flex items-center"
            >X</button>
          </div>
          <div v-show="collapseContentTitle[listItem.indexOf(item)]" class="px-10 py-6">
            <div class="text-gray-700 text-base w-full flex justify-between">
              <textarea
                class="w-full h-24 resize border rounded focus:outline-none focus:shadow-outline"
                v-model="newContents[index]"
              ></textarea>
              <button
                @click="saveContent(item.title._id, index)"
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold px-1 rounded-full flex items-center ml-3"
              >A</button>
            </div>
            <div class="text-gray-700 text-base w-full">
              <div class="p-8 w-full" v-for="i in item.contents" :key="i._id">
                <div class="flex justify-between">
                  {{i.text}}
                  <button
                    @click="removeContent(i._id)"
                    v-if="item.contents.length"
                    class="text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 content-center h-8 w-8"
                  >X</button>
                </div>
              </div>
            </div>
          </div>>
        </div>
      </div>
    </div>
    <div class="mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      <div class="mb-4">
        <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">Người viết</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="newCreator.name"
          placeholder="Nhập người viết"
        />
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="saveCreator"
        >Lưu</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      listItem: [],
      collapseContentTitle: [],
      newTitle: "",
      newContents: [],
      showNotify: [],
      newCreator: "",
    };
  },
  methods: {
    getData: function () {
      axios.get("https://gwz-easy.herokuapp.com/news").then((response) => {
        this.listItem = response.data;
      });
    },
    getCreator: function () {
      axios.get("https://gwz-easy.herokuapp.com/creators").then((response) => {
        this.newCreator = response.data;
      });
    },
    showContentTitle(item) {
      this.collapseContentTitle[this.listItem.indexOf(item)] = !this
        .collapseContentTitle[this.listItem.indexOf(item)];
      this.collapseContentTitle = [...this.collapseContentTitle];
    },
    saveTitle() {
      axios
        .post("https://gwz-easy.herokuapp.com/news", { title: this.newTitle })
        .then((res) => {
          this.newTitle = "";
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error));
    },
    removeTitle(id) {
      axios
        .delete("https://gwz-easy.herokuapp.com/news/" + id)
        .then((res) => {
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error));
    },
    saveContent(title_id, index) {
      var text = this.newContents[index];
      axios
        .post("https://gwz-easy.herokuapp.com/contents", { title_id, text })
        .then((res) => {
          this.newContents[index] = "";
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error));
    },
    removeContent(id) {
      console.log(id);
      axios
        .delete("https://gwz-easy.herokuapp.com/contents/" + id)
        .then((res) => {
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.pop();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error));
    },
    saveCreator() {
      axios
        .post("https://gwz-easy.herokuapp.com/creators", {
          creator: this.newCreator,
        })
        .then((res) => {
          this.getCreator();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error));
    },
  },
  mounted: function () {
    this.getData();
    this.getCreator();
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>