//Chuyển trang 
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    //config cấu hình trước khi khởi tạo
    $locationProvider.hashPrefix("");

    $routeProvider // mặc định không thể thay đổi
        .when("/home", {
            templateUrl: "/pages/home.html",
            // controller: "homeController",
        })
        .when("/gioi-thieu", {
            templateUrl: "/pages/gioithieu.html",
        })
        .when("/tin-tuc", {
            templateUrl: "/pages/tintuc.html",
        })
        .when("/lien-he", {
            templateUrl: "/pages/lienhe.html",
        })
        .when("/dat-ve", {
            templateUrl: "/pages/datve.html",
        })
        .when("/chi-tiet", {
            templateUrl: "/pages/detail.html",
        })
        .when("/list-product", {
            templateUrl: "/pages/ListProduct.html",

        })
        .when("/add-product", {
            templateUrl: "/pages/add-prod.html",

        })
        .otherwise({
            redirectTo: "/home",
        });
});
//hiển thị data
app.controller("homeController", function ($scope, $http) {
    // đường dẫn APi
    prod = "http://localhost:3000/ve-may-bay";
    // hiển thị dữ liệu
    $scope.list = [];
    $http.get(prod).then(function (reponse) {
        $scope.list = reponse.data;
        //log data
        console.log($scope.list);
    });

});
app.controller("addVe", function ($scope, $http, $location) {
    $scope.form = {
        "ten": "",
        "anh": "",
        "gia_tien": 0,
        "ngay_bat_dau": "",
        "ngay_ket_thuc": "",
    };


    $scope.add = function (event) {
        var confirmDelete = confirm("Bạn có chắc chắn muốn thêm vé này?");
        if (confirmDelete) {
            event.preventDefault();
            prod = "http://localhost:3000/ve-may-bay";
            $http.post(prod, $scope.form).then(function (response) {
                $scope.list.push(response.data);
                $location.path("/list-product")
            });
        }
    };
});

