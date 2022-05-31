// Sanity client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId: `ib2sfeub`,
    dataset: 'production',
    apiVersion: '2022-05-29',
    // Show more quickly images for people around the world
    useCdn: true,
    token: `skNx1jSrPrLwtrstcCilrjTNRgLFio5w2vxMHzpgoFjMOtcJqh0hjXsiILmI4pdEsUQcydngcF8zZ1Lmp90y5eG1fUGO2a1tK0kESZI59ldgdVNrS28mjTJjMlyTtUxISt6SprhBgw3d1LcI78lbJypV92mzCeNTXxSt4rbVmXszyCEB3DHV`
});

// Make builder for our images
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);