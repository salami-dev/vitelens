"use client"
import React, {useEffect} from 'react'
import { useQuery, useMutation } from "@tanstack/react-query";
import FullScreenBG from '../components/FullScreenBG'
import { Box, Grid, Button } from '@mui/material'
import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import { redirect } from 'next/navigation'
import { AuthApi } from '../services/api/auth';


const AuthPage = () => {
  
  const queryClient = useAuth()
  const {isLoading, data, isError} = queryClient;

  if(isLoading) return "loading...."
  if(data){
    return redirect('/')
  }

  return (
    <Box>
       <FullScreenBG>
        <Grid container justifyContent="center" alignContent="center" sx={{
          height:'100%'
        }}>
          <Grid item xs={6} >
            
      <Link href="http://localhost:8000/auth/google"> <Button fullWidth variant='outlined'> Login With Google</Button></Link>

          </Grid>
        </Grid>
         </FullScreenBG>
    </Box>
  )
}

export default AuthPage