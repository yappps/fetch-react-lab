# Fetch + React lab

### Getting started
- `create-react-app fetch-react-lab`
- `cd fetch-react-lab`
- `yarn start`

### Tasks:
- Create a `components` directory in `src` and move `App*.js` and `App.css` into `src/components/app`
- Play around with the `fetch()` function and also the data returned by the API which we are using for this lab
  - You can even make a GET request in your browser using the URL (https://randomuser.me/api?results=5)

```javascript
fetch("https://randomuser.me/api?results=5")
  .then(data => {
    return data.json();
  })
  .then(data => console.log(data))
```
- Create a `ProfilesPage` component (in `src/components/profiles-page/`)
  - Initialize `this.state.profiles` as an empty array
  - Fetch the data in `componentDidMount()` and assign the array from the JSON response to the component's stateby calling `this.setState({profiles: ...})`

- Incrementally flesh out the data in `this.state.profiles`. Feel free to create components as you see fit.
  - display first name: `this.state.profiles[0].name.first`
  - add last name: `this.state.profiles[0].name.last`
  - add title: `this.state.profiles[0].name.title`
  - etc
    - email
    - address
    - picture.thumbnail
