
window.EditProductController = function ($scope, $routeParams, $http, $location) {
    $scope.title = "Cập nhật chuyến bay";

    var id = $routeParams.id;
    //link api
    const api = "http://localhost:3000/VeMayBay";
    
    $http.get(`${api}/${id}`).then(function (response) {
        $scope.product = {
            id: response.data.id,
            ten: response.data.ten,
            anh: response.data.anh,
            ngayBatDau: new Date(response.data.ngay_bat_dau),
            ngayKetThuc: new Date(response.data.ngay_ket_thuc),
            giaTien: response.data.gia_tien
        }
    })
    //update 
    $scope.update  = function(){
        //call api
        const api = "http://localhost:3000/VeMayBay";
        //khởi tạo
        var newProduct = {
            ten: $scope.product.ten,
            anh: $scope.product.anh,
            ngay_bat_dau: $scope.product.ngayBatDau,
            ngayKetThuc: $scope.product.ngayKetThuc,
            gia_tien: $scope.product.giaTien
        }
        $http.put(`${api}/${id}`, newProduct).then(function(){
            $location.path("/list-product");
        })
    }
}
