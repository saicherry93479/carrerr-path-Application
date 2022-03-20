import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { addQuestion } from "../../Firebase/FirebaseMethods";
import "./PostC.css";
const PostC = ({ setCurrent }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const postHandler = async () => {
    if (title.length > 4 && body.length > 15) {
      var sa = await addQuestion(title, body);
      if (sa === "sucess") {
        console.log("hey done sucessful");
        setCurrent((p) => p - 1);
        navigate("/community");
      }
    }
  };
  return (
    <div className="postC">
      <header>Ask a public question</header>
      <div className="postC-Block">
        <p className="postC-Block-head">Title</p>
        <p className="postC-Block-Subhead">
          Be specific and imagine you’re asking a question to another person
        </p>
        <input
          type={"text"}
          className="postC-Block-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="postC-Block-head">Body</p>
        <p className="postC-Block-Subhead">
          Include all the information someone would need to answer your question
        </p>
        <textarea
          className="postC-Block-textArea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="post-Button" onClick={postHandler}>
          <p>post question</p>
        </div>
      </div>
    </div>
  );
};

export default PostC;
