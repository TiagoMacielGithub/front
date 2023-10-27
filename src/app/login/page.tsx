import React from 'react'
import Image from '../../../node_modules/next/image'
import Logo from '../../../public/assets/logo.png'
import Button from '../components/Button'
import Input from '../components/Input'
import Logo2 from '../../../public/assets/logo2 4.png'

const LoginPage = () => {
  return (
  <div className='w-screen h-screen bg-azul'>
    <div className='flex flex-row items-center justify-between'>
    <Image 
    src={Logo}
    width={820}
    height={0}
    alt='Login'
    className='ml-20'
    />
    <div className='flex flex-col items-center justify-start gap-10 mr-80'>
    <div className='flex flex-row items-center gap-10'>
    </div>
    <form action="" className='flex flex-col items-center justify-start bg-branquinho p-10 rounded-[60px] gap-10'>
    <Image 
    src={Logo2}
    width={100}
    height={0}
    alt='Logo'
    />
    <h1 className='text-4xl text-azul-escuro font-semibold'>Cont;nue</h1>
        <div className='flex flex-col gap-10'>
        <Input label='email:' type='email'
        />
        <Input label='senha:' type='password'
        />
        </div>
        <Button 
        name='Entrar'
        classes='bg-azul-escuro text-white'

        />
        <p className='text-azul-escuro text-2xl'>OU</p>
        <Button name='Entrar com o google' classes='bg-white    text-azul-escuro'/>
    </form>
    <Button name='Cadastrar'  classes='bg-azul-escuro text-white'/>
    </div>
    </div>
  </div>
    
  )
}

export default LoginPage