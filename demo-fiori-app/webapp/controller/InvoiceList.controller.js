sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "demofioriapp/model/formatter"
], 
    function(Controller, JSONModel, formatter) {
    'use strict';
    
    return Controller.extend("demofioriapp.controller.InvoiceList", {
        formatter: formatter,
        onInit: function() {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "list");
        }
    });
});