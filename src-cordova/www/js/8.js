(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[8],{8512:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>le});var a=l(3673),d=l(8880);const V={style:{background:"#ffffff"}},n={class:"q-gutter-xs pr-4 pl-4"},U={class:"row mt-3",style:{"margin-bottom":"18px"}},i={class:"col-12 col-md-12 col-xs-12 list-breeds-wrapper"},s={key:1,class:"flex flex-center q-mt-xl"};function o(e,t,l,o,r,N){const c=(0,a.up)("q-btn"),Z=(0,a.up)("q-toolbar"),R=(0,a.up)("TextField"),m=(0,a.up)("Button"),p=(0,a.up)("Ask"),W=(0,a.up)("Button-Checkbox-Group"),T=(0,a.up)("SearchField"),F=(0,a.up)("Checkbox"),k=(0,a.up)("FeedbackModal"),h=(0,a.up)("q-layout"),S=(0,a.up)("LoadingCircle");return(0,a.wg)(),(0,a.j4)("div",V,[e.loading?((0,a.wg)(),(0,a.j4)("div",s,[(0,a.Wm)(S,{color:"status-waiting",size:"6em",thickness:5})])):((0,a.wg)(),(0,a.j4)(h,{key:0,view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[5!==e.step?((0,a.wg)(),(0,a.j4)(Z,{key:0,class:"text-primary text-main-primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{flat:"",round:"",dense:"",icon:"arrow_back",onClick:t[1]||(t[1]=t=>e.backStep()),"text-color":"utilities-alternate"})])),_:1})):(0,a.kq)("",!0),(0,a.wy)((0,a.Wm)(p,{title:"Como seu pet se chama?",subtitle:"Vamos construir o perfil do seu animal 🐶","align-content":"center"},{content:(0,a.w5)((()=>[(0,a.Wm)(R,{modelValue:e.form.petName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.petName=t),light:"",align:"center",class:"mb-1",type:"text",label:"Insira o nome do pet"},null,8,["modelValue"])])),action:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:0===e.form.petName.length,onClick:t[3]||(t[3]=t=>e.nextStep())},null,8,["disabled"])])),_:1},512),[[d.F8,1===e.step]]),(0,a.wy)((0,a.Wm)(p,{title:"Qual a idade do seu pet?",subtitle:"Estamos acabando de construir o seu perfil de tutor treinador","align-content":"center"},{content:(0,a.w5)((()=>[(0,a.Wm)(W,{options:e.ageOptions,"single-selection":"",onSelected:t[4]||(t[4]=t=>e.selectedHandler("petAge",t))},null,8,["options"])])),action:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petAgeFilled,onClick:t[5]||(t[5]=t=>e.nextStep())},null,8,["disabled"])])),_:1},512),[[d.F8,2===e.step]]),(0,a.wy)((0,a.Wm)(p,{title:"Qual a raça do pet?",subtitle:"Estamos acabando de construir o seu perfil de tutor treinador","align-content":"start"},{content:(0,a.w5)((()=>[(0,a.Wm)("div",n,[(0,a.Wm)(T,{modelValue:e.form.petBreed.searchName,"onUpdate:modelValue":[t[6]||(t[6]=t=>e.form.petBreed.searchName=t),t[7]||(t[7]=t=>e.searchBreed())],label:"Busque por nome",class:"mb-1",align:"right",outline:"",disable:e.form.petBreed.isUnknown},null,8,["modelValue","disable"]),(0,a.Wm)(F,{modelValue:e.form.petBreed.isUnknown,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.petBreed.isUnknown=t),label:"Sem raça",onClick:t[9]||(t[9]=t=>e.noBreedHandler())},null,8,["modelValue"])]),(0,a.Wm)("div",U,[(0,a.Wm)("div",i,[(0,a.Wm)(W,{options:e.breedsList,"single-selection":"",onSelected:t[10]||(t[10]=t=>e.selectedHandler("petBreed",t))},null,8,["options"])])])])),action:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petBreedFilled,onClick:t[11]||(t[11]=t=>e.nextStep())},null,8,["disabled"])])),_:1},512),[[d.F8,3===e.step]]),(0,a.wy)((0,a.Wm)(p,{title:"Informe detalhes do pet",subtitle:"Queremos entender mais do seu animal","align-content":"center"},{content:(0,a.w5)((()=>[(0,a.Wm)(W,{options:e.detailOptions,onSelected:t[12]||(t[12]=t=>e.selectedHandler("petDetails",t))},null,8,["options"])])),action:(0,a.w5)((()=>[(0,a.Wm)(m,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petDetailsFilled,onClick:t[13]||(t[13]=t=>e.registerPet())},null,8,["disabled"])])),_:1},512),[[d.F8,4===e.step]]),(0,a.Wm)(k,{active:5===e.step,icon:e.feedbackIcon,title:"Pet Adicionado",subtitle:"Você pode adicionar inúmeros pets a sua conta cadastrada",buttonText:"Acessar o app",action:e.goToHome},null,8,["active","icon","action"])])),_:1}))])}var r=l(515),N=l.n(r),c=l(7874),Z=l(9221),R=l(3500),m=l(2318),p=l(2323);const W={class:"mimo-text main-button__text mimo-text--white"};function T(e,t,l,d,V,n){const U=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.j4)(U,{to:l.to,type:l.type,color:"main-primary",class:"main-button no-shadow",loading:l.loading,disable:l.disable,onClick:l.click},{default:(0,a.w5)((()=>[(0,a.Wm)("span",W,(0,p.zw)(l.label),1)])),_:1},8,["to","type","loading","disable","onClick"])}const F={name:"MainButton",props:{to:{type:String,default:""},label:{type:String,default:""},type:{type:String,default:"button"},click:{type:Function,default:()=>{}},loading:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}},data(){return{}}};var k=l(8240),h=l(7518),S=l.n(h);F.render=T;const b=F;S()(F,"components",{QBtn:k.Z});var M=l(7990),J=l(2020);const Y=(0,a.HX)("data-v-5cd210bd");(0,a.dD)("data-v-5cd210bd");const Q={class:"ask-wrapper"},E={class:"ask-wrapper__header"},G={class:"row"},B={class:"col-12 col-md-12 col-xs-12"},z={class:"text-main-alternate"},u={key:0,class:"text-main-alternate-light"},x={class:"row"},X={class:"col-12 col-md-12 col-xs-12"},D={class:"ask-wrapper__footer"},y={class:"row"},j={class:"col-12 col-md-12 col-xs-12 flex items-center justify-center"};(0,a.Cn)();const w=Y(((e,t,l,d,V,n)=>((0,a.wg)(),(0,a.j4)("div",Q,[(0,a.Wm)("div",E,[(0,a.Wm)("div",G,[(0,a.Wm)("div",B,[(0,a.Wm)("h2",z,(0,p.zw)(l.title),1),l.subtitle?((0,a.wg)(),(0,a.j4)("p",u,(0,p.zw)(l.subtitle),1)):(0,a.kq)("",!0)])])]),(0,a.Wm)("div",{class:["ask-wrapper__content",n.selectAlignContent]},[(0,a.Wm)("div",x,[(0,a.Wm)("div",X,[(0,a.WI)(e.$slots,"content",{},void 0,!0)])])],2),(0,a.Wm)("div",D,[(0,a.Wm)("div",y,[(0,a.Wm)("div",j,[(0,a.WI)(e.$slots,"action",{},void 0,!0)])])])])))),H={name:"Ask",props:{color:{type:String,default:"main-primary",validate:e=>-1!==["main-primary"].indexOf(e)},type:{type:String,default:"squared",validate:e=>-1!==["rounded","squared"].indexOf(e)},selected:{type:Boolean,default:!1,validate:e=>-1!==[!0,!1].indexOf(e)},title:{type:String,default:"Insert your title"},subtitle:{type:String},alignContent:{type:String,default:"center",validate:e=>-1!==["start","center","end"].indexOf(e)}},computed:{selectAlignContent(){switch(this.alignContent){case"start":return"ask-wrapper__content--align-start";case"end":return"ask-wrapper__content--align-end";default:return"ask-wrapper__content--align-center"}}}};H.render=w,H.__scopeId="data-v-5cd210bd";const O=H;var v=l(5650),C=l(3971),g=l(9535),I=l(6950);const L=l(35),K={name:"PetRegister",components:{Title:Z.Z,Button:R.Z,Ask:O,MainButton:b,AuthContainer:M.Z,LoadingCircle:J.Z,ButtonCheckboxGroup:m.Z,TextField:v.Z,SearchField:C.Z,Checkbox:g.ZP,FeedbackModal:I.Z},data(){return{test:null,ageOptions:[{label:"Filhote até 6 meses",selected:!1},{label:"Filhote até 1,5 anos",selected:!1},{label:"Adulto",selected:!1},{label:"Sênior",selected:!1}],detailOptions:[{label:"Adotado",selected:!1},{label:"Castrado",selected:!1},{label:"Com deficiência",selected:!1},{label:"De serviço",selected:!1}],form:{petName:"",petAge:null,petBreed:{isUnknown:!1,name:"",searchName:""},petDetails:null},createdPet:null,listOptions:[{id:1,name:"Akita"},{id:2,name:"Yorkshire"},{id:3,name:"Yorkshire Terrier"},{id:4,name:"Vira-lata"},{id:5,name:"Splitz Alemão"},{id:6,name:"Dálmata"}],step:1,loading:!1,formHasError:[!1,!1],btnDisabled:!0,breedsList:[]}},computed:N()(N()({},(0,c.rn)("petRegister",{breedsData:"breeds",registerPetData:"registerPet"})),{},{feedbackIcon(){return L},petAgeFilled(){return!!this.form.petAge},petBreedFilled(){return!(!this.form.petBreed.name&&!this.form.petBreed.isUnknown)},petDetailsFilled(){return!!this.form.petDetails}}),beforeMount(){},mounted(){this.ActionSetHomeMenuVisibility(!1)},beforeRouteLeave(e,t,l){this.ActionSetHomeMenuVisibility(!0),l()},methods:N()(N()(N()({},(0,c.nv)("pets",["ActionSetHomeMenuVisibility","ActionCreatePet"])),(0,c.nv)("petRegister",["ActionGetBreeds","ActionRegisterPet"])),{},{searchBreed(){let e=[];const t=this;this.form.petBreed.searchName?(e=this.breedsData.data.filter((function(e){return e.breed.toUpperCase().includes(t.form.petBreed.searchName.toUpperCase())})),this.formatBreedList(e)):(this.breedsList=[],this.formatBreedList(this.breedsData.data))},formatBreedList(e){let t=[];e.length>0&&(t=e.map((function(e){return{label:e.breed,selected:!1}}))),this.breedsList=t},noBreedHandler(){this.form.petBreed.isUnknown?(this.form.petBreed.searchName="",this.form.petBreed.name="Sem raça",this.breedsList=[]):(this.form.petBreed.name="",this.formatBreedList(this.breedsData.data))},goToHome(){this.$router.push({name:"home"})},async nextStep(){this.step++},async registerPet(){const e=this.formatForm();await this.ActionRegisterPet(e),this.registerPetData.error||this.nextStep()},formatForm(){let e=JSON.parse(JSON.stringify(this.form));return e={name:e.petName,breed:e.petBreed.name,age:this.mapAge(e.petAge.label),gender:"male",type:"canine",is_adopted:e.petDetails.includes("Adotado"),is_neutered:e.petDetails.includes("Castrado"),is_deficiency:e.petDetails.includes("Com deficiência"),is_service:e.petDetails.includes("De serviço")},e},mapAge(e){switch(e){case"Filhote até 6 meses":return"SIX_MONTS";case"Filhote até 1,5 anos":return"EIGHTEEN_MONTS";case"Adulto":return"ADULT";default:return"SENIOR"}},backStep(){this.step>1?this.step--:this.$router.push({name:"home"})},async onSubmit(){const e={name:this.form.petName,gender:this.form.petGender,profilePet:this.parseProfilePet(this.form.petProfile),birthdate:`${this.form.year}-${this.form.month}-${this.form.day}`,breed:this.form.petBreed.isUnknown?"unknown":this.form.petBreed.name,details:this.form.petDetails,togetherBy:Number(this.form.howLong)};this.loading=!0;const t=await this.ActionCreatePet(e);t.id&&(this.createdPet=t,this.nextStep()),this.loading=!1},finishRegister(){this.$router.push({name:"petdetails",params:{id:`${this.createdPet.id}`}})},selectedHandler(e,t){t.length>0?("petBreed"!==e&&(this.form[e]=[]),"petAge"===e?this.form[e]=t[0]:"petBreed"===e?this.form[e].name=t[0].label:this.form[e]=t):this.form[e]=null}}),async created(){await this.ActionGetBreeds(),this.formatBreedList(this.breedsData.data)}};var f=l(9214),P=l(9570),A=l(7011),q=l(3414),_=l(2035),$=l(2350),ee=l(5869),te=l(6489);K.render=o;const le=K;S()(K,"components",{QLayout:f.Z,QToolbar:P.Z,QBtn:k.Z,QList:A.Z,QItem:q.Z,QItemSection:_.Z,QItemLabel:$.Z,QSeparator:ee.Z}),S()(K,"directives",{Ripple:te.Z})},35:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODEiIHZpZXdCb3g9IjAgMCA4MCA4MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8cGF0aCBkPSJNMCA4MC42SDgwVjAuNTk5OTk5SDBWODAuNloiIGZpbGw9InVybCgjcGF0dGVybjApIi8+DQo8ZGVmcz4NCjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPg0KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwIiB0cmFuc2Zvcm09InNjYWxlKDAuMDE1NjI1KSIvPg0KPC9wYXR0ZXJuPg0KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBWXprbEVRVlI0QWUxNkJYZ2JTWmZ0cVdheGJaa2RlMkpNTXVHWlNZWUM3NGVCZmNPOHZQc3pMRE16TXpNejd6QXpNd1VjYzJJR2dXVng4NnUrcmY2a3lVc0dsemMzMzFFMXBWWG5jcFdNLzYxeVRzN0pPVGtuNStTY25KTnp3dkFmS0pPalJ6dE0wN3lnWEtuczBLdjZVTFZhYlFWamppekxLK0Z3YUVKVjFDTjhmQXZBeG4rWUFxYkhqdVBmU243M1YzOXNxSkRmT0pCSnIyNFdYS3Q0K2NldWZmeWFtNzgrWFNnVWJpK1dpb2NOdzlocEdPWm0xM1hCR0lNc1NYRGh3ckpzd0w5bXlZb3lxYW5xc2FhbXBvZGtXYnJua1h2L2Z2c3JMenh4UUpCVTF0TTdNQzRLN0ZrQUsvOW1DdmlSYi84VVBvb1VpeHZoZEdybGEwb2JtWnRWd2JoSVk4WFdxT0pDYXhsQTMrNXIxcmZzdUtqaXVrNjNJREFvaWdwVlVTQkpJa1JSaENBSXBBREhjV0JiTmt6TEFsY1NkRjBId0J6WHhmeXgxNTVLTGgxL0tGclpXRUxKVW1DeTJKeHVTeTlIRXNtL0JYRFhSMWJBMTkxd09UNnNpSkw4OVptVjJlL1VVTnJkMVNLak04R1FUTGFpZWVnS0pEWmZnbEMwQmN5MW9Xb3FGTGxPbkFtTVJvRUo4TVIxWE5pT0RkdjJZWkVpVEZTNUlsd0lLT1dXa1p0K0J1bXBKNUhObGJDU0I5YnkvRWt4L25TeXZmdm5BVHo2b1JYd3FWc080NE5LTEJiZmVuSjY0dWRjUFhOamIxTEJRRmNNVFpxRlVFc2Y0dHR1UmJSckJ6UlpnQ0o1VnVmRVpabklTd0luN1Z1ZVFpQ0E2M2tBaHhPTU5TWHdmT0Y3aEFWVXF3YnljeThoUDNZbnlzVjFaTXNDWnBieVdNNDV1aHB0LzlOTmZmMC9DaUQ5Z1kxNFlOOU9jczMzaTBxNWNNdjh6TmcveE1UQ3ZsMzlUUmphbEVDQ3lHOUdZdWZYSTlLeEZTSFpSVWhUT0VLZUFnZzgwUkVrU1NJRVNoRkpLZldRRUQzUWVSMENIREFHQ1BFK0NLRU9vRENEc0ZSRmExTWNtZ0lwbFU3dlcwM25yb2pGbTE3amZySE1nZmNMY2MrMjg5NzN3eHU1N0xlc3pFLzhYbitiMUx4em9BVmR5VEJDWWhWS3ZBZXhuZCtJY1BJOG4zeFlnK2FSbCtVems2ZFFFRGlrR25IUEU0UkFDUkFZZVFnZDE3MEZnR09BUmJvQXJSVjJkaFF5TXhHUGhKQ0lLQ2dVOGwyTHkydlhKZHM2anpPR0tRNjhINGdYN1J4OFh3L204L252VGkxTi9kSzIzb2l5cGE4SnliZ0tUYkloeWlHRXQ5eUJVUHRXZnU1dzhpR0VOSTBUbC8yNDk4aExSTFFPZ2NZR2d2NFlLSUxSK1A4RHJndkhNc0hDblpRYm5QVlJLTElJVFpVUmk2aW9WQ3F4MmZtVmErS0psbkVlUm1NY2VDK0l1N2YwdnVkRHJvdHZYVHg1OUZlMjkwWEZrZDRFbXFNS3dxb0E1bFNoOUYyQnlPYkRVRVVMWWMveWF1RDJnY1Y5c2pRR0ZpZnlJcm03SVByRUEwc0xIS2NySUJBNmRGM1l0Z1VXMlFTbmtnVktDMUJVaFhKT05LUndKVlJEYzB0clYzWjM5NzNORlQvTmdYZURlTmtGVzkvMUFUQjIyOHo0RzcvRHljdkRuSHhMVEVaRWt5QTZGWWpOUE42SGJ5YXlZVTNoNUxrQ2dvd3ZjL0wwRGhtaVZMZTZTSVJyaVpBcVFxUExCNlNGZ1BCcHlkSUZpV3ZEWVJMQTg0R1ZQZzdKS1VHU0ZTaXlnSEJJSmlXY25GODUwTmJSL1RJWVczZzMxeGIzN3g0KyswMVoyajk2NUxXL0crNVM0OXZPYXlieTBSQW5KWHBseTRYYWZ5MlU1Q0EweVVVNDFKRHd5UHFCMjlOSUNLeFBiaDdFTmhBY040QXUwajJnN2dXdVN6MERqYlpsd0JhamNNMEszSTBwUDhlSUFpa2hwQ3JZS0JTYkZsZXpGdzRPanR5amFWcVJBMmVDZU1YQkM4OTRJeGFOTmg5NTY3Vy83SWlaVzNZTUpOR1dVQkFMeXhSenRsa0JTMnpqQ3JnU2tnQ0VOQldxU2lBRkJNa3VpSGR5YzdFZTc0MXVqZUM0Wm5rYTZSOEllQWQ1RjNBREJkaXdPRnlsQ1VaNkZLSlQ5cFVnTU1pU0FGV1JzSlplN3lwVTNOWnNObk1YQjg0RXNiTlpPZU9OVERielUyNTUrWTQ5UTBsME5tdUlSeFJvaWtEejRUMDh4SzdMb2JadGh5SzVsUFRxNWE0ZSswS2oyek9SckJvSTNNYlZpQnNjK01yaG9MUEE5VjIzcmdUZkMvam93REoxMkZDaDUrYmdGdWVncUJwRWtVSDBsQ0Q2VldWbWJublA1cUVkaTlGby9BME9uQTZobzdNSHA2TzdaOU1uMDhzbnYzWGJlUWxPUG9SNFdFWklGZWpsdG0zQ1pHR0lYazFtRGlSeTY0WVNSbUErK2NEcVJKNFJUVGY0WlA2eDY0S0Q3cEc0QVhIS0U2eXhIQWJmRVhnV3Vid29LNUNUMjJFNE1oekg1dGNZTkVYa0JwUFExeDVCWDV1S3NkRzN2cjkvWUhpUUE2ZERPUDFDVzdLbGFXTHMyRTlzU2twS2Izc1VzWWhFNVBtWDBXU3JsU3BjcllOcVAzTXRDRFNaZ0h6REdHUjJqc0NOR1NINGRPa3o4UEthQ21na0JFb0lsRnBYUW1NeXBWWmJTdlRDbHBwZ0dnWUEzL29oVlVKVFZNWkliek1VZTJQdzFaZWYvekVPbkE3aDlBdlRNOU9mY3ZYc1pkVGhSV1JFVkFteTdMdXVaYnNvNjM0ZGx0UUlUVFFnNzArTzBLQUVQK0c1cUV2OU9DRGZFQUxrRHY0QXo0T1VDT1JRRExJYW9tVGEyQmpSc2NpUDRVQlVvbkNVWmxSMGcxcHBXbmhKQXNLcWlHUmN3VWhmRTFZWEptOGZITjV5RlFjYUlUU2VESTlzR1Z4Wm5QbjJ3YTRvVDNxcVI1NWVKREJHQ1VnM2JGUjBHNjRjQnlOeUlEUzZLWFYwdGVONnpMdjFnZUFHbkJ1djB3RFB0VU14OGh3anY0eHFkZzYyVVlJY1RrRFdJalNYeHA0QmNPbDdURmRCdVdyQk5CMmFxeWdBQ3ZVR0VucmJva2hHSFBYRThTTS9jT25sSDVNNUVFRHlQZ0w1MTMvNnk2L1RXS1d2cjZNRHNaQUVWZmFJK09RTnk0RnUyaWhWYldpMlVDY0NuS0dFTVFKSjNkWHJ4eHcwMUsvU3B5QXBZS0tFM09TVFNMMTlGNHJMbzdBc0UwS29CZkcrL1VqdXVCNXlwQk82dnZiTzBzaFJOVjNZdWdYZDlQS1N3OG1USVloRFBDTHpOVXN6WHAyY1BUdzVOWFViZ0w5RlRRUitBUjZPSDN0cjUveko4UytkMXhIaHNhTkFWYnc0OHlkbVdpNnFobzJ5YnFOWXNWQ3A2bkJyNVlna0lOMmdqRHBEUnNtdUh1ejhMUEQySU83SjhBcDUxZXJ6djRQcGYvd2kwbS85RXlxcFNlalpXZVJuWDhITVk3K01FLy82dlNqemMwbUx3YTIvbGJyVlVzV2d1WGx6ckpvMlROdWh1VXVVRHdSMHRJU1JERHQ0NHVHN3Yzdkh6dDFOSFBBZ0JBZXpKNmUvVW5JSzdUMXRVWW9kV2FqSHZXRTZudXVUaTIyVURPU0xKWEsvd01VOVJpd2dUMGNONGhMbkJoOFAzTGJ4QVFaQlVaRjUvUyt4L05TdlVHSlRvcTBlVWNvMVNxZ0phcXdOdVZNdlkrYlJYK2FFRFlpU0ZyUko5STVDcWNvVjRCbkpRdFZ3eUdpMjdmdVdJZ29JYXlMTzYyNUdJVE8zZDN4czlCTWM4Q0I0SHhOalI1c1g1aWF1N1dtTlVMTWpTNTdyKzFZeUxjZlRLSGxBa1N0Z0piMEJ5NVdvNVEwNk83R2huV1cxN0Y5dmNBSVhaNEVtd0JwcmdRc0luR1ExTlk3VVMzOUlJZUFuV05SQVlVWHZWQ010eUU0K2hlWFgvaDV5S0FxSnVreUJHcmRDMlVRcW15ZERWUXliOHBWbGs1OVFHSHRyaFdSY1ExeHo4ZUp6VDN5S0F4NEU3Mk41YWVtYWNtNXRWMWN5QXBWaXh5OUtsaFBFdnNPMWEySjFMWTA0WCs5djNYTUlqTG0xRlo5TWZiOG9OUzVsT1JwN25icXoxejJCeENXM2QyMEw2Ni8rR2F6Q01tUTFCaEJoRDR5Y2pCVGdRWktJOU1wcmY0dnk0aEdFRTYxUVpBbWhVQWhiOTM0TWx0U0VWSG9kVlFvRGgrWnUyK1J0Rk00aFZVUUg1N2k2TUhYZ3VodnYyTUVCd2Z0SXJTM3ZpNGRjNnZZazBjdXVvTVJubWtTZTRtc3RuVUg3NEtXNDlmTS9pNTd6aHVEYUp2WC8zQk9vKy9OWGZCSUVrUlpRUkptaExzd3ZiL1dyTGtnRU9Rd2pNNG5pekZPMHRDYXlxSzBLR1dnTUlESlFKWEFxR1N3OCs5c1F6QUxpTGUyQVkyUFgvby9oLzM3ZGowQ005U0NkelpMSDhybVRFV3Vic0ZUUld1SmhDSFlwTVRVMWZuRWtsaERFTzI2NUlmcm1LOC84VUZ3cTluUzFSaEVLa3A4TEdMYURTdFhpNUxOSURoN0VnUnUvRTZGb2d0Yms0WENFSzBDRHFtb05MWERkRTFpZ2hDRGpFeUU2ckoyN2RNQVVCUlZPdmpoK1A1aWsrWDFEdlZDUTBvS01UMjB3UU5XaWtwbUZYa3dqT1hRQVRPVG41VHdTeVI1MDllOUdlbkVLZkJPVlFrTm8rTCsyVFFtZGgzRU9CaUo2VjNmdnBKQk9aN2FzWjFhM2VSc0tBcU1IL2NSbis5WmYzOGhEU1E1ajd4V2ZCNU5VR05VU0oxMWI3OWNzMzlnR0s2RUlaQiswUk9YYTUyQ250MEwrTlkrc2FhSXk5eUxnbUxXVkluelVIZzJyRFBHUWdLZ21VQndMQUJoOVR3enJZdzlqNGZrL29FVllLQnhGdGJRQkxkNkJiWWMrQlVkSm9sQW9RcmNjbUxWUWNBRklFa09jYzExYlh0aTl2THk4UjNEQmhubWpFYU5WbmhOb3lhRk1XaXhXVUxFa2JMM3NhemloQkl4S0FYTE4ybUt3MGNFUnJQUkM0VEJtcHFmdy9kLzdQZmlwbi9oeDVQTUZxT0h3YVhIZlVCRkZHWFk1RFNNOUFTYkk4S1J4TFJnTmlWaklXdmlaZjUzREh6MitobnpWb1FXWkFKYzZRMC9acVRmL0NlbWpkME1OUldsZWxlSTZvbTJiMGJYaks3QlIxRkd1R0ZURlROdmo1b0FCdEhkaDZjWG1Vek1UblJLZjVDWXZDUUVNbGwxTEhJNUwyQ2lVMER6MENUUjFiNFhPWFV5U2ZkS055OXhnUXlNU2ppQ1R5ZUNiditWYjhkRERqOENUazZkTzRROSs3M2NvVVpxbWhZYXlRQ0hBQkFsT2RRT09YcUJqRi9WaW9ja00yYUtEbi9qblpidzBvUU9TZ1V5RjRjc2ZiNlplMzNFZDZoMEVmbjJaSjBXbGRTdVVTQmNxMVFwNVFuTHpmcVRuamlHZk9RTEc0cFJRVFo4YnpkbDFyRkFtdFJ3WEZGWGxWY09GYnZwSmc1OFFDcVV5TExrWjNkcytRUnVpam1NRnU3WTBFbGpEcG9ZYXdxT1BQMEhrZi9XWGZ4Ri8vN2QvZzcvOXU3L0hndzg5QXFab2NGbEQ2MUpQQkhCdEEzQ3M0RDArR01qZC8rNzVGTVp6Y1R6MTVIMzR3bWMvaFh0ZlNlSEVVb1dVVS92ZkVHVU5aaW1EOHRvWVpDVkU4N0l0ay9KQ292Y2lsQXlHY3RVa1RoNC93N1JKRVY1SzRGNWtDWjJkWFZNMlpIZWphRkNiVzY3Ni9YNmhXSUdVR0lRYWJZVmxWQ0EwTG5mZnVWZEh5Yy9senp6enpMT1VlTXBjZWFtMVZhaUtqQk1uVGdTdWZWb1lCTjIweGVGUXVneXVpUXpVMm80dW00aEd3NWc3T1FQWU9pM0RSNWNzTkw2SWpBQVgxZlY1VWlSVklZQnlsZGJjQ3pmY1M0MGJOWEljSHNkaTJZUU5vZFNTYk0xSTI3YnZmTE8xYy9QWTR0cm90a2hJcFRpUlJCY1ZVMFpiMTA0aTdEZ21HRlBJK2tTY28xRkVTY0o2TG9lRmhRV0VRaHIrOU0vK0xGalhZM0Z4RVlEanY4ZDJhdTdmbUF0RXVQVk5EeEltTUpxb0swWlFMUmZ4NHovMTAzUS9HazhnVnhWcFE0UzlzNXJDTEtiaE9tWnRCY3BvczBSV3dsQmJocEZKVGNHQ1NSVWdYN2FRenBYUTJ0dC9iSFAvNEZ2QzR3Lyt5OXJlL1lmdlA3V2tZeTFYUWE1a1lqMWZnYzVpaUNkN3FPMmtVbFNmTlUybUVReitMcEZ1R0lpRXc5QkNJVVFpRVc5YkRZVkNBYmF1VXd3R1B1NGlhQW9jTUZFRG1FUmU0RjkyeWFKZVdMcUNqSGc4Um8yT2gzQTRCTlBoNUJ5Y0xxVHN4aVUxVnhJWlRnb25rYTh5U29qclJSTXIyUklmYmV6YXMrK3ZSa2EyUEMzd0QzenROM3oyZDRkM1hYanM2RVFhY3lzYldGakpvZUtvVUVNUldLWVp4TzBaclE4UUlickhreDJGUUpRVFR5UVNmTUpobWppM2ZqQXZJZ2dPK3VmMTlORU8ydEJ3TEIwdVFBaVVxaW9Ld3BFb1YwS2MzcW1xR2xVZGtPTHJoZ0NIRW0yanFrSnZFUHg3bHFGRGlUUmpRNWV4c0pyRHlhVjFUTTdsc0czWEpmZnZ2K1N5ZitINXp4WDRCNmJIM2pqNVF6Lys4emRjY1BrVi81Z3VLL3A4eG5GY3RkMlNKQm1tWmRiMzVJRDZwZ1hxSG1CWkZsbStyYldWeWlRblRSUDJ4dDdlWGpCWnBVU0tCamVuZDFnR3hGQVRvbHV1Z2VNeTJ1K25EVThIa0VVZ3FvbjhIV0hFWXpGU0xOVjcyU1ViT0kxS1lBTFVwazErSlhIcW5xVHJPaFExNUJwaTBwcE5HVzdKaVc5Yy92RnJmK1BXMjcvcWE0dUZRb1VEa3ZmaENSOW5QdlhaTDMvZDIwZVBqclMxdFV1SnBwYlBiMnprdjhTL09OQXl3YmVTRXh6VFJBekRCUDg5SDd0Mzc4YVJZOGY4Q2FzcU1yS0NrWkZoSUxBOE9FNVRwbTNxaUF4OERHcjcrU2l2SElPZ0plalprQXgweFYzTUd3cC9kd3hTU1VYVnlLQTdib014R1U3dy9hWU9VZVhlMWpZSXh6S0NUVk9DWWVnd2RJTjkxVGQ4NldlV0ZtYnVsQ1cxdEhYTDhIUmpGcFhDa1JnQ01hc0Y0L3poemNjQW9IZHdhUDZGRjE2ZzVzSi9ZZUJ1cEhrNnAxK05LRWs2Rk1PSER4M0VJNDgrU3VUTGxRb0dod1p3NlNXWGdMTUU0RGJtRHpxbndTaEJpclNqOWZKdnc5dzkzd3BiTDRQSllVaUNpOE9ETmlZTE9waTZDWm9RUTUrMWhwM2RBa3liSWRnbU4vVVNXdmRlanpCZnBCVnkyWUM4Qi9MTUNwL0hoZnN1bnVSNEcyY1FZZlBJVHB3SjYrdVpFcU90TUp2RE9TUGNCbTBYQzBWc1AzOGJQdnVaVDFPajFOWFppZS85bnU5RmQyOGY5R3JGSis4cmlwNjNiUnFwTXBpVkFzTDkvd2V0K3o3bmxWeU9NaW9tdzBpN2dCdTNiTUFwclVMVkYzSGxRQjdKcUl5cTVmaWVWMTZIMWpxRWpyMjMxTjVwK3ZPMXZXUDYzWUN1cDFMcEVnZk9CTW43T0pPMHQ3ZlBqSTlQd0RSTjBxVFYrRXV4WTBOMFJGOEpqa3VqWVpwVURxKzk3bHBzM2JvVnNWZ2NtL3A2K1NSTHRjeFdWMXF3YTFTdmlUWmNxNHJreFYrQVpScFlmZkVQWUJycnNOVVk5dldZYU5ObWlGeEhRa1RaWUxENU0zb3BCN1dwSCtkZDhiMlFZNTBvNWxJQmFjcGJmTjVVbVNSWkt2S1FQSVd6aU1SdjRreVNiRTJlNVA5NWd5ZVNCQ25BTW1IYnFtODVENkt2WldwRWFCT0VVY3d4QU52T1B4L2szZVV5WERvaUpkVjZDaHNycTZ0SXJhVlFycFJKRWRGSUZCMGQ3V2p2Mm9UdXc5OEJyVzBMbGwvNGZSU1hqOU4zZFdoZTZSTlF5RnN3T1VGWDFOQzYvUnAwWHZ3cFNJaytJbTk2Y3pRNUxBSVpwRmdxZVVuNCtNRFE4TmhaRmNCdm52bUdpQlB0YlcydlRFMU5YOEdWUUJuWVVJemdWeC82RXJKa2ZSZUlveFozeFFKMVpMNlZ5ZnEwZUZubDNlSGYvY00vWXZURUdKVk1tWU43RSszbnU2NUQrZUtXVzI5RDI1NGJFZXZkaTQxVEwyRmo5blVVbGtkaFYwcUl5VEZvbmRzUjZkbkxjUUg5UUZyYzRPUk5BNWIvMXlRRWI3NlZjZ1ZsYmdETzRiVUhIM2lnZWxZRjhKczRpemo3OSsvN2s1bVprMWVVeW1WYTgvdXJQeWxZNzU4RkFzQkhDYUQyT2ZnSlJGRVYvTXUvM29tZis0VmZ3cTVkTzdGbjF5NGtXMW84enlDUGVQR2xsL0R3STQ5UjJiejZxcXVnSnJyUXRlOE90TzIrR1hvK0JiMVNoQ3NvZ0JLalJWczVuK1VrY3pCMG4zVFZJKzJoNGhQUHJxOTd6VmgrNzU1ZGY0VjNFWWsvZ0xOSjE2Wk45M2QxZGIxNDZ0U3BTMVZmQVFUQUpUVCtXbnZhRHg1MFgzVGRRRm1VQURQWmRYSkxROWN4TlQyTnVmbDVnTHBJblhLTTE3TnY1UDJ5YkJ0bG1OVVNLUTl5QkpJWWdxRlhvUmZYS2JhNWxUbHBneE91b2tUV3JxRENpWmY0Ky9PRkFyTFpMQTRkT25qWFM2Kzgrdks3S29BL2dMTUp2MWM4ZlBEZ2ovR05nN3R5dVkyd1NOWm5RTDFqcTYwVUhYLzBqemtrV0pZRVViS0QxU1BGL3VGREIvQXZkOTZKOFlsSjlQWDFrbGZ4ZDVBQzVoY1dzWC9mUlRoLzIxYXlJQStsNFAxQlhIdUpqWWpyMVNwWm5JTVVFRmlkZ3hTOHVyckdjMHJIeVk5OTdHTy9pUGNROFRkLy9kZlEzOTkvVmpCQm1JbkZZdXIwOVBSaDI3YUMzLy9xRzlMa0JSeXVRd3J3Sit4UDJ1YXdDRGE1YVVkYkc5cmFXcm03djR5MVZJcnlnRGY1MmJsWkRBNE00TWQrK0ljd01qeElKRTAvcGdOckUvZ3hvVklieTM2YzAwaVd6K2V4d3NuejczUnZ1K1htYnk3azgwOXc0TjBnM243THpYaXZoeTY4Nk1KbithS21kM1oyYnErZitWbk5BendRK2VCUDNXamlwbUZTMVRDOGNrV0p5U1BnSjZlZTdtN3FHdDk4NjIzTW5KckZlbTRkd3p3UmY4ZTNmU3QyODl3UUVLNVVLNlNjQnRKMEhwQXZsY3AxcXhjTHlPVjg4b1Zpa2VlUUszK0VlOEx2Y3VDOXdPNzhwMy9BKzVFTEw5Z3J2L3JhNjc4eE5qYjJKYS9mYjRvbkVJNkU2WStpTkZWRFVCMFk2cFdCZktUKzl3L2tLWmJwdS9Lekw3NkEreDU4a0JaTXQ5MTRFM2J0M0VuaHhaTXMvZC9HOVliajFKc25udkZKbWRXYVFvcSs1YmxIcGNrYUYrL2Y5d01BZmdIdlU5aGYvZG1mNFAzS0pSZnZGOGJHSjc1emRIVDB4eXRWUGVMMUVORm9KUGlyRWxJQ0p4R0VCWG1GVTR2aklCeEtsVExTdVN4eUp4ZFJIVjBBRkFuYWpsNGtOM1dpdFNtSmtCYWk5NGorVCt2MW5PTXZjWU93cUNXL0V2aDZCVHcvY2E5S0xIN0YxVmQrTjRDL3h3Y1E5dFJqRCtPRGltbGFCK2JuNTc5M2NXbjVHazVNMEVJYVF2NXFqV283NExmUVFSNHdQWXVWeThqazEyR2sxdEdTc3RDM3hoQXJlNTRDcEtJMjVscGQ1RnNWaE51VGFJazFRL1VVS2t0Z1lxMkt1S0RWSWsrWTVQWThST2hZVTlYeThQRFEzdzBNOVA4eWdERjhRR0dQUFhRL1BveDBkM1dKUE50K2NtbGwrWXBzSm5zeGQ4VWR0bVUzT2ZVMU9wRXZGb3RrTWFkUXdwNThERnUxSHZTSWNjU1ZDTXFpQ1ZHUW9KcEFWaTlpemxySGVIa1JSNXJLUUZpRHFxaUlSQ08rQWhCc2x6T1hWNDlVUEJGL3M3bTUrZVdlN3E0SEFieUVEeW5zb2Z2dXhrY1ZibldGdTJZL1QxNERqdTIyaDhPaENFK0FCai9mV0ZwYXVlNzFZMGUreXBoZmszNG85Z2tNN2JvRWVkR0M3Vml3U25rd3I3ZlFJcEFFQ1hFZE9QN2FNL2p4MGhPSURmVGtMNzNnd2ovbXpkSkxQQzhrdVhjSkd6elllVVZhMmJTcFo4b3l6VGtBRGo2aXNCZWZlUkwvM3BLdGxLNC8rdWl6MzNWTnV2OWcxKzU5ekpRWlhOT0NXOHdCb2dnaEVnY2tDVXJKd095cnp6bjM5aXplZjhuMVYvME1nSmZ4N3l6czRTY2V4bitFREN1UkZ2bWVoZWZGdHY2dExCWUdMQnV1VVNZRk1Ga0ZCQkhJNXFIUG56aFN2cnJyQUlBQy9nTkU2QzFZK0k5QU5iT1JaUWxweWkyV0FNY0dYQnRNVWYxOVBNZWhhMDZ4QUNlS2FlMjU1UUlIL2lNZzBNRi9FS3c0bmphUGpBTnJXYUJhaFZ2Uk9hcEF1UXdzcmtJZm5ZUXowbkluQi82aklIa2YvMUVpWGRMLysvcHFmdEE4OHRhbkpaN0x4YkFHVDJ5dUJOMHFWWjI5eWQrSmZITGJQK0EvVU5qc3lSUDRqNWI4VTBmMzQrM1ZtNFc4M2tlTlVwTTY1V3h2LzFjQWIrRS9XUDRmTEVNcnkrZGVKcWNBQUFBQVNVVk9SSzVDWUlJPSIvPg0KPC9kZWZzPg0KPC9zdmc+DQo="}}]);