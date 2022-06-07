// Task 2: Translate the story into code.

/*
Story :

My friend Kayo promises to make a cake for my birthday in two weeks.

If everything goes well and Kayo doesn't get sick, we'll have a certain number of cakes. (Cakes are a countable in this tutorial 😆). Otherwise, if Kayo gets sick, we'll have no cakes.

Either way, we're still going to have a party.

*/

const kayosPromise = (isSick) => {
  return new Promise((resolve, reject) => {
    if (isSick) {
      resolve(1)
    } else {
      reject(0)
    }
  }).then(res => {
    console.log(`Kayo showed up to the party with ${res} cake!`)
  }).catch(err => {
    console.log(`Kayo is sick, there will be ${err} cake at this party`)
  })
}

kayosPromise(true); // => "Kayo showed up to the party with 1 cake!"
kayosPromise(false); // => "Kayo is sick, there will be 0 cake at this party"
