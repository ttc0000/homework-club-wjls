import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import SignUpContent from "../../content/SignUpContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        // button={IntroContent.button}
        // icon="developer.svg"
        icon=""
        id="intro"
      /> */}
      <MiddleBlock
        title={IntroContent.title}
        content={IntroContent.text}
        button=""
        id="about"
        link={IntroContent.link}
        linkDescription={IntroContent.linkDescription}
      />
      <MiddleBlock
        title={SignUpContent.title}
        content={SignUpContent.text}
        button=""
        id="sign-up"
        link={SignUpContent.link}
        linkDescription={SignUpContent.linkDescription}
      />
      {/* <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon=""
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon=""
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon=""
        id="product"
      /> */}
      <MiddleBlock
        title={ContactContent.title}
        content={ContactContent.text}
        button=""
        id="contact"
        link={ContactContent.link}
        linkDescription={ContactContent.linkDescription}
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
