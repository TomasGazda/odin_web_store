import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SailingIcon from '@mui/icons-material/Sailing';

export const mainNavbarItems = [
    {
        id:0,
        name:"Cars",
        icon:<DirectionsCarIcon/>,
        route:'cars'

    },
    {
        id:1,
        name:"Bikes",
        icon:<PedalBikeIcon/>,
        route:'bikes'

    },
    {
        id:2,
        name:"Motorbikes",
        icon:<TwoWheelerIcon/>,
        route:'motorbikes'

    },
    {
        id:3,
        name:"Boats",
        icon:<SailingIcon/>,
        route:'boats'

    },
];