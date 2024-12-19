# Welcome to 3Bay!

3Bay is an online marketpplace enabling sellers to create personalised storefronts, offering buyers an immersive shopping experience. providing a more lifelike shopping experience and bridging the gap between online convenience and real-world product interaction.

## 3rd Party tools

3Bay utilises multiple 3rd party tools and libraries to achieve our desired goals and enhance user experience. Such tools include:

- NextJS
- TailwindCSS
- Clerk Authentication
- Radix UI Primitives (Various used)
- Stripe
- React DOM & React Redux

## Installing on your machine

Please follow these step-by-step instructions if you would like to install this app locally

- Fork a copy of this repo to your own account
- Clone to a suitable area on your local machine
- Navigate to the created repo and run 'npm install' in your terminal
- Add a .env.local file to the root folder and add your environment variables
- Optional: Use 'npm run dev' to view a live development representation
- Optional: Implement any desired changes and push to your repo.
- Login to Vercel and create a new project, linking to your Github repo
- Add your environment variables from the .env.local file.
- Deploy
- ???
- Profit

## Using the site

Users will be able to visit certain areas of the site right away, but some functions will require users to sign-up or login to proceed.

### Guests

'Anonymous' users can:

- View the homepage
- View the about & contact page
- Browse all products and stores
- View individual product pages
- View individual store pages
- Add products to cart
- View Checkout page

To proceed to payment, users will need to create an account.

### Buyers

Users can sign up via clerk authentication, which will redirect new users to their newly created profile page. On subsequent logins, users will return to whatever page they were on before logging in.

Default profile information (username, email) is from your Clerk account but can be changed.

In addition to guest access, logged in users can:

- View profile and update user details
- Become a Seller
- Proceed from cart to checkout page
- Make payments and complete a purchase

### Sellers

Logged in users can click "Create Store" in their profile page which takes them to the store creation form. Once submitted, the user will be converted to a seller, allowing for further abilities.

In addition to buyer access, sellers can:

- Create, edit and customise their store front
- Add new products to their store page
- Update their products

# Project creation

### The Team

3Bay was created by Liz, Angelica, Jamie and Bertie for our Software Development bootcamp's final project.

### Communication strategy

The team have been actively communicating throughout, making extensive use of Google Meet, Trello, and a private Discord server.

Using Trello, we have clearly defined tasks and deliverables, which were assigned to team members as required. We ensured our progress was kept up to date, and informed the rest of the team when we begun working on a new task.

Using Google Meet, we have remained in constant contact throughout the project, regularly collaborating on tasks via screen presenting for paired programming and merge conflict resolution. The team would be notified every time a new push was made. We had a stand-up meeting each morning, with multiple check-ins throughout the day.

Using discord, we have shared important information such as environment variables and useful resources. When working on the project outside of usual hours, the team would be notified on discord each time a pull request was made.

## Planning

Our planning for this project was extensive. We began discussing our ideas, before settling on a direction with some user stories and desired functionality. With this in hand we created a Figjam board and worked together to define what pages would be needed and designed our wireframe based on this, then explored the form that user journeys would take.

Once we had our layout, refined our user stories and defined our MVP, we designed our required database tables together before adding the SQL required to create them.

From here, we moved to Trello to define our tasks and allocate to team members.

### User Stories

Our user stories were split into the two types of users - buyers and sellers.

Buyer:

- As a buyer, I want to be able to create an account and view my profile.
- As a buyer, I want to be able to search for products and shops.
- As a buyer, I want to buy various products by adding them to my cart and then checkout.
- As a buyer, I want it to be clear whether a purchase was successful.
- As a buyer, I want to see a nice error if product or store pages don't exist.

Seller:

- As a seller, I want to be able to create and customise a store front.
- As a seller, I want to be able to add new products to my store.
- As a seller, I want to be able to edit/update my products and store.

### MVP

- User can create an account via Clerk auth as a buyer, with option to become a seller.
- Users have a profile page to view/update their information.
- Sellers can create a store front to display their products and a form to add new products. (stored in a database).
- Buyers can browse products and store fronts or search for specific products.
- Buyers can add products to basket and then make a payment.

### Future Considerations

With enough time, we would love to add additional functionality, such as:

- Utilising Meshy AI API to generate 3D images.
- Rendering 3D images using model-viewer.
- Product categories.
- Tutorial intro on sign-up (Such as with React Joyride).
- Search function (by product name, category, etc).
- Sort products by price, category, etc
- Ability for users to rate, review and favourite products and stores
- Messaging capability between buyers and sellers
- Show previous purchaes and recently viewed products
