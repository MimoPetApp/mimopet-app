(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[837],{7761:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>D});var n=a(3673);const r={class:"behavior-list__container"},l={key:0},o={class:"behavior-list__container__search"},i=(0,n.Wm)("h3",{class:"ml-2 text-weight-bolder"},"Explore comportamentos",-1),s={class:"mt-2 mb-2"},c={key:0},u={key:1},d={key:1,class:"flex flex-center q-mt-xl"};function p(e,t,a,p,m,g){const f=(0,n.up)("SearchBox"),h=(0,n.up)("ExploreCard"),b=(0,n.up)("q-intersection"),w=(0,n.up)("ExploreCardSkeleton"),_=(0,n.up)("q-btn"),y=(0,n.up)("q-page-scroller"),W=(0,n.up)("q-page"),x=(0,n.up)("LoadingCircle");return(0,n.wg)(),(0,n.j4)("div",r,[e.loading?((0,n.wg)(),(0,n.j4)("div",d,[(0,n.Wm)(x,{color:"status-waiting",size:"6em",thickness:5})])):((0,n.wg)(),(0,n.j4)("div",l,[(0,n.Wm)("div",o,[i,(0,n.Wm)("div",s,[(0,n.Wm)(f,{label:"Busque por programas de treino para seu pet",buttonLabel:"Faça o teste",onSearch:e.onSearch},null,8,["onSearch"])])]),(0,n.Wm)(W,{class:"behavior-list__container__result"},{default:(0,n.w5)((()=>[e.loadingTrainings?((0,n.wg)(),(0,n.j4)("div",u,[(0,n.Wm)(w,{length:4})])):((0,n.wg)(),(0,n.j4)("div",c,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.data,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id,once:"",transition:"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{train:e},null,8,["train"])])),_:2},1024)))),128))])),(0,n.Wm)(y,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{fab:"",icon:"keyboard_arrow_up",color:"main-primary"})])),_:1})])),_:1})]))])}var m=a(515),g=a.n(m),f=(a(7280),a(7874)),h=a(2020),b=a(2323);const w={class:"search-box__label"},_={class:"mt-2 mb-2"},y={class:"mt-2"};function W(e,t,a,r,l,o){const i=(0,n.up)("SearchField"),s=(0,n.up)("q-btn"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{class:"search-box row justify-start items-center p-3"},{default:(0,n.w5)((()=>[(0,n.Wm)("div",null,[(0,n.Wm)("h3",w,(0,b.zw)(a.label),1),(0,n.Wm)("div",_,[(0,n.Wm)(i,{modelValue:l.query,"onUpdate:modelValue":[t[1]||(t[1]=e=>l.query=e),t[2]||(t[2]=e=>a.onSearch(l.query))],label:"O que aprender?",class:"bg-main-background"},null,8,["modelValue"])]),(0,n.Wm)("div",y,[(0,n.Wm)(s,{label:a.buttonLabel,to:a.to,icon:"quiz",flat:"","no-caps":"","text-color":"main-background",class:"search-box__button"},null,8,["label","to"])])])])),_:1})}var x=a(3971);const k={name:"SearchBox",components:{SearchField:x.Z},props:{label:{type:String,default:""},description:{type:String},notificationLabel:{type:String,default:"Agendados"},notification:{type:Number,default:0},to:{type:String,default:"/behavior"},buttonLabel:{type:String,default:"Ver mais"},onSearch:{type:Function,default:()=>{}}},data(){return{query:""}}};var v=a(151),q=a(8240),C=a(7518),S=a.n(C);k.render=W;const Z=k;function Q(e,t,a,r,l,o){const i=(0,n.up)("q-skeleton"),s=(0,n.up)("q-item-section"),c=(0,n.up)("q-item"),u=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(a.length,(e=>((0,n.wg)(),(0,n.j4)(u,{flat:"",style:{"max-width":"300px"},class:"mb-4",key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{type:"QBadge"})])),_:1}),(0,n.Wm)(s,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{type:"QChip"})])),_:1})])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{type:"text",width:"25%",class:"text-subtitle2",animation:"fade"}),(0,n.Wm)(i,{type:"text",class:"text-subtitle2",animation:"fade"})])),_:1})])),_:1})])),_:2},1024)))),128))])}S()(k,"components",{QCard:v.Z,QBtn:q.Z});const j={name:"ExploreCardSkeleton",props:{length:{type:Number,default:1}},data(){return{}}};var z=a(3414),B=a(2035),T=a(4103);j.render=Q;const E=j;S()(j,"components",{QCard:v.Z,QItem:z.Z,QItemSection:B.Z,QSkeleton:T.ZP});const I={class:"row justify-between flex-center"},L={class:"explore-card__steps"},F={class:"explore-card__title"};function U(e,t,a,r,l,o){const i=(0,n.up)("q-icon"),s=(0,n.up)("q-btn"),c=(0,n.up)("q-item-section"),u=(0,n.up)("Tag"),d=(0,n.up)("q-item"),p=(0,n.up)("q-card");return a.train?((0,n.wg)(),(0,n.j4)(p,{key:0,flat:"",class:"explore-card mb-4",onClick:o.onClick},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"explore-card__rating",dense:"",flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)("div",I,[(0,n.Wm)(i,{name:"star",class:"text-status-warning mr-1",style:{opacity:a.train.rating/5},size:"sm"},null,8,["style"]),(0,n.Uk)(" "+(0,b.zw)(a.train.rating.toFixed(1)),1)])])),_:1})])),_:1}),(0,n.Wm)(c,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:e.parseTrainingCategory(a.train.category),color:e.parseTrainingCategoryColor(a.train.category)},null,8,["label","color"])])),_:1})])),_:1}),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)("p",L,(0,b.zw)(a.train.trainings.length)+" "+(0,b.zw)("passo"+(a.train.trainings.length>1?"s":"")),1),(0,n.Wm)("h4",F,(0,b.zw)(a.train.title),1)])),_:1})])),_:1})])),_:1},8,["onClick"])):(0,n.kq)("",!0)}var V=a(8745),A=a(9048);const P={name:"ExploreCard",components:{Tag:A.Z},props:{train:{type:Object,default:null}},data(){return{}},methods:g()(g()({},V.Z),{},{onClick(){this.$router.push({name:"behaviorDetails",params:{id:this.train.id}})}})};var G=a(4554);P.render=U;const H=P;S()(P,"components",{QCard:v.Z,QItem:z.Z,QItemSection:B.Z,QBtn:q.Z,QIcon:G.Z});const K={components:{ExploreCardSkeleton:E,LoadingCircle:h.Z,ExploreCard:H,SearchBox:Z},data(){return{loading:!1,data:[]}},computed:g()({},(0,f.rn)("training",["trainings","loadingTrainings"])),methods:g()(g()({},(0,f.nv)("training",["ActionGetTrainings"])),{},{async search(e){await this.ActionGetTrainings(e),this.data=this.trainings},onSearch(e){e&&(this.data=this.trainings.filter((function(t){return t.title.toUpperCase().includes(e.toUpperCase())})))}}),mounted(){},created(){this.search()}};var N=a(4379),O=a(8218),Y=a(8835);K.render=p;const D=K;S()(K,"components",{QPage:N.Z,QIntersection:O.Z,QPageScroller:Y.Z,QBtn:q.Z})}}]);