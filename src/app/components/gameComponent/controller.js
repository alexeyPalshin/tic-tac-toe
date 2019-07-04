module.exports = ['$scope', 'BoardService', function ($scope, BoardService) {
    'ngInject';

    let turnColors = ['yellow', 'green'];
    let player = true;

    $scope.board = BoardService.createBoard();

    $scope.$watch('board', function (newValue, oldValue, scope) {

    }, true);

    $scope.changeStatus = (col) => {
        player = !player;
        col.checked = true;
        col.player = player ? 1 : 0;
        col.style = {'background-color': turnColors[col.player]}
    };
}];