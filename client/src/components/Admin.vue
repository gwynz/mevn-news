<template>
  <div class="relative">
    <pageLoader :isloading="loading" />
    <div class="fixed">
      <div v-for="(no,index) in showNotify" :key="index" class="mt-4">
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
        <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">Layout</label>

        <div class="dropdown inline-block relative z-10 mb-8">
          <button
            class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
            @click="showDropdownLayout=!showDropdownLayout"
          >
            <span class="mr-1">{{arrLayout[currentLayout]}}</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
          <ul
            class="dropdown-menu absolute text-gray-700 pt-1 left-0 right-0"
            v-show="showDropdownLayout"
          >
            <li v-for="(item, index) in arrLayout" :key="item">
              <a
                class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
                @click="currentLayout = index;showDropdownLayout=!showDropdownLayout"
              >{{item}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      <div class="mb-4">
        <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">Tên bài viết</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="newCreator.nameOfNews"
          placeholder="Nhập tên bài viết"
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
    <div class="mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      <div class="mb-4">
        <label class="block text-gray-700 text-2xl font-bold mb-2" for="username">Tiêu đề</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <div class="flex">
              <button
                @click="showModalTitle(item.title._id,item.title.title)"
                class="mr-3 h-6 bg-gray-500 hover:bg-gray-700 text-white font-bold px-2 rounded-full flex items-center"
              >Edit</button>
              <button
                @click="removeTitle(item.title._id)"
                class="h-6 bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-full flex items-center"
              >Remove</button>
            </div>
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
                <div v-if="i.text" class="flex justify-between">
                  {{i.text}}
                  <div class="flex">
                    <button
                      @click="showModalContent(i._id,i.text)"
                      v-if="item.contents.length"
                      class="text-gray-500 hover:text-gray-400 font-bold px-1 rounded-full flex items-center justify-end h-8 w-8"
                    >E</button>
                    <button
                      @click="removeContent(i._id)"
                      v-if="item.contents.length"
                      class="text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 justify-end h-8 w-8"
                    >X</button>
                  </div>
                </div>
                <div v-else class="w-1/2 flex justify-between">
                  <img :src="i.urlImage" alt />
                  <button
                    @click="removeContent(i._id)"
                    v-if="item.contents.length"
                    class="text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 content-center h-8 w-8 flex-end"
                  >X</button>
                </div>
              </div>
              <div>
                <label
                  class="mt-2 w-48 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500"
                >
                  <svg
                    class="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                  </svg>
                  <span class="mt-2 text-base leading-normal">Chọn Image</span>
                  <input
                    type="file"
                    class="hidden"
                    id="file"
                    ref="fileImages"
                    v-on:change="handleFileUpload(index, item.title._id)"
                  />
                </label>
              </div>
            </div>
          </div>>
        </div>
      </div>
    </div>
    <div class="mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-2xl font-bold mb-2"
          for="username"
        >Nội dung cuối trang</label>
        <textarea
          class="w-full h-24 resize border rounded focus:outline-none focus:shadow-outline"
          placeholder="Nhập nội dung cuối trang"
          v-model="newCreator.name"
        ></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="saveCreator"
        >Lưu</button>
      </div>
    </div>
    <modalModify ref="modalModifyTitle" @updateTitle="funcUpdate" />
  </div>
</template>

<script>
import axios from "axios";
import modalModify from "./partial/modalModify";
import news from "../api/news";
import PageLoader from "./partial/pageLoader";
export default {
  components: {
    modalModify,
    PageLoader,
  },
  data: function () {
    return {
      loading: false,
      listItem: [],
      collapseContentTitle: [],
      newTitle: "",
      newContents: [],
      showNotify: [],
      newCreator: {},
      image: {},
      funcUpdate: Object,
      showDropdownLayout: false,
      arrLayout: ["Column", "Row", "Float"],
    };
  },
  created: {},
  computed: {
    currentLayout: {
      get: function () {
        return this.$store.state.typeOfLayout;
      },
      set: function (newValue) {
        this.$store.commit("setLayout", newValue);
      },
    },
  },
  methods: {
    getData: function () {
      this.loading = true;
      console.log(news.getNewsWithContent());
      news
        .getNewsWithContent()
        .then((data) => {
          this.listItem = data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getCreator: function () {
      news.getCreators().then((data) => {
        this.newCreator = data;
      });
    },
    showContentTitle(item) {
      this.collapseContentTitle[this.listItem.indexOf(item)] = !this
        .collapseContentTitle[this.listItem.indexOf(item)];
      this.collapseContentTitle = [...this.collapseContentTitle];
    },
    saveTitle() {
      this.loading = true;
      news
        .saveNews({ title: this.newTitle })
        .then((res) => {
          this.newTitle = "";
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    updateTitle(id, newTitle) {
      this.loading = true;
      axios
        .post("https://gwz-easy.herokuapp.com/news/save", {
          _id: id,
          title: newTitle,
        })
        .then((res) => {
          this.newTitle = "";
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    removeTitle(id) {
      this.loading = true;
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
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    saveContent(title_id, index) {
      this.loading = true;
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
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    updateContent(id, newContent) {
      axios
        .post("https://gwz-easy.herokuapp.com/contents/update", {
          _id: id,
          text: newContent,
        })
        .then((res) => {
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.shift();
          }, 2000);
          return res;
        })
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    removeContent(id) {
      this.loading = true;
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
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    saveCreator() {
      this.loading = true;
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
        .catch((error) => console.log("loi ne", error))
        .finally(() => {
          this.loading = false;
        });
    },
    handleFileUpload(index, id) {
      this.image = this.$refs.fileImages[index].files[0];
      this.supmitFile(id);
    },
    supmitFile(id) {
      this.loading = true;
      let formData = new FormData();
      formData.append("image", this.image);
      formData.append("title_id", id);
      axios
        .post(
          "https://gwz-easy.herokuapp.com/contents/upload-images",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(() => {
          this.getData();
          this.showNotify.push(true);
          setTimeout(() => {
            this.showNotify.pop();
          }, 2000);
          return res;
        })
        .catch(function () {
          return res;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    showModalTitle(id, title) {
      var modal = this.$refs.modalModifyTitle;
      modal.newData = title;
      modal.currentId = id;
      this.funcUpdate = this.updateTitle;
      modal.onShowModal();
    },

    showModalContent(id, content) {
      var modal = this.$refs.modalModifyTitle;
      modal.newData = content;
      modal.currentId = id;
      this.funcUpdate = this.updateContent;
      modal.onShowModal();
    },
  },
  created: function () {
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