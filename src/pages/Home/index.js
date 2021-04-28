import React from "react";
import { View } from '../../styled';
import { Route } from 'react-router-dom';
import { Header, Selects, Board } from '../../components';
import Link  from '../../components/StylesComp/NavLink';
// import { NavLink } from 'react-router-dom';
import Store from '../../Store';

function Home (){
    return(
        <Store>
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
            </View>

            <Route path='/' exact component={Selects}/>
            <Route path='/board' component={Board}/>
        </Store>
    )
}
export default Home;