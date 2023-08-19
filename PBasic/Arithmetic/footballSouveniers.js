function solve(input) {

    let team = input.shift();
    let souvenier = input.shift();
    let count = Number(input.shift());
    let price = 0;
    let isTeamDifferent = false;
    let isSouvenierDifferent = false;

    if (team === "Agentina") {
        if (souvenier === "flags") {
            price = 3.25;
        } else if (souvenier === "caps") {
            price = 7.20;
        } else if (souvenier === "posters") {
            price = 5.10;
        } else if (souvenier === "stickers") {
            price = 1.25;
        } else {
            isSouvenierDifferent = true;
        }
    }
    if (team === "Brazil") {
        if (souvenier === "flags") {
            price = 4.20;
        } else if (souvenier === "caps") {
            price = 8.50;
        } else if (souvenier === "posters") {
            price = 5.35;
        } else if (souvenier === "stickers") {
            price = 1.20;
        } else {
            isSouvenierDifferent = true;
        }
    }
    if (team === "Croatia") {
        if (souvenier === "flags") {
            price = 2.75;
        } else if (souvenier === "caps") {
            price = 6.90;
        } else if (souvenier === "posters") {
            price = 4.95;
        } else if (souvenier === "stickers") {
            price = 1.10;

        } else {
            isSouvenierDifferent = true;
        }
    }
    if (team === "Denmark") {
        if (souvenier === "flags") {
            price = 3.10;
        } else if (souvenier === "caps") {
            price = 6.50;
        } else if (souvenier === "posters") {
            price = 4.80;
        } else if (souvenier === "stickers") {
            price = 0.90;
        } else {
            isSouvenierDifferent = true;
        }

    } else {
        isTeamDifferent = true;
    }


} if (isTeamDifferent) {
    console.log("Invalid country!");
} else if (isSouvenierDifferent) {
    console.log("Invalid stock!");
}
else {
    let result = count * price;
    console.log(`Pepi bought ${count} ${souvenier} of ${team} for ${result.toFixed(2)} lv.`);
}



solve(["Brazil", "stickers", 5])