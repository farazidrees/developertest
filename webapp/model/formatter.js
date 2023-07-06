sap.ui.define([
	"sap/ui/core/format/DateFormat"
], function (DateFormat) {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function (sValue) {
			if (!sValue) {
				return "";
			}
			return (sValue); //Insert zcustomize
			// return parseFloat(sValue).toFixed(2); //Commented zcustomize
		},

		//Begin Insert zcustomize
		concatNames: function (employee) {
			return employee.FirstName + ' ' + employee.LastName;
		},

		formatOrderDate: function (datetime) {
			if (datetime) {
				var oDateFormat = DateFormat.getInstance({ pattern: "dd/MM/yyyy" });
				return oDateFormat.format(datetime);
			}
			return "";
		},

		discountState: function(value) {
			if (value > 0) {
				return "Warning";
			} 
		}
		//End Insert zcustomize
	};

}
);