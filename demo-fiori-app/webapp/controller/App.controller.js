sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  function (BaseController) {
    "use strict";

    return BaseController.extend("demofioriapp.controller.controller.App", {
      onInit: function() {
        this.getView().addStyleClass(this.getOwnerComponent().getContentDestityClass());
      }
    });
  }
);
