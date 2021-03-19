import React from "react";
import {
    View
} from '../../styled';
import {Route, NavLink} from 'react-router-dom';
import {
    Header,
    Selects,
    Border,
} from '../../components';

import Store from '../../Store';

function Home (){
    return(
        <Store>
            <Header/>
            <View flex justC='space-around' m='20px auto'>
                <View>
                    <NavLink to='/'>CHANGE SELECTION</NavLink>
                </View>
                <View>
                    <NavLink to='/border'>PLAY GAME</NavLink>
                </View>  
            </View>

            <Route path='/' exact render={() => <Selects/>}/>
            
            <Route path='/border' exact render={() => <Border/>}/>

        </Store>
    )
}
export default Home;