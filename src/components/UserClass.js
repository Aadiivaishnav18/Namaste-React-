import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",

            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Aadiivaishnav18");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }



    render() {
        const { name, public_repos, avatar_url } = this.state.userInfo;
        // const { count } = this.state;
        return (

            // If i have to update my state Variable 
            <div className="user-card2">
                 <img  className="avtar" src={avatar_url} />
                <h1>Name: {name}</h1>
                <h2>Public Repos: {public_repos}</h2>

                {/* <h1>Count: {count}</h1> */}
                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }} >
                    Count Increase</button> */}
            </div>
        )
    }

}

export default UserClass;