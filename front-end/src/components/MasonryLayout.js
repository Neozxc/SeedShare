import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

const MasonryLayout = ({ pins }) => {

  const breakpointObj = {
    default: 4,
    // on x px show y images
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1
  }

  return (
    <div>
      <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj} />
      {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
    </div>
  )
}

export default MasonryLayout