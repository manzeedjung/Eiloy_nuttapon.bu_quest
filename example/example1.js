function shiftArray(arr, position, places) {
    let calshift
    if (position == 'left') {
        calshift = arr.length - places
    }
    else {
        calshift = places
    }

    for (var i = 0; i < calshift; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr);
}
shiftArray(['john', 'jane', 'sarah', 'alex'], 'left', 2)
shiftArray([1, 2, 3, 4, 5], 'right', 3)
