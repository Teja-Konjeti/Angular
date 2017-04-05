"use strict";
var brand_list_component_1 = require("./brand-list.component");
var brand_edit_component_1 = require("./brand-edit.component");
exports.routes = [
    {
        path: 'brands',
        component: brand_list_component_1.BrandListComponent
    },
    {
        path: 'brands/edit/:id/:name',
        component: brand_edit_component_1.BrandEditComponent
    }
];
exports.components = [
    brand_list_component_1.BrandListComponent,
    brand_edit_component_1.BrandEditComponent
];
//# sourceMappingURL=brand.routing.js.map