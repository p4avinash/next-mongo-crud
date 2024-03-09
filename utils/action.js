"use server"

import contactSchema from "@/models/contactSchema"
import db from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// add contact to database
export const addContact = async (FormData) => {
  const { firstName, lastName, email, phone } = Object.fromEntries(FormData)

  try {
    await db.connect()
    const newContact = new contactSchema({
      firstName,
      lastName,
      email,
      phone,
    })
    await newContact.save()
  } catch (error) {
    throw new Error("Failed to Create Contact" + error)
  }

  revalidatePath("/")
  redirect("/")
}

// Edit contact to database
export const updateSingleContact = async (formData) => {
  const { firstName, lastName, email, phone, id } = Object.fromEntries(formData)

  try {
    await db.connect()
    const updatedFields = {
      firstName,
      lastName,
      email,
      phone,
    }

    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    )

    await contactSchema.findByIdAndUpdate(id, updatedFields)
  } catch (error) {
    throw new Error("Failed to update contact " + error)
  }

  revalidatePath("/")
  redirect("/")
}

export const deleteContact = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    await db.connect()
    await contactSchema.findByIdAndDelete(id)
  } catch (error) {
    throw new Error("Failed to delete contact - ", error)
  }

  revalidatePath("/")
}
