(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[325],{9600:(o,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>_});t(71);var e=t(3673),s=t(8880);const l=(0,e.HX)("data-v-0d84bda5");(0,e.dD)("data-v-0d84bda5");const d={class:"forget-password__bottom-modal"},r={class:"row pl-5 pr-5 pt-5",style:{"z-index":"1"}},i={class:"col-12"},n={class:"col-12",align:"center"},u={class:"row forget-password__bottom-modal--footer"},c={class:"col-12 col-md-12 col-xs-12 flex flex-center"},m={key:1,class:"flex flex-center q-mt-xl"},p={key:2,class:"forget-password__dialog"};(0,e.Cn)();const b=l(((o,a,t,b,f,w)=>{const h=(0,e.up)("Logo"),g=(0,e.up)("Title"),k=(0,e.up)("TextField"),M=(0,e.up)("Button"),S=(0,e.up)("AuthContainer"),v=(0,e.up)("LoadingCircle"),W=(0,e.up)("FeedbackModal"),x=(0,e.up)("SupportModal");return(0,e.wg)(),(0,e.j4)("div",null,[o.loading?((0,e.wg)(),(0,e.j4)("div",m,[(0,e.Wm)(v,{color:"status-waiting",size:"6em",thickness:5})])):((0,e.wg)(),(0,e.j4)(S,{key:0,"has-background":""},{default:l((()=>[(0,e.Wm)(h,{class:"ml-4 mt-4"}),(0,e.Wm)("div",null,[(0,e.Wm)(g,{text:"Crie uma nova senha",subtitle:"Recupere sua conta",class:"ml-4 mr-4 mb-4 pt-6"}),(0,e.Wm)("div",d,[(0,e.Wm)("div",r,[(0,e.Wm)("div",i,[(0,e.Wm)("form",{ref:"form",onSubmit:a[3]||(a[3]=(0,s.iM)(((...a)=>o.onSubmitEmail&&o.onSubmitEmail(...a)),["prevent","stop"]))},[(0,e.Wm)(k,{modelValue:o.form.password,"onUpdate:modelValue":a[1]||(a[1]=a=>o.form.password=a),label:"Sua nova senha",isPassword:!0,rules:[a=>!!a||o.$t("login.password.error.required"),a=>/^(?=.{8,})/.test(a)||o.$t("login.password.error.min")]},null,8,["modelValue","rules"]),(0,e.Wm)(k,{modelValue:o.form.confirmPassword,"onUpdate:modelValue":a[2]||(a[2]=a=>o.form.confirmPassword=a),class:"mb-2",label:"Repita a senha",isPassword:!0,rules:[a=>!!a||o.$t("login.password.error.required"),a=>/^(?=.{8,})/.test(a)||o.$t("login.password.error.min")]},null,8,["modelValue","rules"])],544)]),(0,e.Wm)("div",n,[(0,e.Wm)(M,{onClick:o.onSubmitPassword,color:"primary-filled",class:"main-button no-shadow mb-3",type:"submit",label:"Confirmar","no-caps":""},null,8,["onClick"])])]),(0,e.Wm)("div",u,[(0,e.Wm)("div",c,[(0,e.Wm)(M,{flat:"",color:"utilities-alternate",class:"text-weight-bold",size:"md","no-caps":"",icon:"mail",label:"Suporte",onClick:o.showSupportModal},null,8,["onClick"])])])])])])),_:1})),o.feedbackModalStatus||o.supportModalStatus?((0,e.wg)(),(0,e.j4)("div",p,[(0,e.Wm)(W,{active:o.feedbackModalStatus,icon:o.feedbackIcon,title:o.feedbackModalTitle,subtitle:o.feedbackModalSubtitle,buttonText:o.feedbackModalButtonText,action:o.goToLogin},null,8,["active","icon","title","subtitle","buttonText","action"]),(0,e.Wm)(x,{active:o.supportModalStatus,onHide:o.hideSupportModal,action:o.hideSupportModal},null,8,["active","onHide","action"])])):(0,e.kq)("",!0)])}));var f=t(515),w=t.n(f),h=t(7874),g=t(5938),k=t(170),M=t(6211),S=t(5284),v=t(2445),W=t(9836),x=t(8785),C=t(7271);const T=t(8651),P={name:"ForgetPassword",components:{Title:k.Z,AuthContainer:v.Z,LoadingCircle:W.Z,TextField:S.Z,Button:M.Z,Logo:g.Z,FeedbackModal:x.Z,SupportModal:C.Z},data(){return{form:{identifier:"",password:"",confirmPassword:""},showPassword:!1,loading:!1,feedbackModalStatus:!1,supportModalStatus:!1,feedbackModalTitle:"Senha alterada",feedbackModalSubtitle:"Entre novamente na sua conta com a nova senha.",feedbackModalButtonText:"Entrar"}},computed:{formIsValid(){return this.form.password===this.form.confirmPassword},feedbackIcon(){return T}},beforeMount(){},methods:w()(w()({},(0,h.nv)("auth",["ActionLogin"])),{},{nextStep(){},async onSubmitPassword(){this.formIsValid&&(this.loading=!0,this.showFeedbackModal(),this.loading=!1)},async wait(o){return new Promise((a=>{setTimeout(a,o)}))},showFeedbackModal(){this.feedbackModalStatus=!0},showSupportModal(){this.supportModalStatus=!0},hideSupportModal(){this.supportModalStatus=!1},goToLogin(){this.$router.push({name:"acesso"})}})};P.render=b,P.__scopeId="data-v-0d84bda5";const _=P}}]);