// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import {
  PersonalProContainer,
  SwiperContent,
  ImageSwiper,
  TextSwiper,
  LinksContainer,
} from "./styles";
import LanguageContext from "../../context/Language";
import { useContext } from "react";
import { GoRepo } from 'react-icons/go';
import { LuAppWindow } from 'react-icons/lu';

// Images used on Slides
import memoryGameImg from "../../assets/personal projects screenshots/memoryGame.png";
import pousadaMariartImg from "../../assets/personal projects screenshots/pousadaMariart.png";
import circleOnClickImg from "../../assets/personal projects screenshots/circleOnClick.png";
import igniteShopImg from "../../assets/personal projects screenshots/igniteShop.png";
import githubBlogImg from "../../assets/personal projects screenshots/githubBlog.png";
import coffeeDeliveryImg from "../../assets/personal projects screenshots/coffeeDelivery.png";
import dtMoneyImg from "../../assets/personal projects screenshots/dtMoney.png";
import todoListImg from "../../assets/personal projects screenshots/todoList.png";
import rickAndMortyImg from "../../assets/personal projects screenshots/rickAndMorty.png";

const text = {
  portuguese: {
    title: "Projetos Pessoais",
    memoryGame: {
      title: "Memory Game",
      p1: "Esse projeto é a solução de um desafio nivel avançado do site Frontend Mentor",
      p2: "O objetivo desse projeto é criar um jogo de memória. O usuário terá a opção de escolher o estilos do jogo, numero de jogadores e o tamanho do jogo. No final mostrará o resultado.",
    },
    pousadaMariart: {
      title: "Pousada Mariart",
      p1: "Esse projeto é um site de uma pousada na cidade de Resende Costa - MG.",
      p2: "O objetivo desse site é apresentar a pousada para os interessados. Nesse site contém informações sobre a pousada como localização, os serviços prestados e fotos do local. Além disso, tem também um formulário para o usuário caso ele queira entrar em contato. Tem também telefone e e-mail.",
    },
    circleOnClick: {
      title: "Circle on Clicks",
      p1: "Esse projeto é um exercício comum que é usado durante entrevistas de trabalho, para a posição de júnior.",
      p2: "O objetivo deste exercício é criar um círculo onde o usuário clicar. Tem também dois botões. Um para Desfazer e outro para Refazer. Além disso, coloquei dois inputs. Um para mudar o tamanho do círculo e o outro para mudar a cor dele.",
    },
    igniteShop: {
      title: "Ignite Shop 2.0",
      p1: "Ignite Shop 2.0 é uma loja online onde vende camisas.",
      p2: "Os dados dos produtos (camisas) vem da API do Stripe. Todos os produtos estão listados na página home. Também, tem uma página para cada produto, que mostra os detalhes. Para fazer o carrinho, foi usado ContextAPI. Já que os dados e funcionalidades são usados em vários componentes.",
    },
    githubBlog: {
      title: "GitHub Blog",
      p1: "Este projeto é um blog, usando as issues de um repositório como post do blog.",
      p2: "O aplicativo mostra os meus dados de perfil usando a API do GitHub, também lista todos as issues(blogs) e mostra na página inicial com um pequeno resumo. Além disso, possui um input para pesquisar uma issue(blog).",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      p1: "Este projeto é uma loja online que vende cafés.",
      p2: "Este aplicativo possui uma página inicial onde você pode escolher seus cafés. Em seguida pode preencher o endereço, escolher a forma de pagamento e confirmar o pedido. Muitos conceitos do React foram usados neste projeto, como hooks e componentes. O principal é o Contexto. Como vários componentes precisam das informações sobre a solicitação, o Contexto foi a melhor escolha.",
    },
    dtMoney: {
      title: "DT Money",
      p1: "DT Money é um aplicativo para listar entradas e saidas. Ele soma tudo e mostra um resumo.",
      p2: "Os dados sobre as transações são salvos usando o hook useState. O usuário pode adicionar uma nova transação usando o botão no cabeçalho. Pode ser uma entrada ou um saida. Ele também pode excluir a transação usando o botão de lixeira que aparecerá ao lado de cada transação. Além disso, pode também filtar transações usando o campo de busca.",
    },
    todoList: {
      title: "To Do List",
      p1: "Este aplicativo consiste em praticar conceitos importantes do React, como estado e hooks (UseState e UseEffect). também usar JavaScript vanilla, usando funções de array como filter, map and reduce.",
      p2: "Apesar de ter poucos recursos, tive que prestar atenção nos conceitos como gerenciamento de estado, imutabilidade, uso do hook certo para alterar o estado (useState ou useEffect), componentização, propriedades e tipos. Além disso, o aplicativo é responsivo.",
    },
    rickAndMorty: {
      title: "Rick e Morty API",
      p1: "Este é um projeto simples. Ele usa a react-query para buscar dados sobre o show de Rick e Morty.",
      p2: "A aplicação possui apenas uma página separada em componentes. Além disso, possui um componente de paginação muito amigável que é útil para implementar em projetos futuros. Depois disso, há uma lista dos personagens com seus detalhes, como onde foi visto, nome, status e uma foto. O aplicativo é responsivo.",
    },
  },
  english: {
    title: "Personal Projects",
    memoryGame: {
      title: "Memory Game",
      p1: "This project is the solution to an advanced level challenge from the Frontend Mentor website",
      p2: "The aim of this project is to create a memory game. The user will have the option to choose the style of the game, number of players and the size of the game. At the end it will show the result.",
    },
    pousadaMariart: {
      title: "Pousada Mariart",
      p1: "This project is a website for an inn in the city of Resende Costa - MG",
      p2: "The purpose of this site is to present the inn to those interested. This site contains information about the inn such as location, services provided and photos of the place. In addition, there is also a form for the user if he wants to get in touch. It also has telephone and e-mail.",
    },
    circleOnClick: {
      title: "Circle on Clicks",
      p1: "This project is a common exercice that is used during front-end jobs interviews, to junior position.",
      p2: "The goal of this exercise is to create a circle where the user clicks. Also, it has two buttons. One for Undo and other for Redo. In addition, I put two inputs. One to change the size of the circle and the other to change the color of it.",
    },
    igniteShop: {
      title: "Ignite Shop 2.0",
      p1: "Ignite Shop 2.0 is an online store that sells shirts.",
      p2: "Product data (shirts) comes from the Stripe API. All products are listed on the home page. Also, there is a page for each product, which shows the details. To make the cart, ContextAPI was used. Since data and functionality are used in multiple components.",
    },
    githubBlog: {
      title: "GitHub Blog",
      p1: "This project is a blog, using the issues of a repository as a post of the blog.",
      p2: "The app show my profile data from GitHub API, It also list all issues and show at home page with a small summary. In addtion, it has an input to search an issue (blog).",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      p1: "This project is an online store that sells coffees.",
      p2: "This app have a home page where you can choose your coffees. Then can fill the address, choose payment method and confirm the request. A lot of concepts of React was used in this project, like hooks and components. The main one was Context. Since multiples components need the information about the request, Context was the better choice.",
    },
    dtMoney: {
      title: "DT Money",
      p1: "DT Money is an application to list incomes and outcomes. It sums all of it and show a summary.",
      p2: "The Data about transactions is saved using the useState hook. User can add a new transaction using the button in the header. It can be an income or an outcome. He can also delete the transaction using the trash can button that will appear next to each transaction. In addition, you can also filter transactions using the search field.",
    },
    todoList: {
      title: "To Do List",
      p1: "This app consist in practice the important concepts of React, like State and hooks (UseState and UseEffect). Also work with vanilla JavaScript, using array functions like filter, map and reduce.",
      p2: "Despite having few features, I had to pay attetion of concepts like state managment, state immutability, use the right hook to change the state (useState or useEffect) , componentization, propeties and types. Also, the application is responsive.",
    },
    rickAndMorty: {
      title: "Rick and Morty API",
      p1: "This is a simple project. It uses react query to fetch data about Rick and Morty show.",
      p2: "The application have only one page separated in components. Starts with a simple title and subtitle. Also, it has a very friendly pagination component that is useful to implement in futures projects. After that, there is a list of the characters with its details, like where was seen, name, status and a picture. The application is responsive.",
    },
  },
};

const PersonalProjects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <PersonalProContainer>
      <span id="personal-projects"></span>
      <h1> {text[language].title} </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={memoryGameImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].memoryGame.title}</h3>
              <p>{text[language].memoryGame.p1}</p>
              <p>{text[language].memoryGame.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://memory-game-nu-seven.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/memory-game"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>


        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={pousadaMariartImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].pousadaMariart.title}</h3>
              <p>{text[language].pousadaMariart.p1}</p>
              <p>{text[language].pousadaMariart.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://www.pousadamariart.com.br/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Pousada-Mariart"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={igniteShopImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].igniteShop.title}</h3>
              <p>{text[language].igniteShop.p1}</p>
              <p>{text[language].igniteShop.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>NextJs</li>
                  <li>TypeScript</li>
                  <li>Axios</li>
                  <li>Stripe</li>
                  <li>HTML</li>
                  <li>CSS (Stitches)</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://ignite-shop-2-0-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Challenge-04-Ignite-2022-Ignite-Shop-2.0"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>



        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={githubBlogImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].githubBlog.title}</h3>
              <p>{text[language].githubBlog.p1}</p>
              <p>{text[language].githubBlog.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>Axios</li>
                  <li>HTML</li>
                  <li>CSS (Styled Components)</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://git-hub-blog-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Challenge-03-Ignite-2022-GitHub-Blog"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={coffeeDeliveryImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].coffeeDelivery.title}</h3>
              <p>{text[language].coffeeDelivery.p1}</p>
              <p>{text[language].coffeeDelivery.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS (Styled Components)</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://coffe-delivery-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Challenge-02-Ignite-2022-coffe-delivery"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={dtMoneyImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].dtMoney.title}</h3>
              <p>{text[language].dtMoney.p1}</p>
              <p>{text[language].dtMoney.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS (Styled Components)</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://dt-money-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/DT-Money"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={todoListImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].todoList.title}</h3>
              <p>{text[language].todoList.p1}</p>
              <p>{text[language].todoList.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://to-do-list-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Challenge-01-Ignite-2022-To-do-List"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={circleOnClickImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].circleOnClick.title}</h3>
              <p>{text[language].circleOnClick.p1}</p>
              <p>{text[language].circleOnClick.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>ReactJs</li>
                  <li>TypeScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://circles-on-click.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Circles-on-click"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={rickAndMortyImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].rickAndMorty.title}</h3>
              <p>{text[language].rickAndMorty.p1}</p>
              <p>{text[language].rickAndMorty.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS (StyledComponents)</li>
                </ul>
              </div>

              <LinksContainer>
                <a
                  href="https://rick-and-morty-api-vinicius-pr.vercel.app/"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Check the App" : "Ver App"}
                  <LuAppWindow />
                </a>

                <a
                  href="https://github.com/Vinicius-PR/Rick_and_Morty_API"
                  target="_blank" rel="noreferrer"
                >
                  {language === "english" ? "Go to repo" : "Ver Repo"}
                  <GoRepo />
                </a>
              </LinksContainer>

            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>
      </Swiper>
    </PersonalProContainer>
  );
};

export default PersonalProjects;
