// Sanity client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: 'ib2sfeub',
    dataset: 'production',
    apiVersion: '2022-05-29',
    // Show more quickly images for people around the world
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

// Make builder for our images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);