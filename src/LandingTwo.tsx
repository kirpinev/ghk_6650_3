import { appSt } from "./style.css.ts";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import icon from "./assets/icon_land_2.png";
import image from "./assets/image_land_2.png";
import chevron from "./assets/chevron_purple.png";
import lock from "./assets/lock.png";
import { Gap } from "@alfalab/core-components/gap";
import { Typography } from "@alfalab/core-components/typography";
import { useState } from "react";
import { LS, LSKeys } from "./ls";

const sduiLink =
  "alfabank://sdui_screen?screenName=InvestmentLongread&fromCurrent=true&shouldUseBottomSafeArea=true&endpoint=v1/invest-main-screen-view/investment-longread/94445%3flocation=AM_MAIN%26campaignCode=01";

const Redirect = () => {
  window.location.href = sduiLink;

  return null;
};

export const LandingTwo = ({ handleClick }: { handleClick: () => void }) => {
  const [click, setClick] = useState(false);

  if (click) {
    return <Redirect />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Gap size={16} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={icon} alt="" width={24} height={24} />
          <Gap size={8} />
          <Typography.TitleResponsive
            font="system"
            tag="h3"
            view="small"
            className={appSt.productsTitle}
            style={{
              fontSize: "30px",
              color: "black",
              textAlign: "center",
              width: "100%",
              maxWidth: "311px",
              lineHeight: "36px",
            }}
          >
            Личная эффективность
          </Typography.TitleResponsive>
          <Gap size={8} />
          <Typography.Text
            tag="p"
            view="primary-medium"
            color="secondary"
            style={{ marginBottom: 0 }}
          >
            Смарт-курс
          </Typography.Text>
        </div>
        <Gap size={16} />
        <img src={image} alt="" />
        <div
          style={{
            padding: "8px 16px",
            background: "#F7EBFD",
            borderRadius: "16px",
            height: "480px",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "8px" }}>
            <Typography.Text
              tag="p"
              view="primary-large"
              style={{ marginBottom: 0, fontSize: "22px", fontWeight: "500" }}
            >
              Обучение
            </Typography.Text>
            <Gap size={4} />
            <Typography.Text
              tag="p"
              view="primary-medium"
              color="secondary"
              style={{ marginBottom: 0 }}
            >
              Уроки от специалистов добавляются каждый месяц
            </Typography.Text>
          </div>
          <Gap size={8} />
          <div
            style={{
              padding: "16px",
              background: "white",
              borderRadius: "16px",
            }}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              onClick={() => {
                window.gtag("event", "6650_start_study_click", {
                  course_name: "Личная эффективность",
                  variant_name: "6650_3",
                });

                setClick(true);
                LS.setItem(LSKeys.ShowThx, true);
              }}
            >
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0, fontWeight: "500" }}
              >
                Секреты управления мышлением и стрессом
              </Typography.Text>
              <img src={chevron} alt="" width={24} height={24} />
            </div>
            <Gap size={16} />
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0, fontWeight: "500", color: "#BA3DD8" }}
            >
              Начать обучение
            </Typography.Text>
          </div>
          <Gap size={8} />
          <div
            style={{
              padding: "16px",
              background: "white",
              borderRadius: "16px",
              opacity: "0.5",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0, fontWeight: "500" }}
              >
                Личная эффективность: как сбросить балласт и начать действовать
              </Typography.Text>
              <img src={lock} alt="" width={24} height={24} />
            </div>
            <Gap size={16} />
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0, fontWeight: "500", color: "#BA3DD8" }}
            >
              Доступно со 2 месяца
            </Typography.Text>
          </div>
          <Gap size={8} />
          <div
            style={{
              padding: "16px",
              background: "white",
              borderRadius: "16px",
              opacity: "0.5",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0, fontWeight: "500" }}
              >
                Ключи к эффективному лидерству
              </Typography.Text>
              <img src={lock} alt="" width={24} height={24} />
            </div>
            <Gap size={16} />
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0, fontWeight: "500", color: "#BA3DD8" }}
            >
              Доступно с 3 месяца
            </Typography.Text>
          </div>
          <Gap size={8} />
          <div
            style={{
              padding: "16px",
              background: "white",
              borderRadius: "16px",
              opacity: "0.5",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography.Text
                tag="p"
                view="primary-medium"
                style={{ marginBottom: 0, fontWeight: "500" }}
              >
                Генерируем идеи для бизнеса: курс-практикум
              </Typography.Text>
              <img src={lock} alt="" width={24} height={24} />
            </div>
            <Gap size={16} />
            <Typography.Text
              tag="p"
              view="primary-small"
              style={{ marginBottom: 0, fontWeight: "500", color: "#BA3DD8" }}
            >
              Начать обучение
            </Typography.Text>
          </div>
        </div>
        <Gap size={16} />
        <Typography.Text
          tag="p"
          view="primary-small"
          style={{
            marginBottom: 0,
            fontWeight: "500",
            color: "#BA3DD8",
            textAlign: "center",
          }}
        >
          Большая библиотека уроков
        </Typography.Text>
        <Gap size={48} />
        <Typography.Text
          tag="p"
          view="primary-large"
          style={{ marginBottom: 0, fontWeight: "500" }}
        >
          Преимущества
        </Typography.Text>
        <Gap size={32} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
            padding: "16px",
            background: "#F3F4F5",
          }}
        >
          <Typography.Text
            tag="p"
            view="primary-medium"
            style={{ marginBottom: 0, fontWeight: "500" }}
          >
            Курс создан экспертами
          </Typography.Text>
          <Typography.Text
            tag="p"
            view="primary-small"
            color="secondary"
            style={{ marginBottom: 0 }}
          >
            Курс разработан практикующими специалистами
          </Typography.Text>
          <Gap size={16} />
          <Typography.Text
            tag="p"
            view="primary-medium"
            style={{ marginBottom: 0, fontWeight: "500" }}
          >
            Пошаговый формат
          </Typography.Text>
          <Typography.Text
            tag="p"
            view="primary-small"
            color="secondary"
            style={{ marginBottom: 0 }}
          >
            Не теория, а чёткие инструкции и примеры
          </Typography.Text>
          <Gap size={16} />
          <Typography.Text
            tag="p"
            view="primary-medium"
            style={{ marginBottom: 0, fontWeight: "500" }}
          >
            Шаблоны документов
          </Typography.Text>
          <Typography.Text
            tag="p"
            view="primary-small"
            color="secondary"
            style={{ marginBottom: 0 }}
          >
            Все нужные документы под рукой
          </Typography.Text>
        </div>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={() => {
            handleClick();

            window.gtag("event", "6650_back_tolist_click", {
              course_name: "Личная эффективность",
              variant_name: "6650_3",
            });
          }}
        >
          Вернуться к списку
        </ButtonMobile>
      </div>
    </>
  );
};
