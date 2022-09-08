import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../../utils/queries';
import { SINGLE_USER } from '../../utils/queries';


function Profile() {
  const permission = Auth.getProfile().data.permission;
  const email = Auth.getProfile().data.email;

  const { singleUser } = useQuery(SINGLE_USER, {
    // pass URL parameter
    variables: { email: email },
  });
  console.log(email,singleUser,permission);

  const { data } = useQuery(QUERY_COMMENT);
  let comments;
  if (data) {
    comments = data.comments;
  }
  console.log(data);
  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {data ? (
                <div className="flex-row">
                  {comments.map(({ _id, comment, name, date_created,email }, index) => (
                    <div>
                        <h3 className="my-2">
                            {comment.name}
                        </h3>
                        <span>{name}</span>
                        <span>{email}</span>
                        <span>{date_created}</span>
                        <span>{comment}</span>
                    </div>
                  ))}
                </div>
        ) : null
        }
      </div>
    </>
  );
};

export default Profile;
