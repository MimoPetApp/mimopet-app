(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[120],{1842:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var n=a(3673);const r={class:"behavior-list__container"},l={key:0},i={class:"behavior-list__container__search"},o=(0,n.Wm)("h3",{class:"ml-2 text-weight-bolder"},"Explore comportamentos",-1),s={class:"mt-2"},c={key:0},u={key:1},p={key:1,class:"flex flex-center q-mt-xl"};function d(e,t,a,d,m,g){const f=(0,n.up)("SearchBox"),h=(0,n.up)("ExploreCard"),b=(0,n.up)("q-intersection"),w=(0,n.up)("ExploreCardSkeleton"),y=(0,n.up)("q-btn"),_=(0,n.up)("q-page-scroller"),W=(0,n.up)("q-page"),x=(0,n.up)("LoadingCircle");return(0,n.wg)(),(0,n.j4)("div",r,[e.loading?((0,n.wg)(),(0,n.j4)("div",p,[(0,n.Wm)(x)])):((0,n.wg)(),(0,n.j4)("div",l,[(0,n.Wm)("div",i,[o,(0,n.Wm)("div",s,[(0,n.Wm)(f,{label:"Busque por programas de treino para seu pet",buttonLabel:"Faça o teste",onSearch:e.onSearch},null,8,["onSearch"])])]),(0,n.Wm)(W,{class:"behavior-list__container__result"},{default:(0,n.w5)((()=>[e.loadingTrainings?((0,n.wg)(),(0,n.j4)("div",u,[(0,n.Wm)(w,{length:4})])):((0,n.wg)(),(0,n.j4)("div",c,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.data,(e=>((0,n.wg)(),(0,n.j4)(b,{key:e.id,once:"",transition:"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{train:e},null,8,["train"])])),_:2},1024)))),128))])),(0,n.Wm)(_,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{fab:"",icon:"keyboard_arrow_up",color:"main-primary"})])),_:1})])),_:1})]))])}var m=a(515),g=a.n(m),f=(a(7280),a(7874)),h=a(9466),b=a(2323);const w={class:"search-box__label"},y={class:"mt-2 mb-2"},_={class:"mt-2"};function W(e,t,a,r,l,i){const o=(0,n.up)("SearchField"),s=(0,n.up)("q-btn"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{class:"search-box row justify-start items-center p-3"},{default:(0,n.w5)((()=>[(0,n.Wm)("div",null,[(0,n.Wm)("h3",w,(0,b.zw)(a.label),1),(0,n.Wm)("div",y,[(0,n.Wm)(o,{modelValue:l.query,"onUpdate:modelValue":[t[1]||(t[1]=e=>l.query=e),t[2]||(t[2]=e=>a.onSearch(l.query))],label:"O que aprender?",class:"bg-main-background"},null,8,["modelValue"])]),(0,n.Wm)("div",_,[(0,n.Wm)(s,{label:a.buttonLabel,to:a.to,icon:"quiz",flat:"","no-caps":"","text-color":"main-background",class:"search-box__button"},null,8,["label","to"])])])])),_:1})}var x=a(3971);const k={name:"SearchBox",components:{SearchField:x.Z},props:{label:{type:String,default:""},description:{type:String},notificationLabel:{type:String,default:"Agendados"},notification:{type:Number,default:0},to:{type:String,default:"/behavior"},buttonLabel:{type:String,default:"Ver mais"},onSearch:{type:Function,default:()=>{}}},data(){return{query:""}}};var v=a(151),C=a(8240),q=a(7518),S=a.n(q);k.render=W;const Q=k;function Z(e,t,a,r,l,i){const o=(0,n.up)("q-skeleton"),s=(0,n.up)("q-item-section"),c=(0,n.up)("q-item"),u=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(a.length,(e=>((0,n.wg)(),(0,n.j4)(u,{flat:"",style:{"max-width":"300px"},class:"mb-4",key:e},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{type:"QBadge"})])),_:1}),(0,n.Wm)(s,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{type:"QChip"})])),_:1})])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(o,{type:"text",width:"25%",class:"text-subtitle2",animation:"fade"}),(0,n.Wm)(o,{type:"text",class:"text-subtitle2",animation:"fade"})])),_:1})])),_:1})])),_:2},1024)))),128))])}S()(k,"components",{QCard:v.Z,QBtn:C.Z});const j={name:"ExploreCardSkeleton",props:{length:{type:Number,default:1}},data(){return{}}};var T=a(3414),z=a(2035),B=a(4103);j.render=Z;const E=j;S()(j,"components",{QCard:v.Z,QItem:T.Z,QItemSection:z.Z,QSkeleton:B.ZP});const L={class:"row justify-between flex-center"},F={class:"explore-card__steps"},I={class:"explore-card__title"};function U(e,t,a,r,l,i){const o=(0,n.up)("q-icon"),s=(0,n.up)("q-btn"),c=(0,n.up)("q-item-section"),u=(0,n.up)("q-item"),p=(0,n.up)("q-card");return a.train?((0,n.wg)(),(0,n.j4)(p,{key:0,flat:"",class:"explore-card mb-4",onClick:i.onClick},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"explore-card__rating",dense:"",flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)("div",L,[(0,n.Wm)(o,{name:"star",class:"text-status-warning mr-1",style:{opacity:a.train.rating/5},size:"sm"},null,8,["style"]),(0,n.Uk)(" "+(0,b.zw)(a.train.rating.toFixed(1)),1)])])),_:1})])),_:1}),(0,n.Wm)(c,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{class:"explore-card__category explore-card__category--"+e.parseTrainingCategoryColor(a.train.category),dense:"",flat:"","no-caps":""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,b.zw)(e.parseTrainingCategory(a.train.category)),1)])),_:1},8,["class"])])),_:1})])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)("p",F,(0,b.zw)(a.train.steps.length)+" "+(0,b.zw)("passo"+(a.train.steps.length>1?"s":"")),1),(0,n.Wm)("h4",I,(0,b.zw)(a.train.title),1)])),_:1})])),_:1})])),_:1},8,["onClick"])):(0,n.kq)("",!0)}const A={parseTrainingCategory(e){switch(e){case"adults":return"Adultos";case"puppy":return"Filhotes";case"premium":return"Premium";default:return e}},parseTrainingCategoryColor(e){switch(e){default:case"adults":return"primary";case"puppy":return"secondary";case"premium":return"highlight"}},parseTrainingThumbnail(e){return e?`${"http://strapi.mimopetapp.com:1337/".slice(0,-1)}${e.formats.thumbnail.url}`:"https://i.pinimg.com/originals/24/cb/7f/24cb7f9b961a5bad99662e149d8bb978.png"}},P={name:"ExploreCard",props:{train:{type:Object,default:null}},data(){return{}},methods:g()(g()({},A),{},{onClick(){this.$router.push({name:"behaviorDetails",params:{id:this.train.id}})}})};var V=a(4554);P.render=U;const $=P;S()(P,"components",{QCard:v.Z,QItem:T.Z,QItemSection:z.Z,QBtn:C.Z,QIcon:V.Z});const G={components:{ExploreCardSkeleton:E,LoadingCircle:h.Z,ExploreCard:$,SearchBox:Q},data(){return{loading:!1,data:[]}},computed:g()({},(0,f.rn)("training",["trainings","loadingTrainings"])),methods:g()(g()({},(0,f.nv)("training",["ActionGetTrainings"])),{},{async search(e){await this.ActionGetTrainings(e),this.data=this.trainings},onSearch(e){e&&(this.data=this.trainings.filter((function(t){return t.title.toUpperCase().includes(e.toUpperCase())})))}}),mounted(){},beforeRouteLeave(e,t,a){},created(){this.search()}};var H=a(4379),K=a(8218),N=a(8835);G.render=d;const O=G;S()(G,"components",{QPage:H.Z,QIntersection:K.Z,QPageScroller:N.Z,QBtn:C.Z})}}]);