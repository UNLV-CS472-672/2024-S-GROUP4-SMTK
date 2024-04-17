// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Food from './page.js'; // file name component is from has to be exact ...

// /*
//     Test case for the Food page in .../small-talk/app/food
//     Simply renders the page then checks if the expected content exists in the render
// */


// // Test if food page renders properly
// describe("Food Page", () =>
// {
//     it("Makes sure Food page content renders properly", () =>
//     {
//         // Render Food page
//         render(<Food />);

//         // Get page content
//         const orderFood = screen.getByText("Order Food");
//         const todaysMenu = screen.getByText("Today's Menu");
//         const deliveryTime = screen.getByText("Delivery Time");

//         // Check if expected content exists
//         expect(orderFood).toBeInTheDocument();
//         expect(todaysMenu).toBeInTheDocument();
//         expect(deliveryTime).toBeInTheDocument();
//     })
// })