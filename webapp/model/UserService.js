sap.ui.define([
], function(
) {
	"use strict";

	return {
      readUsers: function(){
        jQuery.get({
          url : this._baseURL+ '/users',
          headers : {
            Authorization : 'Bearer '+this._accessToken
          },
          success : function(aUsers){
            var oModel = this.getDataModel();
            oModel.setProperty("/users",aUsers);
          }.bind(this)
        })
      },
      readSingleUser : function(sUserId){},
      deleteUser : function(sUserId){},
      updateUser : function(sUserId){},
      createUser : function(oData){}
  };
});