(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[882],{1630:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>q});i(246);var t=i(3673),n=i(2323),o=i(9753),r=i.n(o);const s={class:"behavior-details"},l={key:0,class:""},c={class:"behavior-details__header column justify-between p-4"},m={align:"left"},d={align:"right"},u={class:"pt-4 pl-4 pr-4",align:"left"},b={class:"behavior-details__title mt-2 mb-1 p-0"},p={class:"behavior-details__subtitle m-0 p-0"},h={class:"pl-4 pr-4",align:"left"},g={class:"behavior-details__text text-main-alternate m-0 p-0"},v={class:"behavior-details__text text-utilities-alternate m-0 p-0"},W={class:"",align:"center"},_={key:1,class:"flex flex-center q-mt-xl"};function k(e,a,i,o,k,w){const f=(0,t.up)("q-icon"),T=(0,t.up)("q-btn"),S=(0,t.up)("q-img"),x=(0,t.up)("Tag"),A=(0,t.up)("q-separator"),y=(0,t.up)("Button"),C=(0,t.up)("LoadingCircle"),E=(0,t.up)("FeedbackModal");return(0,t.wg)(),(0,t.j4)("div",s,[e.loadingTrainings?((0,t.wg)(),(0,t.j4)("div",_,[(0,t.Wm)(C,{color:"status-waiting",size:"6em",thickness:5})])):((0,t.wg)(),(0,t.j4)("div",l,[(0,t.Wm)("div",c,[(0,t.Wm)("div",m,[(0,t.Wm)(T,{to:"/comportamentos",class:"behavior-details__back-btn",color:"main-alternate",unelevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{name:"close",color:"main-background",size:"20px"})])),_:1})]),(0,t.Wm)("div",d,[(0,t.Wm)(S,{src:r(),width:"209px",fit:"scale-down"})])]),(0,t.Wm)("div",u,[(0,t.Wm)(x,{label:e.parseTrainingCategory(e.behavior.category),color:e.parseTrainingCategoryColor(e.behavior.category)},null,8,["label","color"]),(0,t.Wm)("h3",b,(0,n.zw)(e.behavior.title),1),(0,t.Wm)("h4",p,(0,n.zw)(e.behavior.description),1)]),(0,t.Wm)(A,{class:"bg-utilities-border mt-4 mb-4"}),(0,t.Wm)("div",h,[(0,t.Wm)("p",g,"Por "+(0,n.zw)(e.behavior.author),1),(0,t.Wm)("p",v," Atualizado em "+(0,n.zw)(new Date(e.behavior.updated_at).toLocaleDateString("pt-BR")),1)]),(0,t.Wm)(A,{class:"bg-utilities-border mt-4 mb-4"}),(0,t.Wm)("div",W,[(0,t.Wm)(y,{onClick:e.onSubscribe,color:"primary-filled",loading:e.loadingSubscribe,type:"submit",label:"Inscrever-se","no-caps":""},null,8,["onClick","loading"])])])),(0,t.Wm)("div",null,[(0,t.Wm)(E,{active:e.hasFeedback,icon:e.feedbackIcon,title:"Inscrição confirmada",subtitle:"Acompanhe os exercícios na sua lista de treinamento",buttonText:"Ir para treino",subButtonText:"Voltar para busca",subAction:e.homeBehaviorList,action:e.trainingDetailsHandler},null,8,["active","icon","subAction","action"])])])}var w=i(515),f=i.n(w),T=i(7874),S=i(8745),x=i(3500),A=i(2020),y=i(9048),C=i(6950);const E=i(4420),Z={components:{LoadingCircle:A.Z,Button:x.Z,Tag:y.Z,FeedbackModal:C.Z},data(){return{loadingSubscribe:!1,hasFeedback:!1}},computed:f()(f()({},(0,T.rn)("training",["behavior","loadingTrainings"])),{},{feedbackIcon(){return E}}),methods:f()(f()(f()(f()({},S.Z),(0,T.nv)("training",["ActionGetTraining"])),(0,T.OI)("training",["SET_HAS_HEADER"])),{},{timeout(e){return new Promise((a=>setTimeout(a,e)))},async onSubscribe(){this.loadingSubscribe=!0,await this.timeout(500),this.hasFeedback=!0,this.loadingSubscribe=!1},homeBehaviorList(){this.$router.push({name:"behaviorList"})},trainingDetailsHandler(){this.$router.push({name:"TrainingDetails",params:{id:this.behavior.id}})}}),beforeRouteLeave(e,a,i){this.SET_HAS_HEADER(!0),i()},async created(){await this.ActionGetTraining(this.$route.params.id),this.SET_HAS_HEADER(!1)}};var D=i(8240),H=i(4554),I=i(4027),z=i(5869),B=i(7518),L=i.n(B);Z.render=k;const q=Z;L()(Z,"components",{QBtn:D.Z,QIcon:H.Z,QImg:I.Z,QSeparator:z.Z})}}]);