
/* This file has to loaded before app.js */

window.config = window.config || {};

window.config.defaultLanguage = 'es';

window.config.api = {

	"urls" : {
        "getPages"              : "admin/api/pages",
        "sendContact"          	: "admin/api/contact",
        "getTranslations"		: "admin/api/translations",
        "missingTranslation"	: "admin/api/translation"
	}

}