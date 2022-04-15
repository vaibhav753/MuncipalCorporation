import React from 'react';
import {useParams} from "react-router-dom";

const RegisteredComplaint = (props) => {

  const {tokenId} = useParams();


  return (
    <div>
      <b>
        Complaint has been registered successfully. The Complaint Token code is{' '}
        {tokenId}
      </b>
    </div>
  );
};

export default RegisteredComplaint;
