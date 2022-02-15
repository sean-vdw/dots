import { useState } from "react";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import bg from "../assets/bg.jpg";
import { ArrowCircleRightIcon, CheckCircleIcon } from "@heroicons/react/solid";

const Hero = () => {
  const [success, setSuccess] = useState(false);

  return (
    <HeroContainer className="w-full">
      <div className="flex justify-start p-5">
        <img
          className="w-12 m-6" 
          src={logo}
          alt="Dots Logo"
        />
      </div>
      <div className="flex justify-center text-center py-36 w-3/4 m-auto">
        <Title className="uppercase">The Best Messaging Experience Ever Made</Title>
      </div>
      <div className="flex-col justify-center text-center align mt-24 w-7/12 m-auto">
        <Subtitle className="uppercase pb-4">Join the Waitlist</Subtitle>
        <Formbox className="p-8 flex justify-around align-middle">
          <FormLabel htmlFor="emailForm">EMAIL</FormLabel>
          <form id="emailForm" className="w-3/4 flex">
            <FormInput
              type="email"
              placeholder="enter email..."
              className={`w-5/6 py-2 px-3 border-2 ${success ? `border-green-700 text-green-800` : `border-zinc-900 text-zinc-400`}`}
            />
            {
              success ?
              <CheckCircleIcon
                type="button"
                className="mx-2 text-green-700 bg-transparent h-10 w-10"
              />
              :
              <ArrowCircleRightIcon 
                type="button" 
                onClick={() => setSuccess(true)} 
                className="mx-2 text-zinc-500 hover:text-zinc-600 bg-transparent h-10 w-10 cursor-pointer" 
              />
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
  height: 100vh;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 59px;
  text-align: center;
  letter-spacing: 0.3em;
  color: #FFFFFF; 
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 29px;
  letter-spacing: 0.33em;
  color: #FFFFFF;
`;

const Formbox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 100px 1px rgba(255, 255, 255, 0.15);
  border-radius: 7px;
`;

const FormLabel = styled.label`
  font-size: 1.25rem;
  line-height: 29px;
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