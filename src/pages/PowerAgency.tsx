import { FunctionComponent } from "react";
import TrustedBySection from "../components/TrustedBySection";
import DigitalProductSection from "../components/DigitalProductSection";
import FilteredCardFormContainer from "../components/FilteredCardFormContainer";
import UIUXDesignContainer from "../components/UIUXDesignContainer";
import Button from "../components/Button";
import TopLogo from "../components/TopLogo";
import BottomLogo from "../components/BottomLogo";
import styles from "./PowerAgency.module.css";
const PowerAgency: FunctionComponent = () => {
  return (
    <div className={styles.powerAgency}>
      <div className={styles.baseParent}>
        <div className={styles.base} />
        <TrustedBySection />
        <DigitalProductSection />
        <FilteredCardFormContainer />
        <UIUXDesignContainer />
        <div className={styles.base1} />
        <div className={styles.shape} />
        <div className={styles.watchOurIntroductiContainer}>
          <p className={styles.watchOur}>Watch our</p>
          <p className={styles.watchOur}>introduction video</p>
        </div>
        <img className={styles.buttonIcon} alt="" src="/button.svg" />
        <div className={styles.frameChild} />
        <img className={styles.vectorIcon} alt="" src="/base.svg" />
        <img className={styles.frameItem} alt="" src="/ellipse-12.svg" />
        <b className={styles.craftingDigitalProContainer}>
          <p className={styles.watchOur}>We Design Impactful</p>
          <p className={styles.watchOur}>{`‍Digital `}</p>
        </b>
        <div className={styles.helpFindSolutions}>
          Help find solutions with intitutive and in accordance with client
          business goals. we provide a high-quality services.
        </div>
        <div className={styles.rectangle} />
        <div className={styles.label}>Contact Us</div>
        <div className={styles.aboutUs}>Home</div>
        <div className={styles.portofolio}>About Us</div>
        <div className={styles.portofolio1}>Services</div>
        <div className={styles.products}>Products</div>
        <div className={styles.craftingDigitalProParent}>
          <b className={styles.craftingDigitalPro}>Products</b>
          <img className={styles.groupChild} alt="" src="/rectangle-641.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
        </div>
        <img className={styles.frameInner} alt="" src="/group-2190@2x.png" />
        <img className={styles.groupIcon} alt="" src="/group-2172.svg" />
        <img className={styles.frameChild1} alt="" src="/group-2173.svg" />
        <div className={styles.itemBottom} />
        <div
          className={styles.aboutUsPress}
        >{`About Us                      Press                      Investors                     Events                     Terms of use                     Privacy policy `}</div>
        <b className={styles.company}>Company</b>
        <div className={styles.copyright}>
          © RadialDapps 2023 - All Rights Reserved
        </div>
        <div className={styles.shape1} />
        <div className={styles.shadow} />
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.shadow1} />
        <img className={styles.icon1} alt="" src="/icon1.svg" />
        <div className={styles.shadow2} />
        <img className={styles.icon2} alt="" src="/icon2.svg" />
        <div className={styles.shadow3} />
        <img className={styles.icon3} alt="" src="/icon3.svg" />
        <div className={styles.shadow4} />
        <img className={styles.icon4} alt="" src="/icon.svg" />
        <Button
          button="Contact Us"
          buttonPosition="absolute"
          buttonColor="#fff"
          buttonOverflow="unset"
          buttonPadding="var(--padding-3xs) var(--padding-21xl)"
          buttonAlignItems="flex-start"
          buttonJustifyContent="center"
          buttonMargin="0 !important"
          buttonTop="3764px"
          buttonLeft="1109px"
          buttonBorderRadius="12px"
          buttonBackgroundColor="#1abcfe"
          buttonZIndex="39"
          buttonLetterSpacing="unset"
          buttonLineHeight="unset"
          buttonFontFamily="Poppins"
          buttonTextAlign="center"
          buttonFontWeight="600"
        />
        <TopLogo />
        <BottomLogo />
        <Button
          button="Contact Us"
          buttonPosition="absolute"
          buttonColor="#fff"
          buttonOverflow="unset"
          buttonPadding="var(--padding-3xs) var(--padding-21xl)"
          buttonAlignItems="flex-start"
          buttonJustifyContent="center"
          buttonMargin="0 !important"
          buttonTop="582px"
          buttonLeft="151px"
          buttonBorderRadius="12px"
          buttonBackgroundColor="#1abcfe"
          buttonZIndex="42"
          buttonLetterSpacing="unset"
          buttonLineHeight="unset"
          buttonFontFamily="Poppins"
          buttonTextAlign="center"
          buttonFontWeight="600"
        />
      </div>
    </div>
  );
};

export default PowerAgency;
