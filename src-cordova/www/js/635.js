(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[635],{7074:(n,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>A});var i=t(3673);const r={class:"training-list"},e={key:0},s=(0,i.Wm)("h1",{class:"training-list__title mr-4 ml-4"},"Treinamentos",-1),l={key:1,class:"flex flex-center q-mt-xl"};function o(n,a,t,o,c,d){const u=(0,i.up)("TrainingCard"),m=(0,i.up)("LoadingCircle");return(0,i.wg)(),(0,i.j4)("div",r,[n.loading?((0,i.wg)(),(0,i.j4)("div",l,[(0,i.Wm)(m)])):((0,i.wg)(),(0,i.j4)("div",e,[s,((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(n.myTrainings,(n=>((0,i.wg)(),(0,i.j4)("div",{key:n.id,class:"mr-2 ml-2"},[(0,i.Wm)(u,{train:n},null,8,["train"])])))),128))]))])}var c=t(515),d=t.n(c),u=t(7874),m=t(2020),g=t(9753),p=t.n(g);const w={class:"train-card__image"};function f(n,a,t,r,e,s){const l=(0,i.up)("q-img"),o=(0,i.up)("TrainingCardBase"),c=(0,i.up)("q-card");return t.train?((0,i.wg)(),(0,i.j4)(c,{key:0,flat:"",class:"train-card column justify-end mb-4",onClick:s.onClick},{default:(0,i.w5)((()=>[(0,i.Wm)("div",w,[(0,i.Wm)(l,{src:p(),width:"209px",fit:"scale-down"})]),(0,i.Wm)(o,{train:t.train},null,8,["train"])])),_:1},8,["onClick"])):(0,i.kq)("",!0)}var h=t(2323);const C={class:"train-card-base__steps"},y={class:"train-card-base__title"};function _(n,a,t,r,e,s){const l=(0,i.up)("q-item-section"),o=(0,i.up)("Tag"),c=(0,i.up)("q-item"),d=(0,i.up)("q-linear-progress"),u=(0,i.up)("q-card");return t.train?((0,i.wg)(),(0,i.j4)(u,{key:0,flat:"",class:"train-card-base"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)("p",C,(0,h.zw)(t.train.steps.length)+" "+(0,h.zw)(" de 10 passos"),1)])),_:1}),(0,i.Wm)(l,{side:""},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{label:n.parseTrainingCategory(t.train.category),color:n.parseTrainingCategoryColor(t.train.category)},null,8,["label","color"])])),_:1})])),_:1}),(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Wm)("h4",y,(0,h.zw)(t.train.title),1),(0,i.Wm)(d,{size:"12px",value:t.train.steps.length/10,color:"main-highlight","track-color":"utilities-light",class:"train-card-base__progress mt-1"},null,8,["value"])])),_:1})])),_:1})])),_:1})):(0,i.kq)("",!0)}var k=t(8745),T=t(9048);const W={name:"TrainingCardBase",components:{Tag:T.Z},props:{train:{type:Object,default:null}},data(){return{}},methods:d()({},k.Z)};var v=t(151),b=t(3414),j=t(2035),q=t(1598),Z=t(7518),Q=t.n(Z);W.render=_;const x=W;Q()(W,"components",{QCard:v.Z,QItem:b.Z,QItemSection:j.Z,QLinearProgress:q.Z});const z={name:"TrainingCard",components:{TrainingCardBase:x},props:{train:{type:Object,default:null}},data(){return{}},methods:{onClick(){}}};var B=t(4027);z.render=f;const I=z;Q()(z,"components",{QCard:v.Z,QImg:B.Z});const L={components:{LoadingCircle:m.Z,TrainingCard:I},data(){return{loading:!1}},computed:d()({},(0,u.rn)("training",["myTrainings"])),methods:d()(d()({},(0,u.nv)("training",["ActionGetMyTrainings"])),{},{timeout(n){return new Promise((a=>setTimeout(a,n)))}}),async created(){this.loading=!0,await this.timeout(500),await this.ActionGetMyTrainings(),this.loading=!1}};L.render=o;const A=L}}]);