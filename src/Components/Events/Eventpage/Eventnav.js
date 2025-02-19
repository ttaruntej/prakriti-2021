import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Eventnav extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
    render() {
     
    
        return (
         
                <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
                <div >
                  <ul className=" nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                      <Link
                        className={this.props.kmactive}
                        to="/KrishiManthan"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Krishi-Manthan
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                           A Case Study Competition
                          </h5>
                        </div>
                      </Link>
                    </li><li className="nav-item">
                      <Link
                        className={this.props.daactive}
                        to="/DataAnalytics"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "20px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Data Analytics
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "18px",
                              marginBottom: "1rem",
                            }}
                          >
                            Analyse the past and predict the future
                          </h5>
                        </div>
                      </Link>
                    </li><li className="nav-item">
                      <Link
                        className={this.props.glactive}
                        to="/GuestLecture"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Guest Lecture
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "20px",
                              marginBottom: "0.5rem",
                              fontSize:'11px'
                            }}
                          >
                         Interaction session with Industry Experts
                          </h5>
                        </div>
                      </Link>
                    </li>
                      {/*<li className="nav-item">
                      <Link
                        className={this.props.agactive}
                        to="/Agrivation"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 400,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                         Agrivation
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Pitch your startup
                          </h5>
                        </div>
                      </Link>
                    </li>
                  
                    <li className="nav-item">
                      <Link
                        className={this.props.fdactive}
                        to="/Findthedevil"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                         Find the Devil
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              fontSize:"11px"
                            }}
                          >
                     Test your knowledge of food adulterants
                          </h5>
                        </div>
                      </Link>
                    </li>*/}
                    <li className="nav-item">
                      <Link
                        className={this.props.thactive}
                        to="/TreasureHunt"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Treasure Hunt
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                            Be the first in finding something
                          </h5>
                        </div>
                      </Link>
                    </li><li className="nav-item">
                      <Link
                        className={this.props.maactive}
                        to="/MadAd"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            MAD-AD  &ensp;
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                          Showcase your Advertising Skills
                          </h5>
                        </div>
                      </Link>
                    </li><li className="nav-item">
                      <Link
                        className={this.props.snactive}
                        to="/SelfiewithNature"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Selfie with Nature
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                            A Photography contest
                          </h5>
                        </div>
                      </Link>
                    </li> <li className="nav-item">
                      <Link
                        className={this.props.qactive}
                        to="/Quizella"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            Quizella
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                            }}
                          >
                         Let's play a mind sport
                          </h5>
                        </div>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={this.props.ppactive}
                        to="/PosterPresentation"
                        onClick={() => {
                          window.scroll({
                            left: 0,
                            top: 800,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <div className="item-text">
                          <h4
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "22px",
                              marginBottom: "0.5rem",
                              marginTop: "0",
                            }}
                          >
                            {" "}
                            Poster Presentation
                          </h4>
                          <h5
                            style={{
                              textAlign: "left",
                              fontFamily: "Lato, sans-serif",
                              lineHeight: "20px",
                              marginBottom: "1rem",
                              fontSize:'11px'
                            }}
                          >
                           Communicate your Research & Understanding
                          </h5>
                        </div>
                      </Link>
                    </li>
                   
                 
                  </ul>
                </div>
              </div>
           
        )
    }
}
