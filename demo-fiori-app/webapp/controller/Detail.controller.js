sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], 
    function(Controller, UIComponent, History) {
        'use strict';
    
        return Controller.extend("demofioriapp.controller.Detail", {
            onInit: function() {
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
                
            },
            _onObjectMatched: function(oEvent) {
                this.getView().bindElement({
                    path: "/" + window.decodeURIComponent(
                            oEvent.getParameter("arguments").invoicePath),
                    model: "invoice"
                })
            },
            onNavBack: function() {
                var history = History.getInstance();
                var previousHash = history.getPreviousHash();

                if(previousHash !== undefined)
                    window.history.go(-1);
                else {
                    var router = UIComponent.getRouterFor(this);
                    router.navTo("overview", {}, true);
                }
            }
        })
    }   
);