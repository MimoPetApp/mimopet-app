(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[683],{5377:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>me});s(246);var i=s(3673),n=s(2323);const a={class:"exercise-step"},o={class:"row"},r={class:"col-12 col-md-12 col-xs-12"},c=(0,i.Wm)("span",null,"Voltar",-1),l=(0,i.Wm)("span",{class:"exercise-step__back-btn"},"Finalizar",-1),u={key:0,class:"col-12 col-md-12 col-xs-12"},d={class:"row",style:{"flex-grow":"1"}},p={key:0,class:"row exercise-step__btn-group",style:{width:"100%"}},m=(0,i.Wm)("span",null,"Pular",-1),h=(0,i.Wm)("span",null,"Como treinar?",-1),g={key:0,class:"exercise-step__carousel-footer"},b={key:0,class:"exercise-step__carousel-footer-item"},x={key:1,class:"flex flex-center loading-screen"};function _(e,t,s,_,f,y){const w=(0,i.up)("q-btn"),v=(0,i.up)("q-toolbar"),k=(0,i.up)("q-header"),S=(0,i.up)("instruction-step"),E=(0,i.up)("animation-step"),q=(0,i.up)("question-step"),W=(0,i.up)("q-carousel-slide"),j=(0,i.up)("q-carousel-control"),C=(0,i.up)("q-carousel"),A=(0,i.up)("LoadingCircle"),F=(0,i.up)("FeedbackModal");return(0,i.wg)(),(0,i.j4)("div",a,[(0,i.Wm)("div",o,[(0,i.Wm)("div",r,[e.mainLayoutHeader&&e.trainingLayoutHeader?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(k,{key:0,reveal:"",class:"bg-main-background exercise-step__header"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"exercise-step__toolbar",style:{width:"100%"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{flat:"",round:"",dense:"",onClick:t[1]||(t[1]=t=>e.back()),"text-color":"main-background",class:"exercise-step__back-btn",unelevated:"","no-caps":"",disabled:e.loading},{default:(0,i.w5)((()=>[c])),_:1},8,["disabled"]),(0,i.Wm)(w,{flat:"",unelevated:"","no-caps":"",round:"",dense:"",onClick:t[2]||(t[2]=t=>e.stepDone()),"text-color":"main-background",disabled:e.loading},{default:(0,i.w5)((()=>[l])),_:1},8,["disabled"])])),_:1})])),_:1}))]),e.loading?((0,i.wg)(),(0,i.j4)("div",x,[(0,i.Wm)(A,{color:"status-waiting",size:"6em",thickness:5})])):((0,i.wg)(),(0,i.j4)("div",u,[(0,i.Wm)(C,{animated:"",modelValue:e.currExercise,"onUpdate:modelValue":t[8]||(t[8]=t=>e.currExercise=t),autoplay:!1,ref:"carousel",class:"exercise-step__carousel"},{control:(0,i.w5)((()=>[0!==this.currExercise?((0,i.wg)(),(0,i.j4)(j,{key:0,position:"bottom-left",offset:[18,18],class:"q-gutter-xs"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{flat:"",round:"",size:"lg",color:"transparent","text-color":"utilities-alternate",icon:"arrow_back_ios",onClick:t[6]||(t[6]=t=>e.$refs.carousel.previous())})])),_:1})):(0,i.kq)("",!0),e.isQuestionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(j,{key:1,position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{flat:"",round:"",size:"lg",color:"transparent","text-color":"utilities-alternate",icon:"arrow_forward_ios",onClick:t[7]||(t[7]=t=>e.$refs.carousel.next())})])),_:1}))])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.getExerciseSessions,((s,n)=>((0,i.wg)(),(0,i.j4)(W,{key:n,name:n,class:"exercise-step__carousel-item"},{default:(0,i.w5)((()=>[(0,i.Wm)("div",d,[(0,i.Wm)("div",{class:["col-12 col-md-12 col-xs-12 exercise-step__content",{"sides-spacing":e.isQuestionStep}]},[e.enableStep(s,"instruction")?((0,i.wg)(),(0,i.j4)(S,{key:0,thumbnail:s.thumbnail,title:s.title,instruction:s.instruction},null,8,["thumbnail","title","instruction"])):(0,i.kq)("",!0),e.enableStep(s,"animation")?((0,i.wg)(),(0,i.j4)(E,{key:1,title:s.title,description:s.description,videos:s.videos},null,8,["title","description","videos"])):(0,i.kq)("",!0),e.enableStep(s,"question")?((0,i.wg)(),(0,i.j4)(q,{key:2,id:s.question.id,onSent:t[3]||(t[3]=t=>e.onSent(t))},null,8,["id"])):(0,i.kq)("",!0)],2)]),e.notLastSession&&!e.isQuestionStep?((0,i.wg)(),(0,i.j4)("div",p,[(0,i.Wm)("div",{class:"col-6 col-md-6 col-xs-6 flex justify-center items-center left-btn",onClick:t[4]||(t[4]=t=>e.stepDone())},[m]),(0,i.Wm)("div",{class:"col-6 col-md-6 col-xs-6 flex justify-center items-center right-btn",onClick:t[5]||(t[5]=t=>e.guideModal())},[h])])):(0,i.kq)("",!0)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),e.getExercise?((0,i.wg)(),(0,i.j4)("div",g,[e.getExerciseSessions?((0,i.wg)(),(0,i.j4)("div",b,[(0,i.Wm)("p",null,(0,n.zw)(e.currExercise+1)+" / "+(0,n.zw)(e.getExerciseSessions.length),1)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]))]),(0,i.Wm)("div",null,[(0,i.Wm)(F,{active:e.hasFeedback.status,icon:e.feedbackIcon,title:e.feedbackTitle,subtitle:e.feedbackSubtitle,buttonText:"Voltar",action:e.actionHandler},null,8,["active","icon","title","subtitle","action"])])])}var f=s(515),y=s.n(f),w=s(7874),v=s(6548),k=s(9836);const S={class:"session",align:"center"},E={class:"mt-1 mb-0 text-utilities-alternate session__label"};function q(e,t,s,a,o,r){const c=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.j4)("div",S,[(0,i.Wm)(c,{class:"session__button session__button--"+(s.enabled?"on":"off"),icon:"play_arrow","text-color":"utilities-alternate",color:"transparent",to:s.router,unelevated:""},null,8,["class","to"]),(0,i.Wm)("p",E,(0,n.zw)(s.label),1)])}const W={name:"Session",props:{label:{type:String},enabled:{type:Boolean,default:!1},router:{type:Object,default:()=>{}}}};var j=s(8240),C=s(7518),A=s.n(C);W.render=q;const F=W;A()(W,"components",{QBtn:j.Z});const H=(0,i.HX)("data-v-5d4fa5f2");(0,i.dD)("data-v-5d4fa5f2");const L={class:"animation-step"},V={class:"animation-step__header"},Z={class:"animation-step__header__title text-main-alternate"},I={class:"animation-step__header__description text-main-alternate"},O={class:"animation-step__carousel"},Q={class:"row video-wrapper",style:{"flex-grow":"1"}},M={class:"col-12 col-md-12 col-xs-12"};(0,i.Cn)();const D=H(((e,t,s,a,o,r)=>{const c=(0,i.up)("VideoPlayer"),l=(0,i.up)("q-carousel-slide"),u=(0,i.up)("q-carousel");return(0,i.wg)(),(0,i.j4)("div",L,[(0,i.Wm)("div",V,[(0,i.Wm)("h3",Z,(0,n.zw)(s.title),1),(0,i.Wm)("p",I,(0,n.zw)(s.description),1)]),(0,i.Wm)("div",O,[(0,i.Wm)(u,{swipeable:"",animated:"",modelValue:o.currVideo,"onUpdate:modelValue":t[1]||(t[1]=e=>o.currVideo=e),autoplay:!1,ref:"carousel",class:"animation-step__carousel"},{default:H((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(s.videos,((e,t)=>((0,i.wg)(),(0,i.j4)(l,{key:t,name:t,class:"animation-step__carousel-item"},{default:H((()=>[(0,i.Wm)("div",Q,[(0,i.Wm)("div",M,[(0,i.Wm)(c,{video:e},null,8,["video"])])])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])}));var T=s(2034),P=s(6589);const $={name:"AnimationStep",components:{VideoPlayer:P.Z},props:{videos:{type:Array,default:null},title:{type:String,default:""},description:{type:String,default:""}},data(){return{currVideo:0}},computed:{},methods:y()({},T.Z)};var z=s(5845),N=s(4593);$.render=D,$.__scopeId="data-v-5d4fa5f2";const B=$;A()($,"components",{QCarousel:z.Z,QCarouselSlide:N.Z});const G=(0,i.HX)("data-v-6c7dbe14");(0,i.dD)("data-v-6c7dbe14");const U={class:"instruction-step"},J={class:"instruction-step__img"},K={class:"instruction-step__content"},R={class:"exercise-step__content__title text-main-alternate"},X={class:"instruction-step__content__description text-main-alternate"};(0,i.Cn)();const Y=G(((e,t,s,a,o,r)=>{const c=(0,i.up)("q-img");return(0,i.wg)(),(0,i.j4)("div",U,[(0,i.Wm)("div",J,[(0,i.Wm)(c,{src:e._getMediaUrl(s.thumbnail),class:"slide-step__image",fit:"scale-down",height:"100%"},null,8,["src"])]),(0,i.Wm)("div",K,[(0,i.Wm)("h3",R,(0,n.zw)(s.title),1),(0,i.Wm)("p",X,(0,n.zw)(s.instruction),1)])])})),ee={name:"InstructionStep",props:{thumbnail:{type:Object,default:null},title:{type:String,default:""},instruction:{type:String,default:""}},methods:y()({},T.Z)};var te=s(4027);ee.render=Y,ee.__scopeId="data-v-6c7dbe14";const se=ee;A()(ee,"components",{QImg:te.Z});var ie=s(834),ne=s(8785),ae=s(8745),oe=s(4443);const re=s(4420),ce=s(2530),le={name:"ExerciseStep",components:{LoadingCircle:k.Z,Button:v.Z,FeedbackModal:ne.Z,Session:F,AnimationStep:B,InstructionStep:se,QuestionStep:ie.default},props:{guia:{type:String},exercicioID:{type:String},obedienceID:{type:String}},data(){return{currExercise:0,loading:!1,hasFeedback:{status:!1,type:""},feedbackTitle:"",feedbackSubtitle:"",questionsAnswers:[]}},computed:y()(y()(y()(y()(y()({},(0,w.rn)("training",["exercise","loadingTrainings"])),(0,w.rn)("training",{trainingLayoutHeader:"hasHeader"})),(0,w.Se)("training",["getExercise"])),(0,w.rn)("pets",{mainLayoutHeader:"hasHeader"})),{},{feedbackIcon(){if(this.hasFeedback.status)return"jump"===this.hasFeedback.type?ce:re},getExerciseSessions(){if(!this.isEmptyObject(this.getExercise))return this.getExercise.sessions},showSentBtn(){return this.currExercise===this.getExerciseSessions.length-1&&!this.getExerciseSessions[this.getExerciseSessions.length-1].__component.includes("question")},notLastSession(){return this.currExercise!==this.getExerciseSessions.length-1},isQuestionStep(){return this.getExerciseSessions[this.currExercise].__component.includes("question")}}),methods:y()(y()(y()(y()(y()(y()(y()(y()({},T.Z),ae.Z),oe.Z),(0,w.nv)("training",["ActionGetExercise"])),(0,w.nv)("exercise",["ActionUpdateExerciseStepCompleted"])),(0,w.nv)("pets",["ActionSetHomeMenuVisibility"])),(0,w.OI)("training",{setTrainingLayoutMenuVisibility:"SET_HAS_HEADER"})),{},{timeout(e){return new Promise((t=>setTimeout(t,e)))},enableStep(e,t){return e.__component.includes(t)},isEmptyObject(e){return e&&0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype},async onFinish(){this.loading=!0,await this.timeout(500),this.hasFeedback=!0,this.loading=!1},actionHandler(){"jump"===this.hasFeedback.type&&this.$router.go(-1),this.hasFeedback={status:!1,type:""}},play(e){e.is_complete=!0,this.currExercise=e},finishModal(){this.feedbackTitle="Etapa concluída",this.feedbackSubtitle="Parabéns, você adquiriu mais conhecimento para lidar com seu pet.",this.hasFeedback={status:!0,type:"jump"}},guideModal(){this.feedbackTitle="Guia de treino",this.feedbackSubtitle=this.getExercise.guide,this.hasFeedback={status:!0,type:"guide"}},isStepDone(){if(!this.isEmptyObject(this.getExercise))return this.getExercise.completed},hasQuestionAnswerId(e){return this.questionsAnswers.find((t=>t.id===e))},updateValueSameId(e,t){const s=this.questionsAnswers.findIndex((t=>t.id===e));this.questionsAnswers[s]=t},async onSent(e){if(e=JSON.parse(JSON.stringify(e)),e.length>0){const t=[];e.forEach((e=>{const s=e.title,i=e.answer.map((e=>e.label)),n={name:s,answers:i};t.push(n)}));const s=this.getExerciseSessions[this.currExercise].question.id,i={type:"question",id:s,data:t};this.hasQuestionAnswerId(s)?this.updateValueSameId(s,i):this.questionsAnswers.push(i)}this.currExercise===this.getExerciseSessions.length-1?await this.stepDone():this.currExercise+=1},setExerciseCompletedParams(){let e;const t=this.guia,s=this.getExercise.id,i=this.obedienceID;return e=this.isFromObedience()?{url:`obedience-trainings/${i}/guidelines/${t}/exercises/${s}/complete`,body:[]}:{url:`exercises/${s}/complete`,body:this.questionsAnswers},e},async exerciseCompleted(){const e=this.setExerciseCompletedParams(),t=await this.ActionUpdateExerciseStepCompleted(e);t&&this.finishModal()},async stepDone(){this.isStepDone()?this.finishModal():(this.loading=!0,await this.exerciseCompleted(),this.loading=!1)},isFromObedience(){return this.$route.meta.isFromObedience},setGetExerciseParams(){let e;return e=this.isFromObedience()?this.exercicioID:this.$route.params.idSessao,e},async loadExercise(){const e=this.setGetExerciseParams();await this.ActionGetExercise(e)},toggleMainLayoutNavigation(){this.ActionSetHomeMenuVisibility(!this.mainLayoutHeader)},toggleTrainingLayoutNavigation(){this.setTrainingLayoutMenuVisibility(!this.trainingLayoutHeader)},toggleNavigation(){this.isFromObedience()?this.toggleMainLayoutNavigation():this.toggleTrainingLayoutNavigation()},isFirstLevelPath(){const e=this.$route.path;return e.length-e.replaceAll("/","").length===1},back(){this.isFirstLevelPath()?this.$router.push("/"):this.$router.go(-1)}}),async created(){this.loading=!0,await this.loadExercise(),this.loading=!1},mounted(){this.toggleNavigation()},beforeRouteLeave(e,t,s){this.toggleNavigation(),s()}};var ue=s(3812),de=s(9570),pe=s(7607);le.render=_;const me=le;A()(le,"components",{QHeader:ue.Z,QToolbar:de.Z,QBtn:j.Z,QCarousel:z.Z,QCarouselSlide:N.Z,QCarouselControl:pe.Z})}}]);