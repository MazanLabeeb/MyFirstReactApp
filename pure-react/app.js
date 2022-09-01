const Card = props => {
    const {name, email} = props;
    return React.createElement("div",{className: "Card"}, [
        React.createElement("strong", {key: "1"}, name + " " +  email)
    ]);
}

const App = () => React.createElement("div", {}, [
    React.createElement("b", {key: "1"}, "Mazan Labeeb"),
    React.createElement(Card, {key: "2", name: "Nouman Ayaz", email: "nomi@ayaz.com"}, ""),
    React.createElement(Card, {key: "3", name: "Mazan Labeeb", email: "mazan@labeeb.com"}, ""),
    React.createElement(Card, {key: "4", name: "Nouman Ayaz", email: "nomi@ayaz.com"}, "")
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    React.createElement(App)
);