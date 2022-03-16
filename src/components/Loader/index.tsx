import * as React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
require('./Loader.css');

interface LoadProps {
    loading: boolean;
}

export const Loader = ({loading}: LoadProps) => {
    return (
        <div className="Loader">
            <ClipLoader
            size={100}
            color={"#EF66EB"}
            loading={loading}
            />
        </div>
    )
}

export default Loader;