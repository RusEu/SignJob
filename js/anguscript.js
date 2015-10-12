
        (function(){
            var app = angular.module('app',['ui.bootstrap','ngTouch'])
            app.controller('MainController', ['$scope', function($scope) {

                $scope.period = 10
                $scope.workers_list = [{}]
                $scope.worker_name = "Worker"
                $scope.place = "Enter place"
                $scope.job = "Enter job"
                $scope.deleteItem = "None"
                $scope.add_worker = function(name) {
                    $scope.count = $scope.workers_list.length
                    $scope.count += 1
                    $scope.workers_list.push({
                        name: "worker_" + $scope.count,
                        value: name,
                    });
                    $scope.worker_name = "Worker" + $scope.count
                }
                $scope.deleteWorker = function(item) {
                  for (i=0;i<$scope.workers_list.length;i++) {
                      console.log($scope.workers_list[i].value,item)
                    if ($scope.workers_list[i].value == item) {
                      console.log("is working",i)
                      $scope.workers_list.splice(i, 1);
                    }
                  }
                }

            var mycanvas = document.getElementById("Mycanvas");
            var context = null;
            var x,y = 0;
            var mousePos;

            document.onmousemove = handleMouseMove;
            setInterval(getMousePosition, 100); // setInterval repeats every X ms

            function handleMouseMove(event) {
                var dot, eventDoc, doc, body, pageX, pageY;

                event = event || window.event; // IE-ism

                // If pageX/Y aren't available and clientX/Y are,
                // calculate pageX/Y - logic taken from jQuery.
                // (This is to support old IE)
                if (event.pageX == null && event.clientX != null) {
                    eventDoc = (event.target && event.target.ownerDocument) || document;
                    doc = mycanvas;
                    body = eventDoc.body;

                    event.pageX = event.clientX +
                      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                      (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = event.clientY +
                      (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                      (doc && doc.clientTop  || body && body.clientTop  || 0 );
                }

                mousePos = {
                    x: event.pageX,
                    y: event.pageY
                };
            }
            function getMousePosition() {
                var pos = mousePos;
            }
            if(mycanvas && mycanvas.getContext) {
                context = mycanvas.getContext("2d");
                // background
                context.fillStyle = "#fff";
                context.fillRect(0,0,800,600);
            }
            context.strokeStyle = "black";
            context.lineWidth = 2.0;
            context.lineCap = "round";
            context.lineJoin = "round";

                function CheckBrowser() {
                  if(navigator.userAgent.search("Firefox") > -1){
                    browser = "Firefox";
                  }
                  else {
                    browser = "other";
                  }
                }

                function CheckPosition() {
                  if (browser == "Firefox"){
                    x= evt.layerX - 50;
                    y= evt.layerY;
                  }
                  else {
                    x = evt.offsetX - 50;
                    y = evt.offsetY;
                  }
                }
            function onMouseMove(evt) {
                if(context) {
                    context.beginPath();
                    context.moveTo(x,y);
                    var pos = mousePos;
                    x= evt.layerX / 1.7;
                    y= evt.layerY / 1.7 ;
                    context.lineTo(x,y);
                    context.stroke();
                    context.closePath();
                    document.getElementById("Mycanvas").style.cursor = 'default !important';
                }
            }
            function onMouseUp(evt) {
                  mycanvas.removeEventListener("mousemove",onMouseMove,false);
            }
            mycanvas.onmousedown = function(evt) {
                mycanvas.style.cursor = 'default';
                if(evt.which == 3) return;
                var pos = mousePos;
                    x= evt.layerX / 1.7;
                    y= evt.layerY / 1.7;
                // do not register if right mouse button is pressed.
                mycanvas.addEventListener("mousemove",onMouseMove,false);
                mycanvas.addEventListener("mouseup",onMouseUp,false);
            }



                //Save the Zig
                function download() {
                  var img = mycanvas.toDataURL("image/png");
                  this.href = img;
                };
                download();
                document.getElementById('download').addEventListener('click', download, false);
                //Clear the Zig
                $scope.clearZig = function() {
                  clickX = new Array();
                  clickY = new Array();
                  clickDrag = new Array();
                  context.clearRect(0, 0, mycanvas.width, mycanvas.height);
                  console.log("Is Working")
                };
              $scope.today = function() {
                $scope.dt = new Date();
              };
              $scope.today();

              $scope.clear = function () {
                $scope.dt = null;
              };

              // Disable weekend selection
              $scope.disabled = function(date, mode) {
                return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
              };

              $scope.toggleMin = function() {
                $scope.minDate = $scope.minDate ? null : new Date();
              };
              $scope.toggleMin();
              $scope.maxDate = new Date(2020, 5, 22);

              $scope.open = function($event) {
                $scope.status.opened = true;
              };

              $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1
              };

              $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
              $scope.format = $scope.formats[0];

              $scope.status = {
                opened: false
              };

              var tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              var afterTomorrow = new Date();
              afterTomorrow.setDate(tomorrow.getDate() + 2);
              $scope.events =
                [
                  {
                    date: tomorrow,
                    status: 'full'
                  },
                  {
                    date: afterTomorrow,
                    status: 'partially'
                  }
                ];

              $scope.getDayClass = function(date, mode) {
                if (mode === 'day') {
                  var dayToCheck = new Date(date).setHours(0,0,0,0);

                  for (var i=0;i<$scope.events.length;i++){
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                      return $scope.events[i].status;
                    }
                  }
                }

                return '';
              };
            }])
        })();
