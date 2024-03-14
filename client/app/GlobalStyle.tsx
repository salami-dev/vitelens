import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        html {
          font-size: 10px;
          @media only screen and (min-width: 1600px) {
            font-size: 12px;
          }
          @media only screen and (min-width: 2000px) {
            font-size: 14px;
          }
          @media only screen and (min-width: 2400px) {
            font-size: 16px;
          }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          width: 8px; /* Adjust scrollbar width */
          background-color: #f5f5f7; /* Match the modal background color */
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #bbb; /* Set scrollbar handle color */
          border-radius: 10px; /* Set the border-radius for a rounded scrollbar */
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #fff; /* Set scrollbar handle color on hover */
        }

        /* Hide scrollbar for Firefox */
        scrollbar-width: thin;
        scrollbar-color: #888 #f5f5f7; /* Set scrollbar handle color and track color */
      `}
    />
  );
};

export default GlobalStyle;
