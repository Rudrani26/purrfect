import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import "../scss/Chatbot.css";

const PetCareChatbot = () => {
  const steps = [
    {
      id: '1',
      message: 'Welcome to Purrfect Pet Care. How can we assist you today?',
      trigger: 'userQuery',
    },
    {
      id: 'userQuery',
      user: true,
      trigger: 'response',
    },
    {
      id: 'response',
      component: <ResponseHandler />,
      waitAction: true,
    },
    {
      id: 'idealDogFood',
      message: 'Ideal dog food items should include high-quality, protein-rich sources, healthy fats, essential nutrients, and no harmful additives, tailored to your dog\'s age, size, and potential allergies.',
      trigger: 'askMore',
    },
    {
      id: 'idealCatFood',
      message: 'Ideal cat food items include premium quality, protein-rich, and well-balanced cat food brands with meat as the primary ingredient, while avoiding artificial additives, fillers, and excessive carbohydrates.',
      trigger: 'askMore',
    },
    {
      id: 'askMore',
      message: 'Is there anything else you would like to know?',
      trigger: 'userQuery',
    },
  ];

  return <ChatBot steps={steps} />;
};

const ResponseHandler = (props) => {
  const { steps, triggerNextStep } = props;
  const userQuery = steps.userQuery.value.toLowerCase();

  if (userQuery.includes('dog food')) {
    return (
      <div>
        Here are some dog food tips: Ensure your dog has a balanced diet with proteins, carbohydrates, and healthy fats. Check ingredient labels to avoid fillers like artificial colors and flavors. Ensure there is always fresh water available, and wet food can contribute to hydration.
        <button onClick={() => triggerNextStep({ trigger: 'idealDogFood' })}>Tell me about ideal dog food items</button>
      </div>
    );
  } 
  else if (userQuery.includes('cat food')) {
    return (
      <div>
        Here are some cat food tips: Choose high-quality cat food that meets your cat's nutritional needs, feed them the appropriate portion sizes, and provide fresh water daily to keep your feline friend healthy.
        <button onClick={() => triggerNextStep({ trigger: 'idealCatFood' })}>Tell me about ideal cat food items</button>
      </div>
    );
  } 
  else if (userQuery.includes('fish food')) {
    return (
      <div>
        Here are some fish food tips: Choose a high-quality fish food that meets the nutritional requirements of your fish species to ensure their health and vitality.
        <button onClick={() => triggerNextStep({ trigger: 'askMore' })}>Ask More!</button>
      </div>
    );
  } 
  else if (userQuery.includes('thank you')) {
    return (
      <div>
       Thank you! It was a pleasure talking to you
      </div>
    );
  } 
  else {
    return (
      <div>
        I'm sorry, I don't have information about that right now. If you have any other questions, feel free to ask.
        <button onClick={() => triggerNextStep({ trigger: 'askMore' })}>Ask More!</button>
      </div>
    );
  }
};

class MyChatbot extends Component {
  render() {
    return (
        <div>
       < PetCareChatbot/>
      </div>
      
    );
  }
}

export default MyChatbot;
