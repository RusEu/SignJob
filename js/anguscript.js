
        (function(){
            var app = angular.module('app',['ui.bootstrap','ngTouch','ngLocale'])
            app.controller('MainController', ['$scope','$locale','$timeout','datepickerPopupConfig', function($scope,$locale,$timeout,datepickerPopupConfig) {
              app.expandMainController($scope,$locale,$timeout,datepickerPopupConfig);
              $scope.fillCollapse = true;
              $scope.canvasCollapse=false;
              $scope.workersCollapse=false;
              $scope.menu = function() {
                if (($scope.fillCollapse == false) && ($scope.canvasCollapse==false) && ($scope.workersCollapse == false)) {
                  $scope.fillCollapse = true;
                }
              }
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
              $scope.period = 10;
              $scope.period2 = "";
              $scope.periods = ["Days","Hours"];
              $scope.workers_list = [];
              $scope.worker = "worker";
              $scope.worker_name = "worker";
              $scope.place = "Write here";
              $scope.job = "Write here";
              $scope.deleteItem = "";

              //Get and change div height
              $scope.window_height = window.innerHeight
              var height = document.getElementById('changeHeight').style.height
              function getHeight() {
                  if ($scope.window_height < 540) {
                  document.getElementById('changeHeight').style.height = "500px";
                }
              }
              getHeight();
              $timeout(getHeight, 3000);
              //finish height change

              $scope.changePeriod = function(item){
                $scope.period2 = item;
              }
              $scope.add_worker = function(name) {
                  $scope.count = $scope.workers_list.length
                  $scope.count += 1
                  $scope.workers_list.push({
                      name: $scope.worker+ "_" + $scope.count,
                      value: name,
                  });
                  $scope.worker_name = $scope.worker + $scope.count
              }
              $scope.deleteWorker = function(item) {
                for (i=0;i<$scope.workers_list.length;i++) {
                    //console.log($scope.workers_list[i].value,item.value)
                  if ($scope.workers_list[i].value == item) {
                    $scope.workers_list.splice(i, 1);
                  }
                }
              }
            }])
        })();
