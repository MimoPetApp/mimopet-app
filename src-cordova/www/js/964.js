(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[964],{3598:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>k});var a=i(3673);const o=(0,a.HX)("data-v-4a93a07f");(0,a.dD)("data-v-4a93a07f");const n={class:"q-pa-xs pet-profile-container"},s={class:"pet-profile-row q-pt-md"},l={class:"flex"},r={key:0,class:"row"},c={class:"col-12 flex flex-center"},d={class:"row"},m={key:1,class:"flex flex-center q-mt-xl"};(0,a.Cn)();const p=o(((t,e,i,p,u,f)=>{const P=(0,a.up)("q-btn"),h=(0,a.up)("q-toolbar"),v=(0,a.up)("pet-profile-component"),w=(0,a.up)("ConfirmDeletePet"),A=(0,a.up)("LoadingCircle");return(0,a.wg)(),(0,a.j4)("div",n,[(0,a.Wm)(h,{class:"text-primary"},{default:o((()=>[(0,a.Wm)("div",s,[(0,a.Wm)(P,{flat:"",round:"",color:"utilities-alternate",size:"md",icon:"arrow_back",to:"/"}),(0,a.Wm)("div",l,[(0,a.Wm)(P,{flat:"",round:"",color:"utilities-alternate",size:"md",icon:"edit",to:`/pet/${t.petID}/detalhes`},null,8,["to"])])])])),_:1}),t.petProfile.loading?((0,a.wg)(),(0,a.j4)("div",m,[(0,a.Wm)(A,{color:"status-waiting",size:"6em",thickness:5})])):((0,a.wg)(),(0,a.j4)("div",r,[(0,a.Wm)("div",c,[(0,a.Wm)("div",d,[(0,a.Wm)(v,{data:t.petProfile.data},null,8,["data"])])]),(0,a.Wm)(w)]))])}));var u=i(515),f=i.n(u),P=i(2020),h=i(7874),v=i(9741),w=i(2704),A=i(5949);const b={name:"PetProfile",components:{LoadingCircle:P.Z,ConfirmDeletePet:v.Z,PetProfileComponent:w.Z},data(){return{petID:this.$route.params.id}},computed:f()(f()({},(0,h.rn)("pets",["petProfile","loadingPets"])),(0,h.rn)("auth",["user"])),watch:{"$route.params.id":function(t){this.ActionGetPetById(this.$route.params.id)}},async created(){await this.ActionGetPetById(this.$route.params.id),await this.ActionSetHomeMenuVisibility(!1)},beforeRouteLeave(t,e,i){this.ActionSetLoadingPet(!0),this.ActionSetHomeMenuVisibility(!0),i()},methods:f()(f()(f()({},(0,h.nv)("pets",["ActionGetPetById","ActionCommitPet","ActionSetLoadingPet","ActionmodalDeletePet","ActionSetHomeMenuVisibility"])),A.Z),{},{deletePet(){this.ActionmodalDeletePet({modal:!0,data:{id:this.$route.params.id}})}})};var g=i(9570),y=i(8240),W=i(7518),C=i.n(W);b.render=p,b.__scopeId="data-v-4a93a07f";const k=b;C()(b,"components",{QToolbar:g.Z,QBtn:y.Z})}}]);