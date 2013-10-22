var app = angular.module("money", [])

function Main($scope){
  $scope.one = 3;
  $scope.five = 0;
  $scope.ten = 0;
  $scope.twenty = 20;
  $scope.fifty = 3;
  $scope.hundred = 5;
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


  $scope.data.hundred = 0;
  $scope.data.fifties = 0;
  $scope.data.twenties = 0;
  $scope.data.tens = 0;
  $scope.data.fives = 0;
  $scope.data.singles = 0;

  $scope.calc = function(){
    cashout = $scope.data.cashout;
    $scope.data.hundred = 0;
    $scope.data.fifties = 0;
    $scope.data.twenties = 0;
    $scope.data.tens = 0;
    $scope.data.fives = 0;
    $scope.data.singles = 0;
    c1 = $scope.one;
    c5 = $scope.five;
    c10 = $scope.ten;
    c20 = $scope.twenty;
    c50 = $scope.fifty;
    c100 = $scope.hundred;

    while (cashout >= 100 && c100 > 0){
      c100--;
      cashout = cashout - 100;
      $scope.data.hundred++;
    };
    while (cashout >= 50 && c50 > 0){
      c50--;
      cashout = cashout - 50;
      $scope.data.fifties++;
    };
    while (cashout >= 20 && c20 > 0){
      c20--;
      cashout = cashout - 20;
      $scope.data.twenties++;
    };
    while (cashout >= 10 && c10 > 0){
      c10--;
      cashout = cashout - 10;
      $scope.data.tens++;
    };
    while (cashout >= 5 && c5 > 0){
      c5--;
      cashout = cashout - 5;
      $scope.data.fives++;
    };
    while (cashout >= 1 && c1 > 0){
      c1--;
      cashout = cashout - 1;
      $scope.data.singles++;
    };
  };
}