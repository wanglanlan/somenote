


angular.module('denglApp').controller("cen",['$scope','$http','server','$cookies','$cookieStore','$state',function ($scope,$http,server,$cookies,$cookieStore,$state) {
	if($cookies.get('username',$scope.updata)){
		$state.go('c')
	}
   $scope.fn=function(){
   	//alert()
			$http({
			url:server+"/users/login",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$cookieStore.put("uid",e.uid)

			$state.go('c')
			if($scope.check==true){
				//$cookieStore.put("usernam",$scope.updata);
				$cookies.put('username', $scope.updata)
				var expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 6);
				// Setting a cookie
				$cookies.put('username', $scope.updata.username, {'expires': expireDate});	
				
	  }
		
		})
	}
}]).controller("can",['$scope','$http','server','$state',function ($scope,$http,server,$state) {
	$scope.fn1=function(){
		$http({
			url:server+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			//debugger
			$state.go("a")
		})
	}
}]).controller("cmn",['$scope','$http','$state','$stateParams','server','$cookieStore',function ($scope,$http,$state,$stateParams,server,$cookieStore) {
		var qwe=$cookieStore.get('uid')
	 $scope.updata={"uid":qwe}

		$http({
			url:server+"/item",
			method:"GET",
		}).success(function(e){
			$scope.data=e
		})
	$scope.add=function(){
		
			$http({ 
			url:server+"/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$scope.data.push($scope.updata)
			$state.go("c")
		})
	}
	 $scope.del=function(e){
		$http({
			url:server+"/item/"+e.id,
			method:"DELETE",
		}).success(function(){
            $scope.data.splice($scope.data.indexOf(e),1)
		})
	}
    $scope.eddata=$stateParams
		$scope.save=function(){
			$http({ 
			url:server+"/item/"+$scope.eddata.id,
			method:"PUT",
			data:$scope.eddata
		}).success(function(){
			debugger;
			$state.go("c")
		})
	}	
	 $scope.removeCookieinfo=function(){
    	  $cookieStore.remove('user');
		  $state.go('about')

    }

	
	
	var num=0;
	$http({
		url:server+"/item",
		method:"GET",
		params:{"$skip":num,"$limit":10,"uid":$cookieStore.get('uid')
}
	}).success(function(e){
		$scope.data=e
	});

	
	$scope.next = function() {
		num += 10;
		$http({
			url: server+"/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid":$cookieStore.get('uid')

				
			}
			
		}).success(function(e) {
			$scope.data = e
		})
	}
	$scope.shang = function() {
		num -= 10;
		$http({
			url: server+"/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid":$cookieStore.get('uid')

				
			}
		}).success(function(e) {
			$scope.data = e
		})
	}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}])