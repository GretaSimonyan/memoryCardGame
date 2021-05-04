import React, { useContext } from "react";
import { View } from '../../styled';
import { Route } from 'react-router-dom';
import { Header, Selects, Board } from '../../components';
import Link  from '../../components/StylesComp/NavLink';
// import { NavLink } from 'react-router-dom';
// import Store from '../../Store';
import { Context } from '../../Store';

function Home (){
    const [state, dispatch] = useContext(Context);
    function handlClick(e) {
        // dispatch({
        //     type: 'LOADING',
        //     load: e.target.value
        // })
        console.log(e.target.href)
    }
    return(
        <>
            <Header/>
            <View grid
                gTC='1fr 1fr'
                m='20px auto' 
                justI='center'
                gap='20px 20px'
                fontSize='14px'
                alignI='stretch'
            >
                <Link to='/'>CHANGE SELECTION</Link>
                <Link to='/board'>PLAY GAME</Link>
                {/* <a href='#' onClick={(e) => handlClick(e)} >CHANGE SELECTION</a>
                <a href='/board' onClick={(e) => handlClick(e)} >PLAY GAME</a> */}
            </View>
            <Route path='/' exact component={Selects}/>
            <Route path='/board' component={Board}/>
        </>
    )
}
export default Home;