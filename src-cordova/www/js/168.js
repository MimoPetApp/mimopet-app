(self["webpackChunkmimopetapp"]=self["webpackChunkmimopetapp"]||[]).push([[168],{3168:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>O});var o=a(3673),l=a(2323),n=a(996),d=a.n(n);const i={class:"home__container"},s={class:"row justify-between items-center q-px-lg",style:{width:"100%"}},r=(0,o.Wm)("span",{class:"ml-1"}," Pets ",-1);function u(t,e,a,n,u,m){const c=(0,o.up)("q-img"),p=(0,o.up)("q-toolbar-title"),w=(0,o.up)("q-icon"),g=(0,o.up)("q-btn"),f=(0,o.up)("q-badge"),h=(0,o.up)("q-toolbar"),W=(0,o.up)("q-header"),_=(0,o.up)("router-view"),b=(0,o.up)("q-page-container"),q=(0,o.up)("ModalAuth"),v=(0,o.up)("PetListModal"),L=(0,o.up)("q-route-tab"),Q=(0,o.up)("q-tabs"),Z=(0,o.up)("q-footer"),y=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(y,{view:"lHh Lpr lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)("div",i,[t.hasHeader?((0,o.wg)(),(0,o.j4)(W,{key:0,reveal:"",class:"bg-transparent"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)("div",s,[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{src:d(),style:{width:"80px"}})])),_:1}),(0,o.Wm)(g,{class:"home__badge",outline:"",color:"white q-mr-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"notifications",class:"cursor-pointer"})])),_:1}),(0,o.Wm)(g,{class:"home__badge",outline:"",color:"white","no-caps":"",onClick:m.showPetList},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"main-highlight","text-color":"main-background",rounded:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.petsList.length),1)])),_:1}),r])),_:1},8,["onClick"])])])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_)])),_:1}),(0,o.Wm)(q),(0,o.Wm)(v),t.hasFooter?((0,o.wg)(),(0,o.j4)(Z,{key:1,class:"bg-white flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{modelValue:u.tab,"onUpdate:modelValue":e[1]||(e[1]=t=>u.tab=t),class:"text-blue-grey-2","active-color":"main-alternate"},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{default:"",name:"home",icon:"dashboard",to:"/"}),(0,o.Wm)(L,{name:"userProfile",icon:"drag_handle",to:"/userProfile"})])),_:1},8,["modelValue"])])),_:1})):(0,o.kq)("",!0)])])),_:1})}var m=a(515),c=a.n(m),p=a(7874);const w=(0,o.Wm)("div",{class:"text-h6"},"Aviso",-1),g=(0,o.Uk)(" Sessão Expirada Faça login novamente! ");function f(t,e,a,l,n,d){const i=(0,o.up)("q-card-section"),s=(0,o.up)("q-btn"),r=(0,o.up)("q-card-actions"),u=(0,o.up)("q-card"),m=(0,o.up)("q-dialog"),c=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(m,{value:t.modalNotLogged.modal,persistent:"",onBeforeHide:d.beforeHideModal},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(i,{class:"q-pt-none"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o.Wm)(r,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(s,{flat:"",label:"OK",to:"/login/logout",color:"primary"},null,512),[[c]])])),_:1})])),_:1})])),_:1},8,["value","onBeforeHide"])}const h={name:"ModalNotLogged",computed:c()({},(0,p.rn)("auth",["modalNotLogged"])),methods:c()(c()({},(0,p.nv)("auth",["ActionModalNotLogged"])),{},{beforeHideModal(){this.ActionModalNotLogged({modal:!1,data:{}})}})};var W=a(5926),_=a(151),b=a(5589),q=a(9367),v=a(8240),L=a(677),Q=a(7518),Z=a.n(Q);h.render=f;const y=h;Z()(h,"components",{QDialog:W.Z,QCard:_.Z,QCardSection:b.Z,QCardActions:q.Z,QBtn:v.Z}),Z()(h,"directives",{ClosePopup:L.Z});const P=(0,o.Uk)(" Criar Novo Pet ");function k(t,e,a,n,d,i){const s=(0,o.up)("q-item-section"),r=(0,o.up)("q-avatar"),u=(0,o.up)("q-item"),m=(0,o.up)("q-separator"),c=(0,o.up)("q-list"),p=(0,o.up)("q-card-section"),w=(0,o.up)("q-card"),g=(0,o.up)("q-dialog"),f=(0,o.Q2)("ripple");return(0,o.wg)(),(0,o.j4)(g,{modelValue:t.modalPetList.modal,"onUpdate:modelValue":e[1]||(e[1]=e=>t.modalPetList.modal=e),position:"bottom"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{style:{width:"350px"},class:"border-pattern"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(t.petsList,((t,e)=>((0,o.wg)(),(0,o.j4)("div",{key:e},[(0,o.wy)((0,o.Wm)(u,{clickable:"",to:`/pet/${t.id}`},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"text-main-primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.name),1)])),_:2},1024),(0,o.Wm)(s,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{"text-color":"main-primary",icon:"keyboard_arrow_right"})])),_:1})])),_:2},1032,["to"]),[[f]]),(0,o.Wm)(m)])))),128)),(0,o.wy)((0,o.Wm)(u,{clickable:"",to:"/novo/pet"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{class:"text-main-secondary text-weight-medium"},{default:(0,o.w5)((()=>[P])),_:1}),(0,o.Wm)(s,{avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{"text-color":"main-secondary",icon:"add"})])),_:1})])),_:1},512),[[f]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}const A={name:"PetListModal",data(){return{dialog:!0}},computed:c()({},(0,p.rn)("pets",["petsList","modalPetList"])),methods:c()(c()({},(0,p.nv)("pets",["ActionPetModalList","ActionSetLoadingPet"])),{},{hide(){this.ActionSetLoadingPet(!0),this.ActionPetModalList({modal:!1,data:{}})}})};var M=a(7011),x=a(3414),C=a(2035),H=a(5096),j=a(5869),U=a(6489);A.render=k;const S=A;Z()(A,"components",{QDialog:W.Z,QCard:_.Z,QCardSection:b.Z,QList:M.Z,QItem:x.Z,QItemSection:C.Z,QAvatar:H.Z,QSeparator:j.Z}),Z()(A,"directives",{Ripple:U.Z});const N={name:"MainLayout",components:{ModalAuth:y,PetListModal:S},data(){return{tab:"mails"}},computed:c()({},(0,p.rn)("pets",["petsList","hasHeader","hasFooter"])),async mounted(){await this.ActionGetUser()},methods:c()(c()(c()({},(0,p.nv)("auth",["ActionGetUser"])),(0,p.nv)("pets",["ActionPetModalList"])),{},{showPetList(){this.ActionPetModalList({modal:!0,data:{}})}})};var V=a(3066),B=a(3812),F=a(9570),T=a(3747),I=a(4027),z=a(4554),D=a(9721),G=a(2652),K=a(1762),R=a(7547),E=a(208);N.render=u;const O=N;Z()(N,"components",{QLayout:V.Z,QHeader:B.Z,QToolbar:F.Z,QToolbarTitle:T.Z,QImg:I.Z,QBtn:v.Z,QIcon:z.Z,QBadge:D.Z,QPageContainer:G.Z,QFooter:K.Z,QTabs:R.Z,QRouteTab:E.Z})}}]);