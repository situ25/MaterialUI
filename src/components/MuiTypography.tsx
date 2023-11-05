import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>Heading H1</Typography>
        <Typography variant='h2'>Heading H2</Typography>
        <Typography variant='h3'>Heading H3</Typography>
        <Typography variant='h4'>Heading H4</Typography>
        <Typography variant='h5'>Heading H5</Typography>
        <Typography variant='h6'>Heading H6</Typography>

        <Typography variant='subtitle1'>Heading subtitle1</Typography>
        <Typography variant='subtitle2'>Heading subtitle1</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ratione quasi architecto. Debitis ducimus esse repellendus veniam maxime odit adipisci fuga molestiae voluptas. Culpa mollitia provident earum perferendis totam illo?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum quo voluptas sequi quibusdam dolore vel dolores pariatur, quaerat enim quam perferendis saepe nihil cupiditate. Dignissimos dolore laudantium error? Molestias.</Typography>

        <Typography variant='h4' component='h1'>Heading H4 but tag is h1 in code</Typography>

        {/* gutterbottom to provide margin below */}
        <Typography variant='h4' component='h1' gutterBottom>Heading H4</Typography>

    </div>
  )
}

