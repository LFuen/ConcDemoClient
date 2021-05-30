import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import {
  fadeInDown,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
} from "react-animations";

// LOGIN SCREEN
const loginFade = keyframes`${fadeInDown}`;
const Login = styled.section`
  width: 583px;
  height: inherit;
  display: flex;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  align-items: center;
  justify-content: center;

  article {
    margin: auto;
    text-align: center;
  }

  form {
    position: relative;
    bottom: 30px;
  }

  h1 {
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
  }

  .log-input {
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
    border-radius: 10px;
  }

  input[type="password"] {
    text-align: center;
    border: none;
    border-radius: 10px;
  }

  input[type="password"]:focus {
    outline: none;
  }

  input[type="text"] {
    text-align: center;
    border: none;
    border-radius: 10px;
  }

  input[type="text"]:focus {
    outline: none;
  }

  #employee-id {
    background: #f0ebeb;
    font-family: Rockwell;
    border-style: none;
  }

  #login {
    background: #b9e6ff;
    text-decoration: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-family: Rockwell;
    margin-top: 15px;
    margin-bottom: 20px;
    border-style: none;
  }

  #login:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  #ledjj {
    position: relative;
    bottom: 20px;
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }

  animation: 1s ${loginFade};
`;

// APP SELECTOR
const selectFade = keyframes`${fadeInUp}`;
const Selector = styled.section`
  width: 583px;
  height: 364px;
  margin: 60px auto; // remove when components are moved from APP
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  align-items: center;

  .articles {
    position: relative;
    top: 142px;
  }

  .powered {
    position: relative;
    top: 210px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .prod {
    background: #6aeaa5;
    border-style: none;
    padding: 20px;
  }

  .calc {
    background: #f3b080;
    border-style: none;
    padding: 20px;
  }

  .logout {
    background: #b6244f;
    border-style: none;
    padding: 10px;
    color: whitesmoke;
    position: relative;
    top: 180px;
  }

  .logout:hover {
    transition: all 0.3s ease-out;
    background-color: #bfada3;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  button {
    text-decoration: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-family: Rockwell;
    font-size: 20px;
    font-weight: bold;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }
  button:focus {
    outline: none;
  }

  article {
    text-align: center;
  }

  span {
    bottom: 0;
    margin-top: 50px;
  }

  #ledjj {
    font-family: Rockwell;
    position: relative;
    bottom: 40px;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }

  animation: 1s ${selectFade};
`;

// CALCULATOR APP
const calcFade = keyframes`${fadeInRight}`;
const CalcForm = styled.form`
  width: 583px;
  height: inherit;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  text-align: center;

  h1 {
    position: relative;
    right: 29px;
    bottom: 60px;
    margin: 20px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
  }

  #kilo {
    position: relative;
    width: 65%;
    bottom: 45px;
    background-color: #b2ff9e;
  }

  #kilo:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }

  #backH1 {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    bottom: 300px;
  }

  #back {
    position: relative;
    bottom: 40px;
    left: 30px;
  }

  div {
    position: relative;
    top: 30px;
  }

  section {
    text-align: center;
  }

  label {
    margin-top: 15px;
    color: black;
    font-family: Rockwell;
    font-weight: bold;
    display: block;
  }
  h2 {
    color: #0d3b4c;
  }
  button {
    background: #b9e6ff;
    text-decoration: none;
    font-family: Rockwell;
    border-radius: 10px;
    font-size: 18px;
    padding: 0.5rem 1rem;
    border-style: none;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }
  button:focus {
    outline: none;
  }

  .logout {
    background: #b6244f;
    border-style: none;
    color: whitesmoke;
    padding: 10px;
    position: relative;
    left: 230px;
    bottom: 25px;
  }

  .logout:hover {
    transition: all 0.3s ease-out;
    background-color: #bfada3;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  p {
    font-size: 10px;
  }
  animation: 1s ${calcFade};

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  .choose {
    position: relative;
    top: 20px;
  }

  select {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    padding-right: 25px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
    background-position-x: 244px;
  }

  select:focus {
    outline: none;
  }

  select[type="text"] {
    width: fit-content;
  }

  input {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }
`;
const KiloForm = styled.form`
  width: 583px;
  height: inherit;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  text-align: center;

  h1 {
    position: relative;
    right: 10px;
    bottom: 40px;
    margin: 20px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
  }

  #kilo {
    position: relative;
    width: 65%;
    padding: 10px;
    bottom: 35px;
    background-color: #b2ff9e;
  }

  #kilo:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }

  #backH1 {
    display: flex;
    justify-content: space-evenly;
    position: relative;
  }

  #back {
    position: relative;
    bottom: 20px;
    left: 30px;
  }

  div {
    position: relative;
    top: 30px;
  }

  section {
    text-align: center;
  }

  label {
    margin-top: 15px;
    color: black;
    font-family: Rockwell;
    font-weight: bold;
    display: block;
  }
  h2 {
    color: #0d3b4c;
  }
  button {
    background: #b9e6ff;
    text-decoration: none;
    font-family: Rockwell;
    border-radius: 10px;
    font-size: 18px;
    padding: 0.5rem 1rem;
    border-style: none;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }
  button:focus {
    outline: none;
  }

  .logout {
    background: #b6244f;
    border-style: none;
    color: whitesmoke;
    padding: 10px;
    position: relative;
    left: 230px;
    bottom: 25px;
  }

  .logout:hover {
    transition: all 0.3s ease-out;
    background-color: #bfada3;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  p {
    font-size: 10px;
  }
  animation: 1s ${calcFade};

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  select {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    padding-right: 25px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
    background-position-x: 244px;
  }

  select:focus {
    outline: none;
  }

  select[type="text"] {
    width: fit-content;
  }

  input {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }
`;
const KiloSect = styled.section`
  position: relative;
  bottom: 80px;

  ul > div:nth-child(odd) {
    border: solid #39a2ae;
    width: 90%;
    margin: auto;
    border-radius: 15px;
    font-weight: bold;
    font-family: Rockwell;
  }
  ​ .listing {
    display: flex;
    padding: 15px;
    position: relative;
    right: 20px;
  }

  .total {
    border: solid #d4b483 !important;
  }

  .totalMix {
    background-color: #d4b483;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 10px;
    right: 30px;
    padding: 15px;
  }

  .colProd {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
  }

  .olMix {
    font-size: 15px;
    padding-left: 15px;
  }

  .mix {
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 10px;
    right: 30px;
    padding: 15px;
    background: #b9e6ff;
    /* background: linear-gradient(180deg, #C4C4C4 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF; */
  }

  .pColor {
    font-size: 25px;
    font-weight: bold;
  }

  .pProduct {
    font-size: 25px;
    font-weight: bold;
  }

  .pigment p {
    font-size: 15px;
  }
`;
const OutputSec = styled.section`
  width: 583px;
  height: 364px;
  display: flex;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  align-items: center;
  justify-content: center;

  article {
    margin: auto;
    text-align: center;
  }

  h1 {
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    color: #000000;
  }

  #product {
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #000000;
    border-radius: 10px;
  }

  #color {
    font-family: Rockwell;
    font-size: 22px;
  }

  #amount {
    font-family: Rockwell;
    font-size: 22px;
  }

  #new {
    background: #95bcf8;
    text-decoration: none;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-family: Rockwell;
    margin-top: 15px;
    font-size: 18;
    margin-bottom: 20px;
    border-style: none;
  }

  #new:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    position: relative;
    bottom: 18px;
  }

  animation: 1s ${calcFade};
`;
const ProdChoose = styled.section`
  position: relative;
  bottom: 50px;
`;
const ButtonDiv = styled.div`
  button {
    position: relative;
    bottom: 30px;
    left: 150px;
  }
`;
const ProdUl = styled.ul`
  list-style-type: none;
  padding-left: 0;

  u {
    font-weight: bold;
    background-color: #d6d6d6;
    border-radius: 5px;
    padding: 3px;
  }
`;
const Products = styled.section`
  text-align: center;
  margin-bottom: 80px;

  h2 {
    font-family: Rockwell;
    position: relative;
    top: 35px;
  }

  h1 {
    margin-top: 60px;
    margin-left: 40px;
  }
`;
const ListSect = styled.section`
  position: relative;
  bottom: 80px;

  ul > div:nth-child(odd) {
    border: solid #39a2ae;
    width: 90%;
    margin: auto;
    border-radius: 15px;
    font-weight: bold;
    font-family: Rockwell;
  }
  ​ .listing {
    display: flex;
    padding: 15px;
    position: relative;
    right: 20px;
  }

  .total {
    border: solid #d4b483 !important;
  }

  .totalMix {
    background-color: #d4b483;
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 10px;
    right: 30px;
    padding: 15px;
  }

  .colProd {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
  }

  .olMix {
    font-size: 15px;
    padding-left: 15px;
  }

  .mix {
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    border-radius: 10px;
    right: 30px;
    padding: 15px;
    background: #b9e6ff;
    /* background: linear-gradient(180deg, #C4C4C4 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF; */
  }

  .pColor {
    font-size: 25px;
    font-weight: bold;
  }

  .pProduct {
    font-size: 25px;
    font-weight: bold;
  }

  .pigment p {
    font-size: 15px;
  }
`;

// PRODUCTION APP
const prodFade = keyframes`${fadeInLeft}`;
const InventorySect = styled.section`
  width: 583px;
  height: inherit;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;

  h1 {
    position: relative;
    right: 29px;
    margin: 20px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
  }

  #backH1 {
    display: flex;
    justify-content: space-evenly;
  }

  #back {
    position: relative;
    bottom: 30px;
    left: 20px;
  }

  .inventory {
    display: flex;
    align-content: space-evenly;
    margin-bottom: 25px;
  }

  .logout {
    background: #b6244f;
    border-style: none;
    color: whitesmoke;
    padding: 10px;
    position: relative;
    left: 235px;
  }

  .logout:hover {
    transition: all 0.3s ease-out;
    background-color: #bfada3;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  article {
    margin: 0px 25px;
    height: 142px;
    width: 145px;
    text-align: center;
    font-family: Rockwell;
    font-weight: bold;
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
      #c4c4c4;
  }

  .produced > span {
    background-color: #95bcf8;
    display: block;
    padding: 10px;
  }

  h2 {
    font-size: 60px;
    margin: 20px 0;
  }

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
  }

  button {
    background: #b9e6ff;
    text-decoration: none;
    font-family: Rockwell;
    border-radius: 10px;
    font-size: 18px;
    padding: 0.5rem 1rem;
    border-style: none;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }
  button:focus {
    outline: none;
  }

  animation: 1s ${prodFade};
`;
const InProdLink = styled(Link)`
  text-decoration: none;
  background-color: #f8b95c;
  display: block;
  padding: 10px;
  color: black;
`;
const Stock = styled(Link)`
  text-decoration: none;
  background-color: #6aeaa5;
  display: block;
  padding: 10px;
  color: black;
`;
const Produced = styled(Link)`
  text-decoration: none;
  background-color: #95bcf8;
  display: block;
  padding: 10px;
  color: black;
`;
const GroupLink = styled(Link)`
  position: relative;
  top: 30px;
  text-decoration: none;
  display: block;
  padding: 10px;
  color: black;
  font-family: Rockwell;

  &:hover {
    background-color: #cbf3d2;
  }
`;
const AddForm = styled.form`
  width: 583px;
  height: 364px;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  text-align: center;

  h1 {
    font-family: Rockwell;
    font-weight: bold;
    font-size: 45px;
    position: relative;
    top: 20px;
  }

  div {
    position: relative;
    top: 30px;
  }

  section {
    text-align: center;
  }

  label {
    margin-top: 15px;
    color: black;
    font-family: Rockwell;
    font-weight: bold;
    display: block;
  }
  h2 {
    color: #0d3b4c;
  }
  button {
    background: #b9e6ff;
    text-decoration: none;
    font-family: Rockwell;
    border-radius: 10px;
    font-size: 18px;
    padding: 0.5rem 1rem;
    border-style: none;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }
  button:focus {
    outline: none;
  }
  p {
    font-size: 10px;
  }

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    position: relative;
    top: 10px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }

  .choose {
    position: relative;
  }

  .prodSubmit {
    position: relative;
    top: 60px;
  }

  .delete {
    position: relative;
    top: 40px;
  }

  #delete {
    background-color: #e35053;
  }

  #delete:hover {
    background-color: red;
  }

  select {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    padding-right: 25px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
    background-position-x: 244px;
  }

  select:focus {
    outline: none;
  }

  select[type="text"] {
    width: fit-content;
  }

  input {
    border-style: none;
    font-family: Rockwell;
    font-weight: bold;
    border-radius: 10px;
    padding: 5px;
    background: no-repeat right #ddd;
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }

  animation: 1s ${prodFade};
`;
const ListingSec = styled.section`
  width: 583px;
  height: inherit;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  text-align: center;
  padding-bottom: 60px;

  h1 {
    position: relative;
    top: 25px;
    right: 25px;
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
  }

  #links {
    display: flex;
    justify-content: space-evenly;
    margin: 0px 20px 0px 20px
  }
  
  .links {
    text-decoration: none;
    font-family: Rockwell;    
    padding: 6px;
    color: black;
    margin-bottom: 10px;
    box-shadow: 2px 2px 6px grey;

    &:hover{
      color: whitesmoke;
    }
  }

  #color {
    position: relative;
    bottom: 50px;
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
  }

  #back {
    position: relative;
    top: 20px;
    left: 20px;
  }

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    position: relative;
    top: 10px;
  }

  Link,
  h1 {
    display: inline;
  }

  #backH1 {
    display: flex;
    justify-content: space-evenly;
  }

  .products {
    position: relative;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .powered {
    position: relative;
    top: 25px;
  }

  animation: 1s ${prodFade};
`;
const InventorySec = styled.section`
  width: 620px;
  height: inherit;
  margin: 60px auto;
  background: #ffffff;
  border-radius: 29px;
  box-shadow: 2px 2px 6px grey;
  text-align: center;
  padding-bottom: 60px;

  h1 {
    position: relative;
    top: 25px;
    right: 25px;
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
  }

  #color {
    position: relative;
    bottom: 50px;
    margin: 40px auto;
    font-family: Rockwell;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
  }

  #back {
    position: relative;
    top: 20px;
    left: 20px;
  }

  #ledjj {
    font-family: Rockwell;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    position: relative;
    top: 10px;
  }

  Link,
  h1 {
    display: inline;
  }

  #backH1 {
    display: flex;
    justify-content: space-evenly;
  }

  .products {
    position: relative;
    bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .add button {
    background: #b9e6ff;
    text-decoration: none;
    font-family: Rockwell;
    border-radius: 10px;
    font-size: 18px;
    border-style: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
    position: relative;
    top: 10px;
  }
  .add button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
  }
  .add:focus {
    outline: none;
  }

  .powered {
    position: relative;
    top: 25px;
  }

  animation: 1s ${prodFade};
`;
const ProdSec = styled.section`
  margin-top: 30px;  
  position: relative;
  bottom: 40px;

.stock {
    display: flex;
    justify-content: space-evenly;
  }

  .product {
    height:  200px;
  }

  .orderDelete {
    width: 65px;
    height: 30px;
    border-radius: 10px;
    border-style: none;
    background-color: #cc7e85;
  }

  .orderDelete:hover {
    border-style: none;
    background-color: #f03a47;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    font-family: Rockwell;
    padding: 10px;
    box-shadow: 2px 2px 6px grey;
    background-color: #95bcf8;
  }

  button:focus {
    outline: none;
  }

  #status {
    border-radius: 10px;
    border-style: none;
  }

  #status:hover {
    background-color: #f58f29;
  }

  #trash {
    border-radius: 10px;
    border-style: none;
  }

  #trash:hover {
    border-style: none;
    background-color: #f03a47;
  }

  #move {
    border-radius: 10px;
    font-family: Rockwell;
    font-weight: bold;
    border-style: none;
  }

  #move:hover {
    border-style: none;
    background-color: #7eb77f;
    color: whitesmoke;
  }

  article {
    position: relative;
    bottom: 20px;
    margin: 0px 6px;
    height: 142px;
    width: 145px;
    text-align: center;
    font-family: Rockwell;
    font-weight: bold;
    padding: 10px;
  }

  .stock {
    display: flex;
    justify-content: space-evenly;
  }

  .prodInfo {
    margin-top: 10px;
  }

  span {
    font-size: 18px;
  }
`;
const LinkSec = styled.section`
  margin-top: 20px;

  .stock {
    display: flex;
    justify-content: space-evenly;
  }

  article {
    position: relative;
    bottom: 20px;
    margin: 0px 6px;
    height: 142px;
    width: 145px;
    text-align: center;
    font-family: Rockwell;
    font-weight: bold;
    padding: 10px;
  }

  .stock {
    display: flex;
    justify-content: space-evenly;
  }

  .prodInfo {
    margin-top: 10px;
  }

  span {
    font-size: 25px;
  }
`;
const ProdDiv = styled.div`
  width: 35%;
  margin: 0 auto;
  padding: 25px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
  form {
    display: block;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  input {
    width: 50%;
    margin-top: 15px;
    border-radius: 10px;
    display: inline-block;
  }
  label {
    margin-top: 15px;
    color: #0d3b4c;
    text-shadow: 2px 2px 2px #92b9bd;
    font-weight: bold;
    display: block;
  }
  h2 {
    color: #0d3b4c;
  }
  button {
    color: #0d3b4c;
    text-decoration: none;
    text-shadow: 2px 2px 2px whitesmoke;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: #f4f4ed;
    box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }
  p {
    font-size: 10px;
  }

  animation: 1s ${prodFade};
`;

// MISCELLANEOUS
const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 60px;
  color: #0d3b4c;
  text-shadow: 2px 2px 2px whitesmoke;
  position: fixed;
  bottom: 0;
  left: 40px;
  height: 10px;
  width: 100%;
  font-size: 15px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export {
  Login,
  Selector,
  CalcForm,
  KiloForm,
  ProdChoose,
  ButtonDiv,
  OutputSec,
  ProdDiv,
  Products,
  ProdUl,
  InventorySect,
  AddForm,
  ListingSec,
  InventorySec,
  ProdSec,
  LinkSec,
  ListSect,
  KiloSect,
  Foot,
  InProdLink,
  Stock,
  Produced,
  GroupLink,
};
