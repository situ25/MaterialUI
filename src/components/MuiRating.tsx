import React, {useState} from 'react'
import {Stack,Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export const MuiRating = () => {
    const [ratingValue, setRatingvalue] = useState<number | null>(null)
    const handleRatingChange= (event: React.ChangeEvent<{}>, newValue:number |null) => {
        setRatingvalue(newValue)
    }
    console.log(ratingValue)
  return (
    <Stack>
        <Rating value={ratingValue} onChange={handleRatingChange}
            icon={<FavoriteIcon fontSize='inherit' />}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        />
    </Stack>
  )
}
