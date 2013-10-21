var app = angular.module("money", [])

function Main($scope){
  $scope.one = 0;
  $scope.five = 0;
  $scope.ten = 0;
  $scope.twenty = 0;
  $scope.fifty = 0;
  $scope.hundred = 0;
  $scope.startbank = 500;
  $scope.expenses = 0;

  $scope.data = {sum: 0};
  $scope.data.sales = 0;
  $scope.data.cashout = 0;

  $scope.total = function(){
    $scope.data.sum =
      $scope.one * 1 +
      $scope.five * 5 +
      $scope.ten * 10 +
      $scope.twenty * 20 +
      $scope.fifty * 50 +
      $scope.hundred * 100;
    $scope.data.sales = $scope.data.sum - $scope.startbank + $scope.expenses;
    $scope.data.cashout = Math.max(
      $scope.data.sales - $scope.expenses
      ,0);
  };

  $scope.calc = function(){
    cashout = $scope.data.cashout;
    $scope.data.hundred = Math.floor(cashout / 100);
    $scope.data.fifties = Math.floor((cashout % 100) / 50);
    $scope.data.twenties = Math.floor((cashout % 50) / 20);
    $scope.data.tens = Math.floor((cashout % 20) / 10);
    $scope.data.fives = Math.floor((cashout % 10) / 5);
    $scope.data.singles = Math.floor((cashout % 5) / 1);
  };
}