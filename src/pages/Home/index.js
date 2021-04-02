import React from "react";
import { View } from '../../styled';
import { Route } from 'react-router-dom';
import { Header, Selects, Border } from '../../components';
import Navigation  from '../../components/StylesComp/Navigation';
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
                <Navigation to='/'>CHANGE SELECTION</Navigation>
                <Navigation to='/border'>PLAY GAME</Navigation>
            </View>

            <Route path='/' exact component={Selects}/>
            <Route path='/border' component={Border}/>
        </Store>
    )
}
export default Home;