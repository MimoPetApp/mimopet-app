(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[755],{8843:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>pe});var a=l(3673);const o={class:"q-pa-xs pet-profile-container"},i={class:"pet-profile-row q-pt-md"},s={class:"flex"},n={key:0,class:"row"},m={class:"col-12 flex flex-center"},r={class:"row"},d={key:1,class:"flex flex-center q-mt-xl"};function c(e,t,l,c,p,u){const f=(0,a.up)("q-btn"),W=(0,a.up)("q-toolbar"),w=(0,a.up)("PetProfile",!0),b=(0,a.up)("ConfirmDeletePet"),P=(0,a.up)("LoadingCircle");return(0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)(W,{class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",i,[(0,a.Wm)(f,{flat:"",round:"",color:"utilities-alternate",size:"md",icon:"arrow_back",to:"/"}),(0,a.Wm)("div",s,[(0,a.Wm)(f,{flat:"",round:"",color:"utilities-alternate",size:"md",icon:"edit"})])])])),_:1}),e.loadingPets?((0,a.wg)(),(0,a.j4)("div",d,[(0,a.Wm)(P)])):((0,a.wg)(),(0,a.j4)("div",n,[(0,a.Wm)("div",m,[(0,a.Wm)("div",r,[(0,a.Wm)(w,{data:e.petProfile},null,8,["data"])])]),(0,a.Wm)(b)]))])}var p=l(515),u=l.n(p),f=l(9466),W=l(7874),w=l(2323);const b={class:"p-2 pt-4 pb-4"},P=(0,a.Wm)("h4",{class:"m-0 text-weight-bolder text-main-alternate"},"Deseja excluir o pet?",-1),_=(0,a.Wm)("p",{class:"text-utilities-alternate m-0"}," Você não terá mais informações do animal vinculados a sua conta ",-1),g={class:"row justify-between flex-center",style:{width:"70%",height:"70px",margin:"0 auto"}},h=(0,a.Wm)("p",{class:"text-utilities-alternate text-weight-bold m-0"},"Voltar",-1),v=(0,a.Wm)("p",{class:"text-utilities-alternate text-weight-bold m-0"},"Confirmar",-1),y={class:"p-2 pt-4 pb-3"},x=(0,a.Wm)("h4",{class:"m-0 text-weight-bolder text-main-alternate"},"Confirme exclusão do pet",-1),q={class:"text-utilities-alternate mb-4"},C={class:"row justify-center q-py-md",style:{width:"100%",margin:"0 auto"}};function D(e,t,l,o,i,s){const n=(0,a.up)("q-card-section"),m=(0,a.up)("Loading"),r=(0,a.up)("q-separator"),d=(0,a.up)("q-btn"),c=(0,a.up)("q-card-actions"),p=(0,a.up)("q-card"),u=(0,a.up)("TextField"),f=(0,a.up)("Button"),W=(0,a.up)("q-dialog"),D=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(W,{modelValue:e.modalDeletePet.modal,"onUpdate:modelValue":t[5]||(t[5]=t=>e.modalDeletePet.modal=t),persistent:"",onBeforeHide:s.hide},{default:(0,a.w5)((()=>[1==i.step?((0,a.wg)(),(0,a.j4)(p,{key:0,class:"mimo-modal mimo-modal__dialog"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",b,[(0,a.Wm)(n,{class:"q-py-none"},{default:(0,a.w5)((()=>[P])),_:1}),e.loadingPets?((0,a.wg)(),(0,a.j4)(n,{key:1,class:"q-pt-none flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(m)])),_:1})):((0,a.wg)(),(0,a.j4)(n,{key:0,class:"q-py-none"},{default:(0,a.w5)((()=>[_])),_:1}))]),(0,a.Wm)(r),e.loadingPets?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(c,{key:0,class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",g,[(0,a.wy)((0,a.Wm)(d,{flat:"","no-caps":"",class:""},{default:(0,a.w5)((()=>[h])),_:1},512),[[D]]),(0,a.Wm)(r,{vertical:"",spaced:!1}),(0,a.Wm)(d,{flat:"","no-caps":"",class:"",onClick:t[1]||(t[1]=e=>i.step+=1)},{default:(0,a.w5)((()=>[v])),_:1})])])),_:1}))])),_:1})):2==i.step?((0,a.wg)(),(0,a.j4)(p,{key:1,class:"mimo-modal mimo-modal__dialog"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",y,[(0,a.Wm)(n,{class:"q-py-none"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(n,{class:"q-py-none"},{default:(0,a.w5)((()=>[(0,a.Wm)("p",q," Insira o nome do animal "+(0,w.zw)(e.modalDeletePet.data.name)+" para excluir definitivamente os dados ",1),(0,a.Wm)(u,{ref:"confirmPetName",modelValue:i.confirmPetName,"onUpdate:modelValue":t[2]||(t[2]=e=>i.confirmPetName=e),label:i.showConfirmPetNameLabel?"Insira o nome do animal":"",rules:[e=>!!e||"Confirme o nome antes de excluir"],onFocus:t[3]||(t[3]=e=>i.showConfirmPetNameLabel=!1),onBlur:t[4]||(t[4]=e=>i.showConfirmPetNameLabel=0==i.confirmPetName.length)},null,8,["modelValue","label","rules"])])),_:1})]),(0,a.Wm)(r),(0,a.Wm)(c,{class:"q-pa-none"},{default:(0,a.w5)((()=>[(0,a.Wm)("div",C,[(0,a.Wm)(f,{flat:"",color:"red-7",class:"text-weight-bold",size:"md",icon:"delete_outline","no-caps":"",label:e.$t("petProfile.button.delete"),click:s.confirmDelete},null,8,["label","click"])])])),_:1})])),_:1})):(0,a.kq)("",!0)])),_:1},8,["modelValue","onBeforeHide"])}var Z=l(6729),k=l(3613),A=l(668);const j={name:"ConfirmDeletePet",components:{Loading:Z.Z,TextField:A.Z,Button:k.Z},data(){return{step:1,confirmPetName:"",showConfirmPetNameLabel:!0}},computed:u()({},(0,W.rn)("pets",["modalDeletePet","loadingPets"])),methods:u()(u()({},(0,W.nv)("pets",["ActionmodalDeletePet","ActionDeletePet"])),{},{confirmDelete(){this.confirmPetName===this.modalDeletePet.data.name&&this.ActionDeletePet(this.modalDeletePet.data.id)},hide(){this.ActionmodalDeletePet({modal:!1,data:{}})}})};var Q=l(5926),z=l(151),B=l(5589),L=l(5869),V=l(9367),N=l(8240),S=l(677),T=l(7518),$=l.n(T);j.render=D;const F=j;$()(j,"components",{QDialog:Q.Z,QCard:z.Z,QCardSection:B.Z,QSeparator:L.Z,QCardActions:V.Z,QBtn:N.Z}),$()(j,"directives",{ClosePopup:S.Z});const H={class:"q-animate--scale"},I={class:"row justify-center"},R={class:"col-12"},G={class:"pet-profile__text"},M={class:"col-12"},U={class:"pet-profile__text mt-1"},E={class:"row justify-center mt-1 mb-3"},O={class:"pet-profile__text pet-profile__badge"},J={class:"pet-profile__card-title"},K={class:"pet-profile__card-subtitle"},X=(0,a.Wm)("div",{class:"pet-profile__timeline-entry bg-color-pink"},[(0,a.Wm)("p",null,"Recebendo parentes e amigos em casa"),(0,a.Wm)("p",null,"15 Fev 2020")],-1),Y=(0,a.Wm)("div",{class:"pet-profile__timeline-entry bg-color-yellow"},[(0,a.Wm)("p",null,"Recebendo parentes e amigos em casa"),(0,a.Wm)("p",null,"14 Fev 2020")],-1),ee=(0,a.Wm)("div",{class:"pet-profile__timeline-entry bg-color-ice"},[(0,a.Wm)("p",null,"Recebendo parentes e amigos em casa"),(0,a.Wm)("p",null,"13 Fev 2020")],-1),te=(0,a.Wm)("div",{class:"pet-profile__timeline-entry bg-color-orange"},[(0,a.Wm)("p",null,"Recebendo parentes e amigos em casa"),(0,a.Wm)("p",null,"12 Fev 2020")],-1),le={class:"col-12 mt-3 mb-3 column justify-center items-center"};function ae(e,t,l,o,i,s){const n=(0,a.up)("q-avatar"),m=(0,a.up)("q-card-section"),r=(0,a.up)("q-timeline-entry"),d=(0,a.up)("q-timeline"),c=(0,a.up)("q-separator"),p=(0,a.up)("Button"),u=(0,a.up)("ConfirmDeletePet"),f=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)("div",H,[(0,a.Wm)("div",I,[(0,a.Wm)(n,{size:"100px",class:"mt-2"},{default:(0,a.w5)((()=>[(0,a.Wm)("img",{src:e.parseProfileThumbnail(l.data.image[0])},null,8,["src"])])),_:1})]),(0,a.Wm)("div",R,[(0,a.Wm)("h2",G,(0,w.zw)(l.data.name),1)]),(0,a.Wm)("div",M,[(0,a.Wm)("p",U,(0,w.zw)(e.parseBreed(l.data.breed))+", "+(0,w.zw)(e.getAge(l.data.age)),1)]),(0,a.Wm)("div",E,[(0,a.Wm)("span",O,(0,w.zw)(e.parseGender(l.data.gender)),1)]),(0,a.Wm)(f,{class:"pet-profile__card pt-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"column justify-center mb-3"},{default:(0,a.w5)((()=>[(0,a.Wm)("h3",J,(0,w.zw)(e.$t("petProfile.extra.journey")),1),(0,a.Wm)("h4",K,(0,w.zw)(e.$t("petProfile.extra.since"))+" "+(0,w.zw)(2009)+" 😍 ",1)])),_:1}),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{color:"utilities-border",layout:"dense",class:"pet-profile__timeline"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{subtitle:"Teste de comportamento",color:"utilities-border"}),(0,a.Wm)(r,{color:"utilities-border"},{default:(0,a.w5)((()=>[X])),_:1}),(0,a.Wm)(r,{color:"utilities-border"},{default:(0,a.w5)((()=>[Y])),_:1}),(0,a.Wm)(r,{subtitle:"Teste de comportamento",color:"utilities-border"}),(0,a.Wm)(r,{color:"utilities-border"},{default:(0,a.w5)((()=>[ee])),_:1}),(0,a.Wm)(r,{color:"utilities-border"},{default:(0,a.w5)((()=>[te])),_:1}),(0,a.Wm)(r,{subtitle:"Teste de comportamento",color:"utilities-border"})])),_:1})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",le,[(0,a.Wm)(p,{flat:"",color:"red-7",class:"text-weight-bold",size:"md",icon:"delete_outline","no-caps":"",label:e.$t("petProfile.button.delete"),onClick:s.deletePet},null,8,["label","onClick"]),(0,a.Wm)(u)])])),_:1})])),_:1})])}var oe=l(7244);const ie={name:"PetProfile",components:{Button:k.Z,ConfirmDeletePet:F},props:{data:{type:Object,default:()=>{}}},data(){return{}},methods:u()(u()(u()({},oe.Z),(0,W.nv)("pets",["ActionmodalDeletePet"])),{},{deletePet(){this.ActionmodalDeletePet({modal:!0,data:{id:this.$route.params.id,name:this.data.name}})}})};var se=l(5096),ne=l(1432),me=l(3424);ie.render=ae;const re=ie;$()(ie,"components",{QAvatar:se.Z,QCard:z.Z,QCardSection:B.Z,QTimeline:ne.Z,QTimelineEntry:me.Z,QSeparator:L.Z});const de={name:"PetDetails",components:{LoadingCircle:f.Z,ConfirmDeletePet:F,PetProfile:re},computed:u()(u()({},(0,W.rn)("pets",["petProfile","loadingPets"])),(0,W.rn)("auth",["user"])),watch:{"$route.params.id":function(e){this.ActionGetPetById(this.$route.params.id)}},mounted(){this.ActionGetPetById(this.$route.params.id),this.ActionSetHomeMenuVisibility(!1)},created(){},beforeRouteLeave(e,t,l){this.ActionSetLoadingPet(!0),this.ActionSetHomeMenuVisibility(!0),l()},methods:u()(u()({},(0,W.nv)("pets",["ActionGetPetById","ActionCommitPet","ActionSetLoadingPet","ActionmodalDeletePet","ActionSetHomeMenuVisibility"])),{},{deletePet(){this.ActionmodalDeletePet({modal:!0,data:{id:this.$route.params.id}})}})};var ce=l(9570);de.render=c;const pe=de;$()(de,"components",{QToolbar:ce.Z,QBtn:N.Z})}}]);