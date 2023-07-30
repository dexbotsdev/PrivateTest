import { FunctionComponent } from "react";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Button1 from "../components/Button1";
import Headline from "../components/Headline";
import SubHeading from "../components/SubHeading";
import Title from "../components/Title";
import SecondHeadline from "../components/SecondHeadline";
import Paragraphe from "../components/Paragraphe";
import Subtitle from "../components/Subtitle";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.desktop1Parent}>
      <div className={styles.desktop1}>
        <div className={styles.desktopHeader02}>
          <div className={styles.hero8}>
            <div className={styles.navbar}>
              <Logo
                logoPosition="absolute"
                logoPadding="10px"
                logoTop="calc(50% - 39.5px)"
                logoLeft="30px"
              />
              <div className={styles.menu}>
                <div className={styles.linkParent}>
                  <Link
                    link="Home"
                    linkPosition="unset"
                    linkPadding="10px"
                    linkColor="#20262a"
                  />
                  <Link
                    link="Product"
                    linkPosition="unset"
                    linkPadding="10px"
                    linkColor="#20262a"
                  />
                  <Link
                    link="About"
                    linkPosition="unset"
                    linkPadding="10px"
                    linkColor="#20262a"
                  />
                  <Link
                    link="Contact"
                    linkPosition="unset"
                    linkPadding="10px"
                    linkColor="#20262a"
                  />
                </div>
              </div>
              <Button1
                button="Login"
                buttonPosition="absolute"
                buttonFlexShrink="unset"
                buttonPadding="var(--padding-xl) var(--padding-17xl)"
                buttonBackgroundColor="unset"
                buttonBorder="1px solid var(--primary)"
                buttonTop="calc(50% - 26.5px)"
                buttonRight="39px"
                buttonColor="#00b6f0"
              />
            </div>
            <img
              className={styles.confettiShapesIcon}
              alt=""
              src="/confetti-shapes.svg"
            />
            <div className={styles.text}>
              <Headline
                headlinePosition="unset"
                lightningFastPrototypingColor="#112d57"
                lightningFastPrototypingTextAlign="center"
              />
              <SubHeading
                mostCalendarsAreDesignedF="Most calendars are designed for teams. Slate is "
                freelancersWhoWantASimple="designed for freelancers."
                subHeadingPosition="unset"
                mostCalendarsAreContainerColor="#5c5c5c"
                mostCalendarsAreContainerTextAlign="center"
              />
            </div>
            <div className={styles.buttons}>
              <Button1
                button="Get Started"
                buttonPosition="unset"
                buttonFlexShrink="unset"
                buttonPadding="var(--padding-xl) var(--padding-17xl)"
                buttonBackgroundColor="#00b6f0"
                buttonBorder="unset"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#fff"
              />
              <Button1
                button="Try For Free"
                buttonPosition="unset"
                buttonFlexShrink="unset"
                buttonPadding="var(--padding-xl) var(--padding-17xl)"
                buttonBackgroundColor="#fff"
                buttonBorder="unset"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#20262a"
              />
            </div>
            <img className={styles.screenIcon} alt="" src="/screen.svg" />
          </div>
        </div>
        <div className={styles.lightCta1}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <Title
                atYourFingertips="Just type"
                titlePosition="unset"
                atYourFingertipsColor="#f3cd03"
              />
              <SecondHeadline
                secondHeadlinePosition="unset"
                availableExclusivelyOnConColor="#20262a"
                availableExclusivelyOnConTextAlign="center"
              />
              <SubHeading
                mostCalendarsAreDesignedF="Most calendars are designed for teams. "
                freelancersWhoWantASimple="Slate is designed for freelancers."
                subHeadingPosition="unset"
                mostCalendarsAreContainerColor="#5c5c5c"
                mostCalendarsAreContainerTextAlign="center"
              />
            </div>
            <div className={styles.buttons1}>
              <Button1
                button="Download"
                buttonPosition="unset"
                buttonFlexShrink="unset"
                buttonPadding="var(--padding-xl) var(--padding-21xl)"
                buttonBackgroundColor="#00b6f0"
                buttonBorder="unset"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#fff"
              />
              <Button1
                button="See Walkthrough"
                buttonPosition="unset"
                buttonFlexShrink="unset"
                buttonPadding="var(--padding-xl) var(--padding-20xl)"
                buttonBackgroundColor="#fff"
                buttonBorder="2px solid var(--primary)"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#00b6f0"
              />
            </div>
          </div>
        </div>
        <div className={styles.lightContent5}>
          <div className={styles.content1}>
            <div className={styles.textContent1}>
              <Title
                atYourFingertips="OpenType features "
                titlePosition="unset"
                atYourFingertipsColor="#20262a"
              />
              <SubHeading
                mostCalendarsAreDesignedF="Most calendars are designed for teams. "
                freelancersWhoWantASimple="Slate is designed for freelancers who "
                subHeadingPosition="unset"
                mostCalendarsAreContainerColor="#5c5c5c"
                mostCalendarsAreContainerTextAlign="left"
              />
              <Link
                link="LEARN MORE"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#00b6f0"
              />
            </div>
            <div className={styles.frameParent}>
              <img className={styles.frameChild} alt="" src="/frame-23.svg" />
              <img
                className={styles.screenIcon1}
                alt=""
                src="/screen1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.lightContent5}>
          <div className={styles.content1}>
            <div className={styles.frameParent}>
              <img className={styles.frameItem} alt="" src="/frame-231.svg" />
              <img
                className={styles.screenIcon1}
                alt=""
                src="/screen2@2x.png"
              />
            </div>
            <div className={styles.textContent1}>
              <Title
                atYourFingertips="Variable fonts"
                titlePosition="unset"
                atYourFingertipsColor="#20262a"
              />
              <SubHeading
                mostCalendarsAreDesignedF="Most calendars are designed for "
                freelancersWhoWantASimple="teams. Slate is designed for "
                subHeadingPosition="unset"
                mostCalendarsAreContainerColor="#5c5c5c"
                mostCalendarsAreContainerTextAlign="left"
              />
              <Link
                link="LEARN MORE"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#00b6f0"
              />
            </div>
          </div>
        </div>
        <div className={styles.lightCta1}>
          <div className={styles.content3}>
            <div className={styles.textContent}>
              <SecondHeadline
                secondHeadlinePosition="unset"
                availableExclusivelyOnConColor="#20262a"
                availableExclusivelyOnConTextAlign="left"
              />
              <Paragraphe
                slateHelpsYouSeeHowManyMo="Being a freelancer is a rollercoaster of emotions. We built Slate to keep your "
                paragraphePosition="unset"
                paragraphePadding="10px"
                slateHelpsYouContainerFontFamily="'Circular Std'"
                slateHelpsYouContainerColor="#5c5c5c"
                slateHelpsYouContainerTextAlign="left"
                slateHelpsYouFontFamily="unset"
              />
            </div>
            <div className={styles.progresssBarWithTitle}>
              <div className={styles.title}>Facebook</div>
              <b className={styles.digits}>35,929</b>
              <div className={styles.progressBar}>
                <div className={styles.rectangle} />
                <div className={styles.rectangle1} />
              </div>
            </div>
            <Button1
              button="Get Started For Free"
              buttonPosition="unset"
              buttonFlexShrink="0"
              buttonPadding="var(--padding-xl) var(--padding-17xl)"
              buttonBackgroundColor="#00b6f0"
              buttonBorder="unset"
              buttonTop="unset"
              buttonRight="unset"
              buttonColor="#fff"
            />
          </div>
        </div>
        <div className={styles.lightTestimonial1}>
          <img
            className={styles.lightTestimonial1Child}
            alt=""
            src="/frame-1.svg"
          />
          <Title
            atYourFingertips="Testimonials"
            titlePosition="unset"
            atYourFingertipsColor="#20262a"
          />
          <div className={styles.brands}>
            <img className={styles.logosibmIcon} alt="" src="/logosibm.svg" />
          </div>
          <Paragraphe
            slateHelpsYouSeeHowManyMo="Being a freelancer is a rollercoaster of emotions. "
            toWorkToReachYourFinancia="We built Slate to keep your freelance business less stressful. "
            theMonthAndYear="We'd love to show you what we're building..."
            paragraphePosition="unset"
            paragraphePadding="10px"
            slateHelpsYouContainerFontFamily="'Circular Std'"
            slateHelpsYouContainerColor="#5c5c5c"
            slateHelpsYouContainerTextAlign="center"
            slateHelpsYouFontFamily="unset"
            toWorkToFontFamily="unset"
            theMonthAndFontFamily="unset"
          />
          <div className={styles.client}>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <div className={styles.textContent4}>
              <Link
                link="Esther Webb"
                linkPosition="unset"
                linkPadding="0px var(--padding-3xs)"
                linkColor="#20262a"
              />
              <Subtitle
                organizeAcrossAllAppsByHa="Designer"
                subtitlePosition="unset"
                subtitlePadding="0px var(--padding-3xs)"
                organizeAcrossAllColor="#5c5c5c"
              />
            </div>
          </div>
          <Button1
            button="All Testimonials"
            buttonPosition="unset"
            buttonFlexShrink="0"
            buttonPadding="var(--padding-11xl) var(--padding-31xl)"
            buttonBackgroundColor="#00b6f0"
            buttonBorder="unset"
            buttonTop="unset"
            buttonRight="unset"
            buttonColor="#fff"
          />
        </div>
        <div className={styles.darkPricing4}>
          <div className={styles.content4}>
            <div className={styles.textContent5}>
              <SecondHeadline
                secondHeadlinePosition="unset"
                availableExclusivelyOnConColor="#fff"
                availableExclusivelyOnConTextAlign="left"
              />
              <Paragraphe
                slateHelpsYouSeeHowManyMo="Most calendars are designed for teams. Slate is "
                toWorkToReachYourFinancia="designed for freelancers who want a simple "
                theMonthAndYear="way to plan their schedule."
                paragraphePosition="unset"
                paragraphePadding="10px"
                slateHelpsYouContainerFontFamily="'Circular Std'"
                slateHelpsYouContainerColor="#fff"
                slateHelpsYouContainerTextAlign="left"
                slateHelpsYouFontFamily="unset"
                toWorkToFontFamily="unset"
                theMonthAndFontFamily="unset"
              />
            </div>
            <div className={styles.textContent4}>
              <Subtitle
                organizeAcrossAllAppsByHa="30-DAY FREE TRIAL"
                subtitlePosition="unset"
                subtitlePadding="10px"
                organizeAcrossAllColor="#fff"
              />
              <div className={styles.headlineParent}>
                <div className={styles.headlineParent}>
                  <div className={styles.div}>$5</div>
                </div>
                <SubHeading
                  mostCalendarsAreDesignedF="/month per "
                  freelancersWhoWantASimple="user"
                  subHeadingPosition="unset"
                  mostCalendarsAreContainerColor="#fff"
                  mostCalendarsAreContainerTextAlign="left"
                />
              </div>
              <Paragraphe
                slateHelpsYouSeeHowManyMo="Most calendars are designed "
                toWorkToReachYourFinancia="for teams. "
                paragraphePosition="unset"
                paragraphePadding="var(--padding-xl) var(--padding-3xs)"
                slateHelpsYouContainerFontFamily="'Circular Std'"
                slateHelpsYouContainerColor="#fff"
                slateHelpsYouContainerTextAlign="left"
                slateHelpsYouFontFamily="unset"
                toWorkToFontFamily="unset"
              />
              <Button1
                button="Get Started"
                buttonPosition="unset"
                buttonFlexShrink="0"
                buttonPadding="0px 38px"
                buttonBackgroundColor="#00b6f0"
                buttonBorder="unset"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#fff"
              />
            </div>
          </div>
        </div>
        <div className={styles.lightContent2}>
          <div className={styles.content5}>
            <div className={styles.textBlock}>
              <Title titlePosition="unset" atYourFingertipsColor="#20262a" />
            </div>
            <div className={styles.textRow}>
              <Paragraphe
                slateHelpsYouSeeHowManyMo="Being a freelancer is a rollercoaster of emotions. "
                toWorkToReachYourFinancia="We built Slate to keep your freelance business"
                theMonthAndYear="building..."
                paragraphePosition="unset"
                paragraphePadding="10px"
                slateHelpsYouContainerFontFamily="unset"
                slateHelpsYouContainerColor="#5c5c5c"
                slateHelpsYouContainerTextAlign="left"
                slateHelpsYouFontFamily="'Circular Std'"
                toWorkToFontFamily="'Circular Std'"
                theMonthAndFontFamily="'Circular Std'"
              />
              <Button1
                button="Get Started"
                buttonPosition="unset"
                buttonFlexShrink="0"
                buttonPadding="var(--padding-xl) var(--padding-17xl)"
                buttonBackgroundColor="#00b6f0"
                buttonBorder="unset"
                buttonTop="unset"
                buttonRight="unset"
                buttonColor="#fff"
              />
            </div>
          </div>
        </div>
        <div className={styles.lightFooter1}>
          <div className={styles.brand}>
            <Logo
              logoPosition="unset"
              logoPadding="0px var(--padding-3xs)"
              logoTop="unset"
              logoLeft="unset"
            />
            <Subtitle
              organizeAcrossAllAppsByHa="Just type what's on your mind"
              subtitlePosition="unset"
              subtitlePadding="0px var(--padding-3xs)"
              organizeAcrossAllColor="#5c5c5c"
            />
          </div>
          <div className={styles.menu1}>
            <div className={styles.linkParent}>
              <Link
                link="Home"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#20262a"
              />
              <Link
                link="Product"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#20262a"
              />
              <Link
                link="About"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#20262a"
              />
              <Link
                link="Contact"
                linkPosition="unset"
                linkPadding="10px"
                linkColor="#20262a"
              />
            </div>
          </div>
          <div className={styles.socialMedia}>
            <img
              className={styles.antDesigntwitterOutlinedIcon}
              alt=""
              src="/antdesigntwitteroutlined.svg"
            />
            <img
              className={styles.antDesigntwitterOutlinedIcon}
              alt=""
              src="/antdesignfacebookfilled.svg"
            />
            <img
              className={styles.antDesigntwitterOutlinedIcon}
              alt=""
              src="/antdesignlinkedinfilled.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
