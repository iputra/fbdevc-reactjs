import React from "react";
// import Button from "../../components/Button"
// import Status from "../../components/Status"

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			// isAuthenticated: false,
			// name: "FBDC Jakarta"
			list: null,
			keyword: ""
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		return fetch(link)
			.then(res => res.json())
			.then(res => {
				this.setState({
					list: res
				});
			});

	}

	handleLogin = () => {
		this.setState({
			isAuthenticated: true
		});
	};

	handleForm = event => {
		this.setState({
			keyword: event.target.value
		})
	};

	render(){
		const listStyle = {
			marginBottom: 15,
			borderBottom: "1px solid #000",
			width: 800,
			marginLeft: 240
		}
		return (
			<div>
				<input
					style={{marginLeft: 240, marginTop: 34}}
					onChange={this.handleForm}
					value={this.state.keyword} />

				{this.state.list &&
					this.state.list
						.filter(article => {
							return(
								article.title
									.toLowerCase()
									.includes(this.state.keyword.toLowerCase()) ||
								article.content
									.toLowerCase()
									.includes(this.state.keyword.toLowerCase())
							);
						})
						.map(article => {
							return (
								<div key={article.id} style={listStyle}>
									<h1 style={{ marginBottom: 10 }}>{article.title}</h1>
									<div>{article.content}</div>
								</div>
						);
				})} 
			</div>
		);
	
	};
};

export default Home;


