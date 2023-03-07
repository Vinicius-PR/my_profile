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
} from "./styles";
import LanguageContext from "../../context/Language";
import { useContext } from "react";

// Images used on Slides
import circleOnClickImg from "../../assets/personal projects screenshots/circleOnClick.png";
import igniteShopImg from "../../assets/personal projects screenshots/igniteShop.png";
import githubBlogImg from "../../assets/personal projects screenshots/githubBlog.png";
import coffeeDeliveryImg from "../../assets/personal projects screenshots/coffeeDelivery.png";
import dtMoneyImg from "../../assets/personal projects screenshots/dtMoney.png";
import todoListImg from "../../assets/personal projects screenshots/todoList.png";
import galleryWithZoomImg from "../../assets/personal projects screenshots/galleryWithZoom.png";
import rickAndMortyImg from "../../assets/personal projects screenshots/rickAndMorty.png";

const text = {
  portuguese: {
    title: "Projetos Pessoais",
    circleOnClick: {
      title: "Circle on Clicks",
      p1: "Esse projeto é um exercicio comum que é usado durante entrevistas de trabalho, para a posição de junior.",
      p2: "O objetivo deste exercício é criar um círculo onde o usuário clicar. Tem também dois botões. Um para Desfazer e outro para Refazer. Além disso, coloquei dois inputs. Um para mudar o tamanho do círculo e o outro para mudar a cor dele.",
    },
    igniteShop: {
      title: "Ignite Shop 2.0",
      p1: "Ignite Shop 2.0 é uma loja online onde vende camisas.",
      p2: "Os dados dos produtos (camisas) vem da API do Stripe. Todos os produtos estão listados na página home. Também, tem uma página para cada produto, que mostra imagem, nome, descrição e preço. Para fazer o carrinho, foi usado ContextAPI. Ele salva os produtos escolhidos e calcula o total. Além disso, o usuário pode aumentar ou diminuir itens de casa produto direto no carrinho.",
    },
    githubBlog: {
      title: "GitHub Blog",
      p1: "Este projeto é um blog, usando as issues de um repositório como post do blog. O aplicativo consome a API do GitHub para obter os dados.",
      p2: "Para fazer esta aplicação, foi utilizado React com typescript, Axios, react-hook-form, react-router e outras bibliotecas. O aplicativo mostra os meus dados de perfil usando a API do GitHub, também lista todos as issues(blogs) e mostra na página inicial com um pequeno resumo. Além disso, possui um input para pesquisar uma issue(blog).",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      p1: "Este projeto é uma loja online que vende cafés.",
      p2: "Este aplicativo possui uma página inicial onde você pode escolher seus cafés. Em seguida pode preencher o endereço, escolher a forma de pagamento e confirmar o pedido. Muitos conceitos do React foram usados neste projeto, como hooks e componentes. O principal é o Contexto. Como vários componentes precisam das informações sobre a solicitação, o Contexto foi a melhor escolha.",
    },
    dtMoney: {
      title: "DT Money",
      p1: "DT Money é um aplicativo para listar entradas e saidas. Ele soma tudo e mostra um resumo. Tem apenas 1 página.",
      p2: "Os dados sobre as transações são salvos em um arquivo json. A biblioteca Json-server e Axios são usados para isso, para imitar um back-end. O usuário pode adicionar uma nova transação usando o botão no cabeçalho. Pode ser uma entrada ou um saida. Ele também pode excluir a transação usando o botão de lixeira que aparecerá ao lado da transação.",
    },
    todoList: {
      title: "To Do List",
      p1: "Este aplicativo consiste em praticar conceitos importantes do React. Usar estado e hooks (UseState e UseEffect). também usar JavaScript vanilla, usando funções de array como filter, map and reduce.",
      p2: "Apesar de ter poucos recursos, tive que prestar atenção nos conceitos como gerenciamento de estado, imutabilidade, uso do hook certo para alterar o estado (useState ou useEffect), componentização, propriedades e tipos. O código é bem dividido e fácil de entender. Tem alguns componentes e o código está bem escrito. Além disso, o aplicativo é responsivo. Funciona bem na versão mobile.",
    },
    galleryWithZoom: {
      title: "Galeria com zoom",
      p1: "Galeria com zoom usando apenas JavaScript, HTML e CSS. Nenhum framework ou bibliotecas. Esta galeria é apenas para desktop.",
      p2: "Este tipo de galeria é muito comum hoje em dia. Dê ao usuário a capacidade de alterar e ampliar a imagem sem um único clique. Basta passar o mouse na miniatura para alterar a imagem principal. Também pode ver um zoom da imagem passando o mouse sobre a imagem.",
    },
    rickAndMorty: {
      title: "Rick e Morty API",
      p1: "Este é um projeto simples. Ele usa a react-query para buscar dados sobre o show de Rick e Morty. Ele lista todos os personagens com seus detalhes.",
      p2: "A aplicação possui apenas uma página separada em componentes. Começa com um título e subtítulo simples. Além disso, possui um componente de paginação muito amigável que é útil para implementar em projetos futuros. Depois disso, há uma lista dos personagens com seus detalhes, como onde foi visto, nome, status e uma foto. O aplicativo é responsivo. Funciona perfeitamente em tamanhos de tela de celulares.",
    },
  },
  english: {
    title: "Personal Projects",
    circleOnClick: {
      title: "Circle on Clicks",
      p1: "This project is a common exercice that is used during front-end jobs interviews, to junior position.",
      p2: "The goal of this exercise is to create a circle where the user clicks. Also, it has two buttons. One for Undo and other for Redo. In addition, I put two inputs. One to change the size of the circle and the other to change the color of it.",
    },
    igniteShop: {
      title: "Ignite Shop 2.0",
      p1: "Ignite Shop 2.0 is an online store that sells shirts.",
      p2: "The data about the products (shirts) come from Stripe API. All the products are listed on the home page. Also, there is a page for each product. It shows the image, name, description and price. To do the cart, ContextAPI was used. It saves the chosen products and calculate the total. Also, the user can increase or decrease the quantity of each product in the cart.",
    },
    githubBlog: {
      title: "GitHub Blog",
      p1: "This project is a blog, using the issues of a repository as a post of the blog. The app consume GitHub API to get the data.",
      p2: "To do this application, was used React with typescript, Axios, react-hook-form, react-router and others libraries. The app show my profile data from GitHub API, It also list all issues and show at home page with a small summary. In addtion, it has an input to search an issue (blog).",
    },
    coffeeDelivery: {
      title: "Coffee Delivery",
      p1: "This project is an online store that sells coffees.",
      p2: "This app have a home page where you can choose your coffees. Then can fill the address, choose payment method and confirm the request. A lot of concepts of React was used in this project, like hooks and components. The main one was Context. Since multiples components need the information about the request, Context was the better choice.",
    },
    dtMoney: {
      title: "DT Money",
      p1: "DT Money is an application to list incomes and outcomes. It sums all of it and show a summary. It has only 1 page.",
      p2: "The data about transactions is saved in a json file. Json-server library and Axios are used for it, to mimicry a back-end. The user can add a new transaction using the button on the header. It can be an income or outcome. He can also delete the transaction using the trash button that will display beside the transaction.",
    },
    todoList: {
      title: "To Do List",
      p1: "This app consist in practice the important concepts of React. Use State and hooks (UseState and UseEffect). Also work with vanilla JavaScript, using array functions like filter, map and reduce.",
      p2: "Despite having few features, I had to pay attetion of concepts like state managment, state immutability, use the right hook to change the state (useState or useEffect) , componentization, propeties and types. The code is well divided and easy to understand. Have a few components and code is well written. Also, the application is responsive. It Works well in the mobile version.",
    },
    galleryWithZoom: {
      title: "Gallery with zoom",
      p1: "Gallery with zoom using JavaScript, HTML and CSS only. No framework or libraries. This gallery is for desktop only.",
      p2: "This kind of gallery is very common nowdays. Give the user the abilaty to change and zoon the image without a single click. Just have to hover in the thumbnail to change the main image. Also can see a zoom of the image by hovering over the image.",
    },
    rickAndMorty: {
      title: "Rick and Morty API",
      p1: "This is a simple project. It uses react query to fetch data about Rick and Morty show. It list all characters with its details.",
      p2: "The application have only one page separated in components. Starts with a simple title and subtitle. Also, it has a very friendly pagination component that is useful to implement in futures projects. After that, there is a list of the characters with its details, like where was seen, name, status and a picture. The application is responsive. Works perfectly on mobiles screen sizes.",
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
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Circles-on-click"
                target="_blank"
              >
                Go to repo
              </a>
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
                  <li>ReactJs</li>
                  <li>NextJs</li>
                  <li>TypeScript</li>
                  <li>Axios</li>
                  <li>CSS (Stitches)</li>
                  <li>HTML</li>
                  <li>Stripe</li>
                  <li>Keen Slider</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Challenge-04-Ignite-2022-Ignite-Shop-2.0"
                target="_blank"
              >
                Go to repo
              </a>
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
                  <li>CSS (Styled Components)</li>
                  <li>HTML</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Challenge-03-Ignite-2022-GitHub-Blog"
                target="_blank"
              >
                Go to repo
              </a>
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
                  <li>HTML</li>
                  <li>CSS (Styled Components)</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Challenge-02-Ignite-2022-coffe-delivery"
                target="_blank"
              >
                Go to repo
              </a>
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
                  <li>CSS (Styled Components)</li>
                  <li>HTML</li>
                </ul>
              </div>
              <a href="https://github.com/Vinicius-PR/DT-Money" target="_blank">
                Go to repo
              </a>
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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Challenge-01-Ignite-2022-To-do-List"
                target="_blank"
              >
                Go to repo
              </a>
            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>

        <SwiperSlide>
          <SwiperContent>
            <ImageSwiper>
              <img src={galleryWithZoomImg} alt="" />
            </ImageSwiper>

            <TextSwiper>
              <h3>{text[language].galleryWithZoom.title}</h3>
              <p>{text[language].galleryWithZoom.p1}</p>
              <p>{text[language].galleryWithZoom.p2}</p>

              <div>
                <h3>
                  {language === "english"
                    ? "Technolages used"
                    : "Tecnologias Usadas"}
                </h3>
                <br />
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Gallery-with-zoom"
                target="_blank"
              >
                Go to repo
              </a>
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
                  <li>HTML</li>
                  <li>CSS (StyledComponents)</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>React Query</li>
                </ul>
              </div>
              <a
                href="https://github.com/Vinicius-PR/Rick_and_Morty_API"
                target="_blank"
              >
                Go to repo
              </a>
            </TextSwiper>
          </SwiperContent>
        </SwiperSlide>
      </Swiper>
    </PersonalProContainer>
  );
};

export default PersonalProjects;
