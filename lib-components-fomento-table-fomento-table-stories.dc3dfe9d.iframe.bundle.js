(self.webpackChunk_fomento_i_rf_web_component_node_lib=self.webpackChunk_fomento_i_rf_web_component_node_lib||[]).push([[5769],{"!style-loader!css-loader!sass-loader!./fomento.paginator.component.scss":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/*THEME ARQUETIPO - Generic Properties*/\n.wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 0;\n}\n@media screen and (max-width: 1200px) {\n  .wrapper {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    row-gap: 20px;\n  }\n}\n\n.boton-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.boton-container .page-option {\n  color: #ffffff;\n  border-radius: 3px;\n  padding: 9px 13px;\n  font-size: 15px;\n  cursor: pointer;\n}\n\nspan[aria-live=polite] {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.boton-container lib-fomento-button {\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n}\n.boton-container lib-fomento-button:disabled {\n  background-color: #e1e1e1;\n  color: rgba(0, 0, 0, 0.38);\n  cursor: not-allowed;\n}\n\n.select-container .titulo {\n  margin-right: 10px;\n  color: #087021;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n}\n.select-container mat-form-field {\n  width: 85px;\n  min-width: 85px;\n  height: auto;\n  margin: 0;\n  align-items: center;\n}\n.select-container mat-form-field .mat-mdc-form-field-infix {\n  padding: 0px;\n  height: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select-container mat-form-field .mat-mdc-form-field-wrapper {\n  margin: 0;\n  height: 20px;\n}\n.select-container mat-form-field mat-select {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.select-container mat-form-field .mat-select-value {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  text-align: center;\n  padding: 0 10px;\n}\n.select-container mat-form-field mat-icon {\n  color: #087021;\n  margin-right: auto;\n  font-size: auto;\n  align-items: center;\n}\n\n.mat-mdc-select-panel {\n  max-height: 200px;\n  overflow-y: auto;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-option {\n  height: 40px;\n  line-height: 40px;\n  padding: 0 16px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mat-mdc-option:hover {\n  background-color: #c4ddca;\n}\n\n.mat-mdc-option.mat-selected {\n  background-color: #087021;\n  color: white;\n}\n\n@media screen and (max-width: 600px) {\n  .mat-mdc-form-field {\n    width: 100%;\n  }\n  .mat-mdc-text-field-wrapper {\n    height: 36px;\n  }\n  .mat-select {\n    height: 36px;\n  }\n  .mat-select-value {\n    font-size: 13px;\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/i-rf-web-component-node-lib/src/lib/components/fomento.table/fomento.table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'/*THEME ARQUETIPO - Generic Properties*/\n.mat-mdc-form-field {\n  min-width: 100%;\n}\n\n.mdc-data-table__header-cell span {\n  font-family: "Source Sans Pro";\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.fas.fa-question-circle {\n  color: #087021;\n  font-size: 25px;\n}\n\n@media screen and (min-width: 900px) {\n  .container.botones {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 900px) {\n  .container.botones {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n    align-items: center;\n    row-gap: 10px;\n    margin-bottom: 10px;\n  }\n}\n\n.dflex {\n  display: flex;\n}\n\n.mdc-data-table__header-cell {\n  border-left: 1px solid #dddddd;\n}\n\n.mdc-data-table__row:nth-child(odd) {\n  background-color: #edf5ef;\n}\n\n.mdc-data-table__row {\n  font-family: "Source Sans Pro";\n  font-size: 17px;\n  font-weight: 400;\n}\n\n.container.tabla-multirregistro {\n  border: 1px solid #dddddd;\n  border-radius: 5px;\n  box-shadow: 0px 0px 15px 0px #dddddd;\n  padding: 20px;\n}\n\nmat-table {\n  max-height: 375px;\n  overflow: scroll;\n}\n\n.mat-mdc-cell,\n.mat-mdc-header-cell {\n  vertical-align: middle;\n}\n\n.mat-mdc-header-cell {\n  font-size: 18px;\n}\n\n.mat-mdc-header-row {\n  height: 50px;\n}\n\n::-webkit-scrollbar-corner {\n  background-color: white;\n}\n\n::-webkit-scrollbar {\n  background-color: white;\n}\n\n::-webkit-scrollbar-track {\n  background: white;\n}\n\n::-webkit-scrollbar-button {\n  background-color: white;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #c4ddca;\n  border: 5px solid transparent;\n  border-radius: 9px;\n  background-clip: content-box;\n}\n\n::-webkit-scrollbar-track-piece {\n  color: white;\n}\n\n#idColumn {\n  width: 10%;\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/i-rf-web-component-node-lib/src/lib/components/fomento.paginator/fomento.paginator.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>FomentoPaginatorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _style_loader_css_loader_sass_loader_fomento_paginator_component=__webpack_require__("!style-loader!css-loader!sass-loader!./fomento.paginator.component.scss"),_style_loader_css_loader_sass_loader_fomento_paginator_component_default=__webpack_require__.n(_style_loader_css_loader_sass_loader_fomento_paginator_component),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),paginator=__webpack_require__("./node_modules/@angular/material/fesm2022/paginator.mjs");let FomentoPaginatorComponent=class FomentoPaginatorComponent extends paginator.Cl{constructor(intl,changeDetectorRef,defaults){super(intl,changeDetectorRef,defaults),this.pageSize=this.pageSizeOptions[0]}onPageSizeChange(newPageSize){this.pageSize=newPageSize,this.pageIndex=0,this.emitPageEvent(this.pageIndex),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges()}emitPageEvent(nextPage){this.pageIndex=nextPage,this.page.emit({pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}static{this.ctorParameters=()=>[{type:paginator.xX},{type:core.ChangeDetectorRef},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[paginator.G1]}]}]}};FomentoPaginatorComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lib-fomento-paginator",template:'<div class="wrapper" role="region" aria-label="Paginador de resultados" aria-live="polite">\r\n  <span\r\n    aria-live="polite"\r\n    aria-atomic="true"\r\n    >Mostrando {{ pageIndex * pageSize + 1 }}-{{ pageSize * (pageIndex + 1) > length ? length : pageSize * (pageIndex + 1) }} de\r\n    {{ length }} resultados</span\r\n  >\r\n  <div class="boton-container">\r\n    \x3c!-- Botón Anterior --\x3e\r\n    <lib-fomento-button\r\n      typeStyle="material"\r\n      [disabled]="pageIndex === 0"\r\n      (click)="previousPage()"\r\n      label="<     ANTERIOR"\r\n      aria-label="Página anterior"\r\n      tabindex="0"\r\n    ></lib-fomento-button>\r\n\r\n    \x3c!-- Páginas dinámicas según el número total de páginas --\x3e\r\n    <ng-template [ngIf]="getNumberOfPages() < 7">\r\n      <lib-fomento-button\r\n        *ngFor="let aux of [].constructor(getNumberOfPages()); let i = index"\r\n        class="page-option"\r\n        [theme]="pageIndex === i ? \'primary\' : \'secondary\'"\r\n        typeStyle="material"\r\n        label="{{ i + 1 }}"\r\n        (click)="emitPageEvent(i)"\r\n        aria-label="Página {{ i + 1 }}"\r\n        tabindex="0"\r\n      ></lib-fomento-button>\r\n    </ng-template>\r\n\r\n    \x3c!-- Lógica de paginación avanzada --\x3e\r\n    <ng-template [ngIf]="getNumberOfPages() >= 7">\r\n      \x3c!-- Primeras Páginas --\x3e\r\n      <ng-template [ngIf]="pageIndex < 3">\r\n        <lib-fomento-button\r\n          *ngFor="let aux of [].constructor(3); let i = index"\r\n          class="page-option"\r\n          [theme]="pageIndex === i ? \'primary\' : \'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ i + 1 }}"\r\n          (click)="emitPageEvent(i)"\r\n          aria-label="Página {{ i + 1 }}"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <span class="titulo" aria-hidden="true">...</span>\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ getNumberOfPages() }}"\r\n          (click)="emitPageEvent(getNumberOfPages() - 1)"\r\n          aria-label="Última página"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n      </ng-template>\r\n\r\n      \x3c!-- Páginas Intermedias --\x3e\r\n      <ng-template [ngIf]="pageIndex >= 3 && pageIndex < getNumberOfPages() - 3">\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ 1 }}"\r\n          (click)="emitPageEvent(0)"\r\n          aria-label="Primera página"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <span class="titulo" aria-hidden="true">...</span>\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ pageIndex }}"\r\n          (click)="emitPageEvent(pageIndex - 1)"\r\n          aria-label="Página {{ pageIndex }}"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'primary\'"\r\n          typeStyle="material"\r\n          label="{{ pageIndex + 1 }}"\r\n          (click)="emitPageEvent(pageIndex)"\r\n          aria-label="Página actual, {{ pageIndex + 1 }}"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ pageIndex + 2 }}"\r\n          (click)="emitPageEvent(pageIndex + 1)"\r\n          aria-label="Página {{ pageIndex + 2 }}"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <span class="titulo" aria-hidden="true">...</span>\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ getNumberOfPages() }}"\r\n          (click)="emitPageEvent(getNumberOfPages() - 1)"\r\n          aria-label="Última página"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n      </ng-template>\r\n\r\n      \x3c!-- Últimas Páginas --\x3e\r\n      <ng-template [ngIf]="pageIndex >= getNumberOfPages() - 3">\r\n        <lib-fomento-button\r\n          class="page-option"\r\n          [theme]="\'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ 1 }}"\r\n          (click)="emitPageEvent(0)"\r\n          aria-label="Primera página"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n        <span class="titulo" aria-hidden="true">...</span>\r\n        <lib-fomento-button\r\n          *ngFor="let aux of [].constructor(3); let i = index"\r\n          class="page-option"\r\n          [theme]="pageIndex === getNumberOfPages() - (3 - i) ? \'primary\' : \'secondary\'"\r\n          typeStyle="material"\r\n          label="{{ getNumberOfPages() - (2 - i) }}"\r\n          (click)="emitPageEvent(getNumberOfPages() - (3 - i))"\r\n          aria-label="Página {{ getNumberOfPages() - (2 - i) }}"\r\n          tabindex="0"\r\n        ></lib-fomento-button>\r\n      </ng-template>\r\n    </ng-template>\r\n\r\n    \x3c!-- Botón Siguiente --\x3e\r\n    <lib-fomento-button\r\n      typeStyle="material"\r\n      [disabled]="pageIndex === getNumberOfPages() - 1"\r\n      (click)="nextPage()"\r\n      label="SIGUIENTE    >"\r\n      aria-label="Página siguiente"\r\n      tabindex="0"\r\n    ></lib-fomento-button>\r\n  </div>\r\n\r\n  \x3c!-- Selector de Tamaño de Página --\x3e\r\n  <div class="select-container">\r\n    <span class="titulo">Mostrar: </span>\r\n    <mat-form-field appearance="outline" class="page-selector">\r\n      <mat-select\r\n        [ngModel]="pageSize"\r\n        (selectionChange)="onPageSizeChange($event.value)"\r\n        aria-label="Seleccionar tamaño de página"\r\n      >\r\n        <mat-option *ngFor="let size of pageSizeOptions" [value]="size" aria-label="Mostrar {{ size }} resultados por página"\r\n          >{{ size }}</mat-option\r\n        >\r\n      </mat-select>\r\n      <mat-icon id="iconoSelect" matSuffix class="ri-arrow-down-s-line" aria-label="Abrir menú de selección" role="button"></mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n',styles:[_style_loader_css_loader_sass_loader_fomento_paginator_component_default()]})],FomentoPaginatorComponent)},"./projects/i-rf-web-component-node-lib/src/lib/components/fomento.table/fomento.table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColumns:()=>CustomColumns,Default:()=>Default,EmptyData:()=>EmptyData,Loading:()=>Loading,__namedExportsOrder:()=>__namedExportsOrder,default:()=>fomento_table_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),sort=__webpack_require__("./node_modules/@angular/material/fesm2022/sort.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var fomento_table_componentngResource=__webpack_require__("./projects/i-rf-web-component-node-lib/src/lib/components/fomento.table/fomento.table.component.scss?ngResource"),fomento_table_componentngResource_default=__webpack_require__.n(fomento_table_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fomento_paginator_component=__webpack_require__("./projects/i-rf-web-component-node-lib/src/lib/components/fomento.paginator/fomento.paginator.component.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let FomentoTableComponent=class FomentoTableComponent{constructor(){this.rangeFechaGeneracion=new fesm2022_forms.gE({start:new fesm2022_forms.MJ("",fesm2022_forms.k0.required),end:new fesm2022_forms.MJ("",fesm2022_forms.k0.required)}),this.rangeFechaFirma=new fesm2022_forms.gE({start:new fesm2022_forms.MJ("",fesm2022_forms.k0.required),end:new fesm2022_forms.MJ("",fesm2022_forms.k0.required)}),this.cualquiera=-1,this.select=[{value:"Nombre",description:"Nombre"}],this.dataSource=new table.I6,this.element_data=[],this.initColumns=[],this.isLoading=!1,this.tableDescription="Descripción aria para descripción de tabla",this.filtersParent={},this.previousIndex=0,this.displayedColumns=[],this.panelOpenState=!1,this.mostrarFiltrado=!1,this.textSearch="",this.familiaPreseleccionada="",this.selectedItems=[],this.checked=!1,this.checkedAll=!1,this.rangoFecha=[],this.noMasiva=!0,this.selectedTotal=0}set sort(val){val&&(this.dataSource.sort=val)}set paginator(val){val&&(this.dataSource.paginator=val)}ngOnInit(){this.displayedColumns=this.initColumns.map((col=>col.id)),this.initTable()}ngOnChanges(){this.selectedItems.length=0,this.displayedColumns=this.initColumns.map((col=>col.id)),this.initTable()}initTable(){this.checked=!1,this.checkedAll=!1,this.dataSource=new table.I6(this.element_data),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}static{this.ctorParameters=()=>[]}static{this.propDecorators={sort:[{type:core.ViewChild,args:[sort.B4,{static:!1}]}],paginator:[{type:core.ViewChild,args:[fomento_paginator_component.p,{static:!1}]}],table:[{type:core.ViewChild,args:[table.Zl]}],element_data:[{type:core.Input}],initColumns:[{type:core.Input}],isLoading:[{type:core.Input}],tableDescription:[{type:core.Input}]}}};FomentoTableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lib-fomento-table",template:'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.1.0/remixicon.css" />\r\n\r\n\x3c!-- <div class="container botones">\r\n    <div><i class="fas fa-question-circle" style="color: #087021"></i></div>\r\n    <div><lib-fomento-button label="Limpiar filtros" typeStyle="material" class="customButton" theme="secondary"></lib-fomento-button></div>\r\n    <div><lib-fomento-button label="Exportar" typeStyle="material" class="customButton" theme="secondary"></lib-fomento-button></div>\r\n    <div><lib-fomento-select [data]="select" default="Columnas"></lib-fomento-select></div>\r\n    <div><lib-fomento-button class="dflex" typeStyle="material" label="GUARDAR CONSULTA" theme="secondary" icon="search-plus"></lib-fomento-button></div>\r\n    <div><lib-fomento-button label="BUSCAR"></lib-fomento-button></div>\r\n </div> --\x3e\r\n\r\n <div *ngIf="isLoading" class="loading-indicator" role="status" aria-live="polite">\r\n\t<p>Cargando datos...</p>\r\n  </div>\r\n  \r\n  <div *ngIf="!isLoading">\r\n\t<p id="tabla-datos" class="visually-hidden">{{ tableDescription }}</p>\r\n\t<div class="container tabla-multirregistro" role="region" aria-labelledby="tabla-datos">\r\n\t  <mat-table [dataSource]="dataSource" matSort role="table">\r\n\t\t\x3c!-- Definición de columnas y filas --\x3e\r\n\t\t<ng-container *ngFor="let column of initColumns; let i = index" [matColumnDef]="column.id">\r\n\t\t  <th id="{{ column.id }}" mat-header-cell *matHeaderCellDef mat-sort-header cdkDrag cdkDragLockAxis="x"\r\n\t\t\t  scope="col" role="columnheader" [attr.aria-label]="column.name" [attr.title]="column.name" tabindex="0">\r\n\t\t\t<span>{{ column.name }}</span>\r\n\t\t  </th>\r\n\t\t  <td mat-cell *matCellDef="let row" tabindex="0" role="cell"\r\n\t\t\t  [attr.aria-label]="\'Fila \' + (i + 1) + \', \' + column.name + \': \' + row[column.id]">\r\n\t\t\t<span *ngIf="row[column.id] !== \'\'"> {{ row[column.id] }} </span>\r\n\t\t  </td>\r\n\t\t</ng-container>\r\n\t\t<tr mat-header-row *matHeaderRowDef="displayedColumns" role="row"></tr>\r\n\t\t<tr mat-row *matRowDef="let row; columns: displayedColumns" role="row"></tr>\r\n\t  </mat-table>\r\n\t</div>\r\n  </div>\r\n  ',styles:[fomento_table_componentngResource_default()]})],FomentoTableComponent);const fomento_table_stories={title:"Components/Table",component:FomentoTableComponent,tags:["autodocs"],parameters:{docs:{description:{component:"`lib-fomento-table` es un componente de tabla personalizable que permite visualizar y gestionar datos en formato tabular con opciones de ordenación y descripción accesible."}}},decorators:[(0,dist.moduleMetadata)({declarations:[FomentoTableComponent,fomento_paginator_component.p],imports:[animations.BrowserAnimationsModule,table.tP,sort.NQ]})],argTypes:{element_data:{control:"object",description:"Datos que se mostrarán en la tabla.",defaultValue:[]},initColumns:{control:"object",description:"Define las columnas iniciales que se mostrarán en la tabla.",defaultValue:[]},isLoading:{control:"boolean",description:"Indicador de carga de datos. Cuando es `true`, muestra un indicador de carga en la tabla.",defaultValue:!1},tableDescription:{control:"text",description:"Descripción accesible para la tabla, utilizada por lectores de pantalla.",defaultValue:"Tabla de ejemplo con datos mockeados."}}},Default={args:{element_data:[{id:"C001",client:"John Doe",purchases:5,totalSpent:500,lastVisit:"2024-07-01"},{id:"C002",client:"Jane Smith",purchases:3,totalSpent:300,lastVisit:"2024-07-02"},{id:"C003",client:"Michael Brown",purchases:7,totalSpent:700,lastVisit:"2024-07-03"},{id:"C004",client:"Emily Davis",purchases:2,totalSpent:200,lastVisit:"2024-07-04"},{id:"C005",client:"Chris Wilson",purchases:6,totalSpent:600,lastVisit:"2024-07-05"}],initColumns:[{id:"id",name:"ID"},{id:"client",name:"Cliente"},{id:"purchases",name:"Compras"},{id:"totalSpent",name:"Total Gastado"},{id:"lastVisit",name:"Última Visita"}],isLoading:!1,tableDescription:"Esta tabla muestra datos de clientes incluyendo ID, nombre, compras y total gastado."}},Loading={args:{...Default.args,isLoading:!0}},EmptyData={args:{...Default.args,element_data:[],initColumns:[{id:"project",name:"Proyecto"},{id:"manager",name:"Gestor"},{id:"budget",name:"Presupuesto"}],tableDescription:"Esta tabla actualmente no contiene datos."}},CustomColumns={args:{element_data:[{orderId:"O101",product:"Headphones",quantity:2,price:150,date:"2024-06-01",status:"Shipped"},{orderId:"O102",product:"Keyboard",quantity:1,price:50,date:"2024-06-02",status:"Processing"},{orderId:"O103",product:"Mouse",quantity:3,price:25,date:"2024-06-03",status:"Delivered"},{orderId:"O104",product:"Webcam",quantity:4,price:75,date:"2024-06-04",status:"Cancelled"},{orderId:"O105",product:"Monitor",quantity:1,price:200,date:"2024-06-05",status:"Shipped"},{orderId:"O106",product:"Laptop Stand",quantity:2,price:40,date:"2024-06-06",status:"Delivered"}],initColumns:[{id:"orderId",name:"ID de Pedido"},{id:"product",name:"Producto"},{id:"quantity",name:"Cantidad"},{id:"price",name:"Precio"},{id:"date",name:"Fecha"},{id:"status",name:"Estado"}],isLoading:!1,tableDescription:"Tabla personalizada con datos de pedidos."}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    element_data: [{\n      id: 'C001',\n      client: 'John Doe',\n      purchases: 5,\n      totalSpent: 500,\n      lastVisit: '2024-07-01'\n    }, {\n      id: 'C002',\n      client: 'Jane Smith',\n      purchases: 3,\n      totalSpent: 300,\n      lastVisit: '2024-07-02'\n    }, {\n      id: 'C003',\n      client: 'Michael Brown',\n      purchases: 7,\n      totalSpent: 700,\n      lastVisit: '2024-07-03'\n    }, {\n      id: 'C004',\n      client: 'Emily Davis',\n      purchases: 2,\n      totalSpent: 200,\n      lastVisit: '2024-07-04'\n    }, {\n      id: 'C005',\n      client: 'Chris Wilson',\n      purchases: 6,\n      totalSpent: 600,\n      lastVisit: '2024-07-05'\n    }],\n    initColumns: [{\n      id: 'id',\n      name: 'ID'\n    }, {\n      id: 'client',\n      name: 'Cliente'\n    }, {\n      id: 'purchases',\n      name: 'Compras'\n    }, {\n      id: 'totalSpent',\n      name: 'Total Gastado'\n    }, {\n      id: 'lastVisit',\n      name: 'Última Visita'\n    }],\n    isLoading: false,\n    tableDescription: 'Esta tabla muestra datos de clientes incluyendo ID, nombre, compras y total gastado.'\n  }\n}",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    isLoading: true\n  }\n}",...Loading.parameters?.docs?.source}}},EmptyData.parameters={...EmptyData.parameters,docs:{...EmptyData.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    element_data: [],\n    initColumns: [{\n      id: 'project',\n      name: 'Proyecto'\n    }, {\n      id: 'manager',\n      name: 'Gestor'\n    }, {\n      id: 'budget',\n      name: 'Presupuesto'\n    }],\n    tableDescription: 'Esta tabla actualmente no contiene datos.'\n  }\n}",...EmptyData.parameters?.docs?.source}}},CustomColumns.parameters={...CustomColumns.parameters,docs:{...CustomColumns.parameters?.docs,source:{originalSource:"{\n  args: {\n    element_data: [{\n      orderId: 'O101',\n      product: 'Headphones',\n      quantity: 2,\n      price: 150,\n      date: '2024-06-01',\n      status: 'Shipped'\n    }, {\n      orderId: 'O102',\n      product: 'Keyboard',\n      quantity: 1,\n      price: 50,\n      date: '2024-06-02',\n      status: 'Processing'\n    }, {\n      orderId: 'O103',\n      product: 'Mouse',\n      quantity: 3,\n      price: 25,\n      date: '2024-06-03',\n      status: 'Delivered'\n    }, {\n      orderId: 'O104',\n      product: 'Webcam',\n      quantity: 4,\n      price: 75,\n      date: '2024-06-04',\n      status: 'Cancelled'\n    }, {\n      orderId: 'O105',\n      product: 'Monitor',\n      quantity: 1,\n      price: 200,\n      date: '2024-06-05',\n      status: 'Shipped'\n    }, {\n      orderId: 'O106',\n      product: 'Laptop Stand',\n      quantity: 2,\n      price: 40,\n      date: '2024-06-06',\n      status: 'Delivered'\n    }],\n    initColumns: [{\n      id: 'orderId',\n      name: 'ID de Pedido'\n    }, {\n      id: 'product',\n      name: 'Producto'\n    }, {\n      id: 'quantity',\n      name: 'Cantidad'\n    }, {\n      id: 'price',\n      name: 'Precio'\n    }, {\n      id: 'date',\n      name: 'Fecha'\n    }, {\n      id: 'status',\n      name: 'Estado'\n    }],\n    isLoading: false,\n    tableDescription: 'Tabla personalizada con datos de pedidos.'\n  }\n}",...CustomColumns.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loading","EmptyData","CustomColumns"]}}]);