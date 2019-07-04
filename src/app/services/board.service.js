var service_name = __filename.replace(/\\/g, '/').split('/').splice(-1)[0].split('.').map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
});
service_name.splice(-1);
service_name = service_name.join('');
angular.module('ticTacToe').service(service_name, function ($http) {
    'ngInject';

    const DIMENSION = 3;

    return {

        createBoard: () => {
            let board = [];
            for (let row = 0; row < DIMENSION; row++) {
                board[row] = [];
                for (let col = 0; col < DIMENSION; col++) {
                    board[row][col] = {
                        checked: false,
                        style: {}
                    };
                }
            }

            return board;
        },

    };
});