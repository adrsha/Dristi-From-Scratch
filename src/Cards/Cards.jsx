/* eslint-disable react/prop-types */
import "./Cards.css";
import member from "../../data/Members.json";
import dummyImage from "/president.png";
import { useState } from "react";
import { lenis } from "../Lenis/Lenis.js";

let cardHtml = member.map((mv) => {
  return (
    <div key={mv.attr} className="tablet" id={mv.attr}>
      <img src={dummyImage} alt="" />
      <div className="tabletContent">
        {mv.val}
        <div className="post">{mv.post}</div>
      </div>
    </div>
  );
});
function Cards(props) {
  const [MembersOpen, setMembersOpen] = useState("shorter");
  const [MembersCardState, setMembersCardState] = useState("Show More");

  if (props.id == "circleButtons") {
    return (
      <div className="glassCards glass parallaxEl" id={props.id}>
        <div className="cardTitle">{props.title}</div>
        <div className="cardContent">
          <a
            onMouseDown={(e) => {
              e.preventDefault();
              lenis.scrollTo("#aboutUs");
            }}
          >
            <button className="activated">{props.button1}</button>
          </a>
          <a
            onMouseDown={(e) => {
              e.preventDefault();
              lenis.scrollTo("#contactUs");
            }}
          >
            <button className="deactivated">{props.button2}</button>
          </a>
        </div>
      </div>
    );
  } else if (props.id == "image") {
    return (
      <div className="glassCards" id={props.id}>
        <img src={props.src} />
      </div>
    );
  } else if (props.id == "MembersCard") {
    return (
      <div
        className={"glassCards glass parallaxEl " + MembersOpen}
        id="MembersCard"
      >
        <div className="cardTitle">
          Our
          <br />
          Members
        </div>
        <div className={"membersList"}>{cardHtml}</div>
        <div
          className="tablet showMore"
          onClick={() => {
            if (MembersOpen == "shorter") {
              setMembersOpen("larger");
              setMembersCardState("Show Less");
            } else {
              setMembersOpen("shorter");
              setMembersCardState("Show More");
            }
          }}
        >
          {MembersCardState}
        </div>
      </div>
    );
  } else if (props.id == "DetailCard") {
    return (
      <div
        className={"glassCards glass parallaxEl " + props.extraClass}
        id={props.id}
      >
        <div className="cardData">
          {Object.prototype.hasOwnProperty.call(props, "title") ? (
            <div className="cardTitle">{props.title}</div>
          ) : null}
          <div className="cardContent">{props.description}</div>
        </div>
        <hr />
        <div className="cardActions">
          {Object.prototype.hasOwnProperty.call(props, "button1") ? (
            <button className="activated">
              <a href={props.link1}>{props.button1}</a>
            </button>
          ) : null}
          {Object.prototype.hasOwnProperty.call(props, "button2") ? (
            <button className="deactivated">
              <a href={props.link2}>{props.button2}</a>
            </button>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className="glassCards glass parallaxEl" id={props.id}>
      {Object.prototype.hasOwnProperty.call(props, "title") ? (
        <div className="cardTitle">{props.title}</div>
      ) : null}
      {Object.prototype.hasOwnProperty.call(props, "content") ? (
        <div className="cardContent" id="noticeContent">
          {props.content}
          <div className="noticeSpButtons">
            {Object.prototype.hasOwnProperty.call(props, "buttonDiscord") ? (
              <button className="discordButton">
                <a href={props.buttonDiscord}>
                  <img src="/discord_logo.png" alt="" />
                </a>
              </button>
            ) : null}
            {Object.prototype.hasOwnProperty.call(props, "buttonForm") ? (
              <button className="formButton">
                <a href={props.buttonForm}>
                  <img src="/forms_logo.png" alt="" />
                </a>
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
      {Object.prototype.hasOwnProperty.call(props, "button1") ? (
        <button className="activated ">
          <a href={props.link1}>{props.button1}</a>
        </button>
      ) : null}
      {Object.prototype.hasOwnProperty.call(props, "button2") ? (
        <button className="deactivated ">
          <a href={props.link2}>{props.button2}</a>
        </button>
      ) : null}
    </div>
  );
}

export default Cards;
