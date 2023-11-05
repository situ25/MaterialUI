import React from 'react'
import {Box, Card, CardContent,Typography,CardActions, Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia component='img'
            height='140'
            image='https://source.unsplash.com/random'
            >

            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography variant='body2' color='text.secondary'>dxfghvjbknmlkjhgfxdzcgvhbjnk kxjhgfxdxcgvhbj</Typography>
            </CardContent>
            <CardActions>
                <Button>Share</Button>
                <Button>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
