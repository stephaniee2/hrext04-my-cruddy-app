// Your code here!
var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['input your first task', 1],
            // ['ingred2', 120],
            // ['ingred3', 100],

        ],

        type : 'donut', 
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d); },
        onmouseout: function (d, i) { console.log("onmouseout", d); },
        colors: {
        'sleep': 'pink',
        'eat': 'dodgerblue',
        'code': 'violet',
        'relax': 'grey',
        'other': 'aquamarine'
        },
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }
    },
    pie: {
        label: {
            format: function (value) {
                return d3.format(value)(' cups');
            }
        }
    }
});



// setTimeout(function () {
//     chart.load(
//         {
//         columns: [
//             ["sleep", 8],
//             ["eat", 3],
//             ["code", 7],
//             ["relax", 2],
//             ["other", 4],
//         ]
//     }
    
//     );
// }, 1500);

// chart.load(
//     {
//     columns: [
//         [data, 8],
//         ["eat", 3],
//         ["code", 7],
//         ["relax", 2],
//         ["other", 4],
//     ]
// }

// );

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
    chart.unload({
        ids: 'data2'
    });
}, 1500);