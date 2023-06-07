sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (
  Controller
) {
  "use strict";

  return Controller.extend("in.sijas.restwithui5.controller.Details", {
    /**
     * @override
     */
    onInit: function () {
      var DataRepository = this.getOwnerComponent().DataRepository,
        oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("Details").attachPatternMatched(this._showUserDetails.bind(this));
      oRouter.getRoute("Create").attachPatternMatched(this._createNewUser.bind(this));
      this.DataRepository = DataRepository;
    },
    _showUserDetails: function (oEvt) {
      var oParams = oEvt.getParameter("arguments"),
        sId = oParams.user_id,
        sPath = "/users/" + sId,
        oModel = this.getView().getModel(),
        oUser = oModel.getProperty(sPath);
      if (!oUser) {
        this.DataRepository.readSingleUser(sId);
      }
      this._bindView(sPath);
    },
    _createNewUser: function () {
      var oModel = this.getView().getModel(),
        oData = oModel.getProperty("/users"),
        oUser = {
          name: "",
          email: "",
          gender: "female",
          status: "inactive",
          id: "___dummy",
          isSaved : false
        },
        sPath = "/users/" + oUser.id;
      oData[oUser.id] = oUser;
      oModel.setProperty("/users",oData);
      this._bindView(sPath);
    },
    _bindView: function (sPath) {
      this.getView().bindElement(sPath);
    },
    TriggerSave : function(){
      var oContext = this.getView().getBindingContext(),
          oUser = oContext.getObject(),
          fnCallBack = function(){
            this.DataRepository.readUsers();
            window.history.back(-1);
          }.bind(this);
      if(oUser.isSaved){
        this.DataRepository.updateUser(oUser.id,oUser, fnCallBack)
      } else {
        this.DataRepository.createUser(oUser, fnCallBack)
      }
    },
    TriggerDelete : function(){
      var oContext = this.getView().getBindingContext(),
      oUser = oContext.getObject(),
      fnCallBack = function(){
        this.DataRepository.readUsers();
        window.history.back(-1);
      }.bind(this);

      this.DataRepository.deleteUser(oUser.id, fnCallBack)
    }
  });
});