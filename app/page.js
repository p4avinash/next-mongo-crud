import HeadingText from "@/components/HeadingText"
import Navbar from "@/components/Navbar"
import { deleteContact } from "@/utils/action"
import { getAllContacts } from "@/utils/data"
import Link from "next/link"
import React from "react"
import { FiTrash, FiEdit } from "react-icons/fi"

const HomePage = async () => {
  const allContact = await getAllContacts()

  return (
    <main>
      <HeadingText title={"Contact Book"} description={"All Contacts Below"} />
      <Navbar />
      <div className='flex flex-col px-4 py-4'>
        {allContact.length === 0 ? (
          <h1 className='flex text-center justify-center items-center mt-40 text-3xl'>
            No Contacts Found
          </h1>
        ) : (
          <div>
            <table className='table-auto w-full text-center whitespace=nowrap'>
              <thead>
                <tr>
                  <th className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100 rounded-tl rounded-bl'>
                    First Name
                  </th>
                  <th className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'>
                    Last Name
                  </th>
                  <th className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'>
                    Email
                  </th>
                  <th className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'>
                    Contact Number
                  </th>
                  <th className='px-4 py-3 title-font text-center tracking-wider font-medium text-gray-700 text-sm bg-gray-100'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allContact.map((contact) => (
                  <tr key={contact.id}>
                    <td className='border-t-2 text-center border-gray-200 px-4 py-3'>
                      {contact.firstName}
                    </td>
                    <td className='border-t-2 text-center border-gray-200 px-4 py-3'>
                      {contact.lastName}
                    </td>
                    <td className='border-t-2 text-center border-gray-200 px-4 py-3'>
                      {contact.email}
                    </td>
                    <td className='border-t-2 text-center border-gray-200 px-4 py-3'>
                      {contact.phone}
                    </td>
                    <td className='border-t-2 text-center border-gray-200 px-4 py-3 flex justify-center gap-4 items-center'>
                      <Link href={`contact/${contact.id}`}>
                        <FiEdit />
                      </Link>
                      <form action={deleteContact}>
                        <input
                          type='hidden'
                          defaultValue={contact.id}
                          name='id'
                        />
                        <button className='mt-2' type='submit'>
                          <FiTrash style={{ color: "red" }} />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}

export default HomePage
