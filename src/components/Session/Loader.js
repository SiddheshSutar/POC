import React from 'react';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => {

    return (
        <div>
            <PuffLoader />
        </div>
    )
}

export default Loader