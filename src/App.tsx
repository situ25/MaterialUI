 import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MuiDialog } from './components/MuiDialog';
import { MuiProgress } from './components/MuiProgress';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiLoadingbutton } from './components/MuiLoadingbutton';
import { MuiTabs } from './components/MuiTabs';
import { MuiTimeline } from './components/MuiTimeline';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiListItem } from './components/MuiListItem';
// import { MuiChip } from './components/MuiChip';
// import { Tooltip } from '@mui/material';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiTable } from './components/MuiTable';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiButton } from './components/MuiButton';
// import { MuiText } from './components/MuiText';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiCheckBox } from './components/MuiCheckBox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiCard } from './components/MuiCard';
// import { MuiAccordian } from './components/MuiAccordian';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiTypography } from './components/MuiTypography';
import {createTheme,colors,ThemeProvider} from '@mui/material'

const theme= createTheme({
  status:{
    danger: '#e53e33'
  },
  palette:{
    secondary:{
      main: colors.orange[500], //500 is chosen from the pallete secondary.light, etc are also created from here. Also it takes other values from default theme
    },
    neutral:{
      main: colors.grey[500],
      darker: colors.grey[700],    // there is no darker by default we are creating it so we would need to add it in theme.d.ts
    }
  }
})




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <MuiTypography/> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiText/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton/> */}
      {/* <MuiCheckBox/> */}
      {/* <MuiSwitch/> */}
      {/* <MuiRating/> */}
      {/* <MuiAutocomplete/> */}
      {/* <MuiLayout/> */}
      {/* <MuiCard/> */}
      {/* <MuiAccordian/> */}
      {/* <MuiImageList/> */}
      {/* <MuiNavbar/> */}
      {/* <MuiBreadcrumbs/> */}
      {/* <MuiDrawer/> */}
      {/* <MuiSpeedDial/> */}
      {/* <MuiBottomNavigation/> */}
     {/* <MuiAvatar/> */}
     {/* <MuiBadge/> */}
{/* <MuiListItem/> */}
{/* <MuiChip/> */}
{/* <MuiTooltip/> */}
{/* <MuiTable/> */}
{/* <MuiAlert/> */}
{/* <MuiSnackbar/> */}
{/* <MuiDialog/> */}
{/* <MuiProgress/> */}
{/* <MuiSkeleton/> */}
{/* <MuiLoadingbutton/> */}
{/* <MuiTabs/> */}
{/* <MuiTimeline/> */}
{/* <MuiMasonry/> */}
<MuiResponsiveness/>
    </div>
    </ThemeProvider>
  );
}

export default App;
