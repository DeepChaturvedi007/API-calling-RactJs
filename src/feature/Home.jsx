import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap'
import Login from './Login'
import { useSelector, useDispatch} from 'react-redux';
import Pagination from 'react-pagination-js';
import "react-pagination-js/dist/styles.css"; 
import { useGetPaginationMutation } from './homeApi'
import { userList} from './homeSlice';
import $ from 'jquery'


const Home = () => {
	const dispatch = useDispatch();
	const [getPagination]  = useGetPaginationMutation();
	const [page, setActivePage] = useState({
		activePage : 1,
		pageNumber : 1
	});

	let {list, totalRecord, searchKey} = useSelector( state => state.list);

	useEffect(() => {
		$('#searchButton').css('height', $(window).height() - 200);
	}, []);

	const handlePageChange = async(pageNo) => {
			setActivePage({
	    	activePage: pageNo,
	    	pageNumber : pageNo
	    });
		let { data, error} = await getPagination({name:searchKey, page:page.activePage, per_page:page.pageNumber});
		if(data) {
			dispatch(userList(data))
		}
	 }
	
	return (
		<>
		<nav className="navbar navbar-light shadow-sm bg-white position-fixed w-100">
			<div className="container">
				<a className="navbar-brand">
				<svg width="245" height="56" viewBox="0 0 370.4054054054054 86.22991985791248" className="css-1j8o68f"><defs id="SvgjsDefs4136"><linearGradient id="SvgjsLinearGradient4143"><stop id="SvgjsStop4144" stopColor="#7f00ff" offset="0"></stop><stop id="SvgjsStop4145" stopColor="#e100ff" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient4146"><stop id="SvgjsStop4147" stopColor="#7f00ff" offset="0"></stop><stop id="SvgjsStop4148" stopColor="#e100ff" offset="1"></stop></linearGradient></defs><g id="SvgjsG4137" featurekey="monogramFeature-0" transform="matrix(2.050164456548741,0,0,2.050164456548741,0.000007820756746478047,-36.779947535011985)" fill="url(#SvgjsLinearGradient4143)"><path d="M46.14 60 l-16.2 0 l-5.46 -9.42 l-10.5 0 l0 9.42 l-13.98 0 l0 -23.4 l34.32 0.06 c3.9 0 7.02 -3.18 7.02 -7.02 c0 -3.9 -3.12 -7.02 -7.02 -7.02 l-29.64 0 l0 4.68 l29.64 0 c1.26 0.06 2.22 1.08 2.22 2.34 s-0.96 2.28 -2.22 2.34 l-0.06 0 l-0.06 0 l-34.2 0 l0 -14.04 l34.32 0 c6.48 0 11.7 5.22 11.7 11.7 c0 6.42 -5.22 11.7 -11.7 11.7 l-29.64 -0.06 l0 14.04 l4.68 0 l0 -9.42 l17.82 0 c1.92 3.48 5.16 8.82 5.46 9.42 l5.4 0 c-0.48 -0.66 -3.24 -5.58 -5.46 -9.42 l5.4 0 c1.98 3.42 3.96 6.96 5.58 9.6 z"></path></g><g id="SvgjsG4138" featurekey="nameFeature-0" transform="matrix(1.7136700936810814,0,0,1.7136700936810814,111.09283100972327,-21.253425312223555)" fill="url(#SvgjsLinearGradient4146)"><path d="M8.28 21.16 l0 5.84 l5.6 0 c1.84 0 2.92 -1.08 2.92 -2.92 s-1.08 -2.92 -2.92 -2.92 l-5.6 0 z M17.36 30.96 c1.12 1.52 2.24 3.04 3.4 4.52 c1.12 1.48 2.24 3 3.36 4.52 l-7.32 0 c-1.44 -1.92 -2.84 -3.84 -4.24 -5.76 c-1.4 -1.88 -2.84 -3.8 -4.28 -5.72 l0 11.48 l-6 0 l0 -24.48 l11.6 0 c4.56 0 8.44 3.48 8.44 8.08 c0 3.24 -2 6.08 -4.96 7.36 z M26.64 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 3.88 l12.2 0 l0 5.56 l-18.2 0 l0 -24.48 z M63.400000000000006 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M56.36 29.48 l5.08 0 l-2.52 -7.12 z M92.32 33.16 l0 6.16 c-2.48 0.68 -4.96 0.96 -7.52 0.96 c-7.52 0 -12.56 -5.16 -12.56 -12.48 c0 -7.52 5.24 -12.48 12.52 -12.48 c2.52 0 5.16 0.2 7.56 0.96 l0 6.16 c-1.96 -0.96 -5.04 -1.32 -7.2 -1.32 c-4.88 0 -6.88 2 -6.88 6.64 c0 4.92 2.36 6.72 6.92 6.72 c2.04 0 5.36 -0.32 7.16 -1.32 z M94.36 15.52 l20.4 0 l0 5.56 l-7.2 0 l0 18.92 l-6 0 l0 -18.92 l-7.2 0 l0 -5.56 z M122.91999999999999 15.52 l6 0 l0 14.48 c0 6.28 -4.88 10.2 -10.8 10.2 c-0.44 0 -0.8 0 -1 -0.04 s-0.48 -0.12 -0.76 -0.16 l0 -5.56 c0.52 0.12 1.08 0.2 1.6 0.2 c3.08 0 4.96 -1.44 4.96 -4.64 l0 -14.48 z M131.96 39.4 l0 -5.64 c0.48 0.12 1.08 0.24 1.76 0.32 c0.68 0.12 1.4 0.2 2.16 0.24 s1.52 0.08 2.32 0.12 s1.56 0.08 2.24 0.08 c1.88 0 3.2 -0.12 4 -0.32 c0.76 -0.2 1.16 -0.56 1.16 -1.12 c0 -0.48 -0.36 -0.84 -0.72 -1.12 c-1.32 -0.88 -2.88 -1.24 -4.44 -1.6 c-4.4 -0.88 -8.44 -2.64 -8.44 -7.68 c0 -5.96 5.64 -7.36 10.48 -7.36 c2.68 0 5.4 0.28 8 0.92 l0 5.64 c-0.4 -0.12 -0.92 -0.2 -1.56 -0.32 c-0.68 -0.08 -1.36 -0.16 -2.12 -0.24 c-1.56 -0.16 -3.04 -0.24 -4.6 -0.24 c-0.88 0 -2.72 0 -3.56 0.32 c-0.56 0.2 -0.92 0.44 -0.92 1.08 c0 0.32 0.08 0.6 0.24 0.84 c0.16 0.28 0.44 0.48 0.8 0.68 c1.08 0.6 2.48 0.96 3.68 1.24 c1 0.24 2 0.52 3.04 0.8 c3.52 0.96 5.84 2.92 5.84 6.68 c0 6.2 -6.16 7.52 -11.12 7.52 c-2.72 0 -5.56 -0.2 -8.24 -0.84 z"></path></g><g id="SvgjsG4139" featurekey="sloganFeature-0" transform="matrix(0.9539683836188911,0,0,0.9539683836188911,114.62709363001922,62.56881932892402)" fill="#b100ff"><path d="M10.01 5.888999999999999 l0 2.5781 l-3.3496 0 l0 11.533 l-2.9004 0 l0 -11.533 l-3.3691 0 l0 -2.5781 l9.6191 0 z M19.956289062499998 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M27.207059375 20.19531 c-3.0273 0 -5.3906 -1.4551 -5.8203 -4.1016 l3.0273 -0.69336 c0.19531 1.582 1.3574 2.4023 2.9102 2.4023 c1.1914 0 2.1387 -0.52734 2.1289 -1.7188 c-0.0097656 -1.3281 -1.5723 -1.748 -3.291 -2.2754 c-2.0703 -0.64453 -4.2871 -1.4063 -4.2871 -4.0039 c0 -2.627 2.1484 -4.1113 4.9805 -4.1113 c2.4805 0 4.9805 1.0059 5.5469 3.7109 l-2.832 0.70313 c-0.26367 -1.4063 -1.2109 -2.0215 -2.5391 -2.0215 c-1.1816 0 -2.1875 0.48828 -2.1875 1.6504 c0 1.084 1.3867 1.4453 2.9883 1.9238 c2.1289 0.64453 4.6484 1.4648 4.6484 4.2773 c0 2.998 -2.5098 4.2578 -5.2734 4.2578 z M42.9152734375 5.888999999999999 l0 2.5781 l-3.3496 0 l0 11.533 l-2.9004 0 l0 -11.533 l-3.3691 0 l0 -2.5781 l9.6191 0 z M58.862773437499996 20 l-1.0254 -2.9102 l-5.9277 0 l-1.0254 2.9102 l-2.998 0 l5.1953 -14.111 l3.584 0 l5.1953 14.111 l-2.998 0 z M52.7685734375 14.6387 l4.209 0 l-2.0996 -5.9863 z M68.21291875 20.19531 c-3.0273 0 -5.3906 -1.4551 -5.8203 -4.1016 l3.0273 -0.69336 c0.19531 1.582 1.3574 2.4023 2.9102 2.4023 c1.1914 0 2.1387 -0.52734 2.1289 -1.7188 c-0.0097656 -1.3281 -1.5723 -1.748 -3.291 -2.2754 c-2.0703 -0.64453 -4.2871 -1.4063 -4.2871 -4.0039 c0 -2.627 2.1484 -4.1113 4.9805 -4.1113 c2.4805 0 4.9805 1.0059 5.5469 3.7109 l-2.832 0.70313 c-0.26367 -1.4063 -1.2109 -2.0215 -2.5391 -2.0215 c-1.1816 0 -2.1875 0.48828 -2.1875 1.6504 c0 1.084 1.3867 1.4453 2.9883 1.9238 c2.1289 0.64453 4.6484 1.4648 4.6484 4.2773 c0 2.998 -2.5098 4.2578 -5.2734 4.2578 z M80.4248328125 20.19531 c-3.0273 0 -5.3906 -1.4551 -5.8203 -4.1016 l3.0273 -0.69336 c0.19531 1.582 1.3574 2.4023 2.9102 2.4023 c1.1914 0 2.1387 -0.52734 2.1289 -1.7188 c-0.0097656 -1.3281 -1.5723 -1.748 -3.291 -2.2754 c-2.0703 -0.64453 -4.2871 -1.4063 -4.2871 -4.0039 c0 -2.627 2.1484 -4.1113 4.9805 -4.1113 c2.4805 0 4.9805 1.0059 5.5469 3.7109 l-2.832 0.70313 c-0.26367 -1.4063 -1.2109 -2.0215 -2.5391 -2.0215 c-1.1816 0 -2.1875 0.48828 -2.1875 1.6504 c0 1.084 1.3867 1.4453 2.9883 1.9238 c2.1289 0.64453 4.6484 1.4648 4.6484 4.2773 c0 2.998 -2.5098 4.2578 -5.2734 4.2578 z M87.949246875 20 l0 -14.111 l2.9297 0 l0 14.111 l-2.9297 0 z M100.1709109375 20.19531 c-4.0723 0 -7.0703 -2.8125 -7.0703 -7.2168 c0 -4.4629 3.0664 -7.2852 7.2168 -7.2852 c2.7246 0 4.9805 1.2012 6.2109 3.3203 l-2.5684 1.3672 c-0.74219 -1.4453 -2.0703 -2.1387 -3.6426 -2.1387 c-2.4414 0 -4.2773 1.6797 -4.2773 4.668 c0 2.8809 1.7188 4.7363 4.3848 4.7363 c1.8066 0 3.4668 -0.89844 3.8672 -2.959 l-3.8574 0 l0 -2.3535 l6.6309 0 l0 7.666 l-2.3047 0 l0 -1.9531 c-0.9082 1.3379 -2.4316 2.1484 -4.5898 2.1484 z M119.287265625 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M141.5771015625 20 l-2.9199 0 l-0.92773 -10.635 l-3.5742 10.635 l-1.8945 0 l-3.5742 -10.635 l-0.9375 10.635 l-2.9297 0 l1.1816 -14.111 l4.1797 0 l3.0078 8.8574 l3.0469 -8.8574 l4.1797 0 z M152.37328125 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z M164.5753515625 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M178.8771875 5.888999999999999 l0 2.5781 l-3.3496 0 l0 11.533 l-2.9004 0 l0 -11.533 l-3.3691 0 l0 -2.5781 l9.6191 0 z"></path></g></svg>
				</a>
			</div>
		</nav>
		<div style={{background: "url(https://w7.pngwing.com/pngs/934/663/png-transparent-element-clock-euclidean-school-background-elements-of-each-collection-assorted-items-illustration-text-school-supplies-monochrome.png)", opacity: "0.05", position: "fixed", width: "100%", height: "100%", zIndex : "-1"}}></div>
		<div className="container" style={{paddingTop : "130px"}}>
			<div className="row justify-content-center">
				<div className="col-sm-4 align-items-center d-flex" id="searchButton">
					<Login />
				</div>
			</div>
			{list.length >0 &&
			<div className="row pb-5">
				<Table striped bordered hover className="bg-white">
				  <thead>
				    <tr>
				      <th>S.no</th>
				      <th>Avatar</th>
				      <th>Login</th>
				      <th>User Type</th>
				    </tr>
				  </thead>
				  <tbody>
				  { list.map( (res, index) => {
				  	return(<tr key={index}>
				  	  <td className="col-1 text-center">{index+1}</td>
				      <td style={{width : "100px"}}><img src={res.avatar_url} className="w-100 rounded"/></td>
				      <td>{res.login}</td>
				      <td>{res.type}</td>
				    </tr>
				   	)
				  })}
				  </tbody>
				</Table>
			
	          <div className="d-flex justify-content-end p-0">
			  	<Pagination
	              currentPage={page.activePage}
	              sizePerPage={9}
	              totalSize={totalRecord}
	              numberOfPagesNextToActivePage ={5}
	              changeCurrentPage={handlePageChange}
	              theme="bootstrap"
	            />
	           </div>
	                
			</div>
			}
		</div>
	</>
	)
}

export default Home;