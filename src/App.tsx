import React, { useEffect, useState } from "react";
import Lake from "./img/lake.jpg";
import Waterfall from "./img/waterfall.jpg";
import Scenery from "./img/scenery.jpg";
import Cheetah from "./img/cheetah.jpg";
import Owl from "./img/owl.jpg";
import Panda from "./img/panda.jpg";
import Person1 from "./img/person1.jpg";
import Person2 from "./img/person2.jpg";
import City1 from "./img/city1.jpg";
import City2 from "./img/city2.jpg";
import City3 from "./img/city3.jpg";
import Tree1 from "./img/tree1.png";
import Tree2 from "./img/tree2.jpg";
import Tree3 from "./img/tree3.jpg";
import { Route, Routes } from "react-router-dom";
import Feed from "./containers/feed/Feed";
import Stories from "./containers/stories/Stories";
import { Content, StoriesContainer, Wrapper } from "./AppStyles";
import Navigation from "./components/navigation/Navigation";
import { UploadModal } from "./components/uploadModal/UploadModal";
import { Overlay } from "./components/uploadModal/UploadModalStyles";
import Profile from "./containers/profile/Profile";

const App: React.FC = () => {
  const [uploadModal, setUploadModal] = useState(false);
  const [scroll, showSroll] = useState(false);
  const [stories, setStories] = useState([
    {
      lake: Lake,
      scenery: Scenery,
      waterfall: Waterfall,
    },
    {
      person1: Person1,
      person2: Person2,
    },
    {
      cheetah: Cheetah,
      owl: Owl,
      panda: Panda,
    },
    {
      city1: City1,
      city2: City2,
      city3: City3,
    },
    {
      tree1: Tree1,
      tree2: Tree2,
      tree3: Tree3,
    },
  ]);

  const showUploadModal = (x: boolean) => {
    setUploadModal(x);
    showSroll(x);
  };
  return (
    <Wrapper scroll={scroll}>
      <Navigation onShowUpload={() => showUploadModal(true)} />
      <Content>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/carryshout" element={<Profile />}></Route>
        </Routes>
      </Content>
      <StoriesContainer>
        <Routes>
          <Route
            path="/stories"
            element={<Stories stories={stories} />}
          ></Route>
        </Routes>
      </StoriesContainer>
      {uploadModal && <UploadModal />}
      {uploadModal && <Overlay onClick={() => showUploadModal(false)} />}
    </Wrapper>
  );
};

export default App;
