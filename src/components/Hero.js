import { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import Botpoison from "@botpoison/browser";

import logo from "../assets/logo.svg";
import bg from "../assets/bg.jpg";
import { ArrowCircleRightIcon, CheckCircleIcon } from "@heroicons/react/solid";

const botpoison = new Botpoison({
  publicKey: "pk_0ca8f197-9897-4599-8e62-41403ef59c1b"
});

const Hero = () => {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { solution } = await botpoison.challenge();
    await axios.post("https://submit-form.com/hyu9ebr7", {
      message,
      _botpoison: solution,
    });
    setSuccess(true);
    setLoading(false);
  };

  return (
    <HeroContainer className="w-full">
      <div className="flex justify-start p-5">
        <img
          className="w-12 m-6" 
          src={logo}
          alt="Dots Logo"
        />
      </div>
      <div className="flex justify-center text-center py-20 md:py-28 w-3/4 md:w-1/2 m-auto">
        <Title className="uppercase text-2xl">The Best Messaging Experience Ever Made</Title>
      </div>
      <div className={`flex-col justify-center text-center align mt-16 md:mt-24 w-10/12 sm:w-7/12 m-auto ${loading ? `animate-pulse` : null}`}>
        <Subtitle className="uppercase text-xl pb-4">Join the Waitlist</Subtitle>
        <Formbox className="p-8 flex justify-around align-middle">
          <FormLabel htmlFor="emailForm" className="text-base hidden md:flex">EMAIL</FormLabel>
          <form id="emailForm" onSubmit={onSubmit} className="w-full md:w-3/4 flex">
            <FormInput
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="email"
              placeholder="enter email..."
              className={`w-5/6 py-2 px-3 border-2 ${success ? `border-green-700 text-green-800` : `border-zinc-900 text-zinc-400`}`}
            />
            {
              success ? 
              <CheckCircleIcon className="mx-2 text-green-700 bg-transparent h-10 w-10"/>
              :
              <button type="submit">
                <ArrowCircleRightIcon className="mx-2 text-zinc-500 hover:text-zinc-600 bg-transparent h-10 w-10 cursor-pointer" />
              </button>
            }
          </form>
        </Formbox>
      </div>
    </HeroContainer>     
  )
};

export default Hero;

const HeroContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 850px;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.3em;
  color: #FFFFFF; 
`;

const Subtitle = styled.h2`
  font-weight: 300;
  letter-spacing: 0.33em;
  color: #FFFFFF;
`;

const Formbox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 100px 1px rgba(255, 255, 255, 0.15);
  border-radius: 7px;
`;

const FormLabel = styled.label`
  letter-spacing: 0.33em;
  color: #FFFFFF;
  margin: auto;
`;

const FormInput = styled.input`
  background: #181818;
  box-sizing: border-box;
  border-radius: 7px;
  font-size: 1.05rem;
  line-height: 24px;
  letter-spacing: 0.1em;
`;