sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/mvc/XMLView",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, XMLView, MessageToast, JSONModel, ResourceModel) {
        "use strict";
        return Controller.extend("demofioriapp.controller.View1", {
            onInit: function () {

            },
            onButtonClick: function (){
                // read msg text
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("oModel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("msg", [sRecipient]);
                //alert("Thanks for clicking");
                MessageToast.show(sMsg);
            }
        });
    });
