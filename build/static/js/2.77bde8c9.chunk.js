(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return l}),n.d(t,"b",function(){return c});var o=n(124),i=n(1),a=n.n(i),s=function(e,t,n,o){var i=Math.floor(e/t),s=i-n%i;if(o!==s){for(var r=[],l=0;l<s;l++)r[l]=a.a.createElement("div",{key:l,className:"finder_file empty_file"});return r}return!1},r=function(e){var t=JSON.parse(JSON.stringify(e));return t.filter(function(e){var n=t.filter(function(t){return e.id===t.pid});return n.length>0&&(e.children=n),0===e.pid})},l=function(e,t){window.parent.postMessage({type:t,value:e},"*")},c=function(e){var t;if(e)switch(e.type){case"point":e.value&&(t=a.a.createElement("p",null));break;case"icon":e.value&&(t=a.a.createElement(o.a,{size:e.size?e.size:"xs",type:e.value}));break;case"image":t=a.a.createElement("img",{src:e.value,alt:e.type});break;default:t=null}return t}},165:function(e,t,n){"use strict";var o=n(27),i=n(28),a=n(31),s=n(29),r=n(30),l=n(1),c=n.n(l),u=n(136),d=n(149),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(a.a)(this,Object(s.a)(t).call(this,e))).state={},n.mouseMoveDown=function(e){e.stopPropagation(),n.layoutLeftWidth=n.layoutLeft.offsetWidth,n.layoutRightWidth=n.layoutRight.offsetWidth,n.moveStartX=e.clientX,n.moving=!0,window.addEventListener("mousemove",n.moveLayoutLeftRightWidth)},n.moveLayoutLeftRightWidth=function(e){if(e.stopPropagation(),n.moving){var t=e.clientX,o=n.layoutLeftWidth+(t-n.moveStartX),i=n.layoutRightWidth-(t-n.moveStartX);if(o>120&&i>200){if(n.props.fileLists&&n.props.emptyLists){var a=Object(d.a)(i,90,n.props.fileLists.length,n.props.emptyLists.length);a&&n.props.emptyList(a)}n.layoutLeft.style.width=o+"px",n.layoutRight.style.width="calc(100% - ".concat(o+8,"px)")}}},n.mouseMoveUp=function(){n.moving=!1,n.moveStartX=null,n.layoutLeftWidth=null,n.layoutRightWidth=null,window.removeEventListener("mousemove",n.moveLayoutLeftRightWidth)},n.moving=!1,n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.mouseMoveUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.mouseMoveUp)}},{key:"render",value:function(){var e=this,t={backgroundColor:"#eee",boxShadow:"0 0 1px rgba(255,255,255,0.4)"};this.props.borderCenter&&(t.background=this.props.borderCenter);return c.a.createElement(u.View,{width:"100%",layout:"horizontal",horizontalAlignment:"left",height:"100%"},c.a.createElement("div",{id:"layoutLeft",ref:function(t){return e.layoutLeft=t},style:{width:"250px",background:"#fff"}},this.props.children.find(function(e){return"nav"===e.type})),c.a.createElement(u.View,{heigtht:"100%",style:{cursor:"col-resize",padding:"0 1px"},onMouseDown:this.mouseMoveDown},c.a.createElement(u.View,{width:"2",style:t})),c.a.createElement("div",{id:"layoutRight",ref:function(t){return e.layoutRight=t},style:{width:"calc(100% - 258px)",background:"#F0F2F5",overflowX:"scroll",overflowY:"hidden"}},this.props.children.find(function(e){return"main"===e.type})))}}]),t}(l.Component);t.a=p},173:function(e,t,n){"use strict";var o=n(199),i=n(27),a=n(28),s=n(31),r=n(29),l=n(30),c=n(1),u=n.n(c),d=n(8),p=n.n(d),m=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(a)))).onLoad=function(){},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){p.a.findDOMNode(this).addEventListener("load",this.onLoad)}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.isLoad,i=e.title,a=Object(o.a)({},t,{visibility:n?"visible":"hidden"});return u.a.createElement(c.Fragment,null,u.a.createElement("iframe",{name:i+"_frame",title:i,frameBorder:this.props.frameBorder,style:a,width:this.props.width,src:this.props.src,onLoad:this.props.onLoad}))}}]),t}(c.Component);t.a=m},201:function(e,t,n){"use strict";var o=n(27),i=n(28),a=n(31),s=n(29),r=n(30),l=n(1),c=n.n(l),u=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).getDate=function(){var e=n.props,t=e.dataTime,o=e.setDataTime,i=new Date,a=i.getFullYear(),s=i.getMonth()+1,r=i.getDate(),l=i.getDay(),c=i.getHours(),u=i.getMinutes();(s<=9&&(s="0"+s),r<=9&&(r="0"+r),c<=9&&(c="0"+c),u<=9&&(u="0"+u),t.minute!==u||t.hour!==c||t.day!==r)&&o({year:a,month:s,day:r,hour:c,minute:u,week:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"][l]});setTimeout(n.getDate,1e3)},n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getDate()}},{key:"shouldComponentUpdate",value:function(e){return e.dataTime!==this.props.dataTime}},{key:"render",value:function(){var e=this.props.dataTime,t=e.year,n=e.month,o=e.day,i=e.hour,a=e.minute,s=e.week;return c.a.createElement("div",{className:"data_time"},"win"===this.props.type?c.a.createElement(l.Fragment,null,c.a.createElement("div",null,"".concat(i,":").concat(a," \u5468").concat(s)),c.a.createElement("div",null,"".concat(t,"/").concat(n,"/").concat(o))):c.a.createElement(l.Fragment,null,"".concat(t,"/").concat(n,"/").concat(o," ").concat(i,":").concat(a," \u5468").concat(s)))}}]),t}(l.Component);t.a=u},202:function(e,t,n){"use strict";var o=n(27),i=n(28),a=n(31),s=n(29),r=n(30),l=n(1),c=n.n(l),u=n(149),d=(n(203),function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onWindowResize=function(){var e=Object(u.a)(n.files_list.offsetWidth,90,n.props.fileLists.length,n.props.emptyLists.length);e&&n.props.emptyList(e)},n.domdrugstart=function(e,t,n,o){o.dataTransfer.setData("name",t),o.dataTransfer.setData("sort",e)},n.dragenter=function(e){},n.dragleave=function(e){},n.drop=function(e,t,o,i){i.preventDefault();var a=i.dataTransfer.getData("name"),s=i.dataTransfer.getData("sort");t.map(function(t){return t.name===a?t[o]=e:t[o]>s&&t[o]<e+1&&t[o]--,t}),n.props.setFileList(t)},n.allowDrop=function(e){e.preventDefault()},n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.onWindowResize(),window.addEventListener("resize",this.onWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=this,t=this.props,n=t.fileLists,o=t.match,i=t.history;return c.a.createElement("div",{ref:function(t){e.files_list=t},className:"findder_files_list"},n.sort(this.compare("sort")).map(function(t){return c.a.createElement("div",{key:t.name,className:"finder_file"},c.a.createElement("div",{onDoubleClick:function(){i.push(o.path+"/"+t.id)},className:"file",onDragEnter:e.dragenter,onDragLeave:e.dragleave,onDragStart:function(n){e.domdrugstart(t.sort,t.name,t.imgUrl,n)},onDrop:function(n){e.drop(t.sort,e.props.fileLists,"sort",n)},onDragOver:e.allowDrop},c.a.createElement("img",{src:t.logo,alt:t.name}),c.a.createElement("span",null,t.name)))}),this.props.emptyLists)}},{key:"compare",value:function(e){return function(t,n){return t[e]<n[e]?-1:t[e]>n[e]?1:0}}}]),t}(l.Component));t.a=d},203:function(e,t,n){},336:function(e,t,n){},467:function(e,t,n){},469:function(e,t,n){},683:function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"addWindowList",function(){return y}),n.d(o,"openMenuNav",function(){return v}),n.d(o,"clearMenuNav",function(){return g}),n.d(o,"mouseEnterMenu",function(){return E}),n.d(o,"mouseLeavelMenu",function(){return L}),n.d(o,"mouseEnterMenuNav",function(){return N}),n.d(o,"mouseLeavelMenuNav",function(){return M}),n.d(o,"closeWindow",function(){return _}),n.d(o,"hiddenWindow",function(){return O}),n.d(o,"showWindow",function(){return b}),n.d(o,"loadWindow",function(){return x}),n.d(o,"setDateTime",function(){return S}),n.d(o,"setWindowOpenList",function(){return W}),n.d(o,"handleOpenNav",function(){return k});var i={};n.r(i),n.d(i,"empty_list",function(){return j}),n.d(i,"set_file_list",function(){return D});var a=n(27),s=n(28),r=n(31),l=n(29),c=n(30),u=n(1),d=n.n(u),p=n(184),m=n(222),h=n(223),f=n(140),w=Object(f.fromJS)({dataTime:{year:"0000",month:"00",day:"00",hour:"00",minute:"00",week:""},tools:[{name:"\u8bbf\u8fbe",type:"finder",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/finder.png",isShow:!0,url:"/mac/finder",isIframe:!0},{name:"chrome",type:"chrome",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/launchpad.png",isShow:!0,url:"http://www.baidu.com",isIframe:!0}],openWindowList:[],homeNav:{name:"&#xe6be;",type:"Home",nav:[[{name:"\u5173\u4e8e\u672c\u673a",ischildren:!1,select:!1}],[{name:"\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e...",ischildren:!1,select:!1}],[{name:"\u6700\u8fd1\u4f7f\u7528\u9879\u76ee",ischildren:!0,children:[[{name:"New",select:!1},{name:"Open133",select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0,select:!0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0},{name:"Open",ischildren:1,select:!1,logo:{type:0,font:"&#xe602;"}}]],select:!1}],[{name:"\u9000\u51fa\u767b\u5f55\uff08\u7528\u6237\u540d\uff09",ischildren:!1}]]},menuNav:[{name:"File",type:"File",nav:[[{name:"New1",ischildren:!1,select:!1},{name:"Open1",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New2",ischildren:!1,select:!0},{name:"Open2",ischildren:!0,children:[[{name:"New",select:!1},{name:"Open133",select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0,select:!0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0},{name:"Open",ischildren:1,select:!1,logo:{type:0,font:"&#xe602;"}}]],select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New3",ischildren:!1},{name:"Open3",ischildren:!0,children:[[{name:"New2",select:!1},{name:"Open3",select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",select:!0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0},{name:"Open",ischildren:1,select:!1,logo:{type:0,font:"&#xe602;"}}]],select:!1,logo:{type:0,font:"&#xe602;"}}]]},{name:"Edit",type:"Edit",nav:[[{name:"New4",ischildren:!1,select:!1},{name:"Open4",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New5",ischildren:!1,select:!1},{name:"Open5",ischildren:!0,children:[[{name:"New",ischildren:!1,select:!1},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:!1,select:!0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}]],select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New6",ischildren:!1,select:!1},{name:"Open2adfdfs",ischildren:!0,children:[[{name:"New2",ischildren:!1,select:!1},{name:"Open3",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:!1,select:!0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}],[{name:"New",ischildren:0},{name:"Open",ischildren:!1,select:!1,logo:{type:0,font:"&#xe602;"}}]],select:!1,logo:{type:0,font:"&#xe602;"}}]]}],openMenuNav:{},isEnterMenu:!1,isEnterMenuNav:!1}),y=function(e){return{type:"homeMac/ADD_WINDOW_LIST",openWindowList:Object(f.fromJS)(e)}},v=function(e){return{type:"homeMac/OPEN_MENU_NAV",menuNav:Object(f.fromJS)(e)}},g=function(){return{type:"homeMac/CLEAR_MENU_NAV",isEnterMenu:!1,isEnterMenuNav:!1,openMenuNav:Object(f.fromJS)({})}},E=function(){return{type:"homeMac/MOUSE_ENTER_MENU",isEnterMenu:!0}},L=function(){return{type:"homeMac/MOUSE_LEAVEL_MENU",isEnterMenu:!1}},N=function(){return{type:"homeMac/MOUSE_ENTER_MENU_NAV",isEnterMenuNav:!0}},M=function(){return{type:"homeMac/MOUSE_LEAVEL_MENU_NAV",isEnterMenuNav:!1}},_=function(e,t){var n=t.findIndex(function(t){return t.type===e}),o=t;return o.splice(n,1),{type:"homeMac/CLOSE_WINDOW",openWindowList:Object(f.fromJS)(o)}},O=function(e,t){var n=t.findIndex(function(t){return t.type===e.type});return t[n].isShow=!1,{type:"windows/HIDDEN_WINDOW",windowList:Object(f.fromJS)(t)}},b=function(e){return{type:"windows/SHOW_WINDOW",windowList:Object(f.fromJS)(e)}},x=function(e,t){var n=t.findIndex(function(t){return t.type===e.type}),o=t;return o[n].isLoad=!0,{type:"homeMac/LOAD_WINDOW",windowList:Object(f.fromJS)(o)}},S=function(e){return{type:"windows/SET_DATE_TIME",dataTime:Object(f.fromJS)(e)}},W=function(e,t){return function(n){var i=t.findIndex(function(t){return t.type===e.type}),a=t;if(i>=0){var s=Math.max.apply(Math,t.map(function(e){return e.zIndex})),r=t[i].zIndex;a[i].isShow=!0,s!==r&&a.forEach(function(e,n){n===i?(a[n].zIndex=10*t.length-10,a[n].isTop=!0):(a[n].zIndex=e.zIndex-10,a[n].isTop=!1)}),n(o.showWindow(a))}else{a.forEach(function(e,t){a[t].isTop=!1});var l=e;l.zIndex=10*a.length,l.isTop=!0,l.isLoad=!1,a.push(l),n(o.addWindowList(a))}}},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nav";return function(i){var a=t,s={top:e.currentTarget.offsetTop+26,left:e.currentTarget.offsetLeft};"nav"===n&&(s.left+=33),a.style=s,i(o.openMenuNav(a)),i(o.mouseEnterMenu())}},T=Object(f.fromJS)({emptyLists:[],fileLists:[{name:"\u6587\u4ef6\u540d1",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:1},{name:"\u6587\u4ef6\u540d22",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:2},{name:"\u6587\u4ef6\u540d3",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:3},{name:"\u6587\u4ef6\u540d4",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:4},{name:"\u6587\u4ef6\u540d43",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:5},{name:"\u6587\u4ef6\u540d6",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:6},{name:"\u6587\u4ef6\u540d7",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:7},{name:"\u6587\u4ef6\u540d8",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:8},{name:"\u6587\u4ef6\u540d9",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:9},{name:"\u6587\u4ef6\u540d87",type:"fileimg",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/fileimg.png",sort:10},{name:"\u6587\u4ef6\u540d232",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:11},{name:"\u6587\u4ef6\u540d34",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:12},{name:"\u6587\u4ef6\u540d55",type:"file",logo:"https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/logo/file/file.png",sort:13}],leftNavLists:[{title:"\u4e2a\u4eba\u6536\u85cf",type:"person",navList:[{type:"download",name:"\u4e0b\u8f7d",icon:"&#xe758;",iconStyle:{color:"#93969C"},url:"/download"},{type:"application",name:"\u5e94\u7528\u7a0b\u5e8f",icon:"&#xe69e;",iconStyle:{color:"#93969C"},url:"/application"},{type:"file",name:"\u6587\u7a3f",icon:"&#xe652;",iconStyle:{color:"#93969C"},url:"/file"},{type:"desktop",name:"Desktop",icon:"&#xe685;",iconStyle:{color:"#93969C"},url:"/desktop"}]},{title:"iCloud",type:"iCloud",navList:[{type:"cloud",name:"\u4e91\u76d8",icon:"&#xe76b;",iconStyle:{color:"#93969C"},url:"/cloud"}]},{title:"\u6807\u7b7e",type:"tags",navList:[{type:"red",name:"\u7ea2\u8272",icon:"&#xe606;",iconStyle:{color:"red"},url:"/red"},{type:"yellow",name:"\u9ec4\u8272",icon:"&#xe606;",iconStyle:{color:"yellow"},url:"/yellow"},{type:"blue",name:"\u84dd\u8272",icon:"&#xe606;",iconStyle:{color:"blue"},url:"/blue"},{type:"green",name:"\u7eff\u8272",icon:"&#xe606;",iconStyle:{color:"green"},url:"/green"}]}]}),j=function(e){return{type:"fileMac/EMPTY_LIST",list:Object(f.fromJS)(e)}},D=function(e){return{type:"fileMac/SET_FILE_LIST",list:Object(f.fromJS)(e)}},I=Object(h.combineReducers)({homeMac:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"homeMac/ADD_WINDOW_LIST":return e.set("openWindowList",t.openWindowList);case"homeMac/OPEN_MENU_NAV":return e.set("openMenuNav",t.menuNav);case"homeMac/CLEAR_MENU_NAV":return e.merge({isEnterMenu:t.isEnterMenu,isEnterMenuNav:t.isEnterMenuNav,openMenuNav:t.openMenuNav});case"homeMac/MOUSE_ENTER_MENU":case"homeMac/MOUSE_LEAVEL_MENU":return e.set("isEnterMenu",t.isEnterMenu);case"homeMac/MOUSE_ENTER_MENU_NAV":case"homeMac/MOUSE_LEAVEL_MENU_NAV":return e.set("isEnterMenuNav",t.isEnterMenuNav);case"homeMac/CLOSE_WINDOW":return e.set("openWindowList",t.openWindowList);case"windows/HIDDEN_WINDOW":case"windows/SHOW_WINDOW":case"homeMac/LOAD_WINDOW":return e.set("openWindowList",t.windowList);case"windows/SET_DATE_TIME":return e.set("dataTime",t.dataTime);default:return e}},fileMac:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fileMac/EMPTY_LIST":return e.set("emptyLists",t.list);case"fileMac/SET_FILE_LIST":return e.set("fileLists",t.list);default:return e}}}),z=Object(p.a)(m.a)(p.c)(I),C=n(151),V=n(686),U=n(677),A=(n(336),n(136)),F=n(199),J=window.innerWidth,H=window.innerHeight,R=null,X=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={isFullScreen:!1},n.mouseMoveDown=function(e,t){n.state.isFullScreen||(e.stopPropagation(),n.windowWidth=n.window.offsetWidth,n.windowHeight=n.window.offsetHeight,n.moveStartX=e.clientX,n.moveStartY=e.clientY,n.moving=!0,n.type=t,window.addEventListener("mousemove",n.mouseMove),n.windowCover.style.display="block")},n.moveDivWeightHeight=function(e){if(e.preventDefault(),n.moving){var t=e.clientX,o=e.clientY,i=n.windowWidth+t-n.moveStartX,a=n.windowHeight+o-n.moveStartY;i>460&&i<J-77&&(n.window.style.width=i+"px"),a>400&&a<H-26&&(n.window.style.height=a+"px")}},n.handleClickSetScreen=function(){n.state.isFullScreen?n.setState({isFullScreen:!1},function(){n.window.style.width=R.width,n.window.style.height=R.height,n.window.style.left=R.left,n.window.style.top=R.top,n.window.style.zIndex=R.zIndex,R=null}):(R=Object(F.a)({},n.window.style),n.setState({isFullScreen:!0},function(){n.window.style.width=J+"px",n.window.style.height=H+"px",n.window.style.top="0px",n.window.style.left="0px",n.window.style.zIndex="10"}))},n.mouseMovePosition=function(e){e.preventDefault();var t=e.clientX,o=e.clientY;n.windowLeftEnd=n.windowLeft+t-n.moveStartX,n.windowTopEnd=n.windowTop+o-n.moveStartY,n.windowTopEnd<26&&(n.windowTopEnd=26),n.windowTopEnd>=document.body.clientHeight-26&&(n.windowTopEnd=document.body.clientHeight-26),n.windowLeftEnd<80-n.windowWidth&&(n.windowLeftEnd=80-n.windowWidth),n.windowLeftEnd>=document.body.clientWidth-80&&(n.windowLeftEnd=document.body.clientWidth-80),n.window.style.top=n.windowTopEnd+"px",n.window.style.left=n.windowLeftEnd+"px"},n.mouseMove=function(e){e.preventDefault(),n.moving&&("position"===n.type&&n.mouseMovePosition(e),"wh"===n.type&&n.moveDivWeightHeight(e))},n.mouseUp=function(){n.moving=!1,"position"===n.type&&(n.windowLeft=n.windowLeftEnd,n.windowTop=n.windowTopEnd,n.windowCover.style.display="none"),"wh"===n.type&&(n.moveStartX=null,n.moveStartY=null,n.windowWidth=null,n.windowHeight=null,n.windowCover.style.display="none"),n.type="",window.removeEventListener("mousemove",n.mouseMove)},n.moving=!1,n.type="",n.width=J-105+"px",n.height=H-50+"px",n.windowTop=26,n.windowLeft=80,n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.mouseUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.mouseUp)}},{key:"shouldComponentUpdate",value:function(e,t){return e.zIndex!==this.props.zIndex||(e.window!==this.props.window||t.isFullScreen!==this.state.isFullScreen)}},{key:"render",value:function(){var e=this,t=this.state.isFullScreen,n={position:"absolute",display:this.props.window.isShow?"block":"none",top:this.windowTop+"px",left:this.windowLeft+"px",width:this.width,height:this.height,zIndex:this.props.zIndex},o={width:"50px",height:"50px",position:"absolute",bottom:"-15px",right:"-15px",cursor:"se-resize",zIndex:this.props.zIndex+9},i=this.props.window.isTop?"none":"block",a={width:"100%",height:"100%",position:"absolute",zIndex:this.props.zIndex+8,display:i};return d.a.createElement(u.Fragment,null,d.a.createElement("span",{style:n,ref:function(t){return e.window=t}},d.a.createElement(A.Window,{chrome:!0,width:"100%",height:"100%",padding:"0px"},d.a.createElement(A.TitleBar,{title:this.props.window.name,controls:!0,isFullscreen:t,onCloseClick:function(){e.props.closeWindow(e.props.window.type,e.props.openWindowList)},onMinimizeClick:function(){return e.props.hiddenWindow(e.props.window,e.props.openWindowList)},onResizeClick:function(){e.handleClickSetScreen()},onMouseDown:function(t){e.mouseMoveDown(t,"position"),e.props.setWindowIndex(e.props.window,e.props.openWindowList)}}),d.a.createElement(A.View,{padding:"0px",width:"100%",style:{overflow:"scroll"}},this.props.children),d.a.createElement("div",{ref:function(t){return e.windowCover=t},style:a,onClick:function(){return e.props.setWindowIndex(e.props.window,e.props.openWindowList)}})),!t&&d.a.createElement("span",{onMouseDown:function(t){e.mouseMoveDown(t,"wh"),e.props.setWindowIndex(e.props.window,e.props.openWindowList)},style:o})))}}]),t}(u.Component),P=(n(467),function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={isChildren:!1,childrenNavStyle:{},openChildrenMenuNav:{}},n.handleMouseLeave=function(e){e.ischildren&&n.setState({isChildren:!1,openChildrenMenuNav:{},childrenNavStyle:{}})},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"nav_menu_mac",onMouseEnter:this.props.mouseEnter,onMouseLeave:this.props.mouseLeavel,style:this.props.hasOwnProperty("style")?this.props.style:{}},this.props.dataList.map(function(t,n){return d.a.createElement("ul",{key:n,className:n>0?"borderTop":""},t.map(function(t,n){return d.a.createElement("li",{key:t.name,onMouseEnter:function(n){return e.handleMouseEnter(n,t)},onMouseLeave:function(){return e.handleMouseLeave(t)}},d.a.createElement("div",{className:"nav_check_logo"},t.select&&d.a.createElement("i",{className:"iconfont"},"\ue66e")),t.hasOwnProperty("logo")&&(0===t.logo.type?d.a.createElement("i",{className:"iconfont nav_left_logo",style:t.logo.style,dangerouslySetInnerHTML:{__html:t.logo.font}}):d.a.createElement("img",{src:t.logo.src,className:t.logo.class,style:t.logo.style,alt:t.src})),d.a.createElement("span",null,t.name),t.ischildren&&d.a.createElement("i",{className:"iconfont nav_right_logo",style:{position:"absolute",right:"5px"}},"\ue61c"),e.state.isChildren&&e.state.openChildrenMenuNav.name===t.name&&d.a.createElement(Y,{style:e.state.childrenNavStyle,dataList:e.state.openChildrenMenuNav}))}))}))}},{key:"handleMouseEnter",value:function(e,t){if(t.ischildren){var n={top:e.currentTarget.offsetTop-e.currentTarget.offsetHeight-4+"px",left:e.currentTarget.offsetLeft+e.currentTarget.offsetWidth+1+"px"};this.setState({isChildren:!0,childrenNavStyle:n,openChildrenMenuNav:t})}}}]),t}(d.a.Component)),Y=function(e){return d.a.createElement("div",{className:"nav_menu_mac",style:e.hasOwnProperty("style")?e.style:{}},e.dataList.children.map(function(e,t){return d.a.createElement("ul",{key:t,className:t>0?"borderTop":""},e.map(function(e,t){return d.a.createElement("li",{key:e.name},d.a.createElement("div",{className:"nav_check_logo"},e.select&&d.a.createElement("i",{className:"iconfont"},"\ue66e")),e.hasOwnProperty("logo")&&(0===e.logo.type?d.a.createElement("i",{className:"iconfont nav_left_logo",style:e.logo.style,dangerouslySetInnerHTML:{__html:e.logo.font}}):d.a.createElement("img",{src:e.logo.src,className:e.logo.class,style:e.logo.style,alt:e.src})),d.a.createElement("span",null,e.name))}))}))},B=P,q=n(201),G=n(173),K=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(r.a)(this,Object(l.a)(t).call(this,e)),window.onmouseup=function(e){return n.props.mouseClick(e,n.props.isEnterMenu,n.props.isEnterMenuNav,n.props.openMenuNav)},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.homeNav,o=t.tools,i=t.openWindowList,a=t.setWindowOpenList,s=t.menuNav,r=t.isEnterMenu,l=t.isEnterMenuNav,c=t.openMenuNav,p=t.handleOpenNav,m=t.mouseEnterMenuNav,h=t.mouseLeaveMenuNav,f=t.closeWindow,w=t.hiddenWindow;return d.a.createElement(A.View,{width:"100%",height:"100%",layout:"vertical",background:"url(https://react-desktop.oss-cn-shenzhen.aliyuncs.com/images/home/desktop-1.jpg) no-repeat center center / cover",style:{backgroundSize:"cover"}},d.a.createElement(A.View,{width:"100%",background:"#1D2841",padding:"0px 10px",layout:"horizontal",style:{color:"#fff"}},d.a.createElement(A.View,{width:"60%",height:"26px",layout:"horizontal",horizontalAlignment:"left",className:"mac_home_menu_left"},d.a.createElement(A.View,{className:"mac_home_menu_logo",onClick:function(e){p(e,n,"home")}},d.a.createElement("i",{className:"iconfont",dangerouslySetInnerHTML:{__html:n.name}})),d.a.createElement(A.View,{layout:"horizontal",horizontalAlignment:"left",className:"mac_home_menu_left_nav"},d.a.createElement("dl",null,s.map(function(e,t){return d.a.createElement(u.Fragment,{key:e.type},0===t?d.a.createElement("dt",{className:e.type===c.type?"active":"",onClick:function(t){p(t,e)}},e.name):d.a.createElement("dd",{className:e.type===c.type?"active":"",onClick:function(t){p(t,e)}},e.name))}))),(r||l)&&d.a.createElement(B,{style:c.style,dataList:c.nav,mouseEnter:m,mouseLeavel:h})),d.a.createElement(A.View,{width:"40%",height:"26px",layout:"horizontal",horizontalAlignment:"right",className:"mac_home_menu_right"},d.a.createElement(A.View,{padding:"0 8px"},d.a.createElement(q.a,{setDataTime:this.props.setDataTime,dataTime:this.props.dataTime})),d.a.createElement(A.View,{padding:"3px 8px"},d.a.createElement("i",{className:"iconfont"},"\ue602")),d.a.createElement(A.View,{padding:"3px 8px"},d.a.createElement("i",{className:"iconfont"},"\ue614")))),d.a.createElement(A.View,{width:"100%",height:"100%",style:{overflow:"hidden",background:"inherit"}},d.a.createElement(A.View,{layout:"vertical",verticalAlignment:"center",height:"auto",className:"mac_home_tools"},d.a.createElement(A.View,null,d.a.createElement("span",{className:"mac_home_tools_navs"},o.map(function(e){return d.a.createElement(A.View,{onClick:function(){a(e,i)},key:e.type,className:i.find(function(t){return t.type===e.type})?"mac_home_tools_nav active":"mac_home_tools_nav"},d.a.createElement("img",{width:50,height:45,src:e.logo,alt:e.name}))})))),d.a.createElement(A.View,{width:"100%",height:"100%"})),i.map(function(t){return d.a.createElement(X,{id:t.type,key:t.type,window:t,zIndex:t.zIndex,openWindowList:i,setWindowIndex:e.props.setWindowOpenList,closeWindow:f,hiddenWindow:w},t.isIframe&&d.a.createElement(G.a,{title:t.type,frameBorder:0,style:{background:"#fff"},width:"100%",src:t.url,isLoad:t.isLoad,onLoad:function(){e.props.loadWindow(t,i)}}))}))}}]),t}(u.Component),Q=Object(C.b)(function(e){return{homeNav:e.getIn(["homeMac","homeNav"]).toJS(),openWindowList:e.getIn(["homeMac","openWindowList"]).toJS(),tools:e.getIn(["homeMac","tools"]).toJS(),menuNav:e.getIn(["homeMac","menuNav"]).toJS(),openMenuNav:e.getIn(["homeMac","openMenuNav"]).toJS(),isEnterMenuNav:e.getIn(["homeMac","isEnterMenuNav"]),isEnterMenu:e.getIn(["homeMac","isEnterMenu"]),dataTime:e.getIn(["homeMac","dataTime"]).toJS()}},function(e){return{setWindowOpenList:function(t,n){e(o.setWindowOpenList(t,n))},loadWindow:function(t,n){e(o.loadWindow(t,n))},closeWindow:function(t,n){e(o.closeWindow(t,n))},hiddenWindow:function(t,n){e(o.hiddenWindow(t,n))},handleOpenNav:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nav";t.preventDefault(),e(o.handleOpenNav(t,n,i))},mouseEnterMenuNav:function(){e(o.mouseEnterMenuNav())},mouseLeaveMenuNav:function(){e(o.mouseLeavelMenuNav())},mouseClick:function(t,n,i,a){t.preventDefault(),n&&!i&&e(o.clearMenuNav()),!n&&!i&&Object.keys(a).length>0&&e(o.clearMenuNav())},setDataTime:function(t){e(o.setDateTime(t))}}})(K),Z=n(680),$=n(685),ee=(n(469),n(165)),te=n(202),ne=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).file_list=function(){n.files.style.height=window.document.body.offsetHeight-23+"px"},n}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.file_list(),window.addEventListener("resize",this.file_list)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.file_list)}},{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"finder_fileList"},d.a.createElement("dl",{className:"finder_fileList_list"},d.a.createElement("dt",null,d.a.createElement("div",{className:"finder_fileList_list_header_name"},"\u540d\u79f0"),d.a.createElement("div",{className:"finder_fileList_list_header_class"},"\u79cd\u7c7b"),d.a.createElement("div",{className:"finder_fileList_list_header_size"},"\u5927\u5c0f"),d.a.createElement("div",{className:"finder_fileList_list_header_date"},"\u4fee\u6539\u65e5\u671f")),d.a.createElement("dd",null,d.a.createElement("ul",{ref:function(t){return e.files=t}},d.a.createElement("li",null,d.a.createElement("div",{className:"finder_fileList_list_body_name"},"\u6587\u4ef6\u540d1"),d.a.createElement("div",{className:"finder_fileList_list_body_class"},"\u79cd\u7c7b"),d.a.createElement("div",{className:"finder_fileList_list_body_size"},"123,133Mb"),d.a.createElement("div",{className:"finder_fileList_list_body_date"},"1992-04-12 12:32"))))))}}]),t}(u.Component),oe=function(e){return d.a.createElement(A.ListView,{className:"nav_lists",background:"#f1f2f4",width:"100%",height:"100%"},e.leftNavList.map(function(t){return d.a.createElement(A.ListViewSection,{key:t.type},d.a.createElement(A.ListViewSectionHeader,{style:{fontSize:"12px",border:"none",color:"#666"}},t.title),t.navList.map(function(t){return d.a.createElement(Z.a,{key:t.type,to:"".concat(e.match.url).concat(t.url)},d.a.createElement(A.ListViewRow,null,d.a.createElement("i",{className:"iconfont",style:t.iconStyle,dangerouslySetInnerHTML:{__html:t.icon}}),d.a.createElement(A.Text,{color:"#666",size:"13",style:{lineHeight:"20px",marginLeft:"5px",fontWeight:500}},t.name)))}))}),d.a.createElement(A.ListViewFooter,null,d.a.createElement(A.Text,{size:"11",color:"#696969"},"Finder")))},ie=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(A.View,{className:"finder",width:"100%",height:"100%"},d.a.createElement(ee.a,{borderCenter:"#eee",fileLists:this.props.fileLists,emptyLists:this.props.emptyLists,emptyList:this.props.emptyList},d.a.createElement("nav",{style:{height:"100%"}},d.a.createElement(oe,{match:this.props.match,leftNavList:this.props.leftNavLists})),d.a.createElement("main",{style:{background:"#fff",height:"100%"}},d.a.createElement(V.a,null,d.a.createElement(U.a,{exact:!0,path:"".concat(this.props.match.url,"/download"),render:function(){return d.a.createElement(te.a,{emptyList:e.props.emptyList,fileLists:e.props.fileLists,emptyLists:e.props.emptyLists,setFileList:e.props.setFileList})}}),d.a.createElement(U.a,{exact:!0,path:"".concat(this.props.match.url,"/application"),render:function(){return d.a.createElement(ne,null)}}),d.a.createElement(U.a,{exact:!0,path:"".concat(this.props.match.url,"/file"),render:function(){return d.a.createElement(te.a,{emptyList:e.props.emptyList,fileLists:e.props.fileLists,emptyLists:e.props.emptyLists,setFileList:e.props.setFileList})}}),d.a.createElement(U.a,{exact:!0,path:"".concat(this.props.match.url,"/cloud"),render:function(){return d.a.createElement(G.a,{style:{width:"100%",height:"100%",border:"0"},isLoad:!0,src:"http://cloud.qqxio.cn"})}}),d.a.createElement(U.a,{render:function(){return d.a.createElement($.a,{to:{pathname:"".concat(e.props.match.url,"/file")}})}})))))}}]),t}(u.Component),ae=Object(C.b)(function(e){return{emptyLists:e.getIn(["fileMac","emptyLists"]).toJS(),leftNavLists:e.getIn(["fileMac","leftNavLists"]).toJS(),fileLists:e.getIn(["fileMac","fileLists"]).toJS()}},function(e){return{emptyList:function(t){e(i.empty_list(t))},setFileList:function(t){e(i.set_file_list(t))}}})(ie),se=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.match;return d.a.createElement(C.a,{store:z},d.a.createElement(V.a,null,d.a.createElement(U.a,{path:"".concat(e.path),exact:!0,component:Q}),d.a.createElement(U.a,{path:"".concat(e.path,"/finder"),component:ae})))}}]),t}(u.Component);t.default=se}}]);
//# sourceMappingURL=2.77bde8c9.chunk.js.map