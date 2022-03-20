import React from "react";
import "./SecondPage.css";
import r from "../../Images/HomePage-Value.png";

const SecondPage = () => {
  return (
    <section className="second-Sec">
      <header>Who we are?</header>
      <main>
        <img src="https://cmsbackend.verzeo.com/assets/upload/file-0-1626948413019.webp"></img>
        <div>
          <p>
            We help thousands of students decide their careers. We guarantee
            that VIKASZ is 'the' one-stop online Guidence platform that provides
            students with all the suggestions needed to make them
            industry-ready. We aim to deliver our mantra “Everything Learning”
            to every household that is brewing an aspiring careerist.
          </p>
          <p>
            At VIKASZ, we bridge the gap between intrests and carrer
            opportunities with our flagship Skill-Assesment(VSAT) Programs. Our
            website is for everyone ranging from Kids and Professionals to even
            Home-Makers! We aim to provide assured Guidence and Opportunities,
            thus preparing them for better career prospects!
          </p>
        </div>
      </main>
      <div className="second-bottom">
        <p>
          VIKASZ acts as a virtual pool, creating channels to unleash their
          learning potential. It provides access to programs that are
          interactive, collaborative and takes place under the guidence of
          Industry Professionals. With VIKASZ, you can seamlessly find Guidence
          and Job Opportunities.
        </p>
        <p>
          We have collaborated with technical moguls to create a dynamic
          community platform. We offer a comprehensive learning portal which can
          be accessed from anywhere and by anyone.
        </p>
      </div>
      <h1>Values</h1>
      <img src={r} className="values-Image"></img>
    </section>
  );
};

export default SecondPage;
