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
                // data model
                var oData = {
                    recipient: {
                        name: "UI5" 
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // set i18n text
                var i18nModel = new ResourceModel({
                    bundleName: "demofioriapp.i18n.i18n",
                    supportedLocales: [""],
                    fallbackLocale: ""
                });
                this.getView().setModel(i18nModel, "i18n");

            },
            onButtonClick: function (){
                // read msg text
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("msg", [sRecipient]);
                //alert("Thanks for clicking");
                MessageToast.show(sMsg);
            }
        });
    });
