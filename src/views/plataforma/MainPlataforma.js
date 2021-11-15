import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaGem,FaHeart} from 'react-icons/fa';
const iconDocumetales = require('../../assets/icons/film.png');
const iconTareas = require('../../assets/icons/book.png'); 

export const MainPlataforma = () => {
    return (
        <>
            <div style={styles.app}>
                <ProSidebar style = {{height:800, color: 'black'}}>
                <Menu iconShape="square" style={{backgroundColor: 'white'}}>
                    <MenuItem style={{backgroundColor: '#515D8A',color: 'white', margin:0}}>Documentales</MenuItem>
                    <MenuItem >Tareas</MenuItem>
                    <SubMenu title="Teams">
                    <MenuItem style={{marginTop: '10'}}>team 1</MenuItem>
                    <MenuItem>team 2</MenuItem>
                    </SubMenu>
                </Menu>
                </ProSidebar> 
                <main style={styles.appMain}>

                </main>
            </div>
            {/* */}
        </>
    )
}

const styles = {
    app :{
        display: 'flex',
        position: 'relative',
    },
    appMain: {
        padding: '24 px',
        flexGrow:' 1',
        display: 'flex',
        flexDirection: 'column',
        overflowY:'auto',
    },

}
