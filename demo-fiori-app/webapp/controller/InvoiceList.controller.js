sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "demofioriapp/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    function (Controller, JSONModel, formatter, Filter, FilterOperator) {
        'use strict';

        return Controller.extend("demofioriapp.controller.InvoiceList", {
            formatter: formatter,
            onInit: function () {
                var oViewModel = new JSONModel({
                    currency: "EUR"
                });
                this.getView().setModel(oViewModel, "list");
            },
            onFilterInvoices: function (onEvent) {
                var filter = [];
                var query = onEvent.getParameter("query");
                if (query)
                    filter.push(new Filter("ProductName", FilterOperator.Contains, query));

                var list = this.byId("invoiceList");
                var binding = list.getBinding("items");
                binding.filter(filter);
            },
            onItemClick: function (onEvent) {
                var router = this.getOwnerComponent().getRouter();
                router.navTo("details");
            }
        });
    }
);