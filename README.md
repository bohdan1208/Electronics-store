Challenge Details
A local electronics store wants to create a simple application that will allow the user to
search their products and add them to a shopping cart for viewing.
Requirements
1. Users need to be able to apply various filters to narrow down the specific kind of
electronics they want to add to their cart.
2. Users will start off by seeing the first 10 results that match their search criteria. The
UI should be displayed in some sort of "grid" like view where each row will have a
maximum of three cards on it but the user will need a way to see additional results.
You've presented them with the options of using either pagination controls or an
infinite scroll and they have left it up to you to choose which you feel is a better
option.
3. Each grid tile/card will contain a picture of the product along with basic details like
it’s name, price and customer rating. The user should be able to click on this
tile/card and it will open a modal that will allow the user to view more details about
the specific product (**long description** and **reviews**).
4. Inside the modal there needs to be a **call to action/button that will allow the user
to add the item to their cart. This data should be persisted in an **NGRX** store.
After adding the item to the cart, the modal should close and they should see a basic
**popup/notification** indicating they successfully added it to their cart.
5. The user then needs to be able to view a summary of the items in their cart. The
application should have a **header** bar that will contain a **call to action/button**
for them to navigate to their cart (which should be a new **route/view**). Design
here can be quite basic but needs to clearly indicate the intent to access their cart
(either just a button **View Cart** or a shopping cart icon) and is up to you to decide
the implementation.
6. The shopping cart page should be a basic list of the products that are in the users’
cart and it should show the **picture**, **name**, **price** and **customer
rating**. Design isn't important for this feature and we are primarily concerned with
seeing you pull data from the **NGRX** store. You can use any online store to model
the look of your cart page after.
7. For the purpose of this exercise we don't require you to write an actual backend
server because that can take some time and may not be your area of expertise. The
mocked data can exist entirely on the client itself but **all data interaction/filtering
should be done through services and observables**.
8. Your solution should be pushed to a repository somewhere like **Github** or
**Bitbucket** so that we can pull down the solution ourselves and test it.
Modal Details
1. UI/UX of the modal can be super simple and we recommend using an external library to
alleviate the amount of time spent here. A good library to use might be the Angular Material
Dialog.
2. UI/UX of the popup can be super simple and we recommend using an external library to
alleviate the amount of time spent here. A good library to use might be the Angular Material
Snackbar.
Filter Details
● Searchable text input that will filter results based on the users input against the
**type** and **price**.
● **Type** filtering will use a single select input from the following list:
○ TVs
○ Appliances
○ Phones
○ Video Games
○ All
● **Price** will be a set of checkboxes that will allow them to filter products from
multiple price ranges. If none are selected then all products from the given type
should be available to be seen. See the filtering on the left side of this page for an
example.
Data Details
● Requirements here are minimal. We need enough variance to see features like
searching by **name** is working.
● When it comes to images it is fine that there is an immense amount of duplication. If
you grab 4 or 5 images and use those everywhere that is perfectly acceptable.
● Products that are added to the users’ cart must be stored in an **NGRX** store.
Resources
* casual - an npm package for generating random data.
* json-server - a full faked/mocked RESTful API.
* Best Buy Electronics - Helpful to see a grid style design of products and the checkbox type
filtering that was described.
* Flipp - Helpful to see a selected item on the Flipp app which shows a modal with additional
information.

To start you need to do:

1. start face API service
npx json-server db.json

2. start app
npm start
