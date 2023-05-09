// Write an asynchronous function that accepts a message string and 
// a delay time in milliseconds. The function should log the message 
// to the console after the specified delay time.
let getName=()=>{
    console.log("I am Diana");
}
setTimeout(getName,4000)

//2.You have an array of user IDs and a function getUserData(id) that
//returns a Promise with user data when given a user ID. Write an 
//asynchronous function that fetches and logs the data for each user
//ID one by one, in sequconst userIds = [1, 2, 3, 4, 5]; // Example array of user IDs

const userIds = [1, 2, 3, 4, 5]; 


const getUserData = async (id) => {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
     
      const userData = {
        id,
        name: `User ${id}`,
        number: `user${id}1234`,
      };
      resolve(userData);
      
    }, 1000); 
  });
};

const fetchUserData = async () => {
  for (const id of userIds) {
    const userData = await getUserData(id);
    console.log(userData);
  }
};

fetchUserData();


// 3You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's
// an error. Write a function that calls performTask() and logs a custom 
// success message if the task is successful, and a custom error message
// if there's an error.

const performTask = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = true 
        if (success) {
          resolve('Task completed successfully');
        } else {
          reject('Error occurred while performing task');
        }
      }); 
    });
  };
 
  const runTask = () => {
    performTask()
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  runTask();
  