import React from "react";
import "./Story.css";
import mainImage from "../../Images/ThirdPageMain.jpg";
const Story = () => {
  return (
    <div className="story">
      <header>Story of VIKASZ</header>
      <div>
        <div>
          <p>
            Witnessing the current times, we can come to this conclusion that
            online education is everywhere. There are numerous options for
            online training. We being a responsible entity realize that it has
            become significant for the careerists to know about the right place
            that will help them achieve their dreams, to feel the exhilaration
            of victory!
          </p>
          <p>
            We founded VIKASZ, in 2022. This aims to train students to make them
            industry-ready. He believes that to savour each aspirant of the
            country with the taste of good mentorship, it’s necessary to bridge
            the gap between technology and education.
          </p>
          <p>
            We founded VIKASZ, in 2022. This aims to train students to make them
            industry-ready. He believes that to savour each aspirant of the
            country with the taste of good mentorship, it’s necessary to bridge
            the gap between technology and education.
          </p>
        </div>
        <img src={mainImage} className="storyIamge" />
        {/* <img src="https://cmsbackend.verzeo.com/assets/upload/file-0-1626951488018.png"></img> */}
      </div>
    </div>
  );
};

export default Story;
