(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[765],{2765:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>L});var i=a(3673);const s=(0,i.HX)("data-v-77f4c7aa");(0,i.dD)("data-v-77f4c7aa");const o={class:"q-pa-xs pet-profile-container"},r={class:"pet-profile-row q-pt-md"},l={key:0},n={class:"col-12"},p={class:"row"},d={key:1,class:"flex flex-center q-mt-xl"};(0,i.Cn)();const c=s(((t,e,a,c,u,m)=>{const h=(0,i.up)("q-btn"),f=(0,i.up)("q-toolbar"),P=(0,i.up)("profile-details"),v=(0,i.up)("LoadingCircle");return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)(f,{class:"text-primary"},{default:s((()=>[(0,i.Wm)("div",r,[(0,i.Wm)(h,{flat:"",round:"",color:"utilities-alternate",size:"md",icon:"arrow_back",to:`/pet/${t.petID}`},null,8,["to"])])])),_:1}),t.loading?((0,i.wg)(),(0,i.j4)("div",d,[(0,i.Wm)(v,{color:"status-waiting",size:"6em",thickness:5})])):((0,i.wg)(),(0,i.j4)("div",l,[(0,i.Wm)("div",n,[(0,i.Wm)("div",p,[(0,i.Wm)(P,{hasAvatar:"",petAvatar:t.petProfile.data.image,info:t.petData,title:"Informações do pet",subtitle:"Perfil do animal"},null,8,["petAvatar","info"])])])]))])}));var u=a(515),m=a.n(u),h=a(9836),f=a(7874),P=a(3092),v=a(942),A=a(8562),D=a(5949);const g={name:"PetProfileDetails",components:{LoadingCircle:h.Z,ConfirmDeleteModal:v.Z,PetProfileComponent:A.Z,ProfileDetails:P.Z},data(){return{petID:this.$route.params.id,petData:[],loading:!1}},computed:m()(m()({},(0,f.rn)("pets",["petProfile","loadingPets"])),(0,f.rn)("auth",["user"])),watch:{"$route.params.id":function(t){this.ActionGetPetById(this.$route.params.id)}},async created(){this.loading=!0,await this.ActionGetPetById(this.$route.params.id),await this.ActionSetHomeMenuVisibility(!1),await this.structPetData(),this.loading=!1},beforeRouteLeave(t,e,a){this.ActionSetLoadingPet(!0),this.ActionSetHomeMenuVisibility(!0),a()},methods:m()(m()(m()({},(0,f.nv)("pets",["ActionGetPetById","ActionCommitPet","ActionSetLoadingPet","ActionmodalDeletePet","ActionSetHomeMenuVisibility"])),D.Z),{},{deletePet(){this.ActionmodalDeletePet({modal:!0,data:{id:this.$route.params.id}})},formatUpperCaseFirstLetter(t){let e=t.toLowerCase();return e=e.charAt(0).toUpperCase()+e.slice(1),e},mapPetDetails(){const t=[];return this.petProfile.data&&(this.petProfile.data.is_adopted&&t.push("Adotado"),this.petProfile.data.is_deficiency&&t.push("Com deficiência"),this.petProfile.data.is_neutered&&t.push("Castrado"),this.petProfile.data.is_service&&t.push("De serviço"),this.petProfile.data.is_none&&t.push("Nenhum")),t},async structPetData(){const t=[];this.petProfile.data&&t.push({label:"Nome do pet",value:this.formatUpperCaseFirstLetter(this.petProfile.data.name)},{label:"Detalhes",value:this.mapPetDetails().join(", ")},{label:"Idade",value:this.formatUpperCaseFirstLetter(this.mapAge(this.petProfile.data.age))},{label:"Raça",value:this.formatUpperCaseFirstLetter(this.petProfile.data.breed)}),this.petData=t},mapAge(t){switch(t){case"SIX_MONTS":return"Filhote até 6 meses";case"EIGHTEEN_MONTS":return"Filhote até 1,5 anos";case"ADULT":return"Adulto";default:return"Sênior"}}})};var b=a(9570),C=a(8240),w=a(7518),y=a.n(w);g.render=c,g.__scopeId="data-v-77f4c7aa";const L=g;y()(g,"components",{QToolbar:b.Z,QBtn:C.Z})}}]);