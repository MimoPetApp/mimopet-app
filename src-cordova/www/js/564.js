(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[564],{3564:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>pe});s(246);var i=s(3673),n=s(2323);const o={class:"exercise-step"},a={key:0},r={class:"row"},c={class:"col-12 col-md-12 col-xs-12"},l={class:"row",style:{"flex-grow":"1"}},u={key:0,class:"row exercise-step__btn-group",style:{width:"100%"}},d=(0,i.Wm)("span",null,"Pular",-1),p=(0,i.Wm)("span",null,"Como treinar?",-1),m={key:0,class:"exercise-step__carousel-footer"},h={key:0,class:"exercise-step__carousel-footer-item"},g={key:1},b={key:1,class:"flex flex-center q-mt-xl"};function f(e,t,s,f,_,x){const w=(0,i.up)("instruction-step"),k=(0,i.up)("animation-step"),v=(0,i.up)("question-step"),S=(0,i.up)("q-carousel-slide"),y=(0,i.up)("q-btn"),E=(0,i.up)("q-carousel-control"),q=(0,i.up)("q-carousel"),W=(0,i.up)("Button"),j=(0,i.up)("LoadingCircle"),C=(0,i.up)("FeedbackModal");return(0,i.wg)(),(0,i.j4)("div",o,[e.loading?((0,i.wg)(),(0,i.j4)("div",b,[(0,i.Wm)(j,{color:"status-waiting",size:"6em",thickness:5})])):((0,i.wg)(),(0,i.j4)("div",a,[(0,i.Wm)("div",r,[(0,i.Wm)("div",c,[(0,i.Wm)(q,{animated:"",modelValue:e.currExercise,"onUpdate:modelValue":t[6]||(t[6]=t=>e.currExercise=t),autoplay:!1,ref:"carousel",class:"exercise-step__carousel"},{control:(0,i.w5)((()=>[0!==this.currExercise?((0,i.wg)(),(0,i.j4)(E,{key:0,position:"bottom-left",offset:[18,18],class:"q-gutter-xs"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{flat:"",round:"",size:"lg",color:"transparent","text-color":"utilities-alternate",icon:"arrow_back_ios",onClick:t[4]||(t[4]=t=>e.$refs.carousel.previous())})])),_:1})):(0,i.kq)("",!0),e.isQuestionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(E,{key:1,position:"bottom-right",offset:[18,18],class:"q-gutter-xs"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{flat:"",round:"",size:"lg",color:"transparent","text-color":"utilities-alternate",icon:"arrow_forward_ios",onClick:t[5]||(t[5]=t=>e.$refs.carousel.next())})])),_:1}))])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.getExerciseSessions,((s,n)=>((0,i.wg)(),(0,i.j4)(S,{key:n,name:n,class:"exercise-step__carousel-item"},{default:(0,i.w5)((()=>[(0,i.Wm)("div",l,[(0,i.Wm)("div",{class:["col-12 col-md-12 col-xs-12 exercise-step__content",{"sides-spacing":e.isQuestionStep}]},[e.enableStep(s,"instruction")?((0,i.wg)(),(0,i.j4)(w,{key:0,thumbnail:s.thumbnail,title:s.title,instruction:s.instruction},null,8,["thumbnail","title","instruction"])):(0,i.kq)("",!0),e.enableStep(s,"animation")?((0,i.wg)(),(0,i.j4)(k,{key:1,title:s.title,description:s.description,videos:s.videos},null,8,["title","description","videos"])):(0,i.kq)("",!0),e.enableStep(s,"question")?((0,i.wg)(),(0,i.j4)(v,{key:2,id:s.question.id,onSent:t[1]||(t[1]=t=>e.onSent(t))},null,8,["id"])):(0,i.kq)("",!0)],2)]),e.notLastSession&&!e.isQuestionStep?((0,i.wg)(),(0,i.j4)("div",u,[(0,i.Wm)("div",{class:"col-6 col-md-6 col-xs-6 flex justify-center items-center left-btn",onClick:t[2]||(t[2]=t=>e.stepDone())},[d]),(0,i.Wm)("div",{class:"col-6 col-md-6 col-xs-6 flex justify-center items-center right-btn",onClick:t[3]||(t[3]=t=>e.guideModal())},[p])])):(0,i.kq)("",!0)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"]),e.getExercise?((0,i.wg)(),(0,i.j4)("div",m,[e.getExerciseSessions?((0,i.wg)(),(0,i.j4)("div",h,[(0,i.Wm)("p",null,(0,n.zw)(e.currExercise+1)+" / "+(0,n.zw)(e.getExerciseSessions.length),1)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0),e.showSentBtn?((0,i.wg)(),(0,i.j4)("div",g,[(0,i.Wm)(W,{label:"Finalizar",noCaps:"",color:"primary-filled",class:"pl-7 pr-7"})])):(0,i.kq)("",!0)])])])),(0,i.Wm)("div",null,[(0,i.Wm)(C,{active:e.hasFeedback.status,icon:e.feedbackIcon,title:e.feedbackTitle,subtitle:e.feedbackSubtitle,buttonText:"Voltar",action:e.actionHandler},null,8,["active","icon","title","subtitle","action"])])])}var _=s(515),x=s.n(_),w=s(7874),k=s(6548),v=s(9836);const S={class:"session",align:"center"},y={class:"mt-1 mb-0 text-utilities-alternate session__label"};function E(e,t,s,o,a,r){const c=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.j4)("div",S,[(0,i.Wm)(c,{class:"session__button session__button--"+(s.enabled?"on":"off"),icon:"play_arrow","text-color":"utilities-alternate",color:"transparent",to:s.router,unelevated:""},null,8,["class","to"]),(0,i.Wm)("p",y,(0,n.zw)(s.label),1)])}const q={name:"Session",props:{label:{type:String},enabled:{type:Boolean,default:!1},router:{type:Object,default:()=>{}}}};var W=s(8240),j=s(7518),C=s.n(j);q.render=E;const Z=q;C()(q,"components",{QBtn:W.Z});const A=(0,i.HX)("data-v-92871b7a");(0,i.dD)("data-v-92871b7a");const Q={class:"animation-step"},F={class:"animation-step__header"},I={class:"animation-step__header__title text-main-alternate"},V={class:"animation-step__header__description text-main-alternate"},z={class:"animation-step__carousel"},O={class:"row video-wrapper",style:{"flex-grow":"1"}},M={class:"col-12 col-md-12 col-xs-12"},U={controls:"",class:"video-content"},D=(0,i.Uk)(" Desculpa, o seu dipositivo não suporta vídeos incorporados, mas você pode "),B=(0,i.Uk)(" e assistir pelo seu reprodutor de mídia favorito! ");(0,i.Cn)();const T=A(((e,t,s,o,a,r)=>{const c=(0,i.up)("q-carousel-slide"),l=(0,i.up)("q-carousel");return(0,i.wg)(),(0,i.j4)("div",Q,[(0,i.Wm)("div",F,[(0,i.Wm)("h3",I,(0,n.zw)(s.title),1),(0,i.Wm)("p",V,(0,n.zw)(s.description),1)]),(0,i.Wm)("div",z,[(0,i.Wm)(l,{swipeable:"",animated:"",modelValue:a.currVideo,"onUpdate:modelValue":t[1]||(t[1]=e=>a.currVideo=e),autoplay:!1,ref:"carousel",class:"animation-step__carousel"},{default:A((()=>[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(s.videos,((t,s)=>((0,i.wg)(),(0,i.j4)(c,{key:s,name:s,class:"animation-step__carousel-item"},{default:A((()=>[(0,i.Wm)("div",O,[(0,i.Wm)("div",M,[(0,i.Wm)("video",U,[(0,i.Wm)("source",{src:e._getMediaUrl(t.item),type:t.mime},null,8,["src","type"]),D,(0,i.Wm)("a",{href:e._getMediaUrl(t.item)},"baixá-lo",8,["href"]),B])])])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])])}));var H=s(2034);const L={name:"AnimationStep",components:{},props:{videos:{type:Array,default:null},title:{type:String,default:""},description:{type:String,default:""}},data(){return{currVideo:0}},computed:{},methods:x()({},H.Z)};var P=s(5845),$=s(4593);L.render=T,L.__scopeId="data-v-92871b7a";const G=L;C()(L,"components",{QCarousel:P.Z,QCarouselSlide:$.Z});const J=(0,i.HX)("data-v-6c7dbe14");(0,i.dD)("data-v-6c7dbe14");const K={class:"instruction-step"},N={class:"instruction-step__img"},X={class:"instruction-step__content"},Y={class:"exercise-step__content__title text-main-alternate"},R={class:"instruction-step__content__description text-main-alternate"};(0,i.Cn)();const ee=J(((e,t,s,o,a,r)=>{const c=(0,i.up)("q-img");return(0,i.wg)(),(0,i.j4)("div",K,[(0,i.Wm)("div",N,[(0,i.Wm)(c,{src:e._getMediaUrl(s.thumbnail),class:"slide-step__image",fit:"scale-down",height:"100%"},null,8,["src"])]),(0,i.Wm)("div",X,[(0,i.Wm)("h3",Y,(0,n.zw)(s.title),1),(0,i.Wm)("p",R,(0,n.zw)(s.instruction),1)])])})),te={name:"InstructionStep",props:{thumbnail:{type:Object,default:null},title:{type:String,default:""},instruction:{type:String,default:""}},methods:x()({},H.Z)};var se=s(4027);te.render=ee,te.__scopeId="data-v-6c7dbe14";const ie=te;C()(te,"components",{QImg:se.Z});var ne=s(834),oe=s(8785),ae=s(8745),re=s(4443);const ce=s(4420),le=s(2530),ue={name:"ExerciseStep",components:{LoadingCircle:v.Z,Button:k.Z,FeedbackModal:oe.Z,Session:Z,AnimationStep:G,InstructionStep:ie,QuestionStep:ne.default},data(){return{currExercise:0,loading:!1,hasFeedback:{status:!1,type:""},feedbackTitle:"",feedbackSubtitle:"",questionsAnswers:[]}},computed:x()(x()(x()({},(0,w.rn)("training",["exercise","loadingTrainings"])),(0,w.Se)("training",["getExercise"])),{},{feedbackIcon(){if(this.hasFeedback.status)return"jump"===this.hasFeedback.type?le:ce},getExerciseSessions(){if(!this.isEmptyObject(this.getExercise))return this.getExercise.sessions},showSentBtn(){return this.currExercise===this.getExerciseSessions.length-1&&!this.getExerciseSessions[this.getExerciseSessions.length-1].__component.includes("question")},notLastSession(){return this.currExercise!==this.getExerciseSessions.length-1},isQuestionStep(){return this.getExerciseSessions[this.currExercise].__component.includes("question")}}),methods:x()(x()(x()(x()(x()(x()({},H.Z),ae.Z),re.Z),(0,w.nv)("training",["ActionGetExercise"])),(0,w.nv)("exercise",["ActionUpdateExerciseStepCompleted"])),{},{timeout(e){return new Promise((t=>setTimeout(t,e)))},enableStep(e,t){return e.__component.includes(t)},isEmptyObject(e){return e&&0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype},async onFinish(){this.loading=!0,await this.timeout(500),this.hasFeedback=!0,this.loading=!1},actionHandler(){"jump"===this.hasFeedback.type&&this.$router.go(-1),this.hasFeedback={status:!1,type:""}},play(e){e.is_complete=!0,this.currExercise=e},finishModal(){this.feedbackTitle="Etapa concluída",this.feedbackSubtitle="Parabéns, você adquiriu mais conhecimento para lidar com seu pet.",this.hasFeedback={status:!0,type:"jump"}},guideModal(){this.feedbackTitle="Guia de treino",this.feedbackSubtitle=this.getExercise.guide,this.hasFeedback={status:!0,type:"guide"}},isStepDone(){if(!this.isEmptyObject(this.getExercise))return this.getExercise.completed},hasQuestionAnswerId(e){return this.questionsAnswers.find((t=>t.id===e))},updateValueSameId(e,t){const s=this.questionsAnswers.findIndex((t=>t.id===e));this.questionsAnswers[s]=t},async onSent(e){if(e=JSON.parse(JSON.stringify(e)),e.length>0){const t=[];e.forEach((e=>{const s=e.title,i=e.answer.map((e=>e.label)),n={name:s,answers:i};t.push(n)}));const s=this.getExerciseSessions[this.currExercise].question.id,i={type:"question",id:s,data:t};this.hasQuestionAnswerId(s)?this.updateValueSameId(s,i):this.questionsAnswers.push(i)}this.currExercise===this.getExerciseSessions.length-1?await this.stepDone():this.currExercise+=1},async stepDone(){if(this.isStepDone())this.finishModal();else{const e=await this.ActionUpdateExerciseStepCompleted({id:this.getExercise.id,body:this.questionsAnswers});e&&this.finishModal()}}}),async created(){this.loading=!0,await this.ActionGetExercise(this.$route.params.idSessao),this.loading=!1}};var de=s(7607);ue.render=f;const pe=ue;C()(ue,"components",{QCarousel:P.Z,QCarouselSlide:$.Z,QCarouselControl:de.Z,QBtn:W.Z})}}]);