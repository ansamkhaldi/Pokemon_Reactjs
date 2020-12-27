import React from 'react';
import Image from '../Component/HomeComponent/Image';
import TextHome from '../Component/HomeComponent/TextHome';

function Home(props) {
  // var data = 'All our room types are including complementary breakfast';
  return (
    <div className="homePage">
      <TextHome />
      <Image />
    </div>
  );
}

export default Home;
