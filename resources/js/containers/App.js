import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/common/layout/Layout";

import {
  HOME,
  ERROR,
  ABOUT,
  PROGRAMME,
  ADVERTISEMENT,
  TEAM,
  CONTACT,
  CATEGORIES,
  IMAGES,
  VIDEO,
  SINGLE_PAGE,
  PODCAST,
  TEAM_PROFILE,
  PROGRAMME_DETAIL,
  PODCAST_DETAIL,
} from "../constants/routes";

import Home from "../pages/Home";
import Error from "../pages/404/Error";
import AboutPage from "../pages/about/AboutPage";
import ProgrammePage from "../pages/programme/ProgrammePage";
import AdvertisementPage from "../pages/advertisement/AdvertisementPage";
import CategoriesPage from "../pages/categories/CategoriesPage";
import ContactPage from "../pages/contact/ContactPage";
import ImagePage from "../pages/image/ImagePage";
import VideoPage from "../pages/video/VideoPage";
import TeamPage from "../pages/team/TeamPage";
import PodcastPage from "../pages/podcast/PodcastPage";
import SinglePage from "../pages/singlePage/SinglePage";
import TeamProfilePage from "../pages/teamProfile/TeamProfilePage";
import ProgramDetailPage from "../pages/programDetail/ProgramDetailPage";
import PodcastDetailPage from "../pages/podcastDetail/PodcastDetailPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={HOME.INDEX} exact component={Home} />
          <Route path={ABOUT.INDEX}>
            <AboutPage />
          </Route>
          <Route path={PROGRAMME.INDEX}>
            <ProgrammePage />
          </Route>
          <Route path={ADVERTISEMENT.INDEX}>
            <AdvertisementPage />
          </Route>
          <Route path={TEAM.INDEX}>
            <TeamPage />
          </Route>
          <Route path={CONTACT.INDEX}>
            <ContactPage />
          </Route>
          <Route path={CATEGORIES.INDEX}>
            <CategoriesPage />
          </Route>
          <Route path={IMAGES.INDEX}>
            <ImagePage />
          </Route>
          <Route path={VIDEO.INDEX}>
            <VideoPage />
          </Route>
          <Route path={SINGLE_PAGE.INDEX}>
            <SinglePage />
          </Route>
          <Route path={PODCAST.INDEX}>
            <PodcastPage />
          </Route>
          <Route path={TEAM_PROFILE.INDEX}>
            <TeamProfilePage />
          </Route>
          <Route path={PROGRAMME_DETAIL.INDEX}>
            <ProgramDetailPage />
          </Route>
          <Route path={PODCAST_DETAIL.INDEX}>
            <PodcastDetailPage />
          </Route>
          <Route path={ERROR.INDEX}>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
