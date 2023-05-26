import * as React from 'react';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import {List, ListItem, ClickAwayListener } from '@mui/material'

interface SearchFiltersProps {
  label: string
  filters: string[]
}

export default function SearchFilters({ label, filters }: SearchFiltersProps ) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ zIndex: 9 }}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition disablePortal sx={{ zIndex: 9 }}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <List sx={{ backgroundColor: '#FFFFFF' }}>
                {filters.map((filter, index) => {
                  return <ListItem key={index} sx={{ fontWeight: 600, cursor: 'pointer', fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '16px'} }}>{filter}</ListItem>
                })}
                </List>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
                    variant='text'
                    onClick={handleClick('bottom-start')}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      fontFamily: 'Inter',
                      fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '16px'},
                      fontWeight: 600,
                      lineHeight: '22px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      marginTop: '17px',
                      color: '#817F87',
                      textTransform: 'capitalize'
                  }}>{label}</Button>
          </Grid>
        </Grid>
      </Box>
      </ClickAwayListener>
    </Box>
  );
}