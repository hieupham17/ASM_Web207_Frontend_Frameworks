window.AddProductController = function ($scope, $http, $location) {
    $scope.title = "Thêm vé"
    $scope.add = function () {
        //api
        const api = "http://localhost:3000/VeMayBay";
        var userConfirmed = window.confirm("Bạn có chắc chắn muốn thêm vé?");
        
        //check
        if (!userConfirmed) {
            return; // Nếu người dùng không xác nhận, dừng lại và không thêm vé.
        }
         // Kiểm tra xem form có dữ liệu hay không
         if (!$scope.product || !$scope.product.ten || !$scope.product.anh || !$scope.product.ngay_bat_dau || !$scope.product.ngay_ket_thuc || !$scope.product.gia_tien) {
             alert("Vui lòng nhập đầy đủ thông tin trong form");
           
            return;
        }
        //tạo một đối tượng vé data pull từ form
        var newObject = {
            ten: $scope.product.ten,
            anh: $scope.product.anh,
            ngay_bat_dau: $scope.product.ngay_bat_dau,
            ngay_ket_thuc: $scope.product.ngay_ket_thuc,
            gia_tien: $scope.product.gia_tien,
        }
        $http.post(api, newObject).then(function (response) { 
            //kiểm tra trạng thái 
            // 200 thực hiện truy xuất data
            //201 thực hiện thêm mới 
            if (response.status == 201) {
                $scope.VeMayBay = response.data;
                $location.path("/list-product") //sau khi thêm data chuyển hướng đến trang chủ 

            }
        })
        console.log(newObject);
    }
}