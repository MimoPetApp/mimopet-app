(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[524],{8524:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>N});var o=a(3673);const s={key:0},n={key:0},c={key:1,class:"row"},m=(0,o.Wm)("h3",{class:"mimo-text mimo-text__h3 mimo-text--white",style:{"line-height":"2rem"}}," Nenhum pet encontrado, ",-1),l=(0,o.Wm)("span",{class:"mimo-text mimo-text--white"},"Cadastrar Pet?",-1),r={key:1,class:"flex flex-center q-mt-xl"};function i(t,e,a,i,d,p){const u=(0,o.up)("PetsList",!0),f=(0,o.up)("q-btn"),h=(0,o.up)("q-card-section"),g=(0,o.up)("q-card"),w=(0,o.up)("Loading");return(0,o.wg)(),(0,o.j4)("div",null,[t.loadingPets?((0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)(w)])):((0,o.wg)(),(0,o.j4)("div",s,[t.petsList.length>=1?((0,o.wg)(),(0,o.j4)("div",n,[(0,o.Wm)(u,{pet:t.petsList[0]},null,8,["pet"])])):((0,o.wg)(),(0,o.j4)("div",c,[(0,o.Wm)(g,{class:"home-card q-animate--scale q-mt-xl",style:{background:"#7166f1",height:"calc(100vh - 145px)"}},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{class:"text-center q-pa-xl"},{default:(0,o.w5)((()=>[m,(0,o.Wm)(f,{class:"home-card__button no-shadow q-ml-md",to:"novo/pet","no-caps":"",flat:""},{default:(0,o.w5)((()=>[l])),_:1})])),_:1})])),_:1})]))]))])}var d=a(515),p=a.n(d),u=a(6729),f=a(2323);const h=(0,o.Wm)("h3",{class:"home-card__text mb-2"},"Acompanhe o mural de atividades do pet",-1),g={class:"home-card__text home-card__text--pet-name"},w={class:"row justify-between items-center"},_=(0,o.Wm)("div",{style:{"max-width":"45%"}},[(0,o.Wm)("h4",{class:"text-weight-bold m-0 p-0"},"Treinamentos"),(0,o.Wm)("p",{class:"text-weight-medium m-0 p-0"},"Meus programas de adestramento")],-1),b=(0,o.Uk)("Detalhar");function x(t,e,a,s,n,c){const m=(0,o.up)("q-avatar"),l=(0,o.up)("q-btn"),r=(0,o.up)("q-card-section"),i=(0,o.up)("HomeItem"),d=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(d,{class:"home-card q-animate--scale q-mt-xl",style:{background:"#7166f1"}},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{class:"q-pa-xl"},{default:(0,o.w5)((()=>[h,(0,o.Wm)(m,{size:"60px"},{default:(0,o.w5)((()=>[(0,o.Wm)("img",{src:t.parseProfileThumbnail(a.pet.image[0])},null,8,["src"])])),_:1}),(0,o.Wm)(l,{class:"home-card__button no-shadow q-ml-md",to:`/pet/${a.pet.id}`,"no-caps":"",flat:""},{default:(0,o.w5)((()=>[(0,o.Wm)("span",g,(0,f.zw)(a.pet.name),1)])),_:1},8,["to"])])),_:1}),(0,o.Wm)(d,{class:"home-card q-animate--scale q-pa-lg",style:{background:"#ffffff"}},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{label:"Explore comportamentos",description:"Vantages de ter um pet treinado",color:"#FF8E4A",colorAlt:"#f66917"}),(0,o.Wm)(d,{class:"p-3 mt-1 mb-2",style:{background:"#4ad5da",borderRadius:"25px !important"}},{default:(0,o.w5)((()=>[(0,o.Wm)("div",w,[_,(0,o.Wm)(l,{rounded:"",flat:"","no-caps":"","text-color":"main-background",style:{background:"rgba(255, 255, 255, 0.2)"}},{default:(0,o.w5)((()=>[b])),_:1})])])),_:1})])),_:1})])),_:1})}a(246);const W={class:"row justify-center items-center"},y={class:"text-weight-bolder m-0 p-0"},v={class:"row justify-center items-center"},k={class:"text-weight-medium m-0 p-0"},q={class:"row justify-center items-center mt-2"},P=(0,o.Uk)(" Ver mais "),j=(0,o.Wm)("svg",{class:"home-card__item__circle",height:"50",width:"120"},[(0,o.Wm)("ellipse",{cx:"60",cy:"60",rx:"50",ry:"35",fill:"#fff"})],-1);function A(t,e,a,s,n,c){const m=(0,o.up)("q-btn"),l=(0,o.up)("q-card");return(0,o.wg)(),(0,o.j4)(l,{class:"home-card__item p-2 pt-4 mt-1 mb-2",style:`background: ${a.color}`},{default:(0,o.w5)((()=>[(0,o.Wm)("div",W,[(0,o.Wm)("h4",y,(0,f.zw)(a.label),1)]),(0,o.Wm)("div",v,[(0,o.Wm)("p",k,(0,f.zw)(a.description),1)]),(0,o.Wm)("div",q,[(0,o.Wm)(m,{onClick:a.click,rounded:"",flat:"","no-caps":"","text-color":"main-background",class:"home-card__item--button"},{default:(0,o.w5)((()=>[P])),_:1},8,["onClick"])]),(0,o.Wm)("div",{class:"home-card__item__footer",style:`background: ${a.colorAlt}`},null,4),j])),_:1},8,["style"])}const L={name:"HomeItem",props:{label:{type:String,default:""},description:{type:String},notificationLabel:{type:String,default:"Agendados"},notification:{type:Number,default:0},color:{type:String,default:"#fe7624"},colorAlt:{type:String,default:"#fe7624"},click:{type:Function,default:()=>{}}},data(){return{}}};var C=a(151),Z=a(8240),Q=a(7518),S=a.n(Q);L.render=A;const z=L;S()(L,"components",{QCard:C.Z,QBtn:Z.Z});var I=a(7244);const B={name:"PetsList",components:{HomeItem:z},props:{pet:{type:Object,default:()=>{}}},methods:p()({},I.Z)};var F=a(5589),H=a(5096);B.render=x;const $=B;S()(B,"components",{QCard:C.Z,QCardSection:F.Z,QAvatar:H.Z,QBtn:Z.Z});var E=a(7874);const G={name:"PageIndex",components:{PetsList:$,Loading:u.Z},computed:p()({},(0,E.rn)("pets",["petsList","loadingPets"])),mounted(){this.ActionGetPets()},beforeRouteLeave(t,e,a){this.ActionSetLoadingPet(!0),a()},methods:p()({},(0,E.nv)("pets",["ActionGetPets","ActionCommitPet","ActionSetLoadingPet"]))};G.render=i;const N=G;S()(G,"components",{QCard:C.Z,QCardSection:F.Z,QBtn:Z.Z})}}]);