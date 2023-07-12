const getUserEmailByID = async (userId, client) => {
    try {
        // Call the users.info method using the WebClient
        const result = await client.users.info({
            user: userId,
        });

        console.log("Emails", result.user.profile.email);

        return result.user.profile.email;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getUserEmailByID;
