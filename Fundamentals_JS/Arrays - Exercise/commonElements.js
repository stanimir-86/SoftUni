function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let wordFromFirstArr = firstArr[i];

        for (let j = 0; j < secondArr.length; j++) {
            let wordFromSecondArr = secondArr[j];
            if (wordFromFirstArr === wordFromSecondArr) {
                console.log(wordFromFirstArr)
            }
        }
    }


}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);