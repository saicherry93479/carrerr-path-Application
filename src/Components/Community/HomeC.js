import React, { useContext, useEffect, useState } from "react";
import { addComment } from "../../Firebase/FirebaseMethods";
import { dataContext } from "./Community";
import "./HomeC.css";
const HomeC = () => {
  const { data, setData } = useContext(dataContext);
  const [comment, setComment] = useState("");
  const [currentItem, setCurrentItem] = useState({ val: null, click: false });
  useEffect(() => {
    console.log(data);
  });
  const commentPost = async () => {
    const a = addComment(currentItem.val.uniqId,comment);
  };
  useEffect(() => {
    console.log(currentItem);
  }, [currentItem]);
  return (
    <>
      {!currentItem.click ? (
        <div>
          {data.map((val) => (
            <div className="homeCItem">
              <div>
                <i class="fa-solid fa-user"></i>
                <p>{val.email}</p>
              </div>
              <p className="homeC-Title">Title : {val.title}</p>
              <p className="homeC-Question">{val.body}</p>

              <p
                className="homeC-Forward"
                onClick={() => setCurrentItem({ val: val, click: true })}
              >
                Answer the Question
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="homCItem-Item">
          <div className="homCItem-Item-Item">
            <i
              class="fa-solid fa-arrow-left"
              onClick={() => setCurrentItem({ val: null, click: false })}
            ></i>
            <p>Question</p>
            <div></div>
          </div>
          <p className="homeC-Title">Title : {currentItem.val.title}</p>
          <p className="homeC-Question">{currentItem.val.body}</p>
          <p className="homeC-Comment-Head">Your Comment</p>
          <textarea
            className="homeC-Block-textArea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="comment-Button" onClick={commentPost}>
            <p>Post Your Answer</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeC;
