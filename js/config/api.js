
/* This file has to loaded before app.js */

window.config = window.config || {};

window.config.defaultLanguage = 'es';

window.config.api = {

	"urls" : {
        "getPages"              : "cms/api/pages",
        "sendContact"          	: "cms/api/contact",
        "getTranslations"		: "cms/api/translations",
        "missingTranslation"	: "cms/api/translation"
	}

}