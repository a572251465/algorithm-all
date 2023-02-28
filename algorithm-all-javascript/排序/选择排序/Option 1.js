const selectionSort = (arr = []) => {
    if (arr === null || arr.length < 2) return

    for (let i = 0; i < arr.length; i++) {
        let minValueIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex
        }
        [arr[minValueIndex], arr[i]] = [arr[i], arr[minValueIndex]];
    }
}

const values = [22, 10, 2, 5, 11, 3, 2]
console.log(values.join())
selectionSort(values)
console.log(values.join())