const getTimeDiff = (created_at:any)=>{
    // Get the current time
    const now:any = new Date();

    // Get the created_at time
    created_at = new Date(created_at);

    // Calculate the time difference in milliseconds
    const timeDiff = now - created_at;

    // Convert the time difference to seconds
    const timeDiffInSeconds = Math.floor(timeDiff / 1000);

    if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} seconds`;
    } else {
        // Calculate the time difference in minutes
        const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
        
        if (timeDiffInMinutes < 60) {
            return `${timeDiffInMinutes} minutes`;
        } else if (timeDiffInMinutes >= 60 && timeDiffInMinutes < 1440) {
            const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);
            return `${timeDiffInHours} hours`;
        } else {
            const timeDiffInDays = Math.floor(timeDiffInMinutes / 1440);
            return `${timeDiffInDays} days`;
        }
    }
}

export {
    getTimeDiff
}