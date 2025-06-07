import React from "react";
import { Fragment } from "react";
import "nouislider/dist/nouislider.css";
import "react-datepicker/dist/react-datepicker.min.css";
import '@/assets/scss/Default.scss';
import "@/assets/scss/Icons.scss";
import configureFakeBackend from "@/helpers/fake-backend.js";
import AllRoutes from "@/routes/Routes.jsx";
import AppProvidersWrapper from "@/components/AppProvidersWrapper.jsx";
import ErrorBoundary from "@/components/ErrorBoundary";

configureFakeBackend();

const App = () => {
  return (
    <ErrorBoundary>
      <Fragment>
        <AppProvidersWrapper>
          <AllRoutes />
        </AppProvidersWrapper>
      </Fragment>
    </ErrorBoundary>
  );
};

export default App;