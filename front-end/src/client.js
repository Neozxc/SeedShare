// Sanity client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: 'ib2sfeub',
    dataset: 'production',
    apiVersion: '2022-05-29',
    // Show more quickly images for people around the world
    useCdn: true,
    token: "sk7uonGCFLCZAy2LIy7eqoXiwi3oUq1bCeYDLce8hn7g8KJMyOhg3MzM9jmIuyfvD8K9s2QfLchYsdlAgAP8iMe7oMXRvcYoXkZj0vndUc8ZpsJUQXaCeB3iWZ45OYI0rXJoT0CJUTeIkmnQG2AUVc4U3liBzEVN6X5mGVPsD8oEcNP7OrWP"
});

// Make builder for our images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);