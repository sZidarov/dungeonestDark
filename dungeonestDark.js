function dungeonestDark (input){
    let inputString = input[0];
    let inputArray = inputString.split('|');
    let inputArrayLength = inputArray.length;
    let health = 100;
    let coins = 0;
    let isDead = false;
    for (let i = 0; i < inputArrayLength; i++){
        let room = inputArray[i];
        let roomContent = room.split(' ');
        switch (roomContent[0]) {
            case 'potion':
                health += Number(roomContent[1]);
                if (health>100){
                    health = 100;
                }
                console.log(`You healed for ${Number(roomContent[1])} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += Number(roomContent[1]);
                console.log(`You found ${Number(roomContent[1])} coins.`);
                break;
            default:
                health -= Number(roomContent[1]);
                if (health>0){
                    console.log(`You slayed ${roomContent[0]}.`);
                }else{
                    console.log(`You died! Killed by ${roomContent[0]}.`);
                    isDead = true;
                    if(i==0){
                        console.log(`Best room: 0`);    
                    }else{
                    console.log(`Best room: ${i+1}`);
                    }
                }
                break;
        }
            if (isDead){
                break;
            }
    }
    if (!isDead){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["potion 110"]);