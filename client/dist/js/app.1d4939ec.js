(function(t){function e(e){for(var s,i,r=e[0],l=e[1],u=e[2],c=0,f=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},o=[];function i(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d216214":"f98ebe23","chunk-66ef4179":"791a9899"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,s){n=a[t]=[e,s]}));e.push(n[2]=s);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(t);var u=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,n[1](u)}a[t]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0153":function(t,e,n){},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},1136:function(t,e,n){},"2b21":function(t,e,n){"use strict";var s=n("1136"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[],i=(n("9d52"),{}),r=i,l=(n("034f"),n("2877")),u=Object(l["a"])(r,a,o,!1,null,null,null),c=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("pageLoader"),n("div",{staticClass:"fixed"},t._l(t.showNotify,(function(e,s){return n("div",{key:s,staticClass:"mt-4"},[e?n("div",[n("div",{staticClass:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-teal-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(0,!0)])])]):t._e(),e?t._e():n("div",[n("div",{staticClass:"fixed bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-teal-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(1,!0)])])])])})),0),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Layout")]),n("div",{staticClass:"dropdown inline-block relative z-10 mb-8"},[n("button",{staticClass:"bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center",on:{click:function(e){t.showDropdownLayout=!t.showDropdownLayout}}},[n("span",{staticClass:"mr-1"},[t._v(t._s(t.arrLayout[t.currentLayout]))]),n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.showDropdownLayout,expression:"showDropdownLayout"}],staticClass:"dropdown-menu absolute text-gray-700 pt-1 left-0 right-0"},t._l(t.arrLayout,(function(e,s){return n("li",{key:e},[n("a",{staticClass:"rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",attrs:{href:"#"},on:{click:function(e){t.currentLayout=s,t.showDropdownLayout=!t.showDropdownLayout}}},[t._v(t._s(e))])])})),0)])])]),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Tên bài viết")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCreator.nameOfNews,expression:"newCreator.nameOfNews"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Nhập tên bài viết"},domProps:{value:t.newCreator.nameOfNews},on:{input:function(e){e.target.composing||t.$set(t.newCreator,"nameOfNews",e.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.saveCreator}},[t._v("Lưu")])])]),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Tiêu đề")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Nhập tiêu đề "},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.saveTitle}},[t._v("Lưu")])]),n("div",{staticClass:"rounded overflow-hidden shadow-md mt-5"},t._l(t.listItem,(function(e,s){return n("div",{key:e._id,staticClass:"px-6 py-4 hover:bg-gray-200"},[n("div",{staticClass:"flex justify-between"},[n("p",{staticClass:"text-gray-700 text-base font-bold cursor-pointer",on:{click:function(n){return n.preventDefault(),t.showContentTitle(e)}}},[t._v(t._s(e.title.title))]),n("div",{staticClass:"flex"},[n("button",{staticClass:"mr-3 h-6 bg-gray-500 hover:bg-gray-700 text-white font-bold px-2 rounded-full flex items-center",on:{click:function(n){return t.showModalTitle(e.title._id,e.title.title)}}},[t._v("Edit")]),n("button",{staticClass:"h-6 bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-full flex items-center",on:{click:function(n){return t.removeTitle(e.title._id)}}},[t._v("Remove")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.collapseContentTitle[t.listItem.indexOf(e)],expression:"collapseContentTitle[listItem.indexOf(item)]"}],staticClass:"px-10 py-6"},[n("div",{staticClass:"text-gray-700 text-base w-full flex justify-between"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newContents[s],expression:"newContents[index]"}],staticClass:"w-full h-24 resize border rounded focus:outline-none focus:shadow-outline",domProps:{value:t.newContents[s]},on:{input:function(e){e.target.composing||t.$set(t.newContents,s,e.target.value)}}}),n("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold px-1 rounded-full flex items-center ml-3",on:{click:function(n){return t.saveContent(e.title._id,s)}}},[t._v("A")])]),n("div",{staticClass:"text-gray-700 text-base w-full"},[t._l(e.contents,(function(s){return n("div",{key:s._id,staticClass:"p-8 w-full"},[s.text?n("div",{staticClass:"flex justify-between"},[t._v(" "+t._s(s.text)+" "),n("div",{staticClass:"flex"},[e.contents.length?n("button",{staticClass:"text-gray-500 hover:text-gray-400 font-bold px-1 rounded-full flex items-center justify-end h-8 w-8",on:{click:function(e){return t.showModalContent(s._id,s.text)}}},[t._v("E")]):t._e(),e.contents.length?n("button",{staticClass:"text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 justify-end h-8 w-8",on:{click:function(e){return t.removeContent(s._id)}}},[t._v("X")]):t._e()])]):n("div",{staticClass:"w-1/2 flex justify-between"},[n("img",{attrs:{src:s.urlImage,alt:""}}),e.contents.length?n("button",{staticClass:"text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 content-center h-8 w-8 flex-end",on:{click:function(e){return t.removeContent(s._id)}}},[t._v("X")]):t._e()])])})),n("div",[n("label",{staticClass:"mt-2 w-48 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500"},[n("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"}})]),n("span",{staticClass:"mt-2 text-base leading-normal"},[t._v("Chọn Image")]),n("input",{ref:"fileImages",refInFor:!0,staticClass:"hidden",attrs:{type:"file",id:"file"},on:{change:function(n){return t.handleFileUpload(s,e.title._id)}}})])])],2)]),t._v("> ")])})),0)]),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Nội dung cuối trang")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newCreator.name,expression:"newCreator.name"}],staticClass:"w-full h-24 resize border rounded focus:outline-none focus:shadow-outline",attrs:{placeholder:"Nhập nội dung cuối trang"},domProps:{value:t.newCreator.name},on:{input:function(e){e.target.composing||t.$set(t.newCreator,"name",e.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.saveCreator}},[t._v("Lưu")])])]),n("modalModify",{ref:"modalModifyTitle",on:{updateTitle:t.funcUpdate}})],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-64"},[n("p",{staticClass:"text-sm"},[t._v("Da luu thanh cong")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-64"},[n("p",{staticClass:"text-sm"},[t._v("Da luu that bai")])])}],h=(n("c975"),n("2909")),m=n("bc3a"),w=n.n(m),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"fixed z-10 inset-0 overflow-y-auto"},[n("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[t._m(0),n("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen"}),n("div",{staticClass:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[n("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[n("label",{staticClass:"w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left text-gray-700 text-xl font-bold mb-8"},[t._v("Nội dung chỉnh sửa")]),n("div",{staticClass:"sm:flex sm:items-start"},[n("div",{staticClass:"w-full mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newData,expression:"newData"}],staticClass:"w-full h-24 resize border rounded focus:outline-none focus:shadow-outline",attrs:{placeholder:"Nhập nội dung chỉnh sửa"},domProps:{value:t.newData},on:{input:function(e){e.target.composing||(t.newData=e.target.value)}}})])])]),n("div",{staticClass:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[n("span",{staticClass:"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"},[n("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",attrs:{type:"button"},on:{click:t.onSave}},[t._v("Save")])]),n("span",{staticClass:"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"},[n("button",{staticClass:"inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",attrs:{type:"button"},on:{click:t.onHideModal}},[t._v("Cancel")])])])])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed inset-0 transition-opacity"},[n("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])}],x={data:function(){return{showModal:!1,newData:"",currentId:""}},methods:{onSave:function(){this.$emit("updateTitle",this.currentId,this.newData),this.newData="",this.currentId="",this.onHideModal()},onShowModal:function(){this.showModal=!0},onHideModal:function(){this.showModal=!1}}},b=x,y=Object(l["a"])(b,v,g,!1,null,null,null),C=y.exports,_=w.a.create({baseURL:"https://gwz-easy.herokuapp.com",headers:{Accept:"application/json","Content-Type":"application/json"}}),k=_,T={getNewsWithContent:function(){return k.get("/news").then((function(t){return t.data}))},getCreators:function(){return k.get("/creators").then((function(t){return t.data}))},saveNews:function(t){return k.post("/news",t).then((function(t){return t.data}))}},L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isloaded?n("div",{staticClass:"page-loader"},[n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"}),n("div",{staticClass:"cube"})]):t._e()},N=[],O={data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){t.isloaded=!0,"complete"==document.readyState&&setTimeout((function(){t.isloaded=!1}),500)}}},D=O,M=(n("75c3"),Object(l["a"])(D,L,N,!1,null,"e92393da",null)),j=M.exports,I={components:{modalModify:C,PageLoader:j},data:function(){return{listItem:[],collapseContentTitle:[],newTitle:"",newContents:[],showNotify:[],newCreator:{},image:{},funcUpdate:Object,showDropdownLayout:!1,arrLayout:["Column","Row","Float"]}},computed:{currentLayout:{get:function(){return this.$store.state.typeOfLayout},set:function(t){this.$store.commit("setLayout",t)}}},methods:{getData:function(){var t=this;console.log(T.getNewsWithContent()),T.getNewsWithContent().then((function(e){t.listItem=e}))},getCreator:function(){var t=this;T.getCreators().then((function(e){t.newCreator=e}))},showContentTitle:function(t){this.collapseContentTitle[this.listItem.indexOf(t)]=!this.collapseContentTitle[this.listItem.indexOf(t)],this.collapseContentTitle=Object(h["a"])(this.collapseContentTitle)},saveTitle:function(){var t=this;T.saveNews({title:this.newTitle}).then((function(e){return t.newTitle="",t.getData(),t.showNotify.push(!0),setTimeout((function(){t.showNotify.shift()}),2e3),e})).catch((function(t){return console.log("loi ne",t)}))},updateTitle:function(t,e){var n=this;w.a.post("https://gwz-easy.herokuapp.com/news/save",{_id:t,title:e}).then((function(t){return n.newTitle="",n.getData(),n.showNotify.push(!0),setTimeout((function(){n.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},removeTitle:function(t){var e=this;w.a.delete("https://gwz-easy.herokuapp.com/news/"+t).then((function(t){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},saveContent:function(t,e){var n=this,s=this.newContents[e];w.a.post("https://gwz-easy.herokuapp.com/contents",{title_id:t,text:s}).then((function(t){return n.newContents[e]="",n.getData(),n.showNotify.push(!0),setTimeout((function(){n.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},updateContent:function(t,e){var n=this;w.a.post("https://gwz-easy.herokuapp.com/contents/update",{_id:t,text:e}).then((function(t){return n.getData(),n.showNotify.push(!0),setTimeout((function(){n.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},removeContent:function(t){var e=this;w.a.delete("https://gwz-easy.herokuapp.com/contents/"+t).then((function(t){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.pop()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},saveCreator:function(){var t=this;w.a.post("https://gwz-easy.herokuapp.com/creators",{creator:this.newCreator}).then((function(e){return t.getCreator(),t.showNotify.push(!0),setTimeout((function(){t.showNotify.shift()}),2e3),e})).catch((function(t){return console.log("loi ne",t)}))},handleFileUpload:function(t,e){this.image=this.$refs.fileImages[t].files[0],this.supmitFile(e)},supmitFile:function(t){var e=this,n=new FormData;n.append("image",this.image),n.append("title_id",t),w.a.post("https://gwz-easy.herokuapp.com/contents/upload-images",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.pop()}),2e3),res})).catch((function(){return res}))},showModalTitle:function(t,e){var n=this.$refs.modalModifyTitle;n.newData=e,n.currentId=t,this.funcUpdate=this.updateTitle,n.onShowModal()},showModalContent:function(t,e){var n=this.$refs.modalModifyTitle;n.newData=e,n.currentId=t,this.funcUpdate=this.updateContent,n.onShowModal()}},mounted:function(){this.getData(),this.getCreator()}},z=I,S=(n("2b21"),Object(l["a"])(z,f,p,!1,null,null,null)),P=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"canvas"}},[s("PageLoader"),s("header",{staticClass:"m-10 my-3 mx-16 relative"},[s("img",{staticClass:"absolute w-16 h-16 left-0 top-0 hidden lg:block",attrs:{src:n("7a8c")}}),s("router-link",{attrs:{to:"/admin"}},[s("div",{staticClass:"rounded lg:w-1/3 cursor-pointer mx-auto hover:bg-primary_hover px-4 py-3 bg-primary text-white text-xl lg:text-3xl font-bold text-center uppercase shadow-lg"},[s("span",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.creator.nameOfNews))])])])],1),s("section",{staticClass:"p-10 relative"},[s("div",{staticClass:"absolute left-0 right-0 bg-center bg-repeat-x -mb-8 hidden md:block",staticStyle:{"z-index":"-1"}},[s("svg",{staticClass:"mt-48 w-full",staticStyle:{height:"600px"},attrs:{viewBox:"0 0 1440 190",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("rect",{attrs:{width:"1440",height:"190",fill:"white"}}),s("path",{attrs:{d:"M1440 95.4893C790 245.489 650 -54.5107 0 95.4893V0H1440V95.4893Z",fill:"#F7FAFC"}}),s("g",{attrs:{"stroke-width":"2"}},[s("g",{attrs:{stroke:"#EDF2F7"}},[s("path",{attrs:{d:"M0 95.4893C650 -54.5107 790 245.489 1440 95.4893"}}),s("path",{attrs:{d:"M0 95.4893C650 15.4893 790 175.489 1440 95.4893"}}),s("path",{attrs:{d:"M0 95.4893C650 -214.511 790 405.489 1440 95.4893"}})]),s("path",{attrs:{d:"M0 95.4893C650 -134.511 790 325.489 1440 95.4893",stroke:"#fed7d7"}})])])]),0==t.currentLayout?s("div",{staticClass:"container mx-auto"},t._l(t.listItem,(function(e){return s("div",{key:e._id,staticClass:"bg-white rounded-lg shadow-sm p-3 mt-4"},[s("h2",{staticClass:"cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"},[s("span",[t._v(t._s(e.title.title))])]),s("ul",{staticClass:"px-10 list-disc text-base pb-3"},[t._l(e.contents,(function(e){return[e.text?s("li",{key:e._id},[s("div",{staticClass:"text-xl"},[t._v(t._s(e.text))])]):t._e()]})),s("div",{staticClass:"list-none flex flex--wrap justify-around"},[t._l(e.contents,(function(e){return[e.urlImage?s("div",{key:e._id},[s("div",{staticClass:"py-3 mr-3",staticStyle:{"max-width":"400px"}},[s("img",{staticClass:"w-full h-full",attrs:{src:e.urlImage}})])]):t._e()]}))],2)],2)])})),0):2==t.currentLayout?s("div",t._l(t.listItem,(function(e){return s("div",{key:e._id,staticClass:"bg-white rounded-lg shadow-sm p-3 float-left lg:w-1/2"},[s("h2",{staticClass:"cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"},[s("span",[t._v(t._s(e.title.title))])]),s("ul",{staticClass:"px-10 list-disc text-base pb-3"},[t._l(e.contents,(function(e){return[e.text?s("li",{key:e._id},[s("div",{staticClass:"text-xl"},[t._v(t._s(e.text))])]):t._e()]})),s("div",{staticClass:"list-none flex flex--wrap justify-around"},[t._l(e.contents,(function(e){return[e.urlImage?s("div",{key:e._id},[s("div",{staticClass:"py-3 mr-3",staticStyle:{"max-width":"400px"}},[s("img",{staticClass:"w-full h-full",attrs:{src:e.urlImage}})])]):t._e()]}))],2)],2)])})),0):1==t.currentLayout?s("div",{staticClass:"grid grid-cols-2"},t._l(t.listItem,(function(e){return s("div",{key:e._id,staticClass:"bg-white rounded-lg shadow-sm p-3"},[s("h2",{staticClass:"cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"},[s("span",[t._v(t._s(e.title.title))])]),s("ul",{staticClass:"px-10 list-disc text-base pb-3"},[t._l(e.contents,(function(e){return[e.text?s("li",{key:e._id},[s("div",{staticClass:"text-xl"},[t._v(t._s(e.text))])]):t._e()]})),s("div",{staticClass:"list-none flex flex--wrap justify-around"},[t._l(e.contents,(function(e){return[e.urlImage?s("div",{key:e._id},[s("div",{staticClass:"py-3 mr-3",staticStyle:{"max-width":"400px"}},[s("img",{staticClass:"w-full h-full",attrs:{src:e.urlImage}})])]):t._e()]}))],2)],2)])})),0):t._e()]),s("footer",{staticClass:"clear-both w-full text-lg p-10 text-center bg-red-100 mt-5"},[s("div",{staticClass:"font-bold"},[s("span",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.creator.name))])])])],1)},E=[],F=n("8baf"),A=n("c0e9"),B=n.n(A),H={components:{PageLoader:j},data:function(){return{listItem:[],creator:"",toggle:"character-viewer",characters:null,chartOptions:{hoverBorderWidth:10},chartData:{hoverBackgroundColor:"red",hoverBorderWidth:10,labels:["consectetuer","amet","ipsum"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651","#00D8FF"],data:[1,10,5]}]}}},computed:{currentLayout:function(){return this.$store.state.typeOfLayout}},methods:{getData:function(){var t=this;console.log(this.$store.state.typeOfLayout),w.a.get("https://gwz-easy.herokuapp.com/news").then((function(e){t.listItem=e.data})),w.a.get("https://gwz-easy.herokuapp.com/creators").then((function(e){t.creator=e.data}))},genaratePdf:function(){var t=document.getElementById("canvas");B()(t).then((function(t){var e=t.toDataURL("image/png"),n=new F["a"]("p","mm"),s=n.internal.pageSize.getWidth(),a=n.internal.pageSize.getHeight();n.addImage(e,"PNG",0,0,s,a),n.save("news.pdf")}))}},created:function(){this.getData()}},U=H,V=(n("8b71"),Object(l["a"])(U,$,E,!1,null,null,null)),W=V.exports,R=n("2f62"),Y={TYPE_LAYOUT:{COL:0,ROW:1,FLOAT:2}},J=Y;s["a"].use(R["a"]);var X=new R["a"].Store({state:{typeOfLayout:window.localStorage.getItem("layout")||J.TYPE_LAYOUT.COL},mutations:{setLayout:function(t,e){t.typeOfLayout=e,window.localStorage.setItem("layout",e)}}}),q=X;s["a"].config.productionTip=!1,s["a"].use(d["a"]);var G=[{path:"/",component:W},{path:"/admin",component:P}],Z=new d["a"]({routes:G});new s["a"]({el:"#app",router:Z,store:q,render:function(t){return t(c)}})},"75c3":function(t,e,n){"use strict";var s=n("0153"),a=n.n(s);a.a},"7a8c":function(t,e,n){t.exports=n.p+"img/logo_company.51eddb74.png"},"85ec":function(t,e,n){},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var s=n("88d7"),a=n.n(s);a.a},"9d52":function(t,e,n){}});
//# sourceMappingURL=app.1d4939ec.js.map