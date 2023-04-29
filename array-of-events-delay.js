/* Given an array of events, where each event is represented as an object with two properties: 
label (a string) and delay (a time to wait in ms), print to the console/terminal the label of each event 
in sequential order, with each event delayed by the specified time.

...wait 2 seconds...
a
...wait 4 seconds...
b
... wait 1.5 seconds ...
c
...wait 1 second...
d
*/

const events = [
  { label: 'a', delay: 2000 },
  { label: 'b', delay: 4000 },
  { label: 'c', delay: 1500 },
  { label: 'd', delay: 1000 },
];


const solveIncorrectly = (events) => {
  events.forEach((event) => {
    setTimeout(() => {
      console.log(event.label);
    }, event.delay);
  });
};

// solveIncorrectly(events);












const solveUsingSetTimeout = (events) => {

  const timeoutEvent = (i) => {
    // base case is when i === length of the events array
    if (i === events.length) return;
  
    // recursive step
    // we'll call setTimeout in a callback that console.logs the label, 
    // then recursively calls setTimeout
    // wait event[i].delay of time

    const currEvent = events[i];
    setTimeout(() => {
      console.log(currEvent.label);
      timeoutEvent(i + 1);
    }, currEvent.delay);
  }

  timeoutEvent(0);
}

// solveUsingSetTimeout(events);










// helper function
const promiseToExecuteEvent = (event) => {
  // we are wrapping our setTimeout in a Promise
  // no need for reject in this instance so we don't need to include it as a parameter
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(event.label);
      resolve();
    }, event.delay);
  });
}

const solveWithAsyncAwait = async (events) => {
  for (const event of events) {
    await promiseToExecuteEvent(event);
  }
}

solveWithAsyncAwait(events);




const solveUsingOnlyPromisesAndThens = (events) => {
  events.reduce((previousPromise, nextEvent) => {
    return previousPromise.then(() => {
      return promiseToExecuteEvent(nextEvent);
    })
  }, Promise.resolve());
}

// solveUsingOnlyPromisesAndThens(events);