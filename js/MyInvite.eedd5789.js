(window.webpackJsonp=window.webpackJsonp||[]).push([["MyInvite"],{"0cdf":function(t,e,s){"use strict";var a=s("29d6");s.n(a).a},"29d6":function(t,e,s){},"30d8":function(t,e,s){},"3b6f":function(t,e,s){"use strict";s.r(e);var a=s("cebc"),r=(s("96cf"),s("3b8d")),n=s("3bd9"),i=s.n(n),o=s("9380"),c=s.n(o),l=s("3c12"),_=s("1576"),u=s("fa19"),d=s("60b1"),f=(s("d055"),s("2f62")),p=(s("ab36"),s("901e"),s("7b2f")),v=s("f5fb"),h={props:["type"],components:{Dialog:d.a},filters:{floor:function(t){return i()(t,2).toFixed(2)}},mixins:[p.a,v.a],data:function(){return{speedup_save_time:0,speedup_order_amount:0,speedup_use_sfp:0,loading:!1}},watch:{},computed:Object(a.a)({formatted_speedup_save_time:function(){var t="",e=i()(this.speedup_save_time/86400,0);e>0&&(t+=e+this.$t("PURCHASE.DAY"));var s=i()((this.speedup_save_time-86400*e)/3600);s>0&&(t+=(t.length>0?":":"")+s+this.$t("PURCHASE.HOUR"));var a=i()((this.speedup_save_time-86400*e-3600*s)/60);return 0==e&&0==s&&0==a&&(a+=1),a>0&&(t+=(t.length>0?":":"")+a+this.$t("PURCHASE.MINUTE")),t}},Object(f.b)({msi:function(t){return _.a.getInstance().formatTokenDecimals(t.wallet.msi,t.wallet.msi_decimal)}})),methods:{open:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var s,a,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.to=e.item.rel_address,this.order_num=e.item.order_num,this.$refs.dialog.open(),t.next=6,this.$wallet.getAccSaveTimeFor(this.to,this.order_num);case 6:s=t.sent,a=s.speedup_use_sfp,r=s.speedup_save_time,this.speedup_use_sfp=a,this.speedup_save_time=r,this.speedup_order_amount=i()(this.$wallet.formatWei(e.item.amount),2),this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),close:function(){this.speedup_use_sfp=0,this.speedup_save_time=0,this.speedup_order_amount=0,this.$refs.dialog.close()},confirm:function(){this.$wallet.accOrderFor(this.to,this.order_num),this.close()}}},m=(s("5ed3"),s("2877")),E=Object(m.a)(h,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dialog",{ref:"dialog",attrs:{id:"acc-order",icon:t.type,title:t.$t("POPUP.ACCELERATE.TITLE"),width:"600px"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{slot:"content"},slot:"content"},[[t.speedup_save_time>0?[a("img",{staticClass:"rocket",attrs:{src:s("aadd")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.CONSUME",{sfp:t.speedup_use_sfp})))]),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIME",{sfo:t.speedup_order_amount,time:t.formatted_speedup_save_time})))]),a("div",{staticClass:"show_wait_tip"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIPS",{sfp:t.speedup_use_sfp})))]),a("div",{staticClass:"btn",on:{click:t.confirm}},[t._v(t._s(t.$t("POPUP.ACCELERATE.OK")))])]:0==t.msi?[a("img",{staticClass:"rocket",attrs:{src:s("adea")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIP_SFP")))]),a("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.ACCELERATE.KNOW")))])]:[a("img",{staticClass:"rocket",attrs:{src:s("adea")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIP")))]),a("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.ACCELERATE.KNOW")))])]]],2)])},[],!1,null,"3d8b345f",null).exports,R=s("9285"),A={components:{Dialog:d.a},filters:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return i()(_.a.getInstance().formatWei(t),e)},percent_format:function(t){return 100*t+"%"}},data:function(){return{timestamp:"",type:"",T:"",B:"",amount:"",sf_amount:"",era:"",reward:""}},computed:{fee:function(){return i()(this.$wallet.formatWei(this.amount)*(.01+.2*this.$wallet.formatWei(this.T)),8)},percent:function(){if("invitation"==this.type)switch(parseInt(this.era)){case 0:return.08;case 1:return.16;case 2:return.08;case 3:return.04;case 4:return.02}else if("$FP"==this.type)switch(parseInt(this.era)){case 0:return.12;case 1:return.16;case 2:return.08}else{if("agent"==this.type)return.01;if("XInvitation"==this.type)switch(parseInt(this.era)){case 1:return.5;case 2:return.25;case 3:return.125;case 4:return.065}else if("XAgent"==this.type)switch(parseInt(this.era)){case 1:case 2:case 3:return.02}}}},methods:{open:function(t){this.timestamp=t.timestamp,this.type=t.type,this.T=100*t.T,this.amount=t.amount,this.sf_amount=t.sf_amount,this.B=t.B,this.era=t.era,this.reward=t.reward,this.$refs.dialog.open()},close:function(){this.$refs.dialog.close()}}},P=(s("0cdf"),Object(m.a)(A,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Dialog",{ref:"dialog",attrs:{id:"reward-detail",icon:t.type,width:"880px"}},[s("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.TITLE")))]),"invitation"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"help"},[s("a",{attrs:{href:"/#/help/sfi-award",target:"_blank"}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.HELP0")))])]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount,8))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),t.era>0?s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]):t._e(),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),t.timestamp>15708096e5?[t.era>0?s("div",{staticClass:"val"},[t._v(" = RC * (T+1)/(T+16) * B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e(),0==t.era?s("div",{staticClass:"val"},[t._v(" = RC * (T+1)/(T+16) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e()]:[t.era>0?s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20) * B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e(),0==t.era?s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e()]],2)]):t._e(),"$FP"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"help"},[s("a",{attrs:{href:"/#/help/sfp-award",target:"_blank"}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.HELP1")))])]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount,8))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[t.timestamp>15708096e5?[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * (T+1)/(T+16) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])]:[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])]],2)]):t._e(),"agent"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"help"},[s("a",{attrs:{href:"/#/help/reward-award",target:"_blank"}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.HELP2")))])]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[t.timestamp>15708096e5?[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * (T+1)/(T+16)*B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])]:[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20)*B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])]],2)]):t._e(),"XInvitation"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"help"},[s("a",{attrs:{href:"https://coinx.exchange/#/help",target:"_blank"}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.HELP3")))])]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": ethBuy = "+t._s(t._f("floor")(t.amount,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.RATEFEE"))+" rateFee = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.FEE"))+" fee = ethBuy * (1% + 20% * rateFee) = "+t._s(t.fee))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PARAMS"))+" R = pool / (reserve + fee) = "+t._s(t._f("floor")(t.sf_amount,18)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = (fee + fee * R) * RC * B / (B+10000)"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),"XAgent"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"help"},[s("a",{attrs:{href:"https://coinx.exchange/#/help",target:"_blank"}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.HELP3")))])]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": ethBuy = "+t._s(t._f("floor")(t.amount,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.RATEFEE"))+" rateFee = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.FEE"))+" fee = ethBuy * (1% + 20% * rateFee) = "+t._s(t.fee))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PARAMS"))+" R = pool / (reserve + fee) = "+t._s(t._f("floor")(t.sf_amount,18)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = (fee + fee * R) * RC * B / (B+10000)"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),s("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.OK")))])])])},[],!1,null,"a4fd1e20",null)).exports,C=s("f13c"),T=s.n(C),w=s("9fb0"),g={components:{RewardDetail:P,Detection:u.a,AccOrder:E},data:function(){return{detection_type:"",address:this.$route.params.address,list:[],page:1,per_page:10,loading:!1,selected_type:"all",type_list:["all","reward","PurchaseOrder","AccOrder","CancleOrder","DealOrder","BindRecommender","XCoin"]}},created:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.getDate();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),mounted:function(){},computed:Object(a.a)({show_list:function(){if("all"==this.selected_type)return this.list;var t=[];if("reward"==this.selected_type)for(var e=0;e<this.list.length;e++)"reward"==this.list[e].type&&(["XInvitation","XAgent"].indexOf(this.list[e].extra.cause)>-1||t.push(this.list[e]));else if("XCoin"==this.selected_type)for(var s=0;s<this.list.length;s++)"reward"==this.list[s].type&&-1!=["XInvitation","XAgent"].indexOf(this.list[s].extra.cause)&&t.push(this.list[s]);else t=c()(this.list,{type:this.selected_type});return t}},Object(f.b)({is_metamask:function(t){return t.wallet.is_metamask},is_search:function(t){return t.wallet.is_search},is_ask_trade:function(t){return t.wallet.is_ask_trade},trade_method:function(t){return t.wallet.trade_method}})),filters:{date:function(t){return R.a.format(t,"YYYY/MM/DD HH:mm:ss")},fee_format:function(t){return isNaN(parseInt(t))?0:i()(_.a.getInstance().formatWei(t),4)},short_address:function(t){return t.slice(0,6)+"..."+t.slice(t.length-6,t.length)}},methods:{handle:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof e&&(e={method:e}),"divestmentDetail"!=e.method){t.next=4;break}return this[e.method](e),t.abrupt("return",!0);case 4:if(this.is_metamask){t.next=8;break}return t.next=7,this.connect(e);case 7:return t.abrupt("return",!1);case 8:if(!this.is_search){t.next=12;break}return this.$emit("clear-search"),t.next=12,this.back();case 12:this[e.method](e);case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),connect:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,s=this,a=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.length>0&&void 0!==a[0]?a[0]:[],!this.is_metamask){t.next=3;break}return t.abrupt("return",!1);case 3:if(this.$wallet.isInstalled()){t.next=13;break}if(this.$wallet.isSupport()){t.next=10;break}return this.detection_type="browser",this.$nextTick(function(){s.$refs.detection.open(e)}),t.abrupt("return",!1);case 10:return this.detection_type="plugin",this.$nextTick(function(){s.$refs.detection.open(e)}),t.abrupt("return",!1);case 13:return t.next=15,this.$wallet.isUnlock();case 15:if(t.sent){t.next=20;break}return this.detection_type="unlock",this.$nextTick(function(){s.$refs.detection.open(e)}),t.abrupt("return",!1);case 20:return this.$store.commit(w.y,!0),this.$emit("clear-search"),t.next=24,this.$wallet.connectMetaMask();case 24:if(t.sent){t.next=29;break}return this.$store.commit(w.y,!1),this.$toast(this.$t("TOAST.CONENCT_ERROR")),t.abrupt("return",!1);case 29:return t.next=31,this.$wallet.updateAllProjectList();case 31:this.$forceUpdate(),this.is_metamask&&"metamask"!=this.trade_method&&this.$store.commit(w.N,{trade_method:"metamask",is_ask_trade:!1}),this.$emit("connected"),this.$store.commit(w.y,!1),void 0!==e.method&&this[e.method](e);case 36:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),afterConnect:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:void 0!==e.method&&this[e.method](e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),accOrder:function(t){this.$refs.acc_order.open(t)},pageChange:function(t){this.page=t,T.a.scrollTo("body",300)},wait_time:function(t){var e="",s=i()(t/86400,0);s>0&&(e+=s+this.$t("PURCHASE.DAY"));var a=i()((t-86400*s)/3600);a>0&&(e+=(e.length>0?":":"")+a+this.$t("PURCHASE.HOUR"));var r=i()((t-86400*s-3600*a)/60);return 0==s&&0==a&&0==r&&(r+=1),r>0&&(e+=(e.length>0?":":"")+r+this.$t("PURCHASE.MINUTE")),e},getTxUrl:function(t){return"zh-CN"==this.$i18n.locale?"https://cn.etherscan.com/tx/"+t:"https://etherscan.io/tx/"+t},typeUpdate:function(t){this.selected_type=t,this.page=1},getDate:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,this.loading=!0,setTimeout(function(){e||(e=!0,s.$toast(s.$t("TOAST.CONENCT_ERROR")),s.loading=!1)},12e4),t.next=6,l.a.getInstance().getRewardList(this.address);case 6:this.list=t.sent,e=!0,this.loading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),e||(e=!0,this.$toast(this.$t("TOAST.CONENCT_ERROR")),this.loading=!1);case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(){return t.apply(this,arguments)}}(),rewardDetail:function(t){this.$refs.reward_detail.open({timestamp:t.timestamp,type:t.extra.cause,era:t.extra.era,T:t.extra.T,B:t.extra.balance,amount:t.extra.deal_amount,sf_amount:t.extra.sf_amount,reward:t.amount})}}},D=(s("9da9"),Object(m.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.$i18n.locale,attrs:{id:"my-invite","element-loading-text":"loading"}},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.$t("REWARD.TITLE0")))])]),a("table",[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("REWARD.TIME")))]),a("th",[a("el-dropdown",{ref:"dropdown",attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[t._v(t._s(t.$t("REWARD.TYPE_"+t.selected_type.toUpperCase()))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.type_list,function(e,s){return a("el-dropdown-item",{key:s,class:{"el-dropdown-active":e==t.selected_type},nativeOn:{click:function(s){return t.typeUpdate(e)}}},[t._v(t._s(t.$t("REWARD.TYPE_"+e.toUpperCase())))])}),1)],1)],1),a("th",[t._v(t._s(t.$t("REWARD.RELATION")))]),a("th",[t._v(t._s(t.$t("REWARD.NUMBER")))]),a("th",[t._v(t._s(t.$t("REWARD.ADDRESS")))]),a("th",[t._v(t._s(t.$t("REWARD.NOTE")))]),a("th")])]),a("tbody",t._l(t.show_list.slice((t.page-1)*t.per_page,t.page*t.per_page),function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(t._f("date")(e.timestamp)))]),"reward"==e.type&&["XInvitation","XAgent"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.TYPE_XCOIN")))]):a("td",[t._v(t._s(t.$t("REWARD.TYPE_"+e.type.toUpperCase())))]),"reward"==e.type&&["agent","XAgent"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.RELATION_AGENT_"+e.relation)))]):"reward"==e.type&&["$FP"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.RELATION_$FP_"+e.relation)))]):a("td",[t._v(t._s(t.$t("REWARD.RELATION_"+e.relation)))]),a("td",[t._v(t._s(t._f("fee_format")(e.amount))+" \n                    "),"reward"==e.type&&["XInvitation","XAgent"].indexOf(e.extra.cause)>-1?a("span",[t._v("SFM")]):"reward"==e.type?a("span",[t._v("SFD")]):a("span",[t._v("ETH")])]),a("td",{attrs:{title:e.rel_address}},[t._v(t._s(t._f("short_address")(e.rel_address)))]),a("td",["PurchaseOrder"==e.type?[e.extra.order_wait_time>0?a("span",[t._v("\n                        "+t._s(t.$t("REWARD.NOTE_"+e.note.toUpperCase()))+"\n                        "+t._s(t.wait_time(e.extra.order_wait_time))+"\n                        "),e.extra.is_acc_alowed?a("a",{on:{click:function(s){return t.handle({method:"accOrder",item:e})}}},[t._v(t._s(t.$t("REWARD.ACC_ORDER")))]):t._e()]):t._e()]:t._e(),"AccOrder"==e.type?void 0:t._e(),"CancleOrder"==e.type?void 0:t._e(),"DealOrder"==e.type?void 0:t._e(),"BindRecommender"==e.type?void 0:t._e(),"XCoin"==e.type?void 0:t._e(),"reward"==e.type?[a("span",[t._v(t._s(t.$t("REWARD.NOTE_"+e.note.toUpperCase())))]),void 0!==e.extra.T?[t._v("\n                        ,"),"candy"!=e.extra.cause?a("a",{on:{click:function(s){return t.rewardDetail(e)}}},[t._v(t._s(t.$t("REWARD.REWARD_DETAIL")))]):t._e()]:t._e()]:t._e()],2),a("td",[a("a",{staticClass:"hover",attrs:{href:t.getTxUrl(e.hash),target:"_blank"}},[t._v(t._s(t.$t("REWARD.DETAILS")))])])])}),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.show_list.length,expression:"show_list.length == 0"}],staticClass:"nodata"},[a("img",{attrs:{src:s("ac2e")}}),a("br")]),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.show_list.length>0,expression:"show_list.length > 0"}],staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":t.per_page,total:t.show_list.length},on:{"current-change":t.pageChange}}),a("RewardDetail",{ref:"reward_detail"}),a("Detection",{ref:"detection",attrs:{type:t.detection_type},on:{success:t.afterConnect}}),a("AccOrder",{ref:"acc_order",attrs:{type:"metamask"}})],1)},[],!1,null,"d1b3ec8a",null));e.default=D.exports},"5ed3":function(t,e,s){"use strict";var a=s("b67e");s.n(a).a},"9da9":function(t,e,s){"use strict";var a=s("30d8");s.n(a).a},aadd:function(t,e,s){t.exports=s.p+"img/accelerate.cad4e195.png"},adea:function(t,e,s){t.exports=s.p+"img/no_accelerate.9d52ee8f.png"},b67e:function(t,e,s){},f13c:function(t,e,s){
/*!
  * vue-scrollto v2.15.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */
t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t}).apply(this,arguments)}var s=4,a=.001,r=1e-7,n=10,i=11,o=1/(i-1),c="function"==typeof Float32Array;function l(t,e){return 1-3*e+3*t}function _(t,e){return 3*e-6*t}function u(t){return 3*t}function d(t,e,s){return((l(e,s)*t+_(e,s))*t+u(e))*t}function f(t,e,s){return 3*l(e,s)*t*t+2*_(e,s)*t+u(e)}function p(t,e,s,a,i){var o,c,l=0;do{(o=d(c=e+(s-e)/2,a,i)-t)>0?s=c:e=c}while(Math.abs(o)>r&&++l<n);return c}function v(t,e,a,r){for(var n=0;n<s;++n){var i=f(e,a,r);if(0===i)return e;var o=d(e,a,r)-t;e-=o/i}return e}function h(t){return t}var m=function(t,e,s,r){if(!(0<=t&&t<=1&&0<=s&&s<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&s===r)return h;for(var n=c?new Float32Array(i):new Array(i),l=0;l<i;++l)n[l]=d(l*o,t,s);function _(e){for(var r=0,c=1,l=i-1;c!==l&&n[c]<=e;++c)r+=o;var _=(e-n[--c])/(n[c+1]-n[c]),u=r+_*o,d=f(u,t,s);return d>=a?v(e,u,t,s):0===d?u:p(e,r,r+o,t,s)}return function(t){return 0===t?0:1===t?1:d(_(t),e,r)}},E={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},R=!1;try{var A=Object.defineProperty({},"passive",{get:function(){R=!0}});window.addEventListener("test",null,A)}catch(t){}var P={$:function(t){return"string"!=typeof t?t:document.querySelector(t)},on:function(t,e,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!1};e instanceof Array||(e=[e]);for(var r=0;r<e.length;r++)t.addEventListener(e[r],s,!!R&&a)},off:function(t,e,s){e instanceof Array||(e=[e]);for(var a=0;a<e.length;a++)t.removeEventListener(e[a],s)},cumulativeOffset:function(t){var e=0,s=0;do{e+=t.offsetTop||0,s+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:s}}},C=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],T={container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function w(t){T=e({},T,t)}var g=function(){var e,s,a,r,n,i,o,c,l,_,u,d,f,p,v,h,R,A,w,g,D,O,$,y,b=function(t){o&&(g=t,w=!0)};function L(t){if(w)return U();O||(O=t),$=t-O,y=Math.min($/a,1),y=D(y),x(s,v+A*y,f+R*y),$<a?window.requestAnimationFrame(L):U()}function U(){w||x(s,h,p),O=!1,P.off(s,C,b),w&&_&&_(g,e),!w&&l&&l(e)}function x(t,e,s){d&&(t.scrollTop=e),u&&(t.scrollLeft=s),"body"===t.tagName.toLowerCase()&&(d&&(document.documentElement.scrollTop=e),u&&(document.documentElement.scrollLeft=s))}return function(O,$){var y=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"===t($)?y=$:"number"==typeof $&&(y.duration=$),e=P.$(O)){s=P.$(y.container||T.container),a=y.duration||T.duration,r=y.easing||T.easing,n=y.offset||T.offset,i=y.hasOwnProperty("force")?!1!==y.force:T.force,o=y.hasOwnProperty("cancelable")?!1!==y.cancelable:T.cancelable,c=y.onStart||T.onStart,l=y.onDone||T.onDone,_=y.onCancel||T.onCancel,u=void 0===y.x?T.x:y.x,d=void 0===y.y?T.y:y.y;var U=P.cumulativeOffset(s),x=P.cumulativeOffset(e);if("function"==typeof n&&(n=n()),v=function(t){var e=t.scrollTop;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollTop),e}(s),h=x.top-U.top+n,f=function(t){var e=t.scrollLeft;return"body"===t.tagName.toLowerCase()&&(e=e||document.documentElement.scrollLeft),e}(s),p=x.left-U.left+n,w=!1,A=h-v,R=p-f,!i){var I=v,W=I+s.offsetHeight,k=h,N=k+e.offsetHeight;if(k>=I&&N<=W)return void l(e)}return"string"==typeof r&&(r=E[r]||E.ease),D=m.apply(m,r),A||R?(c&&c(e),P.on(s,C,b,{passive:!0}),window.requestAnimationFrame(L),function(){g=null,w=!0}):void 0}}}(),D=[];function O(t){var e=function(t){for(var e=0;e<D.length;++e)if(D[e].el===t)return D[e]}(t);return e||(D.push(e={el:t,binding:{}}),e)}function $(t){t.preventDefault();var e=O(this).binding;if("string"==typeof e.value)return g(e.value);g(e.value.el||e.value.element,e.value)}var y={bind:function(t,e){O(t).binding=e,P.on(t,"click",$)},unbind:function(t){(function(t){for(var e=0;e<D.length;++e)if(D[e].el===t)return D.splice(e,1),!0})(t),P.off(t,"click",$)},update:function(t,e){O(t).binding=e},scrollTo:g,bindings:D},b=function(t,e){e&&w(e),t.directive("scroll-to",y),t.prototype.$scrollTo=y.scrollTo};return"undefined"!=typeof window&&window.Vue&&(window.VueScrollTo=y,window.VueScrollTo.setDefaults=w,window.Vue.use(b)),y.install=b,y}()}}]);