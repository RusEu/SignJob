var app = angular.module('app');
app.expandMainController = function($scope,$locale,$timeout,datepickerPopupConfig){

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    $scope.open = function($event) {
      $scope.status.opened = true;
    };

    $scope.status = {
      opened: false
    };

    var locales = {
      es: {
        "DATETIME_FORMATS": {
          "AMPMS": [
            "a. m.",
            "p. m."
          ],
          "DAY": [
            "domingo",
            "lunes",
            "martes",
            "mi\u00e9rcoles",
            "jueves",
            "viernes",
            "s\u00e1bado"
          ],
          "ERANAMES": [
            "antes de Cristo",
            "despu\u00e9s de Cristo"
          ],
          "ERAS": [
            "a. C.",
            "d. C."
          ],
          "FIRSTDAYOFWEEK": 0,
          "MONTH": [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre"
          ],
          "SHORTDAY": [
            "dom.",
            "lun.",
            "mar.",
            "mi\u00e9.",
            "jue.",
            "vie.",
            "s\u00e1b."
          ],
          "SHORTMONTH": [
            "ene.",
            "feb.",
            "mar.",
            "abr.",
            "may.",
            "jun.",
            "jul.",
            "ago.",
            "sept.",
            "oct.",
            "nov.",
            "dic."
          ],
          "WEEKENDRANGE": [
            5,
            6
          ],
          "fullDate": "EEEE, d 'de' MMMM 'de' y",
          "longDate": "d 'de' MMMM 'de' y",
          "medium": "d MMM y H:mm:ss",
          "mediumDate": "d MMM y",
          "mediumTime": "H:mm:ss",
          "short": "d/M/yy H:mm",
          "shortDate": "d/M/yy",
          "shortTime": "H:mm"
        },
        "NUMBER_FORMATS": {
          "CURRENCY_SYM": "\u20ac",
          "DECIMAL_SEP": ",",
          "GROUP_SEP": ".",
          "PATTERNS": [
            {
              "gSize": 3,
              "lgSize": 3,
              "maxFrac": 3,
              "minFrac": 0,
              "minInt": 1,
              "negPre": "-",
              "negSuf": "",
              "posPre": "",
              "posSuf": ""
            },
            {
              "gSize": 3,
              "lgSize": 3,
              "maxFrac": 2,
              "minFrac": 2,
              "minInt": 1,
              "negPre": "-",
              "negSuf": "\u00a0\u00a4",
              "posPre": "",
              "posSuf": "\u00a0\u00a4"
            }
          ]
        },
        "id": "es-es",
        "pluralCat": function (n) {
          if (n >= 0 && n <= 2 && n != 2) {
            return PLURAL_CATEGORY.ONE;
          }
          return PLURAL_CATEGORY.OTHER;
        }
      },
      en: {
        "DATETIME_FORMATS": {
          "AMPMS": [
            "AM",
            "PM"
          ],
          "DAY": [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "MONTH": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          "SHORTDAY": [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          "SHORTMONTH": [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          "fullDate": "EEEE, MMMM d, y",
          "longDate": "MMMM d, y",
          "medium": "MMM d, y h:mm:ss a",
          "mediumDate": "MMM d, y",
          "mediumTime": "h:mm:ss a",
          "short": "M/d/yy h:mm a",
          "shortDate": "M/d/yy",
          "shortTime": "h:mm a"
        },
        "NUMBER_FORMATS": {
          "CURRENCY_SYM": "$",
          "DECIMAL_SEP": ".",
          "GROUP_SEP": ",",
          "PATTERNS": [
            {
              "gSize": 3,
              "lgSize": 3,
              "macFrac": 0,
              "maxFrac": 3,
              "minFrac": 0,
              "minInt": 1,
              "negPre": "-",
              "negSuf": "",
              "posPre": "",
              "posSuf": ""
            },
            {
              "gSize": 3,
              "lgSize": 3,
              "macFrac": 0,
              "maxFrac": 2,
              "minFrac": 2,
              "minInt": 1,
              "negPre": "(\u00a4",
              "negSuf": ")",
              "posPre": "\u00a4",
              "posSuf": ""
            }
          ]
        },
        "id": "en-us",
        "pluralCat": function (n) {
          if (n == 1) {
            return PLURAL_CATEGORY.ONE;
          }
          return PLURAL_CATEGORY.OTHER;
        }
      }};
        // today
    $scope.dt = new Date();
    $scope.language = 'en';
    angular.copy(locales[$scope.language], $locale);

    // locale change
    $scope.setLang = function (lang) {
      $scope.language = lang;
      
      if ($scope.language == "es") {
        datepickerPopupConfig.currentText = 'Hoy';
        datepickerPopupConfig.clearText = 'Limpiar';
        datepickerPopupConfig.closeText = 'Cancelar';
        $scope.name_worker = "Anade trabajador"
        $scope.name_date = "Fecha";
        $scope.name_place = "Sitio";
        $scope.name_time = "Tiempo";
        $scope.name_job = "Trabajo hecho";
        $scope.name_form = "Formulario";
        $scope.name_signature = "Firma";
        $scope.name_workers = "Trabajadores";
        $scope.name_clear = "Limpiar";
        $scope.name_submit = "Enviar";
        $scope.period = 10
        $scope.periods = ["Dias","Horas"]
        $scope.workers_list = []
        $scope.worker = "trabajador";
        $scope.worker_name = "trabajador";
        $scope.place = "Escribe aqui";
        $scope.job = "Escribe aqui";
      }
      if ($scope.language == "en") {
        datepickerPopupConfig.currentText = 'Today';
        datepickerPopupConfig.clearText = 'Clear';
        datepickerPopupConfig.closeText = 'Cancel';
        $scope.name_worker = "Add worker"
        $scope.name_date = "Date";
        $scope.name_place = "Place";
        $scope.name_time = "Time";
        $scope.name_job = "Job done";
        $scope.name_form = "Fill form";
        $scope.name_signature = "Signature";
        $scope.name_workers = "Workers";
        $scope.name_clear = "Clear";
        $scope.name_submit = "Submit";
        $scope.period = 10
        $scope.periods = ["Days","Hours"]
        $scope.workers_list = []
        $scope.worker = "worker";
        $scope.worker_name = "worker";
        $scope.place = "Write here";
        $scope.job = "Write here";
      }
      $scope.dt = new Date();
      // changes $locale
      console.log($scope.dt=new Date($scope.dt.getTime()));
      angular.copy(locales[lang], $locale);
      // changes dt to apply the $locale changes
      $scope.dt=new Date($scope.dt.getTime());
    };
}