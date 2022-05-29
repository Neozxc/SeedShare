// Fetch sanity data from specific file
export const userQuery = (userId) => {
    // Try to get me document of type equal to user and under score id is equal to user id
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}

export const searchQuery = (searchTerm) => {
    // GROQ lang stuff / from sanity docs / similar to graphql but easier
    const query = `*[_type == 'pin' && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`;

    return query;
};

export const feedQuery = `*[_type == 'pin'] | order(_createAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        image
    },
    save[] {
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`;