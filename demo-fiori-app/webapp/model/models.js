sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            // Create oData model
            createODataModel: function () {
                // My oModel
                var oData = {
                    recipient: {
                        name: "UI5" 
                    }
                };
                var oModel = new JSONModel(oData);
                return oModel;
            },
            createDeviceModel: function() {
                var deviceModel = new JSONModel(Device);
                deviceModel.setDefaultBindingMode("OneWay");
                return deviceModel;
            }
        };
    }
);