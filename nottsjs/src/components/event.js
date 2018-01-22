import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import moment from 'moment';

class EventItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel talk">
            <h3 class="header light">{this.props.data.name}</h3>
            <p>{moment('2017-11-14T18:30:00Z').format('dddd, MMMM Do YYYY, H:mm')}</p>
            {/* <h6 class="light">{this.formatDate(new Date('2017-11-14T18:30:00Z'))}</h6> */}
            <a class="btn waves-effect waves-light yellow black-text top-button" href={this.props.data.properties["meetupUrl"]}>RSVP on Meetup<i class="material-icons left">reply</i></a>
              <a class="btn waves-effect waves-light yellow black-text top-button" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;text=NottsJS+November+2017&amp;dates=20171114T183000Z/20171114T210000Z&amp;location=JH,+34a+Stoney+Street,+Nottingham,+NG1+1NB">Add to Google Calendar<i class="material-icons left">date_range</i></a>
            {renderHTML(this.props.data.properties["meetingContent"])}
            <hr/>
              <div class="row profile">   
                <div class="col s12 m4 l3">
                  <div class="row">
                    <div class="col s8 offset-s2">
                      <div class="avatar">
                        <img src={'http://nottsjs.localtest.me' + this.props.data.properties["speakerImage"]} alt="David Wood" class="circle responsive-img" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col s12 center-align">
                      <a href={this.props.data.properties["gitHubUrl"]}>
                        <svg class="logo" viewBox="0 0 24 24">
                          <path fill="black" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                        </svg>
                      </a>
                      <a href={this.props.data.properties["twitterUrl"]}>
                        <svg class="logo" viewBox="0 0 24 24">
                          <path fill="black" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                        </svg>
                      </a>
                      <a href={this.props.data.properties["websiteUrl"]}>
                        <svg class="logo" viewBox="-2 -2 24 24">
                          <path fill="black" d="M19.175,4.856L15.138,0.82c-0.295-0.295-0.817-0.295-1.112,0L8.748,6.098c-0.307,0.307-0.307,0.805,0,1.112l1.462,1.462l-1.533,1.535L7.215,8.746c-0.307-0.307-0.805-0.307-1.112,0l-5.278,5.276c-0.307,0.307-0.307,0.805,0,1.112l4.037,4.037c0.154,0.153,0.355,0.23,0.556,0.23c0.201,0,0.403-0.077,0.556-0.23l5.28-5.276c0.148-0.148,0.23-0.347,0.23-0.556c0-0.209-0.083-0.409-0.23-0.556l-1.464-1.464l1.533-1.535l1.462,1.462c0.153,0.153,0.355,0.23,0.556,0.23c0.201,0,0.402-0.077,0.556-0.23l5.278-5.278c0.147-0.147,0.23-0.347,0.23-0.556C19.406,5.203,19.322,5.004,19.175,4.856zM9.585,13.339l-4.167,4.164l-2.925-2.925l4.166-4.164l0.906,0.905l-0.67,0.668c-0.307,0.307-0.307,0.805,0,1.112c0.154,0.153,0.356,0.23,0.556,0.23c0.203,0,0.403-0.077,0.556-0.23l0.67-0.668L9.585,13.339z M13.341,9.578l-0.906-0.906l0.663-0.662c0.307-0.307,0.307-0.805,0-1.112c-0.307-0.307-0.805-0.307-1.112,0L11.322,7.56l-0.906-0.906l4.166-4.166l2.925,2.925L13.341,9.578z"></path>
                        </svg>
                      </a>                      
                    </div>
                  </div>
                </div>
                <div class="col s12 m8 l9">
                  <h5 class="title">{this.props.data.properties["speakerName"]}</h5>
                  {renderHTML(this.props.data.properties["bio"])}
                </div>
              </div>

            {/* <p>{JSON.stringify(this.props.data.properties)}</p> */}
          </div>
        </div>
      </div>
    );
  }

  formatDate(dateTime)
  {
    return dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getYear();
  }
}

export default EventItem;	