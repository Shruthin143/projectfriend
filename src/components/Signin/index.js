import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from './SigninElements'

const SignIn = () => {
  const history = useHistory()
  const nameRef = useRef('')
  const emailRef = useRef('')
  const numberRef = useRef('')

  function submitPersonHandler(event) {
    event.preventDefault()

    // could add validation here...

    const person = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      num: numberRef.current.value,
    }
    console.log(person)
    addPersonHandler(person)
  }

  async function addPersonHandler(person) {
    const response = await fetch(
      'https://buffalove-default-rtdb.asia-southeast1.firebasedatabase.app/persons.json',
      {
        method: 'POST',
        body: JSON.stringify(person),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    // const data = await response.json()

    alert('Thank you for filling the details')
    history.push('/')
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Buff-A-Love</Icon>
          <FormContent>
            <Form action='#' onSubmit={submitPersonHandler}>
              <FormH1>
                Please leave your contact details, we will get back to you in
                24hrs
              </FormH1>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormInput type='Text' id='name' ref={nameRef} required />
              <FormLabel htmlFor='email'>Email Id</FormLabel>
              <FormInput type='email' id='email' ref={emailRef} required />
              <FormLabel htmlFor='num'>Contact Number</FormLabel>
              <FormInput
                type='text'
                maxLength='10'
                id='num'
                ref={numberRef}
                required
              />
              <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn
