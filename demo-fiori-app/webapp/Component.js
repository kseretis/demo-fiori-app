sap.ui.define([
    "sap/ui/core/UIComponent",
    "demofioriapp/model/models"
],
    function (UIComponent, models) {
        "use strict";

        return UIComponent.extend("demofioriapp.Component", {
            metadata: {
                interfaces: ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set the oModel
                this.setModel(models.createODataModel(), "oDataModel");

                // set device model
                this.setModel(models.createDeviceModel(), "device");

                // enable routing
                this.getRouter().initialize();
            },
        });
    }
);