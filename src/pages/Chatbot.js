import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import "../scss/Chatbot.css";

class MyChatbot extends Component {
  render() {
    return (
        <div>
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'Welcome to Purrfect Pet Care. How can we assist you today?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Great! You said: {previousValue}',
              trigger: '4',
            },
            {
              id: '4',
              message: 'How can we help you with your pet?',
              trigger: '5',
            },
            {
              id: '5',
              user: true,
              trigger: '6',
            },
            {
              id: '6',
              message: 'I see. You want to know about {previousValue}. Here are some dog food tips: Ensure your dog has a balanced diet with proteins, carbohydrates, and healthy fats. Check ingredient labels to avoid fillers like artificial colors and flavors. Ensure there is always fresh water available, and wet food can contribute to hydration.',
              trigger: '7',
            },
            {
              id: '7',
              user: true,
              trigger: '8',
            },
            {
              id: '8',
              message: 'Ideal dog food items should include high-quality, protein-rich sources, healthy fats, essential nutrients, and no harmful additives, tailored to your dogs age, size, and potential allergies.',
              trigger: '9',
            },
            {
              id: '9',
              user: true,
              trigger: '10',
            },
            {
              id: '10',
              message: 'Thank you!',
              trigger: '9', 
            },
          ]}
        />
      </div>
      
    );
  }
}

export default MyChatbot;
