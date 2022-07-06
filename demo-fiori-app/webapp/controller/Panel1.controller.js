sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    function (Controller, MessageToast) {
        'use strict';

        return Controller.extend("demofioriapp.controller.Panel1", {
            onButtonClick: function () {
                // read msg text
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel("oDataModel").getProperty("/recipient/name");
                var sMsg = oBundle.getText("msg", [sRecipient]);
                MessageToast.show(sMsg);
            },
            onOpenDialog: function () {
                // create the dialog async
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "demofioriapp.view.Dialog1"
                    });
                }
                this.pDialog.then(function (dialog) {
                    dialog.open();
                });
            },
            onCloseDialog: function () {
                this.byId("myDialog").close();
            }
        });
    }
);