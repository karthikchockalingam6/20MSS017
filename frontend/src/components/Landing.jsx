import { AppBar, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShowMore from './ShowMore'

const Landing = () => {

    // const [items, setItems] = useState([]);
    const [clicked, setClicked] = useState(false)

    const handleClick = (index) => {
        clicked ? setClicked(false) : setClicked(true)
        console.log(index)
    }

    const arr = [
        { "name": "phone", "id": 1, "price": 15000, "img": "https://img.freepik.com/premium-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg" },
        { "name": "laptop", "id": 2, "price": 70000, "img": "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg" },
        { "name": "computer", "id": 3, "price": 600000, "img": "https://thumbs.dreamstime.com/b/desktop-computer-2240018.jpg" },
        { "name": "keyboard", "id": 4, "price": 2000, "img": "https://www.shutterstock.com/image-vector/vector-black-pc-keyboard-very-260nw-1026742981.jpg" },
    ]

    // useEffect(() => {
    //     fetch("http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q", { headers: { 'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3NTY5NzgxLCJpYXQiOjE3MTc1Njk0ODEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNlYzVjZjg4LWIyOGQtNDVjZi1iMzYxLTBiNzM0YmQ2NmMyZSIsInN1YiI6InZrYXJ0aGlrY2hvY2thbGluZ2FtNkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJDSE8ncyBQdnQgTHRkIiwiY2xpZW50SUQiOiJjZWM1Y2Y4OC1iMjhkLTQ1Y2YtYjM2MS0wYjczNGJkNjZjMmUiLCJjbGllbnRTZWNyZXQiOiJTTEZRelJDSnNBZGhLQXVqIiwib3duZXJOYW1lIjoiS2FydGhpayBDaG9ja2FsaW5nYW0gViIsIm93bmVyRW1haWwiOiJ2a2FydGhpa2Nob2NrYWxpbmdhbTZAZ21haWwuY29tIiwicm9sbE5vIjoiMjBNU1MwMTcifQ.VFiQbn3qyxz4KZtdLc4qrz17KrVkI-6q3czgJmvgaps" } })
    //         .then(response => response.json())
    //         .then(data => setItems(data))
    //         .catch(err => console.log(err))

    // }, [])

    // console.log(items)

    return (
        <>

            <AppBar className='h-20'>
                <div className='flex justify-between items-center my-auto mx-5'>
                    <Typography className='w-60'>XYZ's Pvt Ltd</Typography>
                    <TextField className='bg-white rounded-full ' label="Search" />
                </div>
            </AppBar>

            {!clicked && <div className='flex flex-wrap'>
                {arr.map((item, index) => {
                    return (
                        <Card key={index} className='mt-40 mx-10' sx={{ maxWidth: 200 }}>
                            <CardMedia
                                component="img"
                                alt={item.name}
                                height="140"
                                image={item.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleClick(true, index)}>Show More</Button>

                            </CardActions>
                        </Card>
                    )
                })}
            </div>}

            {clicked && <ShowMore arr={arr} handleClick={handleClick} />}
        </>
    )
}

export default Landing