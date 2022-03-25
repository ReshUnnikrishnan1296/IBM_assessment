# IBM_assessment

How to start the application:

npm install

ng serve


Please access the application hosted at: 



Home page:

- Lists 10 items fetched from the given API https://random-data-api.com/api/coffee/random_coffee

- On scroll 10 items will be fetched for each page, total items count is set to 50

- On clicking each item from the home page it will redirect to product details page


Products detail page:

- It will be launched when the user clicks on item from the home page 

- Details of each product will be displayed

- Image is not from the actual api data, it is currently dummy image used for all the products


Technical details:

- NGRX store is used to store values fetched from the api

- HttpClient is used to hit the api in the service file

- All data calls are handled using effects in the store

- Data is fetched from the store using selectors

- Made the page responsive using Bootstrap

- For testing the NGRX store I have used MockStore 




