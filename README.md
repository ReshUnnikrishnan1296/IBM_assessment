# IBM_assessment

How to start the application:

npm install

ng serve

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



Known bug: The product details page, data will be vanished if the page is refreshed.
 
Because the value is fetched from store and store values will be emptied when page is refreshed.

To fetch product specific details we need api but random api doesn't give product specific details



# AngularInfiniteLoading

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

