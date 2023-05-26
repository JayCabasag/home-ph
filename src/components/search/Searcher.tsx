import React, {useState, useRef } from 'react'
import { Box, List, ListItem, Typography, Stack, Button } from '@mui/material'
import SearchFilters from './SearchFilters';

const searchTypes = ['Buying', 'Renting' ]

const Searcher = () => {

  const [selectedSearchType, setSelectedSearchType] = useState<string>('buying')
  const searcherRef = useRef<HTMLDivElement>(null);
  
  const scrollToSearcher = () => {
    const searcherElement = searcherRef.current;
    if (searcherElement) {
      searcherElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleOnSelectValue = (value: string) => {
    const targetSearchType = value ?? 'buying'
    setSelectedSearchType(targetSearchType)
    scrollToSearcher();
  }

  return (
    <Box sx={{ width: '100%' }} ref={searcherRef}>
        <List
        disablePadding
        sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
           {searchTypes.map((searchType: string, index) => {
            const isActive = selectedSearchType === searchType.toLocaleLowerCase()

            return (
                <ListItem onClick={() => handleOnSelectValue(searchType.toLocaleLowerCase())} key={`${index}-${selectedSearchType}`} sx={{
                    width: '181px',
                    height: '48px',
                    background: isActive ? '#FFFFFF': 'transparent',
                    borderRadius: '15px 15px 0px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}>
                    <Typography sx={{
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '25px',
                    }}>
                        {searchType}
                    </Typography>
                </ListItem>
            )
           })}
        </List>
        <Stack sx={{
            backgroundColor: '#FFFFFF',
            height: '100%',
            padding:  { xs: '10px', sm: '10px', md: '30x 58px', lg: '30px 58px'},
            display: { xs: 'grid', sm: 'grid', md: 'flex', lg: 'flex' },
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomRightRadius: { xs: '0', sm: '0', md: '10px', lg: '10px' },
            borderBottomLeftRadius: { xs: '0', sm: '0', md: '10px', lg: '10px' },
            marginBott: { xs: '10px', sm: '10px', md: '0px', lg: '0px' },
        }}>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '16px'},
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    
                }}>Location</Typography>
                <SearchFilters label='Select your city' filters={['Taguig', 'Muntinlupa', 'Metro Manila', 'Batangas']}/>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '16px'},
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    
                }}>Type</Typography>
                 <SearchFilters label='Select property type' filters={['Apartment', 'Condo']}/>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '16px'},
                    fontWeight: 600,
                    lineHeight: '22px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                }}>Price Range</Typography>
                <SearchFilters label='Select price range' filters={['below 500,000', '500,000 - 1,000,000', '1,000,000 up']}/>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: {xs: 'center', sm: 'center', md: 'flex-end', ld: 'flex-end'} }}>
            <Button
                variant='contained'
                sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontSize: { sm: '16px', md: '17px' },
                    fontWeight: 600,
                    lineHeight: '25px',
                    textAlign: 'left',
                    width: { xs: '100#', sm: '100%', md: '95px', lg: '157px' },
                    height: { xs: '40px', sm: '40px', md: '45px', lg: '45px' },
                    minWidth: 'max-content',
                    borderRadius: '15px',
                    paddingX: { xs: '40px', sm: '40px', md: '0px', lg: '0px' },
                }}
                >
                Search
                </Button>
            </Box>
        </Stack>
        
    </Box>
  )
}

export default Searcher