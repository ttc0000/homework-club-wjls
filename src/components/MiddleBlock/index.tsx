import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "../Footer/styles";

import { CustomASmall, Span } from "./styles";

interface MiddleBlockProps {
  title: string;
  contents: any;
  button: string;
  t: TFunction;
  id: string;
  link: string;
  linkDescription: string;
}

const MiddleBlock = ({
  title,
  contents,
  button,
  id,
  link,
  linkDescription,
  t,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              {contents.map((content: any, idx: number) => {
                if (content.table) {
                  const { headers, rows } = content.table;
                  return (
                    <div key={idx} style={{ overflowX: "auto", margin: "1rem 0" }}>
                      <table style={{ borderCollapse: "collapse" }}>
                        <tbody>
                          {headers.map((header: string, hi: number) => (
                            <tr key={hi}>
                              <th style={{ border: "1px solid #ccc", padding: "6px 12px", textAlign: "center", whiteSpace: "nowrap" }}>{header}</th>
                              {rows.map((row: string[], ri: number) => (
                                <td key={ri} style={{ border: "1px solid #ccc", padding: "6px 12px", textAlign: "center" }}>{row[hi]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                if (content.link) {
                  return (
                    <span key={idx}>
                      <Content>{t(content.text)}</Content>
                      <CustomASmall href={content.link} target="_blank">
                        <Span>{content.linkDescription}</Span>
                      </CustomASmall>
                    </span>
                  );
                }
                return <Content key={idx}>{t(content.text)}</Content>;
              })}
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
