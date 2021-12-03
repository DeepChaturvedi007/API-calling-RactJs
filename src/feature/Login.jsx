import React, { useState } from 'react';
import { useGetListMutation } from './homeApi'
import { useSelector, useDispatch} from 'react-redux';
import { userList, search} from './homeSlice';
import { InputGroup,  Button, FormControl} from 'react-bootstrap'
import $ from 'jquery'

const Login = () => {
	const [error, setError ] = useState('');
	const { searchKey } = useSelector( state => state.list.searchKey)

	const dispatch = useDispatch();
	const [getList]  = useGetListMutation();

	const animateToHeight = () => {
		$('#searchButton').animate({height: "100px"}, 500);
	};

	const handleSubmit = async() => {
		animateToHeight();
		let { data, error} = await getList(searchKey);
		console.log('error',error);
		if(error) setError('Something went wrong')
		if(data) {
			dispatch(userList(data))
		}
	}

	const handleChange = (e) => {
		let value = e.target.value? e.target.value:'';
		dispatch(search(value))
	}

	return (
		<>
		{error && 
			<div className="alert alert-warning" role="alert">
				{error}
			</div>
		}
		<InputGroup>
		    <FormControl placeholder="Login" onChange={handleChange} value={searchKey}/>
		    <Button variant="outline-secondary" type="button" onClick={ () => handleSubmit()}>Submit</Button>
	  	</InputGroup>
		</>
	)
}

export default Login;