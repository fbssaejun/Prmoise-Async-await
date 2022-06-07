// Task 1: Translate the story into code.

/*
Story :

My friend Kayo promises to make a cake for my birthday in two weeks.

If everything goes well and Kayo doesn't get sick, we'll have a certain number of cakes. (Cakes are a countable in this tutorial 😆). Otherwise, if Kayo gets sick, we'll have no cakes.

Either way, we're still going to have a party.

*/

const enterNumber = () => {
	return new Promise((resolve, reject) => {
  	const userNumber = Number(window.prompt("Enter a number (1-6) :"));
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    if (isNaN(userNumber)) {
    	reject(new Error("Wrong input type"))
    }

    if(userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber
    	});
    } else if (
    	userNumber === randomNumber + 1 ||
      userNumber === randomNumber - 1
    ) {
    	resolve({
        points: 1,
        randomNumber
    	});
    } else {
    	resolve({
        points: 0,
        randomNumber
    	});
    }
  })
}

const continueGame = () => {
	return new Promise((resolve, reject) => {
  	if (window.confirm("Do you want to continue?")) {
    	resolve(true)
    } else {
    	resolve(false)
    }
  })
}

const handleGuessPromise = () => {
  enterNumber()
  .then((result) => {
    alert(`Dice ${result.randomNumber}: you got ${result.points} points`)

    continueGame().then((result) => {
      if(result) {
        handleGuess()
      } else {
        alert("Game over")
      }
    })
  })
  .catch(error => alert(error));
}




const start = () => {
	handleGuess();
}

// Start the game in browser window
start();
