document.querySelector("#btn").onclick = () => {
    function removeMatchChar(list1, list2) {
        for (let i = 0; i < list1.length; i++) {
            for (let j = 0; j < list2.length; j++) {
                if (list1[i] === list2[j]) {
                    const c = list1[i];
                    list1.splice(i, 1);
                    list2.splice(j, 1);
                    const list3 = list1.concat(["*"], list2);
                    return [list3, true];
                }
            }
        }
        const list3 = list1.concat(["*"], list2);
        return [list3, false];
    }

    function main() {
        let p1 = document.querySelector("#player1").value;
        p1 = p1.toLowerCase().replace(/\s+/g, '');
        let p1List = p1.split('');

        let p2 = document.querySelector("#player2").value;
        p2 = p2.toLowerCase().replace(/\s+/g, '');
        let p2List = p2.split('');

        let proceed = true;
        while (proceed) {
            const retList = removeMatchChar(p1List, p2List);
            const conList = retList[0];
            proceed = retList[1];
            const starIndex = conList.indexOf("*");
            p1List = conList.slice(0, starIndex);
            p2List = conList.slice(starIndex + 1);
        }

        const count = p1List.length + p2List.length;
        let result = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];

        while (result.length > 1) {
            const splitIndex = (count % result.length) - 1;
            if (splitIndex >= 0) {
                const right = result.slice(splitIndex + 1);
                const left = result.slice(0, splitIndex);
                result = right.concat(left);
            } else {
                result = result.slice(0, result.length - 1);
            }
        }

        document.querySelector("#result").textContent =  result[0];
    }

    main();
};
