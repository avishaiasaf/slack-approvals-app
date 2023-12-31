const getUserEmailByID = async (userId, client) => {
    try {
        // Call the users.info method using the WebClient
        const result = await client.users.info({
            user: userId,
        });

        return result.user.profile.email;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getUserEmailByID;
