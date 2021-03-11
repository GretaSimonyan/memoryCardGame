import React from "react";
import {
    View
} from '../../styled';
import {
    Header,
    // Cover,
    // Border,
    PlayButton,
    PlayersSelect,
    BorderSizeSelect
} from '../../components';

import Store from '../../Store';

function Home (){
    return(
        <Store>
            <Header/>
            {/* <Cover/> */}
            <View id='cover' flex alignI='center' justC='space-around' >
                <PlayersSelect />
                <BorderSizeSelect />
            </View>
            <PlayButton/>
            {/* <Border/> */}
        </Store>
    )
}
export default Home;