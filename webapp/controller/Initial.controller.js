sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"in/sijas/restwithui5/model/DataRepository"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	DataRepository) {
        "use strict";

        return Controller.extend("in.sijas.restwithui5.controller.Initial", {
            onInit: function () {
                var DataRepository = this.getOwnerComponent().DataRepository;
                DataRepository.readUsers();
            }
        });
    });
