var arr = [9, 4, 6, 4, 0, 21, 34,1, 21, 56, -5, 0]

/**
 * Complexity: O(n log(n))
 */
function merge(array) {

    const left = array.slice(0, array.length / 2)
    const right = array.slice(array.length / 2, array.length)

    const mergedLeft = mergeSort(left)
    const mergedRight = mergeSort(right)

    const merged = []

    while (mergedLeft.length > 0 || mergedRight.length > 0) {
        if (typeof mergedLeft[0] === 'undefined' && mergedRight[0]) {
            merged.push(mergedRight[0])
            mergedRight.splice(0, 1)
            continue
        }
        if (mergedLeft[0] && typeof mergedRight[0] === 'undefined') {
            merged.push(mergedLeft[0])
            mergedLeft.splice(0,1)
            continue
        }


        if (mergedLeft[0] < mergedRight[0]) {
            merged.push(mergedLeft[0])
            mergedLeft.splice(0,1)
        } else {
            merged.push(mergedRight[0])
            mergedRight.splice(0,1)
        }
    }
    console.log(merged)
    return merged
}

function mergeSort(arr) {
    if (arr.length === 1) return arr
    return merge(arr)
}

merge(arr)