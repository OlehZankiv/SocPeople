import React from "react";
import Loader from "../components/component/common/Loader";

export const withSuspense = (Component) => (props) => {
    return (
        <React.Suspense fallback={<Loader />}>
            <Component {...props} />
        </React.Suspense>
    );
};
