import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs'

// createServer({
//   models: {
//     transaction: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       transactions: [
//         {
//           id: 1,
//           title: 'Freelance de website',
//           type: 'deposit',
//           category: 'dev',
//           amount: 6000,
//           createdAt: '2021-12-23T03:24:00'
//         },
//         {
//           id: 2,
//           title: 'Aluguel',
//           type: 'withdraw',
//           category: 'casa',
//           amount: 1100,
//           createdAt: '2021-12-17T03:24:00'
//         }
//       ],
//     })
//   },

//   routes() {
//     this.namespace = 'api';

//     this.get('/transactions', () => {
//       return this.schema.all('transaction');
//     });

//     this.post('/transactions/create', (schema, request) => {
//       const data = JSON.parse(request.requestBody);

//       return schema.create('transaction', data);
//     });
//   }
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
