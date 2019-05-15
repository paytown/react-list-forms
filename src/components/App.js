import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';

export default function App() {
  const photos = [
    dog1,
    dog2,
    dog3
  ];

  console.log(dog1);

  return (
    <PhotoAlbum title="There's my dogs :)" photos={photos} />
  );
}
