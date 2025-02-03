'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

import { useLoginMutation } from '@/features/auth/api/authApi.generated'
import { routes } from '@/shared/constants/routes'
import { useSessionStorage } from '@/shared/hooks'
import { Button, Card, TextField, Typography } from '@picthentic/ui-kit'
import { useRouter } from 'next/navigation'
import NProgress from 'nprogress'

import s from './LoginForm.module.scss'

export const LoginForm = () => {
  const [, setAuthToken] = useSessionStorage<string>('authToken')
  const [, setIsLoggedIn] = useSessionStorage<boolean>('isLoggedIn')
  const router = useRouter()
  const [signInForm, setSignInForm] = useState({ email: 'admin@gmail.com', password: 'admin' })
  const [errorMessage, setErrorMessage] = useState('')
  const [loginMutation] = useLoginMutation()

  const onChangeTextHandler = (value: string, name: string) => {
    setErrorMessage('')
    setSignInForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmitHandler = async () => {
    if (signInForm.email === 'admin@gmail.com' && signInForm.password === 'admin') {
      NProgress.start()
      try {
        const response = await loginMutation({
          variables: {
            email: signInForm.email,
            password: signInForm.password,
          },
        })
        const isLoggedIn = response.data?.loginAdmin.logged ?? false // Установите значение по умолчанию

        if (isLoggedIn) {
          const base64 = btoa(`${signInForm.email}:${signInForm.password}`)

          setAuthToken(base64)
          setIsLoggedIn(isLoggedIn)
          await router.push(routes.USERS)
          NProgress.done()
        }
      } catch (error) {
        toast(String(error))
        NProgress.done()
      }
    } else {
      setErrorMessage(`Sign in server Error!`)
    }
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>{`Sign In`}</Typography>
      <div>
        <TextField
          className={s.input}
          errorMessage={errorMessage}
          label={'email'}
          onChangeText={e => onChangeTextHandler(e, 'email')}
          requiredField
          type={'default'}
          value={signInForm.email}
        />
        <TextField
          errorMessage={errorMessage}
          label={'password'}
          onChangeText={e => onChangeTextHandler(e, 'password')}
          requiredField
          type={'password'}
          value={signInForm.password}
        />
        <Button className={s.button} fullWidth onClick={onSubmitHandler} type={'submit'}>
          <Typography variant={'h3'}>Sign In</Typography>
        </Button>
      </div>
    </Card>
  )
}
