import React from 'react';
import '../../App.css'

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-5 bg-light">
      <div className="container">
        <h1 className="display-4 mb-0">Work Experience</h1>
        
        <div className="work-experience-item mb-5">
          <h3 className="mb-2">Web Development Engineer I</h3>
          <p class="fst-italic"><strong>Amazon</strong> | September 2019 - Current | Remote</p>
          <ul className="list-styled">
            <li>Designed and developed highly scalable web applications using JavaScript framework React.js.</li>
            <li>Created the user experience that fetched, parsed, and formatted real-time data, and relayed it into React components.</li>
            <li>Built backend APIs using Node.js and MySQL that established the data for our web applications.</li>
            <li>Created and maintained complex AWS infrastructures using CloudFormation with CDK reducing the operational load by 50%.</li>
            <li>Mentored multiple non-tech employees who ended up moving into tech roles post-mentorship.</li>
            <li>Created documentation that reduced training time for new colleagues by 30%.</li>
          </ul>
        </div>

        <div className="work-experience-item mb-5">
          <h3 className="mb-2">Sr. Workflow Analyst</h3>
          <p class="fst-italic"><strong>Amazon</strong> | May 2016 - August 2019 | Remote</p>
          <ul className="list-styled">
            <li>Developed and implemented a web app which acts as an employee information database utilized by Workflow, Operations, Training, HR, and more across all North America CS sites.</li>
            <li>Developed multiple Excel + VBA based tools to allow for fewer manual steps and improved error rates.</li>
            <li>Ensured that we met the planned headcount in ~50 workgroups we had across our 4 US customer service sites.</li>
          </ul>
        </div>

        <div className="work-experience-item mb-5">
          <h3 className="mb-2">WFM Real-time Analyst & Scheduler</h3>
          <p class="fst-italic"><strong>First Call Resolution</strong> | August 2014 - May 2016 | Roseburg, OR</p>
          <ul className="list-styled">
            <li>Developed a web application that allowed operations managers to view multiple call queues in a single view.</li>
            <li>Ensured that optimum service levels were achieved within the call center on a monthly and daily basis.</li>
            <li>Provided variance reporting to program managers, to enable them to make timely decisions about planned offline activities and outages.</li>
            <li>Maintained various databases to identify skill set shortages for short-term training requirements.</li>
          </ul>
        </div>

        <div className="work-experience-item mb-5">
            <h3 className="mb-2">Technical Support Associate</h3>
            <p class="fst-italic"><strong>First Call Resolution</strong> | January 2009 - August 2014 | Roseburg, OR</p>
            <ul className="list-styled">
                <li>Acted as a key tier 2 contact for a leading Voice Over IP (VoIP) company, ensuring high-quality technical support for complex issues beyond the scope of regular customer service inquiries.</li>
                <li>Utilized advanced technical tools and diagnostics to troubleshoot and rectify VoIP related concerns, improving customer satisfaction and reducing callbacks.</li>
                <li>Collaborated closely with the client's technical team to ensure streamlined communication, faster problem resolution, and effective feedback loops for product improvement.</li>
                <li>Trained new associates with class sizes of up to 15 people.</li>
                <li>Conducted regular training sessions for tier 1 associates, enhancing their technical prowess and empowering them to resolve more queries at the first point of contact.</li>
                <li>Acted as a bridge between the call center team and the VoIP client, ensuring that both parties were aligned in terms of expectations, service levels, and technical updates.</li>
                <li>Consistently exceeded KPIs, leading to a reduction in customer complaints and improved client satisfaction rates.</li>
            </ul>
        </div>

      </div>
    </section>
  );
};

export default WorkExperience;