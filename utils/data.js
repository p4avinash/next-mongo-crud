"use server"

import db from "./db"
import contactSchema from "@/models/contactSchema"

export const getAllContacts = async () => {
  try {
    await db.connect()
    const allContacts = await contactSchema.find({})
    return allContacts
  } catch (error) {
    throw new Error("Failed to get Contacts - " + error)
  }
}

export const getSingleContact = async (id) => {
  try {
    await db.connect()
    const contact = await contactSchema.findById(id)
    return contact
  } catch (error) {
    throw Error("Failed to get contact for edit action - " + error)
  }
}
