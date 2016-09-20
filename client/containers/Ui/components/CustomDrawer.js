import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const CustomDrawer = ({
    openDrawer,
    onDrawerToggle
}) => (

    <Drawer open={openDrawer}>
        <Card onClick={onDrawerToggle}>
            <CardMedia
            overlay={<CardTitle title="Sandro Rybarik" subtitle="Admin" />}
            >
            <img src="http://www.sthildas.qld.edu.au/wp-content/themes/hildas-2014/images/img-default-staff.png" />
            </CardMedia>
        </Card>
        <MenuItem>Nove otazky</MenuItem>
        <MenuItem>Nedokoncene</MenuItem>
        <MenuItem>Deadline</MenuItem>
    </Drawer>

)


export default CustomDrawer