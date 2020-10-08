import React, { Component } from 'react';
import Iframe from 'react-iframe';


class Left extends Component {
  render() {
      return (
        <section className='left'>
          <div>
            <div className="greetings">
              <img
              class='mb-3 app-logo'
              src='https://fiservseminars-media.s3.amazonaws.com/header.png'
              alt='2020 Precision Fall Conference'
              width=''
            />
            </div>
            
            <h1>Introduction</h1>
            <p>
              We are better together. Join Fiserv experts and your peers for
              interactive presentations and discussions that provide the
              necessary insight to become more efficient. Use this virtual venue
              to learn more about the software you use every day and share your
              best practices and software tips all while building a diverse
              network of professional relationships.
            </p>
            <p>
              This fall, the Precision Education Seminars are three days of
              interactive sessions that provide the ideal setting to gain new
              perspectives and make valuable connections with peers and Fiserv
              experts. During the three days you will experience a Simulive
              training event, On-Demand recordings including a look into the new
              User Interface (UI) and Abiliti for online banking, a virtual
              social hour, a chance to win awesome prizes, a few special video
              surprises and access to the electronic version of the meeting
              material.
            </p>
            <h2><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=HzqHEY1MDUWN--N6LiVX-NLq3J1hqdlHjCimOyYPw2tUQ0xIS1IzMlhNVzg4N05MOVU5V0QyWldKQSQlQCN0PWcu" target="_blank" rel="noopener noreferrer">Precision Education Seminar Survey</a></h2>
            <p>We are committed to providing educational opportunities that support your success. <span style={{ color: "#ff6600"}}>Please tell us how we can strengthen your learning experience by completing a brief survey at any point during the seminar.</span></p>
          </div>
        </section>
      );
    }
}

export default Left;
