// import { useState } from 'react'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Invalid email address." }),
//   message: z.string().min(5, { message: "Message must be at least 5 characters." }),
// });

// const PrayerForm: React.FC = () => {
//   const [successMessage, setSuccessMessage] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     }
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => { 
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       if (response.ok) {
//         setSuccessMessage('Message sent successfully!')
//         form.reset()
//         setErrorMessage('')
//       } else {
//         const errorData = await response.json()
//         setErrorMessage(errorData.message || 'Error sending message. Please try again.')
//         setSuccessMessage('')
//       }
//     } catch (error) {
//       setErrorMessage('An unexpected error occurred. Please try again later.');
//       setSuccessMessage('')
//       console.error("Error sending form data:", error)
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Your Name" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Your Email" type="email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Message</FormLabel>
//               <FormControl>
//                 <Textarea placeholder="Your Message" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Submit</Button>

//         {successMessage && <p className="text-green-500">{successMessage}</p>}
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//       </form>
//     </Form>
//   )
// }

// export default PrayerForm






import React from 'react'

export default function FollowUs() {
  return (
    <section className='grid md:grid-cols-2 grid-cols-1'>
      <div className='flex justify-center items-center text-xl font-black bg-slate-700 sm:py-0 py-10'>Follow Us</div>
    </section>
    
  )
}

