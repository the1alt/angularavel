    app.controller('employeesController', function employeesController($scope, $http, API_URL) {


        var employees = $scope.employees = [];

        //retrieve employees listing from API

        $http.get(API_URL + "employees")
            .then(function(response) {
                $scope.employees = response.data;
            });
        //show modal form
        console.log($scope.employees);


        $scope.toggle = function (modalstate, id) {
            $scope.modalstate = modalstate;

            switch (modalstate) {
                case 'add':
                    $scope.form_title = "Add New Employee";
                    break;
                case 'edit':
                    $scope.form_title = "Employee Detail";
                    $scope.id = id;
                    $http.get(API_URL + 'employees/' + id)
                        .then(function (response) {
                            console.log(response);
                            $scope.employee = response;
                        });
                    break;
                default:
                    break;
            }
            console.log(id);
            $('#myModal').modal('show');
        };

        //save new record / update existing record
        $scope.save = function (modalstate, id) {
            var url = API_URL + "employees";

            //append employee id to the URL if the form is in edit mode
            if (modalstate === 'edit') {
                url += "/" + id;
            }

            $http({
                method: 'POST',
                url: url,
                data: $.param($scope.employee),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function successCallback(response) {
                console.log(response);
                location.reload();
            }, function errorCallback(response) {
                console.log(response);
                alert('This is embarassing. An error has occured. Please check the log for details');
            });
        };

        //delete record
        $scope.confirmDelete = function (id) {
            var isConfirmDelete = confirm('Are you sure you want this record?');
            if (isConfirmDelete) {
                $http({
                    method: 'DELETE',
                    url: API_URL + 'employees/' + id
                }).then(function successCallback(data) {
                    console.log(data);
                    location.reload();
                }, function errorCallback(data) {
                    console.log(data);
                    alert('Unable to delete');
                });
            } else {
                return false;
            }
        };
    });