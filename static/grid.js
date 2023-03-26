var size = 0;
var start = null;
var end = null;
var blocked = new Set();

$(document).ready(function() {
    $('#create-grid').click(function() {
        size = $('#size').val();
        createGrid(size);
    });

    $('#grid').on('click', '.cell', function() {
        var row = $(this).data('row');
        var col = $(this).data('col');
        var cell = row + '-' + col;

        if (start == null) {
            $(this).addClass('start');
            start = cell;
        } else if (end == null) {
            $(this).addClass('end');
            end = cell;
        } else {
            $(this).addClass('blocked');
            blocked.add(cell);
        }
    });

    $('#set-start').click(function() {
        $('.cell').removeClass('start');
        start = null;
    });

    $('#set-end').click(function() {
        $('.cell').removeClass('end');
        end = null;
    });

    $('#set-blocked').click(function() {
        $('.cell').removeClass('blocked');
        blocked.clear();
    });

    $('#clear').click(function() {
        $('.cell').removeClass('start end blocked');
        start = null;
        end = null;
        blocked.clear();
    });
});

function createGrid(size) {
    $('#grid').empty();

    for (var i = 0; i < size; i++) {
        var row = $('<div class="row"></div>');

        for (var j = 0; j < size; j++) {
            var cell = $('<div class="cell"></div>');
            cell.data('row', i);
            cell.data('col', j);

            if (i == 0 && j == 0) {
                cell.addClass('start');
                start = '0-0';
            } else if (i == size - 1 && j == size - 1) {
                cell.addClass('end');
                end = (size - 1) + '-' + (size - 1);
            }

            row.append(cell);
        }

        $('#grid').append(row);
    }
}

