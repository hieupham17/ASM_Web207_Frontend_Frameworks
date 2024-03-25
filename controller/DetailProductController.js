window.DetailProductController = function($scope, $http, $routeParams){
    $scope.title = "Chi tiết chuyến bay";
    //lấy ra id
    var id = $routeParams.id;//link api
    const api = "http://localhost:3000/VeMayBay";
    
    $http.get(`${api}/${id}`).then(function(response){
        $scope.product = { // data chọc vào db
            id: response.data.id,
            ten: response.data.ten,
            anh: response.data.anh,
            ngayBatDau: new Date(response.data.ngay_bat_dau),
            ngayKetThuc: new Date(response.data.ngay_ket_thuc),
            giaTien: response.data.gia_tien,
        }
    })
}