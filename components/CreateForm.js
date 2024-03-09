"use client"

import { addContact } from "@/utils/action"
import React from "react"
import Input from "./Input"

const CreateForm = () => {
  return (
    <div>
      <form action={addContact} className='bg-gray-100 items-center p-2'>
        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor='' className='text-gray-700'>
              FirstName
            </label>
            <Input
              type={"text"}
              placeholder={"first name"}
              name={"firstName"}
            />
          </div>
          <div className='w-1/2 pr-2'>
            <label htmlFor='' className='text-gray-700'>
              LastName
            </label>
            <Input type={"text"} placeholder={"last name"} name={"lastName"} />
          </div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 pr-2'>
            <label htmlFor='' className='text-gray-700'>
              Email
            </label>
            <Input type={"email"} placeholder={"email"} name={"email"} />
          </div>
          <div className='w-1/2 pr-2'>
            <label htmlFor='' className='text-gray-700'>
              Phone
            </label>
            <Input type={"number"} placeholder={"phone"} name={"phone"} />
          </div>
        </div>
        <button type='submit' className='btn btn-wide bg-orange-400'>
          Create Contact
        </button>
      </form>
    </div>
  )
}

export default CreateForm
