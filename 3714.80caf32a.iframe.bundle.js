"use strict";(self.webpackChunk_fomento_i_rf_web_component_node_lib=self.webpackChunk_fomento_i_rf_web_component_node_lib||[]).push([[3714],{"./node_modules/angular-notifier/fesm2022/angular-notifier.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lp:()=>NotifierContainerComponent,Zl:()=>NotifierModule,iJ:()=>NotifierService});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");const _c0=function(a0){return{notification:a0}};function NotifierNotificationComponent_ng_container_0_Template(rf,ctx){if(1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0,2),2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet",ctx_r0.notification.template)("ngTemplateOutletContext",_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2,_c0,ctx_r0.notification))}}function NotifierNotificationComponent_ng_template_1_button_2_Template(rf,ctx){if(1&rf){const _r5=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"button",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",(function NotifierNotificationComponent_ng_template_1_button_2_Template_button_click_0_listener(){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);const ctx_r4=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onClickDismiss())})),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1,"svg",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2,"path",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()}}function NotifierNotificationComponent_ng_template_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"p",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2,NotifierNotificationComponent_ng_template_1_button_2_Template,3,0,"button",4)),2&rf){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notification.message),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx_r2.config.behaviour.showDismissButton)}}function NotifierContainerComponent_li_1_Template(rf,ctx){if(1&rf){const _r3=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"li",2)(1,"notifier-notification",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready",(function NotifierContainerComponent_li_1_Template_notifier_notification_ready_1_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onNotificationReady($event))}))("dismiss",(function NotifierContainerComponent_li_1_Template_notifier_notification_dismiss_1_listener($event){_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);const ctx_r4=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onNotificationDismiss($event))})),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()}if(2&rf){const notification_r1=ctx.$implicit;_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notification",notification_r1)}}class NotifierNotification{constructor(options){this.template=null,Object.assign(this,options),void 0===options.id&&(this.id=`ID_${(new Date).getTime()}`)}}class NotifierQueueService{constructor(){this.actionStream=new rxjs__WEBPACK_IMPORTED_MODULE_1__.B,this.actionQueue=[],this.isActionInProgress=!1}push(action){this.actionQueue.push(action),this.tryToRunNextAction()}continue(){this.isActionInProgress=!1,this.tryToRunNextAction()}tryToRunNextAction(){this.isActionInProgress||0===this.actionQueue.length||(this.isActionInProgress=!0,this.actionStream.next(this.actionQueue.shift()))}static{this.ɵfac=function NotifierQueueService_Factory(t){return new(t||NotifierQueueService)}}static{this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({token:NotifierQueueService,factory:NotifierQueueService.ɵfac})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierQueueService,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable}],(function(){return[]}),null);const NotifierOptionsToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("[angular-notifier] Notifier Options"),NotifierConfigToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("[anuglar-notifier] Notifier Config");class NotifierConfig{constructor(customOptions={}){this.animations={enabled:!0,hide:{easing:"ease",offset:50,preset:"fade",speed:300},overlap:150,shift:{easing:"ease",speed:300},show:{easing:"ease",preset:"slide",speed:300}},this.behaviour={autoHide:7e3,onClick:!1,onMouseover:"pauseAutoHide",showDismissButton:!0,stacking:4},this.position={horizontal:{distance:12,position:"left"},vertical:{distance:12,gap:10,position:"bottom"}},this.theme="material",void 0!==customOptions.theme&&(this.theme=customOptions.theme),void 0!==customOptions.animations&&(void 0!==customOptions.animations.enabled&&(this.animations.enabled=customOptions.animations.enabled),void 0!==customOptions.animations.overlap&&(this.animations.overlap=customOptions.animations.overlap),void 0!==customOptions.animations.hide&&Object.assign(this.animations.hide,customOptions.animations.hide),void 0!==customOptions.animations.shift&&Object.assign(this.animations.shift,customOptions.animations.shift),void 0!==customOptions.animations.show&&Object.assign(this.animations.show,customOptions.animations.show)),void 0!==customOptions.behaviour&&Object.assign(this.behaviour,customOptions.behaviour),void 0!==customOptions.position&&(void 0!==customOptions.position.horizontal&&Object.assign(this.position.horizontal,customOptions.position.horizontal),void 0!==customOptions.position.vertical&&Object.assign(this.position.vertical,customOptions.position.vertical))}}class NotifierService{constructor(notifierQueueService,config){this.queueService=notifierQueueService,this.config=config}getConfig(){return this.config}get actionStream(){return this.queueService.actionStream.asObservable()}show(notificationOptions){this.queueService.push({payload:notificationOptions,type:"SHOW"})}hide(notificationId){this.queueService.push({payload:notificationId,type:"HIDE"})}hideNewest(){this.queueService.push({type:"HIDE_NEWEST"})}hideOldest(){this.queueService.push({type:"HIDE_OLDEST"})}hideAll(){this.queueService.push({type:"HIDE_ALL"})}notify(type,message,notificationId){const notificationOptions={message,type};void 0!==notificationId&&(notificationOptions.id=notificationId),this.show(notificationOptions)}static{this.ɵfac=function NotifierService_Factory(t){return new(t||NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierQueueService),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NotifierConfigToken))}}static{this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({token:NotifierService,factory:NotifierService.ɵfac})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierService,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable}],(function(){return[{type:NotifierQueueService},{type:NotifierConfig,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,args:[NotifierConfigToken]}]}]}),null);class NotifierTimerService{constructor(){this.now=0,this.remaining=0}start(duration){return new Promise((resolve=>{this.remaining=duration,this.finishPromiseResolver=resolve,this.continue()}))}pause(){clearTimeout(this.timerId),this.remaining-=(new Date).getTime()-this.now}continue(){this.now=(new Date).getTime(),this.timerId=window.setTimeout((()=>{this.finish()}),this.remaining)}stop(){clearTimeout(this.timerId),this.remaining=0}finish(){this.finishPromiseResolver()}static{this.ɵfac=function NotifierTimerService_Factory(t){return new(t||NotifierTimerService)}}static{this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({token:NotifierTimerService,factory:NotifierTimerService.ɵfac})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierTimerService,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable}],(function(){return[]}),null);const fade={hide:()=>({from:{opacity:"1"},to:{opacity:"0"}}),show:()=>({from:{opacity:"0"},to:{opacity:"1"}})},slide={hide:notification=>{const config=notification.component.getConfig(),shift=notification.component.getShift();let from,to;if("left"===config.position.horizontal.position)from={transform:`translate3d( 0, ${shift}px, 0 )`},to={transform:`translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), ${shift}px, 0 )`};else if("right"===config.position.horizontal.position)from={transform:`translate3d( 0, ${shift}px, 0 )`},to={transform:`translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), ${shift}px, 0 )`};else{let horizontalPosition;horizontalPosition="top"===config.position.vertical.position?`calc( -100% - ${config.position.horizontal.distance}px - 10px )`:`calc( 100% + ${config.position.horizontal.distance}px + 10px )`,from={transform:`translate3d( -50%, ${shift}px, 0 )`},to={transform:`translate3d( -50%, ${horizontalPosition}, 0 )`}}return{from,to}},show:notification=>{const config=notification.component.getConfig();let from,to;if("left"===config.position.horizontal.position)from={transform:`translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), 0, 0 )`},to={transform:"translate3d( 0, 0, 0 )"};else if("right"===config.position.horizontal.position)from={transform:`translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), 0, 0 )`},to={transform:"translate3d( 0, 0, 0 )"};else{let horizontalPosition;horizontalPosition="top"===config.position.vertical.position?`calc( -100% - ${config.position.horizontal.distance}px - 10px )`:`calc( 100% + ${config.position.horizontal.distance}px + 10px )`,from={transform:`translate3d( -50%, ${horizontalPosition}, 0 )`},to={transform:"translate3d( -50%, 0, 0 )"}}return{from,to}}};class NotifierAnimationService{constructor(){this.animationPresets={fade,slide}}getAnimationData(direction,notification){let keyframes,duration,easing;return"show"===direction?(keyframes=this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification),duration=notification.component.getConfig().animations.show.speed,easing=notification.component.getConfig().animations.show.easing):(keyframes=this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification),duration=notification.component.getConfig().animations.hide.speed,easing=notification.component.getConfig().animations.hide.easing),{keyframes:[keyframes.from,keyframes.to],options:{duration,easing,fill:"forwards"}}}static{this.ɵfac=function NotifierAnimationService_Factory(t){return new(t||NotifierAnimationService)}}static{this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({token:NotifierAnimationService,factory:NotifierAnimationService.ɵfac})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierAnimationService,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable}],(function(){return[]}),null);class NotifierNotificationComponent{constructor(elementRef,renderer,notifierService,notifierTimerService,notifierAnimationService){this.config=notifierService.getConfig(),this.ready=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.dismiss=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.timerService=notifierTimerService,this.animationService=notifierAnimationService,this.renderer=renderer,this.element=elementRef.nativeElement,this.elementShift=0}ngAfterViewInit(){this.setup(),this.elementHeight=this.element.offsetHeight,this.elementWidth=this.element.offsetWidth,this.ready.emit(this)}getConfig(){return this.config}getHeight(){return this.elementHeight}getWidth(){return this.elementWidth}getShift(){return this.elementShift}show(){return new Promise((resolve=>{if(this.config.animations.enabled&&this.config.animations.show.speed>0){const animationData=this.animationService.getAnimationData("show",this.notification),animatedProperties=Object.keys(animationData.keyframes[0]);for(let i=animatedProperties.length-1;i>=0;i--)this.renderer.setStyle(this.element,animatedProperties[i],animationData.keyframes[0][animatedProperties[i]]);this.renderer.setStyle(this.element,"visibility","visible");this.element.animate(animationData.keyframes,animationData.options).onfinish=()=>{this.startAutoHideTimer(),resolve()}}else this.renderer.setStyle(this.element,"visibility","visible"),this.startAutoHideTimer(),resolve()}))}hide(){return new Promise((resolve=>{if(this.stopAutoHideTimer(),this.config.animations.enabled&&this.config.animations.hide.speed>0){const animationData=this.animationService.getAnimationData("hide",this.notification);this.element.animate(animationData.keyframes,animationData.options).onfinish=()=>{resolve()}}else resolve()}))}shift(distance,shiftToMakePlace){return new Promise((resolve=>{let newElementShift;newElementShift="top"===this.config.position.vertical.position&&shiftToMakePlace||"bottom"===this.config.position.vertical.position&&!shiftToMakePlace?this.elementShift+distance+this.config.position.vertical.gap:this.elementShift-distance-this.config.position.vertical.gap;const horizontalPosition="middle"===this.config.position.horizontal.position?"-50%":"0";if(this.config.animations.enabled&&this.config.animations.shift.speed>0){const animationData={keyframes:[{transform:`translate3d( ${horizontalPosition}, ${this.elementShift}px, 0 )`},{transform:`translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`}],options:{duration:this.config.animations.shift.speed,easing:this.config.animations.shift.easing,fill:"forwards"}};this.elementShift=newElementShift;this.element.animate(animationData.keyframes,animationData.options).onfinish=()=>{resolve()}}else this.renderer.setStyle(this.element,"transform",`translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`),this.elementShift=newElementShift,resolve()}))}onClickDismiss(){this.dismiss.emit(this.notification.id)}onNotificationMouseover(){"pauseAutoHide"===this.config.behaviour.onMouseover?this.pauseAutoHideTimer():"resetAutoHide"===this.config.behaviour.onMouseover&&this.stopAutoHideTimer()}onNotificationMouseout(){"pauseAutoHide"===this.config.behaviour.onMouseover?this.continueAutoHideTimer():"resetAutoHide"===this.config.behaviour.onMouseover&&this.startAutoHideTimer()}onNotificationClick(){"hide"===this.config.behaviour.onClick&&this.onClickDismiss()}startAutoHideTimer(){!1!==this.config.behaviour.autoHide&&this.config.behaviour.autoHide>0&&this.timerService.start(this.config.behaviour.autoHide).then((()=>{this.onClickDismiss()}))}pauseAutoHideTimer(){!1!==this.config.behaviour.autoHide&&this.config.behaviour.autoHide>0&&this.timerService.pause()}continueAutoHideTimer(){!1!==this.config.behaviour.autoHide&&this.config.behaviour.autoHide>0&&this.timerService.continue()}stopAutoHideTimer(){!1!==this.config.behaviour.autoHide&&this.config.behaviour.autoHide>0&&this.timerService.stop()}setup(){"left"===this.config.position.horizontal.position?this.renderer.setStyle(this.element,"left",`${this.config.position.horizontal.distance}px`):"right"===this.config.position.horizontal.position?this.renderer.setStyle(this.element,"right",`${this.config.position.horizontal.distance}px`):(this.renderer.setStyle(this.element,"left","50%"),this.renderer.setStyle(this.element,"transform","translate3d( -50%, 0, 0 )")),"top"===this.config.position.vertical.position?this.renderer.setStyle(this.element,"top",`${this.config.position.vertical.distance}px`):this.renderer.setStyle(this.element,"bottom",`${this.config.position.vertical.distance}px`),this.renderer.addClass(this.element,`notifier__notification--${this.notification.type}`),this.renderer.addClass(this.element,`notifier__notification--${this.config.theme}`)}static{this.ɵfac=function NotifierNotificationComponent_Factory(t){return new(t||NotifierNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierTimerService),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierAnimationService))}}static{this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NotifierNotificationComponent,selectors:[["notifier-notification"]],hostAttrs:[1,"notifier__notification"],hostBindings:function NotifierNotificationComponent_HostBindings(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click",(function NotifierNotificationComponent_click_HostBindingHandler(){return ctx.onNotificationClick()}))("mouseout",(function NotifierNotificationComponent_mouseout_HostBindingHandler(){return ctx.onNotificationMouseout()}))("mouseover",(function NotifierNotificationComponent_mouseover_HostBindingHandler(){return ctx.onNotificationMouseover()}))},inputs:{notification:"notification"},outputs:{ready:"ready",dismiss:"dismiss"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NotifierTimerService])],decls:3,vars:2,consts:[[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf","ngIfElse"],["predefinedNotification",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"notifier__notification-message"],["class","notifier__notification-button","type","button","title","dismiss",3,"click",4,"ngIf"],["type","button","title","dismiss",1,"notifier__notification-button",3,"click"],["viewBox","0 0 24 24","width","20","height","20",1,"notifier__notification-button-icon"],["d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],template:function NotifierNotificationComponent_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0,NotifierNotificationComponent_ng_container_0_Template,1,4,"ng-container",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1,NotifierNotificationComponent_ng_template_1_Template,3,2,"ng-template",null,1,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])),2&rf){const _r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf",ctx.notification.template)("ngIfElse",_r1)}},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf,_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],encapsulation:2,changeDetection:0})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierNotificationComponent,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,host:{"(click)":"onNotificationClick()","(mouseout)":"onNotificationMouseout()","(mouseover)":"onNotificationMouseover()",class:"notifier__notification"},providers:[NotifierTimerService],selector:"notifier-notification",template:'<ng-container\n  *ngIf="notification.template; else predefinedNotification"\n  [ngTemplateOutlet]="notification.template"\n  [ngTemplateOutletContext]="{ notification: notification }"\n>\n</ng-container>\n\n<ng-template #predefinedNotification>\n  <p class="notifier__notification-message">{{ notification.message }}</p>\n  <button\n    class="notifier__notification-button"\n    type="button"\n    title="dismiss"\n    *ngIf="config.behaviour.showDismissButton"\n    (click)="onClickDismiss()"\n  >\n    <svg class="notifier__notification-button-icon" viewBox="0 0 24 24" width="20" height="20">\n      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />\n    </svg>\n  </button>\n</ng-template>\n'}]}],(function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2},{type:NotifierService},{type:NotifierTimerService},{type:NotifierAnimationService}]}),{notification:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],ready:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],dismiss:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}]});class NotifierContainerComponent{constructor(changeDetector,notifierQueueService,notifierService){this.changeDetector=changeDetector,this.queueService=notifierQueueService,this.config=notifierService.getConfig(),this.notifications=[],this.queueServiceSubscription=this.queueService.actionStream.subscribe((action=>{this.handleAction(action).then((()=>{this.queueService.continue()}))}))}ngOnDestroy(){this.queueServiceSubscription&&this.queueServiceSubscription.unsubscribe()}identifyNotification(index,notification){return notification.id}onNotificationDismiss(notificationId){this.queueService.push({payload:notificationId,type:"HIDE"})}onNotificationReady(notificationComponent){const currentNotification=this.notifications[this.notifications.length-1];currentNotification.component=notificationComponent,this.continueHandleShowAction(currentNotification)}handleAction(action){switch(action.type){case"SHOW":return this.handleShowAction(action);case"HIDE":return this.handleHideAction(action);case"HIDE_OLDEST":return this.handleHideOldestAction(action);case"HIDE_NEWEST":return this.handleHideNewestAction(action);case"HIDE_ALL":return this.handleHideAllAction();default:return new Promise((resolve=>{resolve()}))}}handleShowAction(action){return new Promise((resolve=>{this.tempPromiseResolver=resolve,this.addNotificationToList(new NotifierNotification(action.payload))}))}continueHandleShowAction(notification){const numberOfNotifications=this.notifications.length;if(1===numberOfNotifications)notification.component.show().then(this.tempPromiseResolver);else{const implicitStackingLimit=2;if(!1===this.config.behaviour.stacking||this.config.behaviour.stacking<implicitStackingLimit)this.notifications[0].component.hide().then((()=>{this.removeNotificationFromList(this.notifications[0]),notification.component.show().then(this.tempPromiseResolver)}));else{const stepPromises=[];if(numberOfNotifications>this.config.behaviour.stacking){const oldNotifications=this.notifications.slice(1,numberOfNotifications-1);this.config.animations.enabled?!1!==this.config.animations.overlap&&this.config.animations.overlap>0?(stepPromises.push(this.notifications[0].component.hide()),setTimeout((()=>{stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0))}),this.config.animations.hide.speed-this.config.animations.overlap),setTimeout((()=>{stepPromises.push(notification.component.show())}),this.config.animations.hide.speed+this.config.animations.shift.speed-this.config.animations.overlap)):stepPromises.push(new Promise((resolve=>{this.notifications[0].component.hide().then((()=>{this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0).then((()=>{notification.component.show().then(resolve)}))}))}))):(stepPromises.push(this.notifications[0].component.hide()),stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0)),stepPromises.push(notification.component.show()))}else{const oldNotifications=this.notifications.slice(0,numberOfNotifications-1);this.config.animations.enabled?!1!==this.config.animations.overlap&&this.config.animations.overlap>0?(stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0)),setTimeout((()=>{stepPromises.push(notification.component.show())}),this.config.animations.shift.speed-this.config.animations.overlap)):stepPromises.push(new Promise((resolve=>{this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0).then((()=>{notification.component.show().then(resolve)}))}))):(stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!0)),stepPromises.push(notification.component.show()))}Promise.all(stepPromises).then((()=>{numberOfNotifications>this.config.behaviour.stacking&&this.removeNotificationFromList(this.notifications[0]),this.tempPromiseResolver()}))}}}handleHideAction(action){return new Promise((resolve=>{const stepPromises=[],notification=this.findNotificationById(action.payload);if(void 0===notification)return void resolve();const notificationIndex=this.findNotificationIndexById(action.payload);if(void 0===notificationIndex)return void resolve();const oldNotifications=this.notifications.slice(0,notificationIndex);oldNotifications.length>0?this.config.animations.enabled&&this.config.animations.hide.speed>0?!1!==this.config.animations.overlap&&this.config.animations.overlap>0?(stepPromises.push(notification.component.hide()),setTimeout((()=>{stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!1))}),this.config.animations.hide.speed-this.config.animations.overlap)):notification.component.hide().then((()=>{stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!1))})):(stepPromises.push(notification.component.hide()),stepPromises.push(this.shiftNotifications(oldNotifications,notification.component.getHeight(),!1))):stepPromises.push(notification.component.hide()),Promise.all(stepPromises).then((()=>{this.removeNotificationFromList(notification),resolve()}))}))}handleHideOldestAction(action){return 0===this.notifications.length?new Promise((resolve=>{resolve()})):(action.payload=this.notifications[0].id,this.handleHideAction(action))}handleHideNewestAction(action){return 0===this.notifications.length?new Promise((resolve=>{resolve()})):(action.payload=this.notifications[this.notifications.length-1].id,this.handleHideAction(action))}handleHideAllAction(){return new Promise((resolve=>{const numberOfNotifications=this.notifications.length;if(0!==numberOfNotifications)if(this.config.animations.enabled&&this.config.animations.hide.speed>0&&!1!==this.config.animations.hide.offset&&this.config.animations.hide.offset>0)for(let i=numberOfNotifications-1;i>=0;i--){const animationOffset="top"===this.config.position.vertical.position?numberOfNotifications-1:i;setTimeout((()=>{this.notifications[i].component.hide().then((()=>{("top"===this.config.position.vertical.position&&0===i||"bottom"===this.config.position.vertical.position&&i===numberOfNotifications-1)&&(this.removeAllNotificationsFromList(),resolve())}))}),this.config.animations.hide.offset*animationOffset)}else{const stepPromises=[];for(let i=numberOfNotifications-1;i>=0;i--)stepPromises.push(this.notifications[i].component.hide());Promise.all(stepPromises).then((()=>{this.removeAllNotificationsFromList(),resolve()}))}else resolve()}))}shiftNotifications(notifications,distance,toMakePlace){return new Promise((resolve=>{if(0===notifications.length)return void resolve();const notificationPromises=[];for(let i=notifications.length-1;i>=0;i--)notificationPromises.push(notifications[i].component.shift(distance,toMakePlace));Promise.all(notificationPromises).then(resolve)}))}addNotificationToList(notification){this.notifications.push(notification),this.changeDetector.markForCheck()}removeNotificationFromList(notification){this.notifications=this.notifications.filter((item=>item.component!==notification.component)),this.changeDetector.markForCheck()}removeAllNotificationsFromList(){this.notifications=[],this.changeDetector.markForCheck()}findNotificationById(notificationId){return this.notifications.find((currentNotification=>currentNotification.id===notificationId))}findNotificationIndexById(notificationId){const notificationIndex=this.notifications.findIndex((currentNotification=>currentNotification.id===notificationId));return-1!==notificationIndex?notificationIndex:void 0}static{this.ɵfac=function NotifierContainerComponent_Factory(t){return new(t||NotifierContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierQueueService),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NotifierService))}}static{this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NotifierContainerComponent,selectors:[["notifier-container"]],hostAttrs:[1,"notifier__container"],decls:2,vars:2,consts:[[1,"notifier__container-list"],["class","notifier__container-list-item",4,"ngFor","ngForOf","ngForTrackBy"],[1,"notifier__container-list-item"],[3,"notification","ready","dismiss"]],template:function NotifierContainerComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0,"ul",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1,NotifierContainerComponent_li_1_Template,2,1,"li",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf",ctx.notifications)("ngForTrackBy",ctx.identifyNotification))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf,NotifierNotificationComponent],encapsulation:2,changeDetection:0})}}function notifierCustomConfigFactory(options){return new NotifierConfig(options)}function notifierDefaultConfigFactory(){return new NotifierConfig({})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierContainerComponent,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,host:{class:"notifier__container"},selector:"notifier-container",template:'<ul class="notifier__container-list">\n  <li class="notifier__container-list-item" *ngFor="let notification of notifications; trackBy: identifyNotification">\n    <notifier-notification [notification]="notification" (ready)="onNotificationReady($event)" (dismiss)="onNotificationDismiss($event)">\n    </notifier-notification>\n  </li>\n</ul>\n'}]}],(function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef},{type:NotifierQueueService},{type:NotifierService}]}),null);class NotifierModule{static withConfig(options={}){return{ngModule:NotifierModule,providers:[{provide:NotifierOptionsToken,useValue:options},{deps:[NotifierOptionsToken],provide:NotifierConfigToken,useFactory:notifierCustomConfigFactory}]}}static{this.ɵfac=function NotifierModule_Factory(t){return new(t||NotifierModule)}}static{this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:NotifierModule,declarations:[NotifierContainerComponent,NotifierNotificationComponent],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],exports:[NotifierContainerComponent]})}static{this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({providers:[NotifierAnimationService,NotifierService,NotifierQueueService,{provide:NotifierConfigToken,useFactory:notifierDefaultConfigFactory}],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,args:[{declarations:[NotifierContainerComponent,NotifierNotificationComponent],exports:[NotifierContainerComponent],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],providers:[NotifierAnimationService,NotifierService,NotifierQueueService,{provide:NotifierConfigToken,useFactory:notifierDefaultConfigFactory}]}]}],null,null)}}]);