(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[518],{1548:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>fe});var n=a(3673);const l={style:{background:"#ffffff"}},i={class:"q-gutter-xs pr-4 pl-4"},o={class:"row mt-3",style:{"margin-bottom":"18px"}},s={class:"col-12 col-md-12 col-xs-12 list-breeds-wrapper"},r={key:1,class:"flex flex-center q-mt-xl"};function d(e,t,a,d,c,p){const u=(0,n.up)("q-btn"),m=(0,n.up)("q-toolbar"),f=(0,n.up)("TextField"),b=(0,n.up)("Button"),h=(0,n.up)("Ask"),g=(0,n.up)("Button-Checkbox-Group"),w=(0,n.up)("SearchField"),k=(0,n.up)("Checkbox"),y=(0,n.up)("Feedback"),B=(0,n.up)("q-layout"),x=(0,n.up)("LoadingCircle");return(0,n.wg)(),(0,n.j4)("div",l,[e.loading?((0,n.wg)(),(0,n.j4)("div",r,[(0,n.Wm)(x)])):((0,n.wg)(),(0,n.j4)(B,{key:0,view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[5!==e.step?((0,n.wg)(),(0,n.j4)(m,{key:0,class:"text-primary text-main-primary"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{flat:"",round:"",dense:"",icon:"arrow_back",onClick:t[1]||(t[1]=t=>e.backStep()),"text-color":"utilities-alternate"})])),_:1})):(0,n.kq)("",!0),1===e.step?((0,n.wg)(),(0,n.j4)(h,{key:1,title:"Como seu pet se chama?",subtitle:"Vamos construir o perfil do seu animal 🐶","align-content":"center"},{content:(0,n.w5)((()=>[(0,n.Wm)(f,{modelValue:e.form.petName,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.petName=t),light:"",align:"center",class:"mb-1",type:"text",label:"Insira o nome do pet"},null,8,["modelValue"])])),action:(0,n.w5)((()=>[(0,n.Wm)(b,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:0===e.form.petName.length,onClick:t[3]||(t[3]=t=>e.nextStep())},null,8,["disabled"])])),_:1})):(0,n.kq)("",!0),2===e.step?((0,n.wg)(),(0,n.j4)(h,{key:2,title:"Qual a idade do seu pet?",subtitle:"Estamos acabando de construir o seu perfil de tutor treinador","align-content":"center"},{content:(0,n.w5)((()=>[(0,n.Wm)(g,{options:e.ageOptions,"single-selection":"",onSelected:t[4]||(t[4]=t=>e.selectedHandler("petAge",t))},null,8,["options"])])),action:(0,n.w5)((()=>[(0,n.Wm)(b,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petAgeFilled,onClick:t[5]||(t[5]=t=>e.nextStep())},null,8,["disabled"])])),_:1})):(0,n.kq)("",!0),3===e.step?((0,n.wg)(),(0,n.j4)(h,{key:3,title:"Qual a raça do pet?",subtitle:"Estamos acabando de construir o seu perfil de tutor treinador","align-content":"start"},{content:(0,n.w5)((()=>[(0,n.Wm)("div",i,[(0,n.Wm)(w,{modelValue:e.form.petBreed.searchName,"onUpdate:modelValue":[t[6]||(t[6]=t=>e.form.petBreed.searchName=t),t[7]||(t[7]=t=>e.searchBreed())],label:"Busque por nome",class:"mb-1",align:"right",outline:"",disable:e.form.petBreed.isUnknown},null,8,["modelValue","disable"]),(0,n.Wm)(k,{modelValue:e.form.petBreed.isUnknown,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.petBreed.isUnknown=t),label:"Sem raça",onClick:t[9]||(t[9]=t=>e.noBreedHandler())},null,8,["modelValue"])]),(0,n.Wm)("div",o,[(0,n.Wm)("div",s,[(0,n.Wm)(g,{options:e.breedsList,"single-selection":"",onSelected:t[10]||(t[10]=t=>e.selectedHandler("petBreed",t))},null,8,["options"])])])])),action:(0,n.w5)((()=>[(0,n.Wm)(b,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petBreedFilled,onClick:t[11]||(t[11]=t=>e.nextStep())},null,8,["disabled"])])),_:1})):(0,n.kq)("",!0),4===e.step?((0,n.wg)(),(0,n.j4)(h,{key:4,title:"Informe detalhes do pet",subtitle:"Queremos entender mais do seu animal","align-content":"center"},{content:(0,n.w5)((()=>[(0,n.Wm)(g,{options:e.detailOptions,onSelected:t[12]||(t[12]=t=>e.selectedHandler("petDetails",t))},null,8,["options"])])),action:(0,n.w5)((()=>[(0,n.Wm)(b,{label:"Continuar",noCaps:"",color:"primary-flat",class:"pl-7 pr-7",disabled:!e.petDetailsFilled,onClick:t[13]||(t[13]=t=>e.registerPet())},null,8,["disabled"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(y,{active:5===e.step,icon:"pet.png",title:"Pet Adicionado",subtitle:"Você pode adicionar inúmeros pets a sua conta cadastrada",buttonText:"Acessar o app"},null,8,["active","icon"])])),_:1}))])}var c=a(515),p=a.n(c),u=a(7874),m=a(9221),f=a(3500),b=a(2318),h=a(2323);const g={class:"mimo-text main-button__text mimo-text--white"};function w(e,t,a,l,i,o){const s=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(s,{to:a.to,type:a.type,color:"main-primary",class:"main-button no-shadow",loading:a.loading,disable:a.disable,onClick:a.click},{default:(0,n.w5)((()=>[(0,n.Wm)("span",g,(0,h.zw)(a.label),1)])),_:1},8,["to","type","loading","disable","onClick"])}const k={name:"MainButton",props:{to:{type:String,default:""},label:{type:String,default:""},type:{type:String,default:"button"},click:{type:Function,default:()=>{}},loading:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}},data(){return{}}};var y=a(8240),B=a(7518),x=a.n(B);k.render=w;const v=k;x()(k,"components",{QBtn:y.Z});var _=a(7990),C=a(9466);const S=(0,n.HX)("data-v-886ea952");(0,n.dD)("data-v-886ea952");const W={class:"ask-wrapper"},A={class:"ask-wrapper__header"},F={class:"row"},Z={class:"col-12 col-md-12 col-xs-12"},D={class:"text-main-alternate"},L={class:"text-main-alternate-light"},Q={class:"row"},I={class:"col-12 col-md-12 col-xs-12"},q={class:"ask-wrapper__footer"},N={class:"row"},j={class:"col-12 col-md-12 col-xs-12 flex items-center justify-center"};(0,n.Cn)();const P=S(((e,t,a,l,i,o)=>((0,n.wg)(),(0,n.j4)("div",W,[(0,n.Wm)("div",A,[(0,n.Wm)("div",F,[(0,n.Wm)("div",Z,[(0,n.Wm)("h2",D,(0,h.zw)(a.title),1),(0,n.Wm)("p",L,(0,h.zw)(a.subtitle),1)])])]),(0,n.Wm)("div",{class:["ask-wrapper__content",o.selectAlignContent]},[(0,n.Wm)("div",Q,[(0,n.Wm)("div",I,[(0,n.WI)(e.$slots,"content",{},void 0,!0)])])],2),(0,n.Wm)("div",q,[(0,n.Wm)("div",N,[(0,n.Wm)("div",j,[(0,n.WI)(e.$slots,"action",{},void 0,!0)])])])])))),T={name:"Ask",props:{color:{type:String,default:"main-primary",validate:e=>-1!==["main-primary"].indexOf(e)},type:{type:String,default:"squared",validate:e=>-1!==["rounded","squared"].indexOf(e)},selected:{type:Boolean,default:!1,validate:e=>-1!==[!0,!1].indexOf(e)},title:{type:String,default:"Insert your title"},subtitle:{type:String,default:"Insert your subTitle"},alignContent:{type:String,default:"center",validate:e=>-1!==["start","center","end"].indexOf(e)}},computed:{selectAlignContent(){switch(this.alignContent){case"start":return"ask-wrapper__content--align-start";case"end":return"ask-wrapper__content--align-end";default:return"ask-wrapper__content--align-center"}}}};T.render=P,T.__scopeId="data-v-886ea952";const V=T;var H=a(5650);function O(e,t,a,l,i,o){const s=(0,n.up)("q-icon"),r=(0,n.up)("Button"),d=(0,n.up)("QInput");return(0,n.wg)(),(0,n.j4)(d,(0,n.dG)(e.$attrs,{class:o.textFieldClass,"input-class":o.textFieldInputClass,type:"search",filled:!a.outline,outlined:a.outline,clearable:"","no-error-icon":"",standout:"bg-utilities-border text-main-alternate",label:i.showLabel?a.label:"",onFocus:o.onFocus,onBlur:o.onBlur}),{prepend:(0,n.w5)((()=>[(0,n.Wm)(s,{name:"search",color:"main-alternate"})])),append:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(a.filters,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{key:`filter-${t}`,class:"tag-button no-shadow",color:"alternate-filled",label:e,outline:"","no-caps":"",flat:""},null,8,["label"])))),128))])),_:1},16,["class","input-class","filled","outlined","label","onFocus","onBlur"])}var $=a(8104);const U={name:"SearchField",components:{QInput:$.Z,Button:f.Z},props:{label:{type:String},align:{type:String,default:"left",validate:e=>-1!==["left","right","center","bottom"].indexOf(e)},light:{type:Boolean,default:!0},outline:{type:Boolean,default:!1},filters:{type:Array}},computed:{textFieldClass:function(){const e=["text-field",`text-field--${this.align}`,"search-field"];return this.light?e.push("text-field--light"):e.push("text-field--dark"),e},textFieldInputClass:function(){return["text-field__content",`text-field__content--${this.align}`]}},methods:{onBlur(){const e=this.$attrs.modelValue||"";this.showLabel=0===e.length},onFocus(){this.showLabel=!1}},data(){return{showLabel:!0}}};var R=a(4554),G=a(6115);U.render=O;const M=U;x()(U,"components",{QIcon:R.Z,QField:G.Z});var E=a(9535);const z=(0,n.HX)("data-v-af7e54ea");(0,n.dD)("data-v-af7e54ea");const X={class:"feedback-dialog__text feedback-dialog__title mb-1 mt-1"},Y={class:"feedback-dialog__text feedback-dialog__subtitle"};(0,n.Cn)();const J=z(((e,t,a,l,i,o)=>{const s=(0,n.up)("q-img"),r=(0,n.up)("q-card-section"),d=(0,n.up)("Button"),c=(0,n.up)("q-card"),p=(0,n.up)("QDialog");return(0,n.wg)(),(0,n.j4)(p,(0,n.dG)(e.$attrs,{"model-value":a.active,position:"bottom",persistent:"","full-width":""}),{default:z((()=>[(0,n.Wm)(c,{class:"feedback-dialog__card text-center"},{default:z((()=>[(0,n.Wm)(r,{class:"mt-5"},{default:z((()=>[(0,n.Wm)(s,{src:`/assets/images/${a.icon}`,width:"80px"},null,8,["src"]),(0,n.Wm)("h1",X,(0,h.zw)(a.title),1),(0,n.Wm)("h2",Y,(0,h.zw)(a.subtitle),1)])),_:1}),(0,n.Wm)(r,{class:"mb-3"},{default:z((()=>[a.subButtonText?((0,n.wg)(),(0,n.j4)(d,{key:0,class:"main-button no-shadow text-weight-bold mb-2",color:"secondary-bordless",label:a.subButtonText,onClick:a.subAction,outline:"","no-caps":""},null,8,["label","onClick"])):(0,n.kq)("",!0),(0,n.Wm)(d,{class:"feedback-dialog__button main-button no-shadow",color:"alternate-filled",label:a.buttonText,onClick:a.action,"no-caps":"",flat:""},null,8,["label","onClick"])])),_:1})])),_:1})])),_:1},16,["model-value"])}));var K=a(5926);const ee={name:"Feedback",components:{QDialog:K.Z,Button:f.Z},props:{active:{type:Boolean,default:!0},title:{type:String},subtitle:{type:String},buttonText:{type:String},subButtonText:{type:String},action:{type:Function},subAction:{type:Function},icon:{type:String,default:"feedback/check.png"}}};var te=a(151),ae=a(5589),ne=a(4027);ee.render=J,ee.__scopeId="data-v-af7e54ea";const le=ee;x()(ee,"components",{QCard:te.Z,QCardSection:ae.Z,QImg:ne.Z});const ie={name:"PetRegister",components:{Title:m.Z,Button:f.Z,Ask:V,MainButton:v,AuthContainer:_.Z,LoadingCircle:C.Z,ButtonCheckboxGroup:b.Z,TextField:H.Z,SearchField:M,Checkbox:E.ZP,Feedback:le},data(){return{test:null,ageOptions:[{label:"Filhote até 6 meses",selected:!1},{label:"Filhote até 1,5 anos",selected:!1},{label:"Adulto",selected:!1},{label:"Sênior",selected:!1}],detailOptions:[{label:"Adotado",selected:!1},{label:"Castrado",selected:!1},{label:"Com deficiência",selected:!1},{label:"De serviço",selected:!1}],form:{petName:"",petAge:null,petBreed:{isUnknown:!1,name:"",searchName:""},petDetails:null},createdPet:null,listOptions:[{id:1,name:"Akita"},{id:2,name:"Yorkshire"},{id:3,name:"Yorkshire Terrier"},{id:4,name:"Vira-lata"},{id:5,name:"Splitz Alemão"},{id:6,name:"Dálmata"}],step:1,loading:!1,formHasError:[!1,!1],btnDisabled:!0,breedsList:[]}},computed:p()(p()({},(0,u.rn)("petRegister",{breedsData:"breeds"})),{},{petAgeFilled(){return!!this.form.petAge},petBreedFilled(){return!(!this.form.petBreed.name&&!this.form.petBreed.isUnknown)},petDetailsFilled(){return!!this.form.petDetails}}),beforeMount(){},mounted(){this.ActionSetHomeMenuVisibility(!1)},beforeRouteLeave(e,t,a){this.ActionSetHomeMenuVisibility(!0),a()},methods:p()(p()(p()({},(0,u.nv)("pets",["ActionSetHomeMenuVisibility","ActionCreatePet"])),(0,u.nv)("petRegister",["ActionGetBreeds","ActionRegisterPet"])),{},{searchBreed(){let e=[];const t=this;this.form.petBreed.searchName?(e=this.breedsData.data.filter((function(e){return e.breed.toUpperCase().includes(t.form.petBreed.searchName.toUpperCase())})),this.formatBreedList(e)):(this.breedsList=[],this.formatBreedList(this.breedsData.data))},formatBreedList(e){let t=[];e.length>0&&(t=e.map((function(e){return{label:e.breed,selected:!1}}))),this.breedsList=t},noBreedHandler(){this.form.petBreed.isUnknown?(this.form.petBreed.searchName="",this.form.petBreed.name="Sem raça",this.breedsList=[]):(this.form.petBreed.name="",this.formatBreedList(this.breedsData.data))},async nextStep(){this.step++},async registerPet(){const e=this.formatForm(),t=await this.ActionRegisterPet(e);t&&this.nextStep()},formatForm(){let e=JSON.parse(JSON.stringify(this.form));return e={name:e.petName,breed:e.petBreed.name,age:this.mapAge(e.petAge.label),gender:"male",type:"canine",is_adopted:e.petDetails.includes("Adotado"),is_neutered:e.petDetails.includes("Castrado"),is_deficiency:e.petDetails.includes("Com deficiência"),is_service:e.petDetails.includes("De serviço")},e},mapAge(e){switch(e){case"Filhote até 6 meses":return"SIX_MONTS";case"Filhote até 1,5 anos":return"EIGHTEEN_MONTS";case"Adulto":return"ADULT";default:return"SENIOR"}},backStep(){this.step>1?this.step--:this.$router.push({name:"home"})},async onSubmit(){const e={name:this.form.petName,gender:this.form.petGender,profilePet:this.parseProfilePet(this.form.petProfile),birthdate:`${this.form.year}-${this.form.month}-${this.form.day}`,breed:this.form.petBreed.isUnknown?"unknown":this.form.petBreed.name,details:this.form.petDetails,togetherBy:Number(this.form.howLong)};this.loading=!0;const t=await this.ActionCreatePet(e);t.id&&(this.createdPet=t,this.nextStep()),this.loading=!1},finishRegister(){this.$router.push({name:"petdetails",params:{id:`${this.createdPet.id}`}})},selectedHandler(e,t){t.length>0?("petBreed"!==e&&(this.form[e]=[]),"petAge"===e?this.form[e]=t[0]:"petBreed"===e?this.form[e].name=t[0].label:this.form[e]=t):this.form[e]=null}}),async created(){await this.ActionGetBreeds(),this.formatBreedList(this.breedsData.data)}};var oe=a(3066),se=a(9570),re=a(7011),de=a(3414),ce=a(2035),pe=a(2350),ue=a(5869),me=a(6489);ie.render=d;const fe=ie;x()(ie,"components",{QLayout:oe.Z,QToolbar:se.Z,QBtn:y.Z,QList:re.Z,QItem:de.Z,QItemSection:ce.Z,QItemLabel:pe.Z,QSeparator:ue.Z}),x()(ie,"directives",{Ripple:me.Z})}}]);