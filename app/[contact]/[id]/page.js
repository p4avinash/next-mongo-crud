import React from "react"
import HeadingText from "@/components/HeadingText"
import Input from "@/components/Input"
import Navbar from "@/components/Navbar"
import { getSingleContact } from "@/utils/data"
import { updateSingleContact } from "@/utils/action"

const SingleContact = async ({ params }) => {
  const { id } = params
  const contact = await getSingleContact(id)
  console.log(contact)

  return (
    <section>
      <HeadingText
        title={"Single Contact"}
        description={"View & Update Contact Below"}
      />
      <Navbar />
      <div className='flex flex-col py-4 px-4'>
        <form
          action={updateSingleContact}
          className='bg-gray-100 flex flex-col items-center p-2 rounded'
        >
          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <input type='hidden' name='id' defaultValue={contact.id} />
              <label htmlFor='' className='text-gray-700'>
                FirstName
              </label>
              <Input
                type={"text"}
                placeholder={contact.firstName}
                name={"firstName"}
              />
            </div>
            <div className='w-1/2 pr-2'>
              <label htmlFor='' className='text-gray-700'>
                LastName
              </label>
              <Input
                type={"text"}
                placeholder={contact.lastName}
                name={"lastName"}
              />
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <label htmlFor='' className='text-gray-700'>
                Email
              </label>
              <Input
                type={"email"}
                placeholder={contact.email}
                name={"email"}
              />
            </div>
            <div className='w-1/2 pr-2'>
              <label htmlFor='' className='text-gray-700'>
                Phone
              </label>
              <Input
                type={"number"}
                placeholder={contact.phone}
                name={"phone"}
              />
            </div>
          </div>
          <button type='submit' className='btn btn-wide bg-orange-400'>
            Update Contact
          </button>
        </form>
      </div>
    </section>
  )
}

export default SingleContact
