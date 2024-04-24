import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { calendar, codeSlashOutline, school, person } from "ionicons/icons";
import AcademicYears from "./pages/AcademicYears";
import AcademicYearDetails from "./pages/AcademicYearDetails";
import SemesterDetails from "./pages/SemesterDetails";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Diplomas from "./pages/Diplomas";
import DiplomaDetails from "./pages/DiplomaDetails";
import Instructors from "./pages/Instructors";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import InstructorDetails from "./pages/InstructorDetails";
import AdvisorDetails from "./pages/AdvisorDetails";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/academicyears">
            <AcademicYears />
          </Route>
          <Route path="/semesters/:id">
            <SemesterDetails />
          </Route>
          <Route path="/advisors/:id">
            <AdvisorDetails />
          </Route>
          <Route path="/academicyears/:id">
            <AcademicYearDetails />
          </Route>
          <Route path="/courses/:id">
            <CourseDetails />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/diplomas/:id">
            <DiplomaDetails />
          </Route>
          <Route exact path="/diplomas">
            <Diplomas />
          </Route>
          <Route path="/instructors/:id">
            <InstructorDetails />
          </Route>
          <Route exact path="/instructors">
            <Instructors />
          </Route>
          <Route exact path="/">
            <Redirect to="/academicyears" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="AcademicYears" href="/academicyears">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Academic Years</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Courses" href="/courses">
            <IonIcon aria-hidden="true" icon={codeSlashOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Diplomas" href="/diplomas">
            <IonIcon aria-hidden="true" icon={school} />
            <IonLabel>Diplomas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Instructors" href="/instructors">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Instructors</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
