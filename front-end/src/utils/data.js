// Fetch sanity data from specific file
export const userQuery = (userId) => {
    // Try to get me document of type equal to user and under score id is equal to user id
    const query = `*[_type == "user" && _id == '${userId}]`;

    return query;
}