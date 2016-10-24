"use strict";angular.module("somenoteApp",["ngCookies","ui.router","ngCookies"]).constant("server","http://www.somenote.cn:1510").controller("app",["$scope","$http","server",function(a,b,c){}]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("denglu",{url:"/denglu",templateUrl:"views/denglu.html",controller:"dl"}).state("zhuce",{url:"/zhuce",templateUrl:"views/zhuce.html",controller:"zc"}).state("sy",{url:"/sy",templateUrl:"views/sy.html"}),b.when("","/denglu")}]),angular.module("somenoteApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("somenoteApp").controller("dl",["$scope","$http","server","$state","$cookies","$cookieStore",function(a,b,c,d,e,f){e.get("usernam",a.updata)&&d.go("sy"),a.dl=function(){b({method:"post",url:c+"/users/login",data:a.updata}).success(function(b){if(d.go("sy"),1==a.abc){f.put("usernam",a.updata);var c=new Date;c.setDate(c.getDate()+6),e.put("usernam",a.updata,{expires:c})}})}}]),angular.module("somenoteApp").controller("zc",["$scope","$http","server","$state",function(a,b,c,d){a.add=function(){b({method:"post",url:c+"/users",data:a.updata}).success(function(a){d.go("denglu")})}}]),angular.module("somenoteApp").run(["$templateCache",function(a){a.put("views/denglu.html",'<div class="login"> <div class="message">日记本</div> <div id="darkbannerwrap"></div> <form role="form"> <input name="action" value="login" type="hidden"> <div class="form-group"> <label for="exampleInputEmail1">用户名:</label> <input ng-model="updata.username" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email"> </div> <hr class="hr15"> <div class="form-group"> <label for="exampleInputPassword1">密码：</label> <input ng-model="updata.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div> <hr class="hr15"> <input ng-model="abc" ng-checked="abc" style="display: block" type="checkbox"> <a style="display: block;float:left;margin-bottom: 20px;color:#000000">七天免登陆</a>{{abc}} <button ng-click="dl()" style="width: 100%;margin-bottom: 4px; background: #f8dbb6;border: 0px" type="submit" class="btn btn-info">登陆</button> <button ui-sref="zhuce" style="width: 100%;background: #f8dbb6;border: 0px" type="button" class="btn btn-info">注册</button> </form> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/sy.html",'<nav class="navbar navbar-default" role="navigation"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Brand</a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav"> <li class="active"><a>Link</a></li> <li class="active"><a>btn</a></li> </ul> <form class="navbar-form navbar-left" role="search"> <div class="form-group"> <input type="text" class="form-control" placeholder="Search"> </div> <button type="submit" class="btn btn-default">Submit</button> </form> </div><!-- /.navbar-collapse --> </div><!-- /.container-fluid --> </nav>'),a.put("views/zhuce.html",'<div class="login"> <div class="message">注册</div> <div id="darkbannerwrap"></div> <form role="form"> <input name="action" value="login" type="hidden"> <div class="form-group"> <label for="exampleInputEmail1">User Name:</label> <input ng-model="updata.username" type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter email"> </div> <hr class="hr15"> <div class="form-group"> <label for="exampleInputPassword1">Password</label> <input ng-model="updata.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> </div> <hr class="hr15"> <button ng-click="add()" style="width: 100%;background: #f8dbb6;border: 0px" type="button" class="btn btn-info">注册</button> <!--<hr class="hr20">\r\n		 <a onClick="alert(\'请联系管理员\')">忘记密码</a>--> </form> </div>')}]);