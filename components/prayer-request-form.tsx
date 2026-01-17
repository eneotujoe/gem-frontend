"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle2, Loader2 } from "lucide-react"
import { submitPrayerRequest } from "@/lib/actions"
import { prayerRequestSchema, SubmitPrayerRequestResult } from "@/lib/types"

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>

function isValidSubmitResult(result: unknown): result is SubmitPrayerRequestResult {
  return (
    typeof result === "object" &&
    result !== null &&
    "success" in result &&
    typeof (result as SubmitPrayerRequestResult).success === "boolean"
  )
}

export function PrayerRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data: PrayerRequestFormData): Promise<void> => {
    setSubmitError(null)

    try {
      // Create FormData with type-safe entries
      const formData = new FormData()
      
      // Type-safe iteration over form data
      const entries: Array<[keyof PrayerRequestFormData, string]> = [
        ["firstName", data.firstName],
        ["lastName", data.lastName],
        ["email", data.email],
        ["phone", data.phone],
        ["message", data.message],
      ]

      entries.forEach(([key, value]) => {
        formData.append(key, value)
      })

      const result = await submitPrayerRequest(formData)

      // Type guard for result validation
      if (!isValidSubmitResult(result)) {
        throw new Error("Invalid response from server")
      }

      if (result.success) {
        setIsSubmitted(true)
        reset()
      } else {
        setSubmitError(result.error ?? "Something went wrong. Please try again.")
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      setSubmitError(errorMessage)
    }
  }

  const handleNewRequest = (): void => {
    setIsSubmitted(false)
    setSubmitError(null)
    reset()
  }

  if (isSubmitted) {
    return (
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-sans text-2xl font-semibold mb-3">Thank You</h3>
          <p className="text-muted-foreground mb-6">
            Your prayer request has been received. Our prayer team will be lifting up your needs before God.
          </p>
          <Button variant="outline" onClick={handleNewRequest}>
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Name */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">
                First Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Your first name"
                className="h-12"
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                {...register("firstName")}
              />
              {errors.firstName?.message && (
                <p id="firstName-error" className="text-sm text-destructive" role="alert">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">
                Last Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Your last name"
                className="h-12"
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                {...register("lastName")}
              />
              {errors.lastName?.message && (
                <p id="lastName-error" className="text-sm text-destructive" role="alert">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="johndoe@gmail.com"
              className="h-12"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email?.message && (
              <p id="email-error" className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              className="h-12"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone?.message && (
              <p id="phone-error" className="text-sm text-destructive" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Prayer Request */}
          <div className="space-y-2">
            <Label htmlFor="request">
              Your Prayer Request <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Please share what you'd like us to pray about..."
              className="min-h-[150px] resize-none"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              {...register("message")}
            />
            {errors.message?.message && (
              <p id="message-error" className="text-sm text-destructive" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          {submitError && (
            <div className="p-4 bg-destructive/10 text-destructive rounded-lg text-sm" role="alert">
              {submitError}
            </div>
          )}

          {/* Submit */}
          <Button
            onClick={handleSubmit(onSubmit)}
            className="w-full h-14 text-lg cursor-pointer"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
