import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Divider } from '@material-ui/core'
import styled from "styled-components";
import { format } from "date-fns";

import UserContext from "../../services/contexts/useUserContext";

import Carousel from "../../components/carousel";


const useStyles = makeStyles(theme => ({
  wrapper: {
    marginBottom: "5rem",
    overflowY: "hidden",
    padding: "0 1rem",
  },
  mainSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2rem 1rem",
  },
  sidebar: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "30rem",
    padding: "2rem 1rem",
  },
}));

const TitleText = styled.h1`
  font-size: 1.5rem;
  margin-left: 1rem;
  max-width: 27rem;
`;

const MainSection = styled.div`
  border: solid 1px #cdcdcd;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  width: 100%;
`;
const Sidebar = styled.div`
  border: solid 1px #cdcdcd;
  border-radius: 1rem;
  height: 30rem;
  padding: 2rem 1rem;
  width: 100%;
`;
const Description = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 0 1rem;
  line-height: 1.25rem;
`;

const Comment = styled.textarea`
  border-radius: 0.5rem;
  height: 7.5rem;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
`;

const SendButton = styled.button`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-right: 1rem;
  background: #3a3a3a;
  border: solid 1px #3a3a3a;
  border-radius: 0.25rem;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  width: 10rem;
  &:hover {
    cursor: pointer;
  }
`;

const CommentList = styled.div`
  margin-top: 1rem;
`;
const CommentItem = styled.div`
  border: solid 1px #cdcdcd;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  margin: 0 auto 0.5rem;
  min-height: 2.5rem;
  max-width: 50rem;
`;
const Username = styled.span`
  font-size: 0.75rem;
  font-weight: bolder;
`;

const DateWrapper = styled.p`
  font-size: 0.75rem;
  width: 100%;
  margin: 0;
  text-align: right;
`;

const DashboardComponent = () => {

  const classes = useStyles();

  const { user } = useContext(UserContext);
  const { user: userData } = JSON.parse(user);

  

  const [comment, setComment] = useState(null);
  const [commentsList, setCommentsList] = useState([]);
  const today = format(new Date(), "MM/dd/yyyy - h:m b");

  const articles = [
    {
      title:
        "Para AmCham regular plataformas de transporte estimulará inversión extranjera",
      link:
        "https://www.dinero.com/economia/articulo/plataformas-de-transporte-estimularian-la-inversion-extranjera-y-el-empleo/293976",
    },
    {
      title:
        "Sector salud colombiano ingresó a gremio de aplicaciones en Latinoamérica",
      link:
        "https://www.rcnradio.com/tecnologia/sector-salud-colombiano-ingreso-gremio-de-aplicaciones-en-latinoamerica",
    },
    {
      title: "El regreso de Uber a Colombia, la próxima pelea",
      link:
        "https://www.semana.com/tecnologia/articulo/regreso-de-uber-a-colombia-la-proxima-pelea/683938",
    },
    {
      title:
        "Colombia ocupó el puesto 45 en la nueva edición del Índice de Libertad Económica",
      link:
        "https://www.larepublica.co/globoeconomia/colombia-ocupo-el-puesto-45-en-la-nueva-edicion-del-indice-de-libertad-economica-3029961",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setCommentsList([...commentsList, comment]);
    setComment("");
  };

  return (
    <>
      <Carousel />
      <Grid container className={classes.wrapper} spacing={2}>
        <Grid item xs={12} lg={8}>
        <Paper elevation={1} className={classes.mainSection}>
          <TitleText>Economías colaborativas</TitleText>
          <Description>
            En Colombia, las economías colaborativas han surgido como una
            solución o alternativa al desempleo, pero, su mal enfoque o al
            tomarse como actividad principal ha hecho que surja un debate sobre
            su legalidad llevando incluso a la restricción de algunas
            plataformas que prestan servicios bajo este modelo de economía, lo
            que ha llevado a que muchas familias se queden sin sustento para el
            día a día.
            <br />
            <br />
            Siendo este tipo de economías, un sustento para tántos colombianos
            ante la falta de oportunidades, regularlas y normalizarlas se alzan
            como necesidad.
            <br />
            <br />
            <b>
              Queremos saber tu opinión, ¿Estás de acuerdo en su regulación?,
              ¿Cómo lo propondrías?
            </b>
          </Description>

          <Comment
            placeholder="Dejanos saber tu opinión..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <SendButton onClick={(e) => handleClick(e)} disabled={comment === ""}>
            Enviar
          </SendButton>
          <CommentList>
            {commentsList.map((comment) => (
              <CommentItem>
                <Username>{userData.displayName}</Username>

                <p
                  style={{
                    textAlign: "justify",
                    maxWidth: "90%",
                    fontSize: "0.85rem",
                    marginTop: "1rem",
                  }}
                >
                  {comment}
                </p>
                <DateWrapper>{today}</DateWrapper>
              </CommentItem>
            ))}
          </CommentList>
        </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
        <Paper elevation={1} className={classes.sidebar}>
          <TitleText>Artícuros relacionados</TitleText>
          {articles.map((article) => (
            <>
            <li style={{width: "100%"}}>
              <a href={article.link} target="_blank">
                {article.title}
              </a>
            </li>
            <Divider/>
            </>
          ))}
        </Paper >
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
