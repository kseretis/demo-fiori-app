sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("demofioriapp.controller.Panel1", {
        onButtonClick: function() {
            // read msg text
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel("oModel").getProperty("/recipient/name");
            var sMsg = oBundle.getText("msg", [sRecipient]);
            MessageToast.show(sMsg);
        },
        onOpenDialog: function() {
            console.log("testing: button clicked")
          
            // create the dialog async
            //if(!this.byId("myDialog")){
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "demofioriapp.view.Dialog1"
                });
            }

            this.pDialog.then(function(dialog) {
                dialog.open();
            });
            //     console.log("testing: dialog not found");
            //     // load async
            //     Fragment.load({
            //         id: this.getView().getId(),
            //         name: "demofioriapp.view.Dialog1",
            //         controller: this
            //     }).then(function(dialog){
            //         // connect the dialog to the component
            //         this.getView().addDependent(dialog);
            //         dialog.open();
            //     });
            // } else {
            //     this.byId("myDialog").open();
            // }
        },
        onCloseDialog: function() {
            this.byId("myDialog").close();
        }
    });
});