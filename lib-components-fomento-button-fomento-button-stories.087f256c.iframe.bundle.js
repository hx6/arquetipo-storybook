"use strict";(self.webpackChunk_fomento_i_rf_web_component_node_lib=self.webpackChunk_fomento_i_rf_web_component_node_lib||[]).push([[7829],{"./node_modules/@angular/material/fesm2022/badge.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>MatBadgeModule,k:()=>MatBadge});var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_material_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/cdk/fesm2022/coercion.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let nextId=0;const _MatBadgeBase=(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.Ob)(class{});class MatBadge extends _MatBadgeBase{get color(){return this._color}set color(value){this._setColor(value),this._color=value}get overlap(){return this._overlap}set overlap(val){this._overlap=(0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.he)(val)}get content(){return this._content}set content(newContent){this._updateRenderedContent(newContent)}get description(){return this._description}set description(newDescription){this._updateDescription(newDescription)}get hidden(){return this._hidden}set hidden(val){this._hidden=(0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.he)(val)}constructor(_ngZone,_elementRef,_ariaDescriber,_renderer,_animationMode){if(super(),this._ngZone=_ngZone,this._elementRef=_elementRef,this._ariaDescriber=_ariaDescriber,this._renderer=_renderer,this._animationMode=_animationMode,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=nextId++,this._isInitialized=!1,this._interactivityChecker=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.Z7),this._document=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT),"undefined"==typeof ngDevMode||ngDevMode){const nativeElement=_elementRef.nativeElement;if(nativeElement.nodeType!==nativeElement.ELEMENT_NODE)throw Error("matBadge must be attached to an element node.");const matIconTagName="mat-icon";nativeElement.tagName.toLowerCase()===matIconTagName&&"true"===nativeElement.getAttribute("aria-hidden")&&console.warn(`Detected a matBadge on an "aria-hidden" "<mat-icon>". Consider setting aria-hidden="false" in order to surface the information assistive technology.\n${nativeElement.outerHTML}`)}}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){const badgeElement=this._renderer.createElement("span");return badgeElement.setAttribute("id",`mat-badge-content-${this._id}`),badgeElement.setAttribute("aria-hidden","true"),badgeElement.classList.add("mat-badge-content"),"NoopAnimations"===this._animationMode&&badgeElement.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(badgeElement),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular((()=>{requestAnimationFrame((()=>{badgeElement.classList.add("mat-badge-active")}))})):badgeElement.classList.add("mat-badge-active"),badgeElement}_updateRenderedContent(newContent){const newContentNormalized=`${newContent??""}`.trim();this._isInitialized&&newContentNormalized&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=newContentNormalized),this._content=newContentNormalized}_updateDescription(newDescription){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),newDescription&&!this._isHostInteractive()||this._removeInlineDescription(),this._description=newDescription,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,newDescription):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(colorPalette){const classList=this._elementRef.nativeElement.classList;classList.remove(`mat-badge-${this._color}`),colorPalette&&classList.add(`mat-badge-${colorPalette}`)}_clearExistingBadges(){const badges=this._elementRef.nativeElement.querySelectorAll(":scope > .mat-badge-content");for(const badgeElement of Array.from(badges))badgeElement!==this._badgeElement&&badgeElement.remove()}static{this.ɵfac=function MatBadge_Factory(t){return new(t||MatBadge)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone),_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef),_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.vr),_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2),_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE,8))}}static{this.ɵdir=_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({type:MatBadge,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function MatBadge_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-badge-overlap",ctx.overlap)("mat-badge-above",ctx.isAbove())("mat-badge-below",!ctx.isAbove())("mat-badge-before",!ctx.isAfter())("mat-badge-after",ctx.isAfter())("mat-badge-small","small"===ctx.size)("mat-badge-medium","medium"===ctx.size)("mat-badge-large","large"===ctx.size)("mat-badge-hidden",ctx.hidden||!ctx.content)("mat-badge-disabled",ctx.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadge,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,args:[{selector:"[matBadge]",inputs:["disabled: matBadgeDisabled"],host:{class:"mat-badge","[class.mat-badge-overlap]":"overlap","[class.mat-badge-above]":"isAbove()","[class.mat-badge-below]":"!isAbove()","[class.mat-badge-before]":"!isAfter()","[class.mat-badge-after]":"isAfter()","[class.mat-badge-small]":'size === "small"',"[class.mat-badge-medium]":'size === "medium"',"[class.mat-badge-large]":'size === "large"',"[class.mat-badge-hidden]":"hidden || !content","[class.mat-badge-disabled]":"disabled"}}]}],(function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.vr},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional},{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,args:[_angular_core__WEBPACK_IMPORTED_MODULE_2__.ANIMATION_MODULE_TYPE]}]}]}),{color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgeColor"]}],overlap:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgeOverlap"]}],position:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgePosition"]}],content:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadge"]}],description:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgeDescription"]}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgeSize"]}],hidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:["matBadgeHidden"]}]});class MatBadgeModule{static{this.ɵfac=function MatBadgeModule_Factory(t){return new(t||MatBadgeModule)}}static{this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({type:MatBadgeModule,declarations:[MatBadge],imports:[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.Pd,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE],exports:[MatBadge,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE]})}static{this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({imports:[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.Pd,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE]})}}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatBadgeModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,args:[{imports:[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.Pd,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE],exports:[MatBadge,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.yE],declarations:[MatBadge]}]}],null,null)},"./projects/i-rf-web-component-node-lib/src/lib/components/fomento.button/fomento.button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Secondary:()=>Secondary,SoloIcon:()=>SoloIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_material_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/button.mjs"),_angular_material_badge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/badge.mjs"),_fomento_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/i-rf-web-component-node-lib/src/lib/components/fomento.button/fomento.button.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:_fomento_button_component__WEBPACK_IMPORTED_MODULE_1__.e,tags:["autodocs"],parameters:{docs:{description:{component:"Este es el botón de Fomento con varios estilos y temas."}}},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_fomento_button_component__WEBPACK_IMPORTED_MODULE_1__.e],imports:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.BrowserAnimationsModule,_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.Hl,_angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.Y]})],argTypes:{label:{control:"text",description:"Texto que se muestra dentro del botón."},theme:{control:"radio",options:["primary","secondary"],description:"Tema visual del botón (colores)."},href:{control:"text",description:"Enlace de botón."},target:{control:"text",description:"Forma de abrir el enlace"},icon:{control:"text",description:"Icono que se muestra dentro del botón (font-awesome)."},disabled:{control:"boolean",description:"Deshabilitar el botón."},aria_label:{control:"text",description:"Etiqueta accesible para lectores de pantalla."},disableRipple:{control:"boolean",description:"Deshabilitar la animación de ripple del botón"}}},Default={args:{label:"Botón Fomento",theme:"primary",href:"https://www.juntadeandalucia.es/",target:"_blank",icon:"",disabled:!1,aria_label:"Botón de Fomento",disableRipple:!0}},Secondary={args:{label:"Botón Secundario",theme:"secondary",href:"https://www.juntadeandalucia.es/",target:"_blank",icon:"check",disabled:!1,aria_label:"Botón secundario con icono",disableRipple:!0}},SoloIcon={args:{label:"",theme:"primary",href:"https://www.google.es/",target:"_blank",icon:"bell",disabled:!1,aria_label:"Botón icono",disableRipple:!0}},Disabled={args:{label:"Botón Desactivado",theme:"primary",href:"https://www.google.es/",target:"_self",icon:"",disabled:!0,aria_label:"Botón desactivado",disableRipple:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Botón Fomento',\n    theme: 'primary',\n    href: 'https://www.juntadeandalucia.es/',\n    target: '_blank',\n    icon: '',\n    disabled: false,\n    aria_label: 'Botón de Fomento',\n    disableRipple: true\n  }\n}",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Botón Secundario',\n    theme: 'secondary',\n    href: 'https://www.juntadeandalucia.es/',\n    target: '_blank',\n    icon: 'check',\n    disabled: false,\n    aria_label: 'Botón secundario con icono',\n    disableRipple: true\n  }\n}",...Secondary.parameters?.docs?.source}}},SoloIcon.parameters={...SoloIcon.parameters,docs:{...SoloIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: '',\n    theme: 'primary',\n    href: 'https://www.google.es/',\n    target: '_blank',\n    icon: 'bell',\n    disabled: false,\n    aria_label: 'Botón icono',\n    disableRipple: true\n  }\n}",...SoloIcon.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Botón Desactivado',\n    theme: 'primary',\n    href: 'https://www.google.es/',\n    target: '_self',\n    icon: '',\n    disabled: true,\n    aria_label: 'Botón desactivado',\n    disableRipple: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Secondary","SoloIcon","Disabled"]}}]);