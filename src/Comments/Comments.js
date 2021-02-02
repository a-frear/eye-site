import React, { useEffect, useState } from "react";
import CommentList from "../CommentList/CommentList";
import config from "../config";
import { useAuth0 } from "@auth0/auth0-react";
import CommentSubmit from "../CommentSubmit/CommentSubmit";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(config.API_ENDPOINT_comments, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(setComments)
      .catch();
  }, []);

  const { user, getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    const newComment = {
      modified: new Date(),
      user_name: user.nickname,
      video_id: props.vidId,
      content: e.target["new-comment"].value,
    };
    e.target["new-comment"].value = "";
    fetch(config.API_ENDPOINT_comments, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((comment) => {
        setComments([...comments, comment]);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  return (
    <div>
      <CommentSubmit handleSubmit={handleSubmit} />
      <CommentList comments={comments} vidId={props.vidId} />
    </div>
  );
};

export default Comments;
