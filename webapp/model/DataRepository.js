sap.ui.define([
  "sap/ui/base/Object",
  "sap/ui/model/json/JSONModel",
  "./UserService",
  "in/sijas/restwithui5/utils/config"
], function (
  baseObject,
  JSONModel,
  UserService,
  config
) {
  "use strict";
  var commonAPIs = {
    baseData: {
      users: []
    },
    /**
     * @override
     * @returns {sap.ui.base.Object}
     */
    constructor: function (oComp) {
      this.oComp = oComp;
      var oModel = new JSONModel(jQuery.extend(true, {}, this.baseData));
      this.oComp.setModel(oModel);
    },
    getDataModel : function(){
      return this.oComp.getModel();
    }
  },
    oFinalService = jQuery.extend(true, commonAPIs, UserService, config),
    oService = baseObject.extend("in.sijas.restwithui5.model.DataRepository", oFinalService)
  return oService;
});