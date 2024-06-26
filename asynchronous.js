// Asynchronous Function Assignment

// Write an asynchronous function that accepts a message string and a delay time in milliseconds. The function should log the message to the console after the specified delay time.

const message = false;
const newPromise = new Promise((resolve, reject) =>{
  if(messagedelayed){
    resolve('I will text you');
  }else{
    reject('I will call you back')
  }
})

async function loggedAfterDelay(message, delay){
    try{
        console.log('message sent successful');
        await milliseconds;
    }
    catch{
        console.log('message logged after delay')
    }
}


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

async function getUserData(id){
    const data = await fetch();
    if(data){
        resolve('correct data');
    }else{
        reject('not correct data')
    }
}

// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

const task = false;
const Promise = new Promise ((resolve, reject)=>{
    if ('task'){
        resolve('task successful')
    }else{
        reject('task not successful')
    }  
})

async function performTask(){
    try{
        console.log('task successful');
    }
    catch{
        console.log('task not successful')
    }
}
getPerformTask();





// Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.

function unstableTask(taskName,failureProbability){
    return newPromise((resolve,reject)=>{
        if(number > failureProbability){
            resolve('sucessful')
        }else{
            if(number<= failureProbability){
                reject('not successful')
            }
        }
    })
}

async function executeWithRetry(taskName, retries, failureProbability){
    try{
        console.log('attempt unstableTask upto seven times')
        await newPromise;
    }
    catch{
        console.log('unstableTask unsuccessful')
    }
}
unstableTask();