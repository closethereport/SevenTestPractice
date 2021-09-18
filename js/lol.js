require([
    'dojo/_base/declare',
    'dgrid/Grid',
    'dgrid/Keyboard',
    'dgrid/Selection',
    'dojo/domReady!'
], function (declare, Grid, Keyboard, Selection) {
        var data = [
            { first: 'Эмиль', last: 'Григорьев', age: "65", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Гракович', age: "42", gender: '' },
            { first: 'Эмиль', last: 'Киричук', age: "15", gender: 'Мужской' },
            { first: 'Эмиль', last: '', age: "13", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Панин', age: "51", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Бруссер', age: "80", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Герасимов', age: "4", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Петров', age: "", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Никитин', age: "31", gender: 'Мужской' },
            { first: 'Эмиль', last: 'Кайль', age: "24", gender: 'Мужской' },
        ];
 
        // Create a new constructor by mixing in the components
        var CustomGrid = declare([ Grid, Keyboard, Selection ]);
 
        // Now, create an instance of our custom grid which
        // have the features we added!
        var grid = new CustomGrid({
            columns: {
                first: 'Имя',
                last: 'Фамилия',
                age: 'Возраст',
                gender: 'Пол'
            },
            // for Selection; only select a single row at a time
            selectionMode: 'single',
            cellNavigation: false
        }, 'grid');
        
        grid.renderArray(data);
        var css = 'tr td, tr th {min-width: 15px !important;max-width: 15px !important;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
        } else {
        style.appendChild(document.createTextNode(css));
        }
});



