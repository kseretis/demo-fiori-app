sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, XMLView, MessageToast) {
        "use strict";

        // XMLView.create({
        //     viewName: "demofioriapp.view.View1"
        // }).then( function (oView) {
        //     oView.placeAt("content");
        // });

        return Controller.extend("demofioriapp.controller.View1", {
            onInit: function () {
                //alert("Hello");
            },
            onButtonClick: function (){
                //alert("Thanks for clicking");
                MessageToast.show("Thanks for clicking");
            }
        });
    });
