import React, { Component } from 'react';
import styled from 'styled-components';

const GalleryBox = styled.section`
  width: 100%;
  margin: 0;
  padding: 16px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 14px;
  margin: 0;
  width: 100%;
`;

const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const PhotoBox = styled.div`
  height: 150px;
  width: 150px;
  display: inline-block;
  
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`;

class Gallery extends Component {
  state = {
    photos: [
      'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg',
      'https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg',
      'https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg',
      'https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg',
      'http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg',
      'http://mirpozitiva.ru/uploads/posts/2016-09/medium/1474011210_15.jpg',
      'https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/17/foto.jpg',
      'https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-1.jpg',
      'https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-1.jpg',
    ],
  };

  render() {
    const { photos } = this.state;

    return (
      <GalleryBox>
        <SectionTitle>Галерея</SectionTitle>
        <GalleryContainer>
          {photos.slice(0, 4).map(photo => (
            <PhotoBox>
              <img src={photo} />
            </PhotoBox>
          ))}
        </GalleryContainer>
      </GalleryBox>
    );
  }
}

export default Gallery;
