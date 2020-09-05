function shuffle(array) {
    /*Implementation of the Fisher-Yates algorithm to shuffle an array, taken
     *from javascript.info
     */
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        // swap elements array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
}