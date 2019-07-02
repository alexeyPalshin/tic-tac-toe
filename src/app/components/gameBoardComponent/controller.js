module.exports = ['$scope', function ($scope) {
    'ngInject';

    const DIMENSION = 3;

    $scope.createBoard = () => {
        let board = [];
        for (let row = 0; row < DIMENSION; row++) {
            board[row] = [];
            for (let col = 0; col < DIMENSION; col++) {
                board[row][col] = null;
            }
        }

        return board;
    };

    $scope.board = $scope.createBoard();

}];