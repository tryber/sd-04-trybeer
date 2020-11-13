// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const ProductCards = ({ products }) => {
//   const [qtd, setQtd] = useState(0);
//   const [arr, setArr] = useState([
//     {
//       id: 0,
//       quantity: 0,
//     },
//   ]);
//   useEffect(() => {
//     const memo = localStorage.getItem('total');
//     // setArr(memo)
//   }, []);
//   const handleClick = (i, op) => {
//     let quantity = parseInt(document.getElementById(`${i}`).textContent);
//     if (op === '-' && quantity === 0) {
//       return 0;
//     } else if (op === '-') {
//       quantity--;
//     } else {
//       quantity++;
//     }
//     document.getElementById(`${i}`).textContent = quantity;
//     // const test = () => {
//     arr[i] = { quantity, id: i };
//     // }
//     // setArr([{...test]}])
//     localStorage.setItem('total', JSON.stringify(arr));
//     console.log(quantity);
//   };
//   return products.map((product, index) => (
//     <div key={product.name}>
//       <p data-testid={`${index}-product-name`}>{product.name}</p>
//       <p data-testid={`${index}-product-price`}>{`R$ ${product.price
//         .toFixed(2)
//         .replace('.', ',')}`}</p>
//       <img data-testid={`${index}-product-img`} alt="" src={product.urlImage} />
//       <button
//         type="button"
//         data-testid={`${index}-product-minus`}
//         onClick={(i) => handleClick(index, '-')}
//       >
//         -
//       </button>
//       <p data-testid={`${index}-product-qtd`} id={index}>
//         {/* {arr[index] = qtd} */}0
//       </p>
//       <button
//         type="button"
//         data-testid={`${index}-product-plus`}
//         onClick={(i) => handleClick(index, '+')}
//       >
//         +
//       </button>
//     </div>
//   ));
// };
// export default ProductCards;
