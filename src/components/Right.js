import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { Button } from 'reactstrap'
// import Notes from '../components/notes'

class Right extends Component{
    state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
        <section className="right">
        <div>
            <div className="meetingContent">
        <h1>
            Agenda
        </h1>
        <h2 className="agenda-subheader">All times are CST</h2>
    
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 1}
          index={0}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 1 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Deposit Parameters Review
            </h3>
            <p>
                @ 8:15 - 9:00 a.m. &<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                User Defined Options: Tips and Tricks
            </h3>
            <p>
                @ 9:15 - 10:00 a.m. &<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Online Posting Features
            </h3>
            <p>
                @ 10:15 - 11:00 a.m. &<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 1}>
            <h3 className="meetingTitle">
                Precision 2020.1 and 2020.2 Deposits & Other
            </h3>
            <p>
                @ 11:15 - 12:00 p.m. &<br/> 4:15 - 5:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Title
          active={activeIndex === 0}
          index={1}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
          Day 2 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
        <h3 className="meetingTitle">
                                                Loan Parameters
                                            </h3>
                                            <p>
                @ 8:15 - 9:00 a.m. &<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
        <h3 className="meetingTitle">
                                                Loan Credit
                                            </h3>
                                            <p>
                @ 9:15 - 10:00 a.m. &<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
        <h3 className="meetingTitle">
                                                Loans: Did You Know
                                            </h3>
                                            <p>
                @ 10:15 - 11:00 a.m. &<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 0}>
        <h3 className="meetingTitle">
                                                Precision 2020.2 and 2020.3 Loans
                                            </h3>
                                            <p>
                @ 11:15 - 12:00 p.m. &<br/> 4:15 - 5:00 p.m.
            </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Button id="qsLoginBtn" className="toggle-buttons">
            Day 3 <Icon name='dropdown' />
          </Button>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
            Employ I-32 Forms Design to Set Your Institution Apart
            </h3>
            <p>
                @ 8:15 - 9:00 a.m. &<br/> 1:15 - 2:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
            Increase CDD/BSA Compliance With BPM
            </h3>
            <p>
                @ 9:15 - 10:00 a.m. &<br/> 2:15 - 3:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
            Precision Roadmap
            </h3>
            <p>
                @ 10:15 - 11:00 a.m. &<br/> 3:15 - 4:00 p.m.
            </p>
        </Accordion.Content>
        <Accordion.Content active={activeIndex === 2}>
            <h3 className="meetingTitle">
            Networking/Happy Hour
            </h3>
            <p>
                @ 11:15 - 12:00 p.m. &<br/> 4:15 - 5:00 p.m.
            </p>
        </Accordion.Content>
      </Accordion>
        </div>
    </div>
    </section>
    )
  }
}

export default Right;