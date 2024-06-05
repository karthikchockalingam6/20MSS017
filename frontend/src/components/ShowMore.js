import { AppBar, TextField, Typography } from '@mui/material'

const ShowMore = ({ arr, handleClick }) => {

    return (
        <>
            <AppBar className='h-20'>
                <div className='flex justify-between items-center my-auto mx-5'>
                    <Typography className='w-60'>XYZ's Pvt Ltd</Typography>
                    <TextField className='bg-white rounded-full ' label="Search" />
                </div>
            </AppBar>

            {arr.map((item, index) => {
                return (
                    <div key={index} className='flex justify-around m-10'>
                        <img alt={item.name} src={item.img} className='border border-black border-xl  h-[24rem] w-[25rem]' />
                        <div className='flex flex-col'>
                            <Typography>{item.name}</Typography>
                            <Typography>Price:{item.price}</Typography>
                            <Typography onClick={() => handleClick(false)}>Go back</Typography>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ShowMore