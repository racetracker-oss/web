import Card from "./Card";


const Info = () => {
  return (
    <>
      <div className='bg-neutral-200 pb-10'>
        <h2 className='font-semibold text-center text-lg py-10 px-5 md:text-3xl md:pt-10 lg:px-72'>Experience the thrill of live bike race events like never before! Our app combines real-time tracking with seamless browsing and filtering of racers.</h2>
        <div className="flex gap-5 flex-col lg:flex-row justify-evenly items-center px-5">
          <Card
            image="https://images.unsplash.com/photo-1628440167042-197d8eb88929?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Track the events real time!"
            paragraph="Get real-time GPS updates on all riders, including their position, speed, breakaways, sprints, and climbs. Discover new teams and riders, and access statistics for races."
            link="tracker"
          />
          <Card
            image="https://plus.unsplash.com/premium_photo-1663013202808-618f17b19d95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Browse the participants"
            paragraph="Want to follow specific riders? Use our intuitive web interface to browse through the race participants. Filter by category, team, or even location to find your favorites."
            link="participants"
          />
          <Card
            image="https://www.gizchina.com/wp-content/uploads/images/2023/06/Android-vs-ios.jpg"
            title="Download the App!"
            paragraph="As a racer, simply scan QR codes at checkpoints during the race. Our Android and iOS apps will keep your friends, family, and fellow enthusiasts updated on your position in real time."
            link=""
          />
        </div>
      </div>
    </>
  );
};

export default Info;