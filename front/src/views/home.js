import React from 'react';
import LandAppoint from '../components/landinghome/landappoint';
import LandAbout from '../components/landinghome/landabout';
import LandBarbers from '../components/landinghome/landbarbers';
import LandComments from '../components/landinghome/landcomments';


function Home() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <LandAppoint />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandAbout />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandBarbers />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <LandComments />
        </div>
      </div>
    </>
  );
}

export default Home;