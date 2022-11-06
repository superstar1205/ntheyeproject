import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Authentication/auth";
import "./index.scss";
import Loader from "./shade/Loaders/Loaders"
const App = React.lazy(() => import("../src/shade/layouts/App"));
// const Switcherapp = React.lazy(() => import("../src/shade/layouts/Switcherapp"));
// const Custompages = React.lazy(() => import("../src/shade/layouts/custompages"));


//Element end
//Home
const AllMetrics = React.lazy(() => import("./components/Dashboard/Home/AllMetrics"));
const OperationMetrics = React.lazy(() => import("./components/Dashboard/Home/Operation"));
const PartnerMetrics = React.lazy(() => import("./components/Dashboard/Home/Partner"));
const ProctorMetrics = React.lazy(() => import("./components/Dashboard/Home/Proctor"));
const SupportMetrics = React.lazy(() => import("./components/Dashboard/Home/Support"));
const InstituteMetrics = React.lazy(() => import("./components/Dashboard/Home/Institute"));


//User
const AddOperation = React.lazy(() => import("./components/Dashboard/Users/Add-User"));
const AddProctor = React.lazy(() => import("./components/Dashboard/Users/AddProctor"));
const AddPartner = React.lazy(() => import("./components/Dashboard/Users/AddPartner"));
const AddSales = React.lazy(() => import("./components/Dashboard/Users/AddSales"));


//Institute
const AddCollege = React.lazy(() => import("./components/Dashboard/Institute/AddCollege"));
const AddDepartment = React.lazy(() => import("./components/Dashboard/Institute/AddDepartment"));
const AddProfessor = React.lazy(() => import("./components/Dashboard/Institute/AddProfessor"));
const Instruction = React.lazy(() => import("./components/Dashboard/Institute/Instruction"));


//Site Operation
const BlockSoft = React.lazy(() => import("./components/Dashboard/SiteOperations/BlockSoft"));
const AllowSoft = React.lazy(() => import("./components/Dashboard/SiteOperations/AllowSoft"));
const ExcludeSystem = React.lazy(() => import("./components/Dashboard/SiteOperations/ExcludeSystem"));
const TermAndCondition = React.lazy(() => import("./components/Dashboard/SiteOperations/TermAndCondition"));
const GenerateCoupon = React.lazy(() => import("./components/Dashboard/SiteOperations/GenerateCoupon"));
const SessionBlock = React.lazy(() => import("./components/Dashboard/SiteOperations/SessionBlock"));
const SessionBucket = React.lazy(() => import("./components/Dashboard/SiteOperations/SessionBucket"));
const ShotcutKey = React.lazy(() => import("./components/Dashboard/SiteOperations/ShotcutKey"));


//Configuration
const SessionType = React.lazy(() => import("./components/Dashboard/Configuration/SessionType"));
const DropComment = React.lazy(() => import("./components/Dashboard/Configuration/DropComment"));
const ModalAlert = React.lazy(() => import("./components/Dashboard/Configuration/ModalAlert"));
const Title = React.lazy(() => import("./components/Dashboard/Configuration/Title"));
const Tooltip = React.lazy(() => import("./components/Dashboard/Configuration/Tooltip"));
const EmailTemplate = React.lazy(() => import("./components/Dashboard/Configuration/EmailTemplate"));
const EmailConfiguration = React.lazy(() => import("./components/Dashboard/Configuration/EmailConfig"));
const StripeConfig = React.lazy(() => import("./components/Dashboard/Configuration/StripeConfig"));
const VideoManage = React.lazy(() => import("./components/Dashboard/Configuration/VideoManage"));
const Notification = React.lazy(() => import("./components/Dashboard/Configuration/Notification"));


const AuthLogin = React.lazy(() => import("./Authentication/Login"));
const AuthSignup = React.lazy(() => import("./Authentication/Signup"))
//Form
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Auth />}>
            <Route index element={<AuthLogin />} />

            <Route
              path={`${process.env.PUBLIC_URL}/authentication/login`}
              element={<AuthLogin />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/authentication/signup`}
              element={<AuthSignup />}
            />
          </Route>

          <Route path={`${process.env.PUBLIC_URL}/`} element={<App />}>
            {/* Router for Management Main dashboard */}
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/dashboard`}
                element={<AllMetrics />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/metrics/operations`}
                element={<OperationMetrics />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/metrics/partners`}
                element={<PartnerMetrics />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/metrics/proctors`}
                element={<ProctorMetrics />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/metrics/support`}
                element={<SupportMetrics />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/metrics/institute`}
                element={<InstituteMetrics />}
              />
            </Route>
            {/* Router for add users */}
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/user/operation`}
                element={<AddOperation />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/user/proctor`}
                element={<AddProctor />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/user/partner`}
                element={<AddPartner />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/user/sales`}
                element={<AddSales />}
              />
            </Route>
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/institute/college`}
                element={<AddCollege />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/institute/department`}
                element={<AddDepartment />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/institute/professor`}
                element={<AddProfessor />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/institute/Instructions`}
                element={<Instruction />}
              />
            </Route>
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/software/blocked`}
                element={<BlockSoft />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/software/allowed`}
                element={<AllowSoft />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/software/exclude`}
                element={<ExcludeSystem />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/terms`}
                element={<TermAndCondition />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/coupon`}
                element={<GenerateCoupon />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/sessionblock`}
                element={<SessionBlock />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/sessionbucket`}
                element={<SessionBucket />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/sessionblock`}
                element={<SessionBlock />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/sessionbucket`}
                element={<SessionBucket />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/shotcutkey`}
                element={<ShotcutKey />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/operation/sessionbucket`}
                element={<SessionBucket />}
              />
            </Route>
            <Route>
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/sessiontype`}
                element={<SessionType />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/dropcomment`}
                element={<DropComment />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/modalalert`}
                element={<ModalAlert />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/title`}
                element={<Title />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/tooltip`}
                element={<Tooltip />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/emailtemplate`}
                element={<EmailTemplate />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/configurat`}
                element={<EmailConfiguration />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/stripe`}
                element={<StripeConfig />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/video`}
                element={<VideoManage />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/notification`}
                element={<Notification />}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/configuration/configurat`}
                element={<EmailConfiguration />}
              />
            </Route>
          </Route>
        </Routes>.
      </React.Suspense>
    </BrowserRouter >
  </React.Fragment >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
