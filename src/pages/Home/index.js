import React from "react";
// import Button from "../../components/Button"
// import Status from "../../components/Status"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

const styles = theme => ({
  root: {
	width: '100%',
  },
  grow: {
	flexGrow: 1,
  },
  menuButton: {
	marginLeft: -12,
	marginRight: 20,
  },
  title: {
	display: 'none',
	[theme.breakpoints.up('sm')]: {
	  display: 'block',
	},
  },
  search: {
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: fade(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: fade(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing.unit,
	  width: 'auto',
	},
  },
  searchIcon: {
	width: theme.spacing.unit * 9,
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  },
  inputRoot: {
	color: 'inherit',
	width: '100%',
  },
  inputInput: {
	paddingTop: theme.spacing.unit,
	paddingRight: theme.spacing.unit,
	paddingBottom: theme.spacing.unit,
	paddingLeft: theme.spacing.unit * 10,
	transition: theme.transitions.create('width'),
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  width: 120,
	  '&:focus': {
		width: 200,
	  },
	},
  },
});

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


		const { classes } = this.props;

		return (
			<div>
				<AppBar position="static">
					<Toolbar>
					  <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
						<MenuIcon />
					  </IconButton>
					  <Typography className={classes.title} variant="title" color="inherit" noWrap>
						Material-UI
					  </Typography>
					  <div className={classes.grow} />
					  <div className={classes.search}>
						<div className={classes.searchIcon}>
						  <SearchIcon />
						</div>
						<Input
						  placeholder="Search…"
						  disableUnderline
						  classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						  }}
							onChange={this.handleForm}
							value={this.state.keyword}
						/>
					  </div>
					</Toolbar>
				  </AppBar>


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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

// export default Home;
