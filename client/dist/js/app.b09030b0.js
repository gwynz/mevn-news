(function(t){function e(e){for(var a,i,r=e[0],l=e[1],c=e[2],d=0,h=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},1136:function(t,e,n){},"2b21":function(t,e,n){"use strict";var a=n("1136"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},o=[],i=(n("9d52"),{}),r=i,l=(n("034f"),n("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null),u=c.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{staticClass:"fixed"},t._l(t.showNotify,(function(e,a){return n("div",{key:a,staticClass:"mt-4"},[e?n("div",[n("div",{staticClass:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-teal-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(0,!0)])])]):t._e(),e?t._e():n("div",[n("div",{staticClass:"fixed bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",attrs:{role:"alert"}},[n("div",[n("div",{staticClass:"py-1"},[n("svg",{staticClass:"fill-current h-6 w-6 text-teal-500 mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}})])]),t._m(1,!0)])])])])})),0),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Tiêu đề")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Nhập tiêu đề "},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.saveTitle}},[t._v("Lưu")])]),n("div",{staticClass:"rounded overflow-hidden shadow-md mt-5"},t._l(t.listItem,(function(e,a){return n("div",{key:e._id,staticClass:"px-6 py-4 hover:bg-gray-200"},[n("div",{staticClass:"flex justify-between"},[n("p",{staticClass:"text-gray-700 text-base font-bold cursor-pointer",on:{click:function(n){return n.preventDefault(),t.showContentTitle(e)}}},[t._v(t._s(e.title.title))]),n("button",{staticClass:"h-6 bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded-full flex items-center",on:{click:function(n){return t.removeTitle(e.title._id)}}},[t._v("X")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.collapseContentTitle[t.listItem.indexOf(e)],expression:"collapseContentTitle[listItem.indexOf(item)]"}],staticClass:"px-10 py-6"},[n("div",{staticClass:"text-gray-700 text-base w-full flex justify-between"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newContents[a],expression:"newContents[index]"}],staticClass:"w-full h-24 resize border rounded focus:outline-none focus:shadow-outline",domProps:{value:t.newContents[a]},on:{input:function(e){e.target.composing||t.$set(t.newContents,a,e.target.value)}}}),n("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold px-1 rounded-full flex items-center ml-3",on:{click:function(n){return t.saveContent(e.title._id,a)}}},[t._v("A")])]),n("div",{staticClass:"text-gray-700 text-base w-full"},[t._l(e.contents,(function(a){return n("div",{key:a._id,staticClass:"p-8 w-full"},[a.text?n("div",{staticClass:"flex justify-between"},[t._v(" "+t._s(a.text)+" "),e.contents.length?n("button",{staticClass:"text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 content-center h-8 w-8",on:{click:function(e){return t.removeContent(a._id)}}},[t._v("X")]):t._e()]):n("div",{staticClass:"w-1/2 flex justify-between"},[n("img",{attrs:{src:a.urlImage,alt:""}}),e.contents.length?n("button",{staticClass:"text-red-500 hover:text-red-400 font-bold px-1 rounded-full flex items-center ml-3 content-center h-8 w-8 flex-end",on:{click:function(e){return t.removeContent(a._id)}}},[t._v("X")]):t._e()])])})),n("div",[n("label",{staticClass:"mt-2 w-48 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-500"},[n("svg",{staticClass:"w-8 h-8",attrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"}})]),n("span",{staticClass:"mt-2 text-base leading-normal"},[t._v("Chọn Image")]),n("input",{ref:"fileImages",refInFor:!0,staticClass:"hidden",attrs:{type:"file",id:"file"},on:{change:function(n){return t.handleFileUpload(a,e.title._id)}}})])])],2)]),t._v("> ")])})),0)]),n("div",{staticClass:"mt-10 max-w-5xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-2xl font-bold mb-2",attrs:{for:"username"}},[t._v("Người viết")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newCreator.name,expression:"newCreator.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Nhập người viết"},domProps:{value:t.newCreator.name},on:{input:function(e){e.target.composing||t.$set(t.newCreator,"name",e.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.saveCreator}},[t._v("Lưu")])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-64"},[n("p",{staticClass:"text-sm"},[t._v("Da luu thanh cong")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-64"},[n("p",{staticClass:"text-sm"},[t._v("Da luu that bai")])])}],f=(n("c975"),n("2909")),v=n("bc3a"),m=n.n(v),w={data:function(){return{listItem:[],collapseContentTitle:[],newTitle:"",newContents:[],showNotify:[],newCreator:"",image:{}}},methods:{getData:function(){var t=this;m.a.get("https://gwz-easy.herokuapp.com/news").then((function(e){t.listItem=e.data}))},getCreator:function(){var t=this;m.a.get("https://gwz-easy.herokuapp.com/creators").then((function(e){t.newCreator=e.data}))},showContentTitle:function(t){this.collapseContentTitle[this.listItem.indexOf(t)]=!this.collapseContentTitle[this.listItem.indexOf(t)],this.collapseContentTitle=Object(f["a"])(this.collapseContentTitle)},saveTitle:function(){var t=this;m.a.post("https://gwz-easy.herokuapp.com/news",{title:this.newTitle}).then((function(e){return t.newTitle="",t.getData(),t.showNotify.push(!0),setTimeout((function(){t.showNotify.shift()}),2e3),e})).catch((function(t){return console.log("loi ne",t)}))},removeTitle:function(t){var e=this;m.a.delete("https://gwz-easy.herokuapp.com/news/"+t).then((function(t){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},saveContent:function(t,e){var n=this,a=this.newContents[e];m.a.post("https://gwz-easy.herokuapp.com/contents",{title_id:t,text:a}).then((function(t){return n.newContents[e]="",n.getData(),n.showNotify.push(!0),setTimeout((function(){n.showNotify.shift()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},removeContent:function(t){var e=this;console.log(t),m.a.delete("https://gwz-easy.herokuapp.com/contents/"+t).then((function(t){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.pop()}),2e3),t})).catch((function(t){return console.log("loi ne",t)}))},saveCreator:function(){var t=this;m.a.post("https://gwz-easy.herokuapp.com/creators",{creator:this.newCreator}).then((function(e){return t.getCreator(),t.showNotify.push(!0),setTimeout((function(){t.showNotify.shift()}),2e3),e})).catch((function(t){return console.log("loi ne",t)}))},handleFileUpload:function(t,e){this.image=this.$refs.fileImages[t].files[0],console.log(e),this.supmitFile(e)},supmitFile:function(t){var e=this;console.log(t);var n=new FormData;n.append("image",this.image),n.append("title_id",t),m.a.post("https://gwz-easy.herokuapp.com/contents/upload-images",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){return e.getData(),e.showNotify.push(!0),setTimeout((function(){e.showNotify.pop()}),2e3),res})).catch((function(){return res}))}},mounted:function(){this.getData(),this.getCreator()}},g=w,b=(n("2b21"),Object(l["a"])(g,h,p,!1,null,null,null)),x=b.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"canvas"}},[a("header",{staticClass:"m-10 my-3 relative"},[a("img",{staticClass:"absolute w-16 h-16 left-0 top-0",attrs:{src:n("7a8c")}}),a("router-link",{attrs:{to:"/admin"}},[a("div",{staticClass:"rounded w-1/3 cursor-pointer mx-auto hover:bg-primary_hover px-4 py-3 bg-primary text-white text-3xl font-bold text-center uppercase shadow-lg"},[t._v("Bản tin thị trường")])])],1),a("section",{staticClass:"p-10 relative"},[a("div",{staticClass:"absolute left-0 right-0 bg-center bg-repeat-x -mb-8 hidden md:block",staticStyle:{"z-index":"-1"}},[a("svg",{attrs:{viewBox:"0 0 1440 190",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("rect",{attrs:{width:"1440",height:"190",fill:"white"}}),a("path",{attrs:{d:"M1440 95.4893C790 245.489 650 -54.5107 0 95.4893V0H1440V95.4893Z",fill:"#F7FAFC"}}),a("g",{attrs:{"stroke-width":"2"}},[a("g",{attrs:{stroke:"#EDF2F7"}},[a("path",{attrs:{d:"M0 95.4893C650 -54.5107 790 245.489 1440 95.4893"}}),a("path",{attrs:{d:"M0 95.4893C650 15.4893 790 175.489 1440 95.4893"}}),a("path",{attrs:{d:"M0 95.4893C650 -214.511 790 405.489 1440 95.4893"}})]),a("path",{attrs:{d:"M0 95.4893C650 -134.511 790 325.489 1440 95.4893",stroke:"#fed7d7"}})])]),a("svg",{staticClass:"mt-48 w-full",staticStyle:{height:"600px"},attrs:{viewBox:"0 0 1440 190",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("rect",{attrs:{width:"1440",height:"190",fill:"white"}}),a("path",{attrs:{d:"M1440 95.4893C790 245.489 650 -54.5107 0 95.4893V0H1440V95.4893Z",fill:"#F7FAFC"}}),a("g",{attrs:{"stroke-width":"2"}},[a("g",{attrs:{stroke:"#EDF2F7"}},[a("path",{attrs:{d:"M0 95.4893C650 -54.5107 790 245.489 1440 95.4893"}}),a("path",{attrs:{d:"M0 95.4893C650 15.4893 790 175.489 1440 95.4893"}}),a("path",{attrs:{d:"M0 95.4893C650 -214.511 790 405.489 1440 95.4893"}})]),a("path",{attrs:{d:"M0 95.4893C650 -134.511 790 325.489 1440 95.4893",stroke:"#fed7d7"}})])])]),a("div",{},t._l(t.listItem,(function(e){return a("div",{key:e._id,staticClass:"bg-white rounded-lg shadow pl-3 m-2 float-left",staticStyle:{width:"48%"}},[a("h2",{staticClass:"cursor-pointer hover:text-primary_hover font-bold text-2xl uppercase underline my-5 text-primary bg-red-100 p-3"},[a("span",[t._v(t._s(e.title.title))])]),a("ul",{staticClass:"px-10 list-disc text-base pb-3"},[t._l(e.contents,(function(e){return[e.text?a("li",{key:e._id},[a("div",{staticClass:"text-xl"},[t._v(t._s(e.text))])]):t._e()]})),a("div",{staticClass:"list-none flex flex--wrap justify-around"},t._l(e.contents,(function(e){return e.urlImage?a("div",{key:e._id},[a("div",{staticClass:"py-10 mr-3",staticStyle:{"max-width":"500px"}},[a("img",{staticClass:"w-full h-full",attrs:{src:e.urlImage}})])]):t._e()})),0)],2)])})),0)]),a("footer",{staticClass:"clear-both w-full text-lg p-10 text-center bg-red-100 mt-5"},[a("div",{staticClass:"font-bold"},[t._v("Chúc Anh / Chị đầu tư thành công!")]),a("div",{staticClass:"font-bold mt-2"},[t._v("Người soạn tin: "+t._s(t.creator.name))])])])},y=[],_=n("9b82"),k=n.n(_),T=n("c0e9"),N=n.n(T),z={data:function(){return{listItem:[],creator:"",toggle:"character-viewer",characters:null,chartOptions:{hoverBorderWidth:10},chartData:{hoverBackgroundColor:"red",hoverBorderWidth:10,labels:["consectetuer","amet","ipsum"],datasets:[{label:"Data One",backgroundColor:["#41B883","#E46651","#00D8FF"],data:[1,10,5]}]}}},methods:{getData:function(){var t=this;m.a.get("https://gwz-easy.herokuapp.com/news").then((function(e){t.listItem=e.data})),m.a.get("https://gwz-easy.herokuapp.com/creators").then((function(e){t.creator=e.data}))},genaratePdf:function(){var t=document.getElementById("canvas");N()(t).then((function(t){var e=t.toDataURL("image/png"),n=new k.a("p","mm"),a=n.internal.pageSize.getWidth(),s=n.internal.pageSize.getHeight();n.addImage(e,"PNG",0,0,a,s),n.save("news.pdf")}))}},created:function(){this.getData()}},O=z,D=(n("8b71"),Object(l["a"])(O,C,y,!1,null,null,null)),M=D.exports;a["a"].config.productionTip=!1,a["a"].use(d["a"]);var j=[{path:"/",component:M},{path:"/admin",component:x}],F=new d["a"]({routes:j});new a["a"]({el:"#app",router:F,render:function(t){return t(u)}})},"7a8c":function(t,e,n){t.exports=n.p+"img/logo_company.51eddb74.png"},"85ec":function(t,e,n){},"88d7":function(t,e,n){},"8b71":function(t,e,n){"use strict";var a=n("88d7"),s=n.n(a);s.a},"9d52":function(t,e,n){},ab9b:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="ab9b"}});
//# sourceMappingURL=app.b09030b0.js.map