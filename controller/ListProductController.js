//show data
window.ListProductController = function ($scope, $http) {
  
    //call api
    const api = "http://localhost:3000/VeMayBay";

    function getProduct() {
        $http.get(api).then(function (response) {
            if (response.status == 200) {
                $scope.VeMayBay = response.data;
                //console.log(response.data);
            }

        })
    }
    getProduct();
     //delete
  $scope.delete = function(id){
    var confirm = window.confirm("Bạn có muốn xoá không");
    if(confirm){
         $http.delete(`${api}/${id}`).then(function (response) {     
            $scope.VeMayBay = response.data;         
    })
    }
   

   }
    
}