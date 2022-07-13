import React from 'react';
import {useNavigate} from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate ();

  const submitHandler = e => {
    e.preventDefault ();

    navigate ('/players');
  };

  return (
    <div>
      <h3>Please indicate your vote for top 5 players of all time</h3>
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <input type="text" />
        <input type="submit" value="Submit Vote!" />
      </form>
    </div>
  );
};

export default Form;
