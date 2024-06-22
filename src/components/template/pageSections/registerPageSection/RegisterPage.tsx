import React from 'react'
import RegisterForm from './RegisterForm'
import JoinRegisteration from './JoinRegisteration'
import RegisterationSteps from './StepsForRegistration'

function RegisterPage() {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-11/12 flex flex-col-reverse lg:flex-row flex-wrap h-full'>
        <JoinRegisteration/>
    <div className="w-full lg:w-1/2 flex flex-col">
          <RegisterationSteps />
        </div>
    </div>
    </div>
  )
}

export default RegisterPage
