const profileDataArgs = process.argv.slice(2, process.argv.length);
const printProfileData = profileDataArr => {
    // This... 
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[1]);
    }

    console.log('===============');
    
    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
