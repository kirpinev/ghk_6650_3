import { Typography } from "@alfalab/core-components/typography";
import image10 from "./assets/image10.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";
import image13 from "./assets/image13.png";
import image14 from "./assets/image14.png";
import image15 from "./assets/image15.png";
import image16 from "./assets/image16.png";
import image17 from "./assets/image17.png";
import image18 from "./assets/image18.png";
import image19 from "./assets/image19.png";
import image20 from "./assets/image20.png";
import image21 from "./assets/image21.png";
import image23 from "./assets/image23.png";
import image24 from "./assets/image24.png";
import flower from "./assets/flower.png";
import icon_1 from "./assets/icon_1.png";
import icon_2 from "./assets/icon_2.png";
import icon_3 from "./assets/icon_3.png";
import icon_4 from "./assets/icon_4.png";
import chevron from "./assets/chevron.png";

import slider2Hero from "./assets/slider2Hero.png";
import background from "./assets/background.png";

import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { Status } from "@alfalab/core-components/status";
import { LandingOne } from "./LandingOne.tsx";
import { LandingTwo } from "./LandingTwo.tsx";
import { LandingThree } from "./LandingThree.tsx";
import { LandingFour } from "./LandingFour.tsx";
import { LS, LSKeys } from "./ls";

type BenefitRowProps = {
  iconSrc: string;
  title: string;
  subtitle: string;
};

const BenefitRow = ({ iconSrc, title, subtitle }: BenefitRowProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    }}
  >
    <img
      src={iconSrc}
      alt=""
      width={40}
      height={40}
      style={{ objectFit: "contain" }}
    />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography.Text tag="p" view="primary-small" style={{ marginBottom: 0 }}>
        {title}
      </Typography.Text>
      <Typography.Text
        tag="p"
        view="primary-small"
        color="secondary"
        style={{ marginBottom: 0 }}
      >
        {subtitle}
      </Typography.Text>
    </div>
  </div>
);

const sduiLink =
  "alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/94445%3flocation=AM_MAIN%26campaignCode=01";

const Redirect = () => {
  window.location.href = sduiLink;

  return null;
};

export const App = () => {
  const [thxShow] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [step, setStep] = useState(0);

  if (thxShow) {
    return <Redirect />;
  }

  return (
    <>
      {step === 0 && (
        <div className={appSt.container}>
          <Gap size={20} />
          <div style={{ width: "100%" }}>
            <div className={appSt.cardContainer}>
              <div
                className={appSt.header}
                style={{ backgroundColor: "#BA3DD8" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Typography.TitleResponsive
                      font="system"
                      tag="h3"
                      view="small"
                      className={appSt.productsTitle}
                      style={{ fontSize: "20px" }}
                    >
                      15 привилегий
                    </Typography.TitleResponsive>
                    <Gap size={4} />
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0, color: "white" }}
                    >
                      Первый месяц бесплатно, дальше&nbsp;— 399&nbsp;₽
                      в&nbsp;месяц
                    </Typography.Text>
                  </div>
                  <img src={slider2Hero} alt="" width={80} height={80} />
                </div>
              </div>

              <Gap size={32} />

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{ marginBottom: 0, fontWeight: "500" }}
                  >
                    Смарт-курсы
                  </Typography.Text>
                  <Status size={24} uppercase={false} className={appSt.status}>
                    Новое
                  </Status>
                </div>
                <Gap size={16} />
                <div
                  onClick={() => {
                    setStep(1);
                    window.gtag("event", "6650_course_click", {
                      course_name: "Создание и продвижение бизнеса",
                      variant_name: "6650_3",
                    });
                  }}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.5rem 0 0.5rem 0",
                  }}
                >
                  <img src={icon_1} alt="" width={40} height={40} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0 }}
                    >
                      Создание и продвижение бизнеса
                    </Typography.Text>
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      color="secondary"
                      style={{ marginBottom: 0 }}
                    >
                      Пройдено 0 из 4
                    </Typography.Text>
                  </div>
                  <img src={chevron} alt="" width={24} height={24} />
                </div>
                <div
                  onClick={() => {
                    setStep(2);
                    window.gtag("event", "6650_course_click", {
                      course_name: "Личная эффективность",
                      variant_name: "6650_3",
                    });
                  }}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.5rem 0 0.5rem 0",
                  }}
                >
                  <img src={icon_2} alt="" width={40} height={40} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0 }}
                    >
                      Личная эффективность
                    </Typography.Text>
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      color="secondary"
                      style={{ marginBottom: 0 }}
                    >
                      Пройдено 0 из 4
                    </Typography.Text>
                  </div>
                  <img src={chevron} alt="" width={24} height={24} />
                </div>
                <div
                  onClick={() => {
                    setStep(3);
                    window.gtag("event", "6650_course_click", {
                      course_name: "AI в работе и жизни",
                      variant_name: "6650_3",
                    });
                  }}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.5rem 0 0.5rem 0",
                  }}
                >
                  <img src={icon_3} alt="" width={40} height={40} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0 }}
                    >
                      AI в работе и жизни
                    </Typography.Text>
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      color="secondary"
                      style={{ marginBottom: 0 }}
                    >
                      Пройдено 0 из 4
                    </Typography.Text>
                  </div>
                  <img src={chevron} alt="" width={24} height={24} />
                </div>
                <div
                  onClick={() => {
                    setStep(4);
                    window.gtag("event", "6650_course_click", {
                      course_name: "Бизнес на маркетплейсах",
                      variant_name: "6650_3",
                    });
                  }}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "0.5rem 0 0.5rem 0",
                  }}
                >
                  <img src={icon_4} alt="" width={40} height={40} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "auto",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0 }}
                    >
                      Бизнес на маркетплейсах
                    </Typography.Text>
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      color="secondary"
                      style={{ marginBottom: 0 }}
                    >
                      Пройдено 0 из 4
                    </Typography.Text>
                  </div>
                  <img src={chevron} alt="" width={24} height={24} />
                </div>
              </div>

              <div className={appSt.footer}>
                <Gap size={32} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{ marginBottom: 0, fontWeight: "500" }}
                  >
                    Топ-привилегии
                  </Typography.Text>
                  <div
                    style={{
                      padding: "4px 16px",
                      borderRadius: "16px",
                      backgroundImage: `url(${background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <Typography.Text
                      tag="p"
                      view="primary-small"
                      style={{ marginBottom: 0, color: "white" }}
                    >
                      Рекомендуем
                    </Typography.Text>
                  </div>
                </div>
                <Gap size={16} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <BenefitRow
                    iconSrc={flower}
                    title="Розыгрыш 1 000 000 ₽"
                    subtitle="И других призов ежемесячно"
                  />
                  <BenefitRow
                    iconSrc={image10}
                    title="4 категории кэшбэка"
                    subtitle="Включая 1 популярную категорию"
                  />
                  <BenefitRow
                    iconSrc={image11}
                    title="7 000 ₽ в месяц"
                    subtitle="Лимит кэшбэка в категориях"
                  />
                  <BenefitRow
                    iconSrc={image12}
                    title="2 прокрутки барабана"
                    subtitle="Шанс выиграть до 100% кэшбэка"
                  />
                  <BenefitRow
                    iconSrc={image13}
                    title="+2% годовых к ставке по Альфа-Счёту"
                    subtitle="На ежедневный остаток"
                  />
                  <BenefitRow
                    iconSrc={image14}
                    title="Бесплатная мобильная связь"
                    subtitle="100 минут, 3 ГБ и безлимитные мессенджеры"
                  />
                </div>
                <Gap size={32} />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Typography.Text
                    tag="p"
                    view="primary-medium"
                    style={{ marginBottom: 0, fontWeight: "500" }}
                  >
                    Другие привилегии
                  </Typography.Text>
                </div>
                <Gap size={16} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <BenefitRow
                    iconSrc={image15}
                    title="Семейный доступ за 100 ₽"
                    subtitle="До 2 участников на уровне"
                  />
                  <BenefitRow
                    iconSrc={image16}
                    title="Эксклюзивный кэшбэк"
                    subtitle="Специальные предложения от партнёров"
                  />
                  <BenefitRow
                    iconSrc={image17}
                    title="0,24% комиссия за сделки на бирже"
                    subtitle="С ценными бумагами и валютой"
                  />
                  <BenefitRow
                    iconSrc={image18}
                    title="Бесплатное обслуживание"
                    subtitle="По дебетовой Альфа-Карте"
                  />
                  <BenefitRow
                    iconSrc={image19}
                    title="Пропуск платежа по кредитной карте"
                    subtitle="Без штрафов и просрочек"
                  />
                  <BenefitRow
                    iconSrc={image20}
                    title="+40 дней без % по кредитной карте"
                    subtitle="Больше времени погасить долг"
                  />
                  <BenefitRow
                    iconSrc={image21}
                    title="Бесплатные переводы без ограничений"
                    subtitle="В любые банки другим людям"
                  />
                  <BenefitRow
                    iconSrc={image23}
                    title="Бесплатные уведомления"
                    subtitle="По дебетовым картам"
                  />
                  <BenefitRow
                    iconSrc={image24}
                    title="Персональная поддержка"
                    subtitle="Выделенная линия в чате"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 1 && <LandingOne handleClick={() => setStep(0)} />}
      {step === 2 && <LandingTwo handleClick={() => setStep(0)} />}
      {step === 3 && <LandingThree handleClick={() => setStep(0)} />}
      {step === 4 && <LandingFour handleClick={() => setStep(0)} />}
    </>
  );
};
