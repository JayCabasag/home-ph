import React, {useState } from 'react'
import { Box, List, ListItem, Typography } from '@mui/material'

const searchTypes = ['Buying', 'Renting' ]

const Searcher = () => {

  const [selectedSearchType, setSelectedSearchType] = useState<string>('buying')
  
  const handleOnSelectValue = (value: string) => {
    const targetSearchType = value ?? 'buying'
    setSelectedSearchType(targetSearchType)
  }

  return (
    <Box sx={{ width: '100%' }}>
        <List sx={{
            display: 'flex',
            flexDirection: 'row',
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
    </Box>
  )
}

export default Searcher