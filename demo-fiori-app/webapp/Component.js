sap.ui.define([
    "sap/ui/core/UIComponent",
    "demofioriapp/model/models",
    "sap/ui/Device"
],
    function (UIComponent, models, Device) {
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
            getContentDestityClass: function() {
                if(!this._sContentDestityClass)
                    this._sContentDestityClass = !Device.support.touch ? "sapUiSizeCompact" : "sapUiSizeCozy";
                return this._sContentDestityClass;
            }
        });
    }
);