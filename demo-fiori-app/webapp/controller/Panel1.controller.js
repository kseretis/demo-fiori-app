sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("demofioriapp.controller.Panel1", {
        onButtonClick: function (){
            // read msg text
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel("oModel").getProperty("/recipient/name");
            var sMsg = oBundle.getText("msg", [sRecipient]);
            MessageToast.show(sMsg);
        }
    });
});